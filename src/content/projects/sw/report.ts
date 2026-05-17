import report1 from "../../../assets/images/projects/report/report-1.png";
import report2 from "../../../assets/images/projects/report/report-2.png";
import report3 from "../../../assets/images/projects/report/report-3.png";
import report4 from "../../../assets/images/projects/report/report-4.png";
import report5 from "../../../assets/images/projects/report/report-5.png";
import report6 from "../../../assets/images/projects/report/report-6.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Ripoti kwa CEKA",
  theme: "light",
  tags: ["typescript", "supabase", "react", "html"],
  videoBorder: true,
  description:
    "Ripoti kwa CEKA ni mfumo wa kuripoti masuala ya kiraia unaowawezesha watumiaji kuwasilisha, kupanga, na kufuatilia ripoti za maslahi ya umma kwa mfumo ulio wazi na uliopangwa. Imekusudiwa kusaidia ufahamu wa kiraia, uwajibikaji, na ushiriki wa jamii kwa kuwapa watumiaji njia rahisi ya kurekodi masuala yanayoathiri mazingira yao.<br/><br/>Hutumika kama daraja kati ya uchunguzi wa raia na majibu ya kiraia, ikisaidia kugeuza kero za kila siku kuwa kumbukumbu zinazoweza kufanyiwa kazi ndani ya jukwaa la CEKA. Mfumo huu unasaidia uainishaji wa masuala, kuashiria mahali, muhtasari wa maelezo, ambatanisho la ushahidi, na sasisho za hali.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: report1,
        alt: "Ripoti kwa CEKA — Kuripoti kwa Kiraia",
        caption: "Kiolesura cha Kuripoti kwa Kiraia",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: report2,
        alt: "Ripoti kwa CEKA — Makundi ya Masuala",
        caption: "Uainishaji Mpana wa Masuala",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: report3,
        alt: "Ripoti kwa CEKA — Maelezo ya Uwasilishaji",
        caption: "Fomu ya Maelezo ya Uwasilishaji",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: report4,
        alt: "Ripoti kwa CEKA — Mahali na Ushahidi",
        caption: "Utambulisho wa Mahali na Ukusanyaji wa Ushahidi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: report5,
        alt: "Ripoti kwa CEKA — Ufuatiliaji wa Hali",
        caption: "Ufuatiliaji wa Hali ya Wakati Halisi",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: report6,
        alt: "Ripoti kwa CEKA — Athari kwa Jamii",
        caption: "Dashibodi ya Uwajibikaji Inayoendeshwa na Jamii",
      },
    },
  ],
} as const satisfies ProjectContent;
