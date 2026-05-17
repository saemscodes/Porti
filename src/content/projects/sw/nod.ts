import nod1 from "../../../assets/images/projects/nod/nod-new-1.png";
import nod2 from "../../../assets/images/projects/nod/nod-new-2.png";
import nod3 from "../../../assets/images/projects/nod/nod-new-3.png";
import nod4 from "../../../assets/images/projects/nod/nod-new-4.png";
import nod5 from "../../../assets/images/projects/nod/nod-new-5.png";
import nod6 from "../../../assets/images/projects/nod/nod-new-6.png";
import nod7 from "../../../assets/images/projects/nod/nod-new-7.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Number Our Days",
  theme: "dark",
  tags: ["react", "typescript", "supabase", "capacitor", "paystack"],
  videoBorder: false,
  live: "https://nod.saemstunes.com",
  description:
    "Number Our Days (NOD) ni programu ya Kikristo inayozingatia imani iliyoundwa kama msaidizi wa kila siku kwa ukuaji wa kiroho.<br/><br/>Ina mfumo wa uhuishaji wa moto unaoendana na shughuli za kiroho, mfumo wa mikopo wa kulipia uliowezeshwa na Paystack na M-Pesa, na violezo vya barua pepe vilivyoongozwa na iOS.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: nod1,
        alt: "NOD — Kiolesura cha Programu",
        caption: "Kiolesura cha Programu",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod2,
        alt: "NOD — Kifuatiliaji cha Kiroho",
        caption: "Kifuatiliaji cha Kiroho",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod3,
        alt: "NOD — Maktaba ya Rasilimali",
        caption: "Maktaba ya Rasilimali",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod4,
        alt: "NOD — Tafakari za Kila Siku",
        caption: "Tafakari za Kila Siku",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod5,
        alt: "NOD — Ushiriki wa Jamii",
        caption: "Ushiriki wa Jamii",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod6,
        alt: "NOD — Vipimo vya Kukua",
        caption: "Vipimo vya Kukua",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod7,
        alt: "NOD — Arifa za Mfumo",
        caption: "Arifa za Mfumo",
      },
    },
  ],
} as const satisfies ProjectContent;
