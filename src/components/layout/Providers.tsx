"use client";

import { useEffect } from "react";
import { registerGSAP, ScrollTrigger } from "@/lib/gsap";

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGSAP();
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return <>{children}</>;
}
