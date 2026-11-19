"use client";

import { useEffect } from "react";

/** Pauses the drifting glow layers while they are off screen, so the loop costs nothing out of view. */
export function Ambient({ selector }: { selector: string }) {
  useEffect(() => {
    const layers = document.querySelectorAll<HTMLElement>(selector);
    if (!layers.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) entry.target.toggleAttribute("data-paused", !entry.isIntersecting);
    });
    layers.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
  return null;
}
