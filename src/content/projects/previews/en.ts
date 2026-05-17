import thumbnailCeka from "../../../assets/thumbnails/ceka.webp";
import thumbnailNod from "../../../assets/thumbnails/nod.webp";
import thumbnailSaemstunes from "../../../assets/thumbnails/saemstunes.webp";
import thumbnailNasaka from "../../../assets/thumbnails/nasaka.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "CEKA",
    slug: "ceka",
    thumbnail: thumbnailCeka,
    description: "Open-source civic technology platform",
    isDark: false,
  },
  {
    title: "Number Our Days",
    slug: "nod",
    thumbnail: thumbnailNod,
    description: "Faith-centred Christian companion app",
    isDark: true,
  },
  {
    title: "Saem's Tunes",
    slug: "saemstunes",
    thumbnail: thumbnailSaemstunes,
    description: "Music school & education platform",
    isDark: true,
  },
  {
    title: "Nasaka IEBC",
    slug: "nasaka",
    thumbnail: thumbnailNasaka,
    description: "Independent IEBC office finder platform",
    isDark: false,
  },
] as const satisfies ProjectPreview[];
