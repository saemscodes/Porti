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
    "Saem's Tunes ni chapa ya elimu ya muziki na jukwaa ambalo hutoa masomo ya sauti yaliyopangwa, mbinu ya upumuaji, na ustadi wa utendaji kwa wanafunzi wa Nairobi na ulimwenguni kote.<br/><br/>Programu ya Android iliundwa kwa kutumia Supabase na Firebase na inatoa mfumo wa utaftaji wa masomo, zana za jamii, na maktaba ya muziki iliyojitolea.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: st1,
        alt: "Saem's Tunes — Ugunduzi wa Muziki",
        caption: "Uzoefu wa Ugunduzi wa Muziki",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st2,
        alt: "Saem's Tunes — Moduli za Mafunzo",
        caption: "Moduli za Mafunzo ya Maingiliano",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st3,
        alt: "Saem's Tunes — Upataji wa Ujuzi",
        caption: "Njia za Upataji wa Ujuzi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st4,
        alt: "Saem's Tunes — Mafunzo ya Utendaji",
        caption: "Mafunzo ya Sauti na Utendaji",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st5,
        alt: "Saem's Tunes — Maudhui ya Elimu",
        caption: "Maudhui ya Elimu Yaliyochaguliwa",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st6,
        alt: "Saem's Tunes — Maendeleo ya Mwanafunzi",
        caption: "Maendeleo ya Mwanafunzi na Maarifa",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st7,
        alt: "Saem's Tunes — Zana za Ubunifu",
        caption: "Zana za Muziki za Ubunifu",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: st8,
        alt: "Saem's Tunes — Upatikanaji wa Simu",
        caption: "Uzoefu usio na Mshono wa Simu",
      },
    },
  ],
} as const satisfies ProjectContent;
