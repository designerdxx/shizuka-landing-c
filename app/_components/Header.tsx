"use client";

import { useEffect, useRef, useState } from "react";
import { asset } from "../asset";
import { messageHref, nav, socials } from "../content";

/** Sticky header with the "Menu" overlay: stacked serif links rising 35ms apart, Escape and scroll lock. */
export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const prev = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      root.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="hd" data-open={open || undefined}>
      <button ref={toggle} className="menu-btn" type="button" aria-expanded={open} aria-controls="menu" onClick={() => setOpen((v) => !v)}>
        <span className="a">Menu</span>
        <span className="b" aria-hidden="true">
          Close
        </span>
      </button>
      <a className="logo" href="#top" aria-label="Shizuka Luxury, home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={asset("/images/logo-light.svg")} alt="" width={84} height={28} />
      </a>
      <a className="pill pill-solid" href={messageHref}>
        Message us
      </a>
      <div className="over" id="menu" aria-hidden={!open} inert={!open}>
        <nav aria-label="Primary">
          {nav.map((item, i) => (
            <a key={item.href} href={item.href} style={{ "--i": i } as React.CSSProperties} onClick={close}>
              {item.label}
            </a>
          ))}
        </nav>
        <div className="sub">
          <a href={messageHref} onClick={close}>
            WhatsApp us
          </a>
          <a href={socials.linkedin} onClick={close}>
            LinkedIn
          </a>
          <a href={socials.instagram} onClick={close}>
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
}
