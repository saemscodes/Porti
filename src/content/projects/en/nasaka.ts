import nasaka0 from "../../../assets/images/projects/nasaka/nasaka-0.png";
import nasaka1 from "../../../assets/images/projects/nasaka/nasaka-1.png";
import nasaka2 from "../../../assets/images/projects/nasaka/nasaka-2.png";
import nasaka3 from "../../../assets/images/projects/nasaka/nasaka-3.png";
import nasaka4 from "../../../assets/images/projects/nasaka/nasaka-4.png";
import nasaka5 from "../../../assets/images/projects/nasaka/nasaka-5.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Nasaka IEBC",
  theme: "dark",
  tags: ["react", "typescript", "supabase", "cloudflare", "postgresql"],
  videoBorder: false,
  description:
    "Nasaka IEBC is an independent civic platform designed to help Kenyans find their nearest IEBC registration centers and offices with ease.<br/><br/>It features a real-time routing engine, live weather integration at destination offices, and seamless transport booking via Uber and Bolt. The platform covers all 47 counties and over 30,000 centres nationwide.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka0,
        alt: "Nasaka IEBC — Find Your Nearest Office",
        caption: "Find Your Nearest IEBC Office",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka1,
        alt: "Nasaka Launch — Tap. Search. Go.",
        caption: "Seamless Search Experience",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka2,
        alt: "Nasaka Reach — 47 Counties, 30K+ Centres",
        caption: "National Coverage Statistics",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka3,
        alt: "Nasaka Community — What Others Are Saying",
        caption: "User Feedback and Testimonials",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka4,
        alt: "Nasaka Live Map — Real-time Navigation",
        caption: "Routing with Uber/Bolt Integration",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka5,
        alt: "Nasaka Office View — Verified Details",
        caption: "Returning Officer & Location Contacts",
      },
    },
  ],
} as const satisfies ProjectContent;
