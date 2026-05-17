export type TagVariant =
  | "three"
  | "websockets"
  | "react"
  | "redis"
  | "gray"
  | "html"
  | "css"
  | "javascript"
  | "node"
  | "next"
  | "kubernetes"
  | "postgresql"
  | "ogl"
  | "glsl"
  | "typescript"
  | "supabase"
  | "capacitor"
  | "cloudflare"
  | "vite"
  | "paystack"
  | "kotlin";

export const tagLabels = {
  three: "Three.js",
  websockets: "WebSockets",
  react: "React",
  redis: "Redis",
  gray: "Gray",
  html: "HTML",
  css: "CSS",
  javascript: "JavaScript",
  node: "Node.js",
  next: "Next.js",
  kubernetes: "Kubernetes",
  postgresql: "PostgreSQL",
  ogl: "OGL.js",
  glsl: "GLSL",
  typescript: "TypeScript",
  supabase: "Supabase",
  capacitor: "Capacitor",
  cloudflare: "Cloudflare",
  vite: "Vite",
  paystack: "Paystack",
  kotlin: "Kotlin",
} as const satisfies Record<TagVariant, string>;
