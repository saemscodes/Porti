import st1 from "../../../assets/images/projects/saemstunes/st-new-1.png";
import st2 from "../../../assets/images/projects/saemstunes/st-new-2.png";
import st3 from "../../../assets/images/projects/saemstunes/st-new-3.png";
import st4 from "../../../assets/images/projects/saemstunes/st-new-4.png";
import st5 from "../../../assets/images/projects/saemstunes/st-new-5.png";
import st6 from "../../../assets/images/projects/saemstunes/st-new-6.png";
import st7 from "../../../assets/images/projects/saemstunes/st-new-7.png";
import st8 from "../../../assets/images/projects/saemstunes/st-new-8.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Saem's Tunes",
  theme: "dark",
  tags: ["react", "typescript", "supabase", "capacitor"],
  videoBorder: false,
  description:
    "Saem's Tunes is a music education brand and platform that began as a WhatsApp and Instagram marketing effort targeting parents and students in Kenya.<br/><br/>It has grown into a structured music school with a dedicated Android app built on Supabase and Firebase, covering singing fundamentals, breath support, and performance skills. The platform features a search-driven discovery interface, community tools, and a curated music library.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: st1,
        alt: "Saem's Tunes — Musical Discovery",
        caption: "Musical Discovery Experience",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st2,
        alt: "Saem's Tunes — Learning Modules",
        caption: "Interactive Learning Modules",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st3,
        alt: "Saem's Tunes — Skill Acquisition",
        caption: "Skill Acquisition Tracks",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st4,
        alt: "Saem's Tunes — Performance Training",
        caption: "Vocal and Performance Training",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st5,
        alt: "Saem's Tunes — Educational Content",
        caption: "Curated Educational Content",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st6,
        alt: "Saem's Tunes — Student Progress",
        caption: "Student Progress and Insights",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st7,
        alt: "Saem's Tunes — Creative Tools",
        caption: "Creative Music Tools",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st8,
        alt: "Saem's Tunes — Mobile Access",
        caption: "Seamless Mobile Experience",
      },
    },
  ],
} as const satisfies ProjectContent;
