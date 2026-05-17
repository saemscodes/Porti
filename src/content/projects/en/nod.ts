import nod1 from "../../../assets/images/projects/nod/nod-new-1.png";
import nod2 from "../../../assets/images/projects/nod/nod-new-2.png";
import nod3 from "../../../assets/images/projects/nod/nod-new-3.png";
import nod4 from "../../../assets/images/projects/nod/nod-new-4.png";
import nod5 from "../../../assets/images/projects/nod/nod-new-5.png";
import nod6 from "../../../assets/images/projects/nod/nod-new-6.png";
import nod7 from "../../../assets/images/projects/nod/nod-new-7.png";

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
        src: nod1,
        alt: "Number Our Days — Application Interface",
        caption: "Application Interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod2,
        alt: "NOD — Spiritual Journey Tracker",
        caption: "Spiritual Journey Tracker",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod3,
        alt: "NOD — Resource Library",
        caption: "Resource Library",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod4,
        alt: "NOD — Daily Reflections",
        caption: "Daily Reflections",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod5,
        alt: "NOD — Community Engagement",
        caption: "Community Engagement",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod6,
        alt: "NOD — Personal Growth Metrics",
        caption: "Personal Growth Metrics",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod7,
        alt: "NOD — System Notifications",
        caption: "System Notifications",
      },
    },
  ],
} as const satisfies ProjectContent;
