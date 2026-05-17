import saemstunes0 from "../../../assets/images/projects/saemstunes/saemstunes-0.webp";
import saemstunes1 from "../../../assets/images/projects/saemstunes/saemstunes-1.webp";
import saemstunes2 from "../../../assets/images/projects/saemstunes/saemstunes-2.webp";
import saemstunes3 from "../../../assets/images/projects/saemstunes/saemstunes-3.webp";
import saemstunes4 from "../../../assets/images/projects/saemstunes/saemstunes-4.webp";
import saemstunes5 from "../../../assets/images/projects/saemstunes/saemstunes-5.webp";
import saemstunes6 from "../../../assets/images/projects/saemstunes/saemstunes-6.webp";
import saemstunes7 from "../../../assets/images/projects/saemstunes/saemstunes-7.webp";

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
        src: saemstunes0,
        alt: "Saem's Tunes — Discover Your Musical Voice",
        caption: "Saem's Tunes — Discover Your Musical Voice",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes1,
        alt: "Saem's Tunes — Lesson Library",
        caption: "Lesson Library",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes2,
        alt: "Saem's Tunes — Music Curriculum",
        caption: "Music Curriculum",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes3,
        alt: "Saem's Tunes — Student Dashboard",
        caption: "Student Dashboard",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes4,
        alt: "Saem's Tunes — Community Features",
        caption: "Community Features",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes5,
        alt: "Saem's Tunes — Track Player",
        caption: "Track Player",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes6,
        alt: "Saem's Tunes — Music Tools",
        caption: "Music Tools",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes7,
        alt: "Saem's Tunes — Profile & Settings",
        caption: "Profile & Settings",
      },
    },
  ],
} as const satisfies ProjectContent;
