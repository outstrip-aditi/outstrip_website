import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join OUTSTRIP — open roles in engineering, design, and growth in Jaipur.",
};

export default function CareersPage() {
  return <CareersContent />;
}