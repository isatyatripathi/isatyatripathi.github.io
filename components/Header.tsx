"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { Icon } from "@/components/Icon";
import { ThemeToggle } from "@/components/ThemeToggle";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.classList.remove("menu-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="brand" href="#home" aria-label="Satya Tripathi, home">
          <Image src="/icons/icon-192.png" width={38} height={38} alt="" priority />
          <span>{portfolio.person.name}</span>
        </a>

        <nav id="mobile-navigation" className={`primary-nav ${open ? "is-open" : ""}`} aria-label="Primary navigation">
          {portfolio.navigation.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <a
            className="button button-compact button-secondary header-resume"
            href={portfolio.resume.path}
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="fa-solid fa-download" />
            <span>Résumé</span>
          </a>
          <button
            data-menu-toggle
            className="icon-button menu-button"
            type="button"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "fa-solid fa-xmark" : "fa-solid fa-bars"} />
          </button>
        </div>
      </div>
    </header>
  );
}
