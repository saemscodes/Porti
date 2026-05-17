import report1 from "../../../assets/images/projects/report/report-1.png";
import report2 from "../../../assets/images/projects/report/report-2.png";
import report3 from "../../../assets/images/projects/report/report-3.png";
import report4 from "../../../assets/images/projects/report/report-4.png";
import report5 from "../../../assets/images/projects/report/report-5.png";
import report6 from "../../../assets/images/projects/report/report-6.png";

import type { ProjectContent } from "../../types";

export default {
  title: "Report by CEKA",
  theme: "light",
  tags: ["typescript", "supabase", "react", "html"],
  videoBorder: true,
  description:
    "Report by CEKA is a civic reporting system that enables users to submit, organize, and monitor public-interest reports in a clear and structured format. It is built to support civic awareness, accountability, and community participation by giving users a simple way to capture issues affecting their surroundings and present them in a form that can be reviewed, tracked, and acted upon.<br/><br/>It serves as a bridge between citizen observation and civic response, helping transform everyday concerns into actionable records within the CEKA platform. The system supports issue classification, location tagging, descriptive summaries, evidence attachment, and status updates.",
  components: [
    {
      type: "media",
      props: {
        type: "image",
        src: report1,
        alt: "Report by CEKA — Structured Civic Reporting",
        caption: "Structured Civic Reporting Interface",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: report2,
        alt: "Report by CEKA — Issue Categories",
        caption: "Comprehensive Issue Classification",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: report3,
        alt: "Report by CEKA — Detailed Submissions",
        caption: "Detailed Submission Form",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: report4,
        alt: "Report by CEKA — Location and Evidence",
        caption: "Geotagging and Evidence Collection",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: report5,
        alt: "Report by CEKA — Status Tracking",
        caption: "Real-time Status and Progress Oversight",
      },
    },
    {
      type: "media",
      props: {
        type: "image",
        src: report6,
        alt: "Report by CEKA — Community Impact",
        caption: "Community-driven Accountability Dashboard",
      },
    },
  ],
} as const satisfies ProjectContent;
