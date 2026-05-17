import { resources } from "../../../utils/resources";
import { Mesh, Vector3, Euler, Group, ShaderMaterial, LinearSRGBColorSpace, SphereGeometry, InstancedMesh, Object3D, MeshMatcapMaterial } from "three";
import { scene } from "../../core/scene";
import { animations } from "./animations";
import { sceneWeights, sceneWeightsInOut } from "../../../animations/scenes";
import { clone as cloneSkeleton } from "three/examples/jsm/utils/SkeletonUtils.js";
import { face } from "./face";
import { leftDesktop as avatarLeftDesktop } from "./left-desktop";
import matcapVertexShader from "../../shaders/avatar-matcap/vertex.glsl";
import matcapFragmentShader from "../../shaders/avatar-matcap/fragment.glsl";
import headVertexShader from "../../shaders/avatar-head/vertex.glsl";
import headFragmentShader from "../../shaders/avatar-head/fragment.glsl";
import gsap from "gsap";
import { aboutProgress } from "../../../animations/transitions/about";
//import { avatarHologram } from "./hologram";

import type { Material, Bone, Texture } from "three";

let mesh: Mesh | null = null;
let rightHandBone: Bone | null = null;
let afroGroup: Group | null = null;

const tIdleIntensity = { value: 0 };

const waypointsPosition = new Vector3();
const waypointsRotation = new Euler();
const transform = new Group();
const uniforms = { uProgress: { value: 0 }, uAmbientStrength: { value: 0 } };
const contactPosition = new Vector3(0, -13, 0);
const contactRotation = new Euler(0, -Math.PI, 0);

// Skin tint for body/hands/shins to match the tinted head face color
const BODY_SKIN_TINT = new Vector3(0.72, 0.52, 0.42);
const NO_TINT = new Vector3(1.0, 1.0, 1.0);

// ── AFRO PARAMETERS ──────────────────────────────────────────────────────
// Adjust these to tune the afro's shape, size, position, and density.
//
// POSITIONING (relative to headBone):
const AFRO_OFFSET_X = 0.0;     // left/right offset from head center
const AFRO_OFFSET_Y = 0.08;    // up/down offset (positive = up above head)
const AFRO_OFFSET_Z = -0.02;   // forward/backward (negative = back)
//
// SHAPE:
const AFRO_RADIUS = 0.28;      // outer radius of the afro sphere shell
const AFRO_INNER_RADIUS = 0.12; // inner radius — curls start beyond this
//
// DENSITY:
const AFRO_CURL_COUNT = 1200;   // total number of curl blobs
//
// CURL SIZE:
const AFRO_CURL_RADIUS = 0.025; // radius of each individual curl sphere
const AFRO_CURL_SCALE_MIN = 0.6; // minimum random scale
const AFRO_CURL_SCALE_MAX = 1.4; // maximum random scale
//
// COVERAGE — hemisphere mask (only top hemisphere = afro, not beard):
const AFRO_Y_MIN = -0.05;      // minimum Y relative to center (cuts off bottom)
// ─────────────────────────────────────────────────────────────────────────

const init = () => {
  setupMesh();
  animations.init();
  face.init();
  avatarLeftDesktop.init();
  gsap.ticker.add(tick);
};

const getMaterial = (name: string): Material | null => {
  if (name === "face") return face.getMaterial();
  if (name === "head") {
    // UV-mapped head shader — fragment has African skin tint built in
    const headTexture = resources.items["head-texture"];
    headTexture.colorSpace = LinearSRGBColorSpace;
    headTexture.generateMipmaps = false;
    headTexture.flipY = false;

    return new ShaderMaterial({
      vertexShader: headVertexShader,
      fragmentShader: headFragmentShader,
      transparent: true,
      uniforms: {
        uHeadTexture: { value: headTexture },
        uHeadTextureSize: { value: [headTexture.image?.width || 512, headTexture.image?.height || 512] },
        ...uniforms,
      },
    });
  }

  const tex = resources.items["matcap-black"];
  tex.colorSpace = LinearSRGBColorSpace;
  tex.generateMipmaps = false;

  // Skin meshes get tinted to match head face; others get identity
  const skinTint = (name === "skin") ? BODY_SKIN_TINT : NO_TINT;

  return new ShaderMaterial({
    vertexShader: matcapVertexShader,
    fragmentShader: matcapFragmentShader,
    transparent: true,
    uniforms: {
      uMatcap: { value: tex },
      uSkinTint: { value: skinTint },
      ...uniforms,
    },
  });
};

