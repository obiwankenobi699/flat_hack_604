"use client";

import { useEffect, useState } from "react";
import { navigation } from "@/content/home";
import { Brand } from "@/components/ui/Brand";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { event, registrationHref } from "@/lib/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const registration = registrationHref(event.registrationUrl);

  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Flat Hack 604, home"><Brand compact /></a>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {navigation.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
      </nav>
      <ButtonLink className="header-cta" href={registration ?? "#register"} target={registration ? "_blank" : undefined} rel={registration ? "noopener noreferrer" : undefined}>{registration ? "Register now" : "Registration soon"}</ButtonLink>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
      </button>
      <nav className={`mobile-nav${open ? " is-open" : ""}`} id="mobile-navigation" aria-label="Mobile navigation">
        {navigation.map((link) => <a href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
        <a href={registration ?? "#register"} target={registration ? "_blank" : undefined} rel={registration ? "noopener noreferrer" : undefined} onClick={() => setOpen(false)}>{registration ? "Register now" : "Registration soon"}</a>
      </nav>
    </header>
  );
}
