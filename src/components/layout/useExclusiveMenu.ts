"use client";

import { useEffect, useRef } from "react";

const EVENT = "header-menu-open";

export function useExclusiveMenu(id: string, open: boolean, closeNow: () => void) {
  const closeRef = useRef(closeNow);

  useEffect(() => {
    closeRef.current = closeNow;
  });

  useEffect(() => {
    if (open) {
      window.dispatchEvent(new CustomEvent(EVENT, { detail: id }));
    }
  }, [open, id]);

  useEffect(() => {
    const onOtherOpen = (event: Event) => {
      if ((event as CustomEvent<string>).detail !== id) closeRef.current();
    };

    window.addEventListener(EVENT, onOtherOpen);
    return () => window.removeEventListener(EVENT, onOtherOpen);
  }, [id]);
}
