"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const introFrames = [
  "/assets/intro-artwork.webp",
  "/assets/collage-seated.webp",
  "/assets/collage-reader.webp",
  "/assets/collage-explorer.webp",
  "/assets/collage-hands.webp",
  "/assets/collage-maker.webp",
  "/assets/collage-community.webp",
  "/assets/flat-hack-signal-poster.webp",
  "/assets/execution-balance.png",
  "/assets/flat-hack-hero-poster.webp",
];

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [run, setRun] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);
  const wasVisible = useRef(false);

  useEffect(() => {
    const replay = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      setVisible(true);
      setExiting(false);
      setRun((value) => value + 1);
    };

    window.addEventListener("flat-hack-replay", replay);
    return () => window.removeEventListener("flat-hack-replay", replay);
  }, []);

  useEffect(() => {
    if (!visible) {
      if (wasVisible.current) {
        window.dispatchEvent(new Event("flat-hack-hero-resume"));
        document.querySelector<HTMLButtonElement>(".hero-replay")?.focus();
      }
      wasVisible.current = false;
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    wasVisible.current = true;
    window.dispatchEvent(new Event("flat-hack-hero-hold"));
    const overlay = overlayRef.current;
    overlay?.focus();

    const exitTimer = window.setTimeout(() => {
      setExiting(true);
    }, 4100);
    const closeTimer = window.setTimeout(() => {
      setVisible(false);
    }, 5300);

    return () => {
      window.clearTimeout(exitTimer);
      window.clearTimeout(closeTimer);
    };
  }, [run, visible]);

  return (
    <>
      {visible && (
        <div
          className="intro-loader"
          key={run}
          ref={overlayRef}
          tabIndex={-1}
          data-exiting={exiting ? "true" : undefined}
          role="dialog"
          aria-modal="true"
          aria-label="Flat Hack 604 opening animation"
          onKeyDown={(event) => {
            if (event.key === "Tab") {
              event.preventDefault();
              overlayRef.current?.focus();
            }
          }}
        >
          <div className="intro-lockup" aria-hidden="true">
            <span className="intro-left">Flat</span>
            <div className="intro-center">
              <Image className="intro-symbol" src="/assets/flat-hack-house.svg" alt="" width={96} height={96} priority />
              {introFrames.map((src, index) => (
                <Image
                  className={`intro-frame ${index === introFrames.length - 1 ? "intro-frame--final" : "intro-frame--montage"}`}
                  src={src}
                  alt=""
                  width={394}
                  height={300}
                  priority={index === 0 || index === introFrames.length - 1}
                  style={{ animationDelay: `${1300 + index * 220}ms` }}
                  key={src}
                />
              ))}
            </div>
            <span className="intro-right">Hack 604</span>
          </div>
        </div>
      )}
    </>
  );
}
