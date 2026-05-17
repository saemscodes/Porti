#include ../includes/avatar-progress/fragment.glsl;
#include ../includes/about-ambient.glsl;

uniform sampler2D uHeadTexture;
uniform vec2 uHeadTextureSize;

varying vec2 vUv;

// African light-skin tone shift: warm brown tint applied to the UV texture
#define SKIN_TINT vec3(0.72, 0.52, 0.38)

void main() {
    vec4 tex = texture2D(uHeadTexture, vUv);

    // Apply skin tone shift — preserves painted detail while darkening
    vec3 tinted = tex.rgb * SKIN_TINT;

    float progress = getProgress();

    gl_FragColor = vec4(applyAmbient(tinted), progress);
}