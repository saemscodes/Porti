export const social = [
  { url: "mailto:saemscodes@gmail.com", name: "mail" },
  { url: "https://github.com/saemscodes", name: "github" },
  { url: "https://www.linkedin.com/in/samgatana/", name: "linkedin" },
  { url: "https://x.com/civiceducationkenya", name: "x" },
  { url: "https://www.instagram.com/civiceducationkenya/", name: "instagram" },
] as const satisfies { url: string; name: "mail" | "github" | "instagram" | "linkedin" | "x" }[];
