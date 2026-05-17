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
    description: "Jukwaa la teknolojia ya kiraia la chanzo wazi",
    isDark: false,
  },
  {
    title: "Number Our Days",
    slug: "nod",
    thumbnail: thumbnailNod,
    description: "Programu ya msaidizi wa kikristo wa imani",
    isDark: true,
  },
  {
    title: "Saem's Tunes",
    slug: "saemstunes",
    thumbnail: thumbnailSaemstunes,
    description: "Shule ya muziki na jukwaa la elimu",
    isDark: true,
  },
  {
    title: "Nasaka IEBC",
    slug: "nasaka",
    thumbnail: thumbnailNasaka,
    description: "Jukwaa huru la kutafuta ofisi za IEBC",
    isDark: false,
  },
] as const satisfies ProjectPreview[];
