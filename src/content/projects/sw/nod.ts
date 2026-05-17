import nod0 from "../../../assets/images/projects/nod/nod-0.webp";
import nod1 from "../../../assets/images/projects/nod/nod-1.webp";
import nod2 from "../../../assets/images/projects/nod/nod-2.webp";
import nod3 from "../../../assets/images/projects/nod/nod-3.webp";
import nod4 from "../../../assets/images/projects/nod/nod-4.webp";
import nod5 from "../../../assets/images/projects/nod/nod-5.webp";

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
        src: nod0,
        alt: "NOD — Pata moyo wa hekima",
        caption: "NOD — Pata moyo wa hekima",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod1,
        alt: "NOD — Msaidizi wa Kiroho wa Kila Siku",
        caption: "Msaidizi wa Kiroho wa Kila Siku",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod2,
        alt: "NOD — Ufuatiliaji wa Maombi na Mafunzo",
        caption: "Ufuatiliaji wa Maombi na Mafunzo",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod3,
        alt: "NOD — Uhuishaji wa Moto wa Kipekee",
        caption: "Uhuishaji wa Moto wa Kipekee",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod4,
        alt: "NOD — Mfumo wa Mikopo wa Kulipia",
        caption: "Mfumo wa Mikopo wa Kulipia",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nod5,
        alt: "NOD — Muundo wa Programu ya Simu",
        caption: "Muundo wa Programu ya Simu",
      },
    },
  ],
} as const satisfies ProjectContent;
