import ceka0 from "../../../assets/images/projects/ceka/ceka-0.webp";
import ceka1 from "../../../assets/images/projects/ceka/ceka-1.webp";
import ceka2 from "../../../assets/images/projects/ceka/ceka-2.webp";
import ceka3 from "../../../assets/images/projects/ceka/ceka-3.webp";

import type { ProjectContent } from "../../types";

export default {
  title: "Civic Education Kenya (CEKA)",
  theme: "dark",
  tags: ["react", "typescript", "supabase", "cloudflare", "capacitor"],
  videoBorder: false,
  live: "https://civiceducationkenya.com",
  description:
    "CEKA is an open-source civic technology platform designed to close the information and accountability gap in Kenyan democratic processes.<br/><br/>Built entirely solo from zero programming background, CEKA includes a geocoded directory of 24,000+ IEBC voter registration centres (Nasaka IEBC), a voter card tool with client-side OCR (Niko Kadi), an offline mesh networking app (Nasaka WEWE), and a malpractice reporting microsite with behavioral bot detection, encrypted submissions, and a Telegram notification pipeline.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: ceka0,
        alt: "CEKA Platform — Empowering Citizens through Civic Education",
        caption: "CEKA Platform — Empowering Citizens through Civic Education",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ceka1,
        alt: "Nasaka IEBC — Voter Registration Centre Directory",
        caption: "Nasaka IEBC — Voter Registration Centre Directory",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ceka2,
        alt: "Legislative Tracker — Bills and Legal Updates",
        caption: "Legislative Tracker — Bills and Legal Updates",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: ceka3,
        alt: "Verification Portal — QR Code Scanning",
        caption: "Verification Portal — QR Code Scanning",
      },
    },
  ],
} as const satisfies ProjectContent;
