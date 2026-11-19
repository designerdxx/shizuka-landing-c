"use client";

import { useEffect } from "react";

/**
 * Holds the hero's entrance until its photo has decoded (at most 1.5s), so the opening
 * motion never plays over an empty frame on a slow connection.
 */
export function HeroReady({ selector }: { selector: string }) {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(selector);
    if (!hero) return;
    const img = hero.querySelector<HTMLImageElement>("img[fetchpriority='high']") ?? hero.querySelector("img");
    let done = false;
    const go = () => {
      if (done) return;
      done = true;
      hero.setAttribute("data-ready", "");
    };
    const timer = window.setTimeout(go, 1500);
    if (!img || img.complete) go();
    else img.decode().then(go, go);
    return () => window.clearTimeout(timer);
  }, [selector]);
  return null;
}
