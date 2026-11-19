"use client";

import { useEffect } from "react";

/**
 * Arms the one-time scroll reveals. Content stays visible without JavaScript;
 * only once this runs are [data-r] elements hidden until they enter the viewport.
 */
export function Reveal({ root }: { root: string }) {
  useEffect(() => {
    const host = document.querySelector<HTMLElement>(root);
    if (!host || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-in", "");
            io.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    const items = host.querySelectorAll("[data-r]");
    // Anything already on screen at load stays exactly as rendered (no flash, nothing competing with
    // the hero's entrance); only content below the fold waits for its one-time reveal.
    items.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) el.setAttribute("data-in", "");
      else io.observe(el);
    });
    host.setAttribute("data-armed", "");
    return () => io.disconnect();
  }, [root]);
  return null;
}
