import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import CareersContent from "./CareersContent";

export const metadata: Metadata = pageMetadata("/careers", { title: "Careers", description: "Join OUTSTRIP — open roles in engineering, design, and growth in Jaipur." }, "careers");

export default function CareersPage() {
  return <CareersContent />;
}