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
    "Saem's Tunes ni chapa ya elimu ya muziki na jukwaa ambalo hutoa masomo ya sauti yaliyopangwa, mbinu ya upumuaji, na ustadi wa utendaji kwa wanafunzi wa Nairobi na ulimwenguni kote.<br/><br/>Programu ya Android iliundwa kwa kutumia Supabase na Firebase na inatoa mfumo wa utaftaji wa masomo, zana za jamii, na maktaba ya muziki iliyojitolea.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes0,
        alt: "Saem's Tunes — Gundua sauti yako ya muziki",
        caption: "Saem's Tunes — Gundua sauti yako ya muziki",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes1,
        alt: "Saem's Tunes — Maktaba ya Masomo",
        caption: "Maktaba ya Masomo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes2,
        alt: "Saem's Tunes — Mtaala wa Muziki",
        caption: "Mtaala wa Muziki",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes3,
        alt: "Saem's Tunes — Dashibodi ya Mwanafunzi",
        caption: "Dashibodi ya Mwanafunzi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes4,
        alt: "Saem's Tunes — Vipengele vya Jamii",
        caption: "Vipengele vya Jamii",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes5,
        alt: "Saem's Tunes — Kicheza Muziki",
        caption: "Kicheza Muziki",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes6,
        alt: "Saem's Tunes — Zana za Muziki",
        caption: "Zana za Muziki",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: saemstunes7,
        alt: "Saem's Tunes — Profaili na Mipangilio",
        caption: "Profaili na Mipangilio",
      },
    },
  ],
} as const satisfies ProjectContent;