const assignMatcap = (child: Mesh): boolean => {
  let tex: Texture | null = null;

  if (child.name === "black") {
    // Hair + eyebrows: dark matcap matching pupils
    tex = resources.items["matcap-black"];
  } else if (child.name === "gray") {
    tex = resources.items["matcap-gray"];
  } else if (child.name === "skin") {
    // Body/hands skin: matcap-skin (mapped to matcap-afro.webp)
    tex = resources.items["matcap-skin"];
  } else if (child.name === "white") {
    // Eye whites: stay white
    tex = resources.items["matcap-white"];
  }

  if (tex) {
    tex.colorSpace = LinearSRGBColorSpace;
    child.userData.matcap = tex;
    return true;
  }

  return false;
};

const generateAfroHair = (headBone: Bone) => {
  // Use MeshMatcapMaterial — natively handles non-skinned meshes
  const afroTex = resources.items["matcap-black"];
  afroTex.colorSpace = LinearSRGBColorSpace;
  afroTex.generateMipmaps = false;

  const afroMaterial = new MeshMatcapMaterial({
    matcap: afroTex,
  });

  // Individual curl blob geometry
  const curlGeometry = new SphereGeometry(AFRO_CURL_RADIUS, 5, 4);

  const afroMesh = new InstancedMesh(curlGeometry, afroMaterial, AFRO_CURL_COUNT);
  afroMesh.frustumCulled = false;

  const dummy = new Object3D();
  let placed = 0;

  // Generate curls in a spherical shell (top hemisphere only)
  while (placed < AFRO_CURL_COUNT) {
    // Random point in spherical shell
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(1 - Math.random() * 1.6); // bias toward top hemisphere
    const r = AFRO_INNER_RADIUS + Math.random() * (AFRO_RADIUS - AFRO_INNER_RADIUS);

    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.cos(phi);
    const z = r * Math.sin(phi) * Math.sin(theta);

    // Skip curls below the Y threshold (no beard area)
    if (y < AFRO_Y_MIN) continue;

    dummy.position.set(x, y, z);

    const s = AFRO_CURL_SCALE_MIN + Math.random() * (AFRO_CURL_SCALE_MAX - AFRO_CURL_SCALE_MIN);
    dummy.scale.set(s, s, s);

    dummy.updateMatrix();
    afroMesh.setMatrixAt(placed, dummy.matrix);
    placed++;
  }

  afroMesh.instanceMatrix.needsUpdate = true;

  // Create a group to hold the afro, parented to the head bone
  afroGroup = new Group();
  afroGroup.position.set(AFRO_OFFSET_X, AFRO_OFFSET_Y, AFRO_OFFSET_Z);
  afroGroup.add(afroMesh);

  // Parent to headBone — the afro moves with the head automatically
  headBone.add(afroGroup);
};

const setupMesh = () => {
  if (mesh) return;
  const resource = resources.items["avatar-model"];
  mesh = cloneSkeleton(resource.scene.children[0]) as Mesh;

  mesh.frustumCulled = false;

  mesh.traverse((child) => {
    if (child instanceof Mesh) {
      const mat = getMaterial(child.name);
      if (!mat) return;
      child.material = mat;
      child.frustumCulled = false;
      child.renderOrder = child.name === "face" ? 25 : 24;

      const hasMatcap = assignMatcap(child);
      if (hasMatcap) {
        child.onBeforeRender = () => {
          child.material.uniforms.uMatcap.value = child.userData.matcap;
        };
      }
    }
  });

  // Find the head bone and attach the afro to it
  const headBone = mesh.getObjectByName("headBone") as Bone;
  if (headBone) {
    generateAfroHair(headBone);
  }

  const brain = mesh.getObjectByName("brain") as Mesh;
  if (brain) {
    mesh.remove(brain);
  }

  mesh.rotation.z = 0;

  transform.add(mesh);

  rightHandBone = mesh.getObjectByName("bone-right-hand") as Bone;

  scene.instance.add(transform);
};

const tick = () => {
  animations.update();

  const isContact = sceneWeights.contact > 0.001;

  if (isContact) {
    transform.position.copy(contactPosition);
    transform.rotation.copy(contactRotation);
    uniforms.uProgress.value = 0;
    uniforms.uAmbientStrength.value = 0;
    transform.visible = true;
    return;
  }

  transform.position.copy(waypointsPosition);
  transform.rotation.copy(waypointsRotation);

  //uniforms.uProgress.value = sceneWeightsInOut.about.in * 1.1 - 0.1;
  uniforms.uProgress.value = aboutProgress.value * 1.1 - 0.1;
  uniforms.uAmbientStrength.value = sceneWeightsInOut.about.in;

  if (!mesh) return;
  if (uniforms.uProgress.value > 0.999 && sceneWeights.contact > 0.99) {
    mesh.visible = false;
  } else {
    mesh.visible = true;
  }
};

const destroy = () => {
  //mesh = null;
  //transform.clear();
  face.destroy();
  gsap.ticker.remove(tick);
};

export const avatar = {
  init,
  destroy,
  getMesh: () => mesh,
  getRightHandBone: () => rightHandBone,
  tIdleIntensity,
  waypointsPosition,
  waypointsRotation,
  uniforms,
  transform,
};
