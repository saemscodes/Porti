import ceka0 from "../../../assets/images/projects/ceka/ceka-0.webp";
import ceka1 from "../../../assets/images/projects/ceka/ceka-1.webp";
import ceka2 from "../../../assets/images/projects/ceka/ceka-2.webp";
import ceka3 from "../../../assets/images/projects/ceka/ceka-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "CEKA",
  theme: "dark",
  tags: ["react", "typescript", "supabase", "cloudflare", "capacitor"],
  videoBorder: false,
  live: "https://civiceducationkenya.com",
  description:
    "Civic Education Kenya (CEKA) ni jukwaa la teknolojia ya kiraia la chanzo wazi lililoundwa kuziba pengo la habari na uwajibikaji katika michakato ya kidemokrasia ya Kenya.<br/><br/>Jukwaa hili linajumuisha mfumo wa kijiografia kwa zaidi ya vituo 24,000 vya uandikishaji wapiga kura (Nasaka IEBC), zana ya kadi ya mpiga kura (Niko Kadi), na programu ya mtandao wa mesh ya nje ya mkondoni (Nasaka WEWE).",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ceka0,
        alt: "Jukwaa la CEKA — Kuwawezesha Wananchi kupitia Elimu ya Kiraia",
        caption: "Jukwaa la CEKA — Kuwawezesha Wananchi kupitia Elimu ya Kiraia",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ceka1,
        alt: "Nasaka IEBC — Orodha ya Vituo vya Uandikishaji Wapiga Kura",
        caption: "Nasaka IEBC — Orodha ya Vituo vya Uandikishaji Wapiga Kura",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ceka2,
        alt: "Kifuatiliaji cha Sheria — Miswada na Sasisho za Kisheria",
        caption: "Kifuatiliaji cha Sheria — Miswada na Sasisho za Kisheria",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ceka3,
        alt: "Lango la Uhakiki — Kukagua Nambari ya QR",
        caption: "Lango la Uhakiki — Kukagua Nambari ya QR",
      },
    },
  ],
} as const satisfies ProjectContent;
