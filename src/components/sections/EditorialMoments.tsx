"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, type MotionStyle } from "motion/react";
import { HeroVideo } from "@/components/motion/HeroVideo";

const tiles = [
  { image: "/assets/collage-seated.webp", className: "feedback-tile feedback-tile--one" },
  { image: "/assets/collage-reader.webp", className: "feedback-tile feedback-tile--two" },
  { image: "/assets/collage-maker.webp", className: "feedback-tile feedback-tile--three" },
  { image: "/assets/collage-explorer.webp", className: "feedback-tile feedback-tile--four" },
  { image: "/assets/collage-community.webp", className: "feedback-tile feedback-tile--five" },
];

export function EditorialMoments() {
  const feedbackRef = useRef<HTMLElement>(null);
  const finaleRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: feedbackRef, offset: ["start end", "end start"] });
  const { scrollYProgress: finaleProgress } = useScroll({ target: finaleRef, offset: ["start end", "end start"] });

  return (
    <>
      <section className="signal-banner" aria-labelledby="signal-title">
        <Image src="/assets/flat-hack-signal-poster.webp" alt="An artist working with a stylus" fill sizes="100vw" />
        <HeroVideo src="/assets/flat-hack-signal.webm" poster="/assets/flat-hack-signal-poster.webp" />
        <div className="signal-banner__copy">
          <p className="section-kicker">THE HUMAN SIGNAL</p>
          <h2 id="signal-title">Connecting with the missing signal: perspective.</h2>
          <p>Bring your point of view into a shared build. The strongest work comes from the things different people notice.</p>
          <div className="signal-tags"><span>Developers</span><span>Designers</span><span>Researchers</span><span>Storytellers</span></div>
        </div>
      </section>

      <section className="feedback-wall" ref={feedbackRef} aria-labelledby="feedback-title">
        <motion.div className="feedback-wall__stage" style={{ "--feedback-progress": reduceMotion ? 0.5 : scrollYProgress } as MotionStyle}>
          <div className="feedback-wall__images" aria-hidden="true">
            {tiles.map((tile) => <div className={tile.className} key={tile.image}><Image src={tile.image} alt="" fill sizes="20vw" /></div>)}
          </div>
          <h2 id="feedback-title">Feedback<br />that feels<br />human.</h2>
          <p>Build, share, listen, and build again.</p>
        </motion.div>
      </section>

      <section className="execution-banner" aria-labelledby="execution-title">
        <Image src="/assets/workspace.png" alt="An editorial workspace with books, art materials, and a laptop" fill sizes="100vw" />
        <div>
          <p className="section-kicker">FROM IDEA TO EVIDENCE</p>
          <h2 id="execution-title">Execution is free.<br /><em>Judgment is everything.</em></h2>
          <p>Make something small enough to test and strong enough to start a conversation.</p>
          <a className="button button-light" href="#schedule">Explore the format ↗</a>
        </div>
      </section>

      <section className="network-finale" ref={finaleRef} aria-labelledby="network-finale-title">
        <motion.div className="network-finale__stage" style={{ "--finale-progress": reduceMotion ? 0.5 : finaleProgress } as MotionStyle}>
          <div className="network-finale__tile network-finale__tile--one"><Image src="/assets/collage-community.webp" alt="" fill sizes="25vw" /></div>
          <div className="network-finale__tile network-finale__tile--two"><Image src="/assets/collage-reader.webp" alt="" fill sizes="25vw" /></div>
          <div className="network-finale__tile network-finale__tile--three"><Image src="/assets/collage-maker.webp" alt="" fill sizes="25vw" /></div>
          <div className="network-finale__tile network-finale__tile--four"><Image src="/assets/collage-seated.webp" alt="" fill sizes="25vw" /></div>
          <div className="network-finale__copy">
            <p className="section-kicker">THE PEOPLE MAKE THE PLACE</p>
            <h2 id="network-finale-title">The network for creative possibility.</h2>
            <p>Find collaborators, exchange perspective, and build a first version together.</p>
            <a className="button button-dark" href="#register">Join Flat Hack 604 ↗</a>
          </div>
        </motion.div>
      </section>

      <section className="editorial-mosaic" aria-label="A moving gallery of Flat Hack inspiration">
        <div className="editorial-mosaic__row">
          {["/assets/collage-maker.webp", "/assets/collage-reader.webp", "/assets/collage-seated.webp", "/assets/collage-explorer.webp", "/assets/collage-community.webp"].map((source) => <div key={source}><Image src={source} alt="" fill sizes="20vw" /></div>)}
        </div>
      </section>
    </>
  );
}
