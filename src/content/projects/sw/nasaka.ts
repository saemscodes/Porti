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
    "Nasaka IEBC ni jukwaa huru la kiraia lililoundwa kusaidia Wakenya kupata vituo vyao vya uandikishaji vya IEBC na ofisi kwa urahisi.<br/><br/>Ina mfumo wa uwekaji njia wa wakati halisi, ujumuishaji wa hali ya hewa moja kwa moja kwenye ofisi za marudio, na uhifadhi rahisi wa safari kupitia Uber na Bolt. Jukwaa hili linashughulikia kaunti zote 47 na zaidi ya vituo 30,000 nchi nzima.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka0,
        alt: "Nasaka IEBC — Pata Ofisi Yako ya Karibu",
        caption: "Pata Ofisi Yako ya Karibu ya IEBC",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka1,
        alt: "Nasaka IEBC — Rahisi. Haraka. Uhakika.",
        caption: "Uzoefu wa Utafutaji wa Kisasa",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka2,
        alt: "Nasaka IEBC — Kaunti 47, Vituo 30K+",
        caption: "Takwimu za Ufikiaji Kitaifa",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka3,
        alt: "Nasaka IEBC — Maoni ya Watumiaji",
        caption: "Maoni kutoka kwa Jamii",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka4,
        alt: "Nasaka IEBC — Ramani ya Moja kwa Moja",
        caption: "Urambazaji kwa Uber na Bolt",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: nasaka5,
        alt: "Nasaka IEBC — Maelezo ya Ofisi",
        caption: "Maelezo ya Afisa na Mawasiliano",
      },
    },
  ],
} as const satisfies ProjectContent;
