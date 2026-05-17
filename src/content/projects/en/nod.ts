import nod0 from "../../../assets/images/projects/nod/nod-0.webp";
import nod1 from "../../../assets/images/projects/nod/nod-1.webp";
import nod2 from "../../../assets/images/projects/nod/nod-2.webp";
import nod3 from "../../../assets/images/projects/nod/nod-3.webp";
import nod4 from "../../../assets/images/projects/nod/nod-4.webp";
import nod5 from "../../../assets/images/projects/nod/nod-5.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Number Our Days (NOD)",
  theme: "dark",
  tags: ["react", "typescript", "supabase", "capacitor", "paystack"],
  videoBorder: false,
  live: "https://nod.saemstunes.com",
  description:
    "NOD is a faith-centred Christian daily companion app designed to support users in consistent spiritual practice.<br/><br/>It features a freemium credit-based monetization model powered by Paystack and M-Pesa, a dynamic flame animation system tied to user spiritual activity, 13 production email templates across auth and security flows, and a full Supabase backend with React/TypeScript/Vite/Capacitor stack.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: nod0,
        alt: "Number Our Days — Gain a heart of Wisdom",
        caption: "Number Our Days — Gain a heart of Wisdom",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod1,
        alt: "NOD — Daily Spiritual Companion Interface",
        caption: "Daily Spiritual Companion Interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod2,
        alt: "NOD — Prayer and Study Tracking",
        caption: "Prayer and Study Tracking",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod3,
        alt: "NOD — Dynamic Flame Animation",
        caption: "Dynamic Flame Animation",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod4,
        alt: "NOD — Freemium Credit System",
        caption: "Freemium Credit System",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod5,
        alt: "NOD — Mobile App Design",
        caption: "Mobile App Design",
      },
    },
  ],
} as const satisfies ProjectContent;
