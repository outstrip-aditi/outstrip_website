"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
import { SplitText } from "gsap/SplitText";

let registered = false;

export function registerGSAP() {
  if (
    typeof window === "undefined" ||
    registered
  ) {
    return;
  }

  gsap.registerPlugin(
    ScrollTrigger,
    Draggable,
    SplitText,
  );

  registered = true;
}

export {
  gsap,
  ScrollTrigger,
  Draggable,
  SplitText,
};