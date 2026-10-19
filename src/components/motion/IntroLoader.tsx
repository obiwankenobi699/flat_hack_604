"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const [run, setRun] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = window.requestAnimationFrame(() => setVisible(false));
      return () => window.cancelAnimationFrame(frame);
    }

    overlayRef.current?.setAttribute("data-ready", "true");

    const timer = window.setTimeout(() => {
      setVisible(false);
    }, 3300);

    return () => {
      window.clearTimeout(timer);
    };
  }, [run]);

  const replay = () => {
    window.dispatchEvent(new Event("flat-hack-replay"));
    setVisible(true);
    setRun((value) => value + 1);
  };

  return (
    <>
      {visible && (
        <div className="intro-loader" key={run} ref={overlayRef}>
          <div className="intro-lockup" aria-hidden="true">
            <span className="intro-left">Flat</span>
            <div className="intro-center">
              <Image className="intro-symbol" src="/assets/flat-hack-house.svg" alt="" width={96} height={96} priority />
              <Image className="intro-frame intro-frame--one" src="/assets/intro-artwork.webp" alt="" width={394} height={300} priority />
              <Image className="intro-frame intro-frame--two" src="/assets/collage-seated.webp" alt="" width={394} height={300} />
              <Image className="intro-frame intro-frame--three" src="/assets/collage-reader.webp" alt="" width={394} height={300} />
              <Image className="intro-frame intro-frame--four" src="/assets/collage-maker.webp" alt="" width={394} height={300} />
            </div>
            <span className="intro-right">Hack 604</span>
          </div>
          <button className="skip-intro" type="button" onClick={() => setVisible(false)}>Skip intro</button>
        </div>
      )}
      <button className="replay-intro" type="button" onClick={replay} aria-label="Replay opening animation">↺ <span>Replay intro</span></button>
    </>
  );
}
