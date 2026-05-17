import thumbnailCeka from "../../../assets/thumbnails/ceka.webp";
import thumbnailNod from "../../../assets/thumbnails/nod.webp";
import thumbnailSaemstunes from "../../../assets/thumbnails/saemstunes.webp";
import thumbnailNasaka from "../../../assets/thumbnails/nasaka.png";
import thumbnailReport from "../../../assets/thumbnails/report.png";

import type { ProjectPreview } from "../../types";

export default [
  {
    title: "CEKA",
    slug: "ceka",
    thumbnail: thumbnailCeka,
    description: "Jukwaa la teknolojia ya kiraia la chanzo wazi",
  },
  {
    title: "Number Our Days",
    slug: "nod",
    thumbnail: thumbnailNod,
    description: "Programu ya msaidizi wa kikristo wa imani",
  },
  {
    title: "Saem's Tunes",
    slug: "saemstunes",
    thumbnail: thumbnailSaemstunes,
    description: "Shule ya muziki na jukwaa la elimu",
  },
  {
    title: "Nasaka IEBC",
    slug: "nasaka",
    thumbnail: thumbnailNasaka,
    description: "Jukwaa huru la kutafuta ofisi za IEBC",
  },
  {
    title: "Ripoti kwa CEKA",
    slug: "report",
    thumbnail: thumbnailReport,
    description: "Kipengele cha kuripoti ushiriki wa kiraia",
  },
] as const satisfies ProjectPreview[];
