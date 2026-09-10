"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Draggable } from "gsap/Draggable";

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
  );

  registered = true;
}

export {
  gsap,
  ScrollTrigger,
  Draggable,
};