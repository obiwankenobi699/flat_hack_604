"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform, type MotionStyle } from "motion/react";

const chapters = [
  { eyebrow: "01 / REAL EXPERIENCE", title: "Built on real-world creative expertise", description: "The strongest prototypes begin with lived problems and people who know them well." },
  { eyebrow: "02 / DIFFERENT MINDS", title: "A room of practicing makers and thinkers", description: "Designers, developers, researchers, and storytellers bring different ways of seeing the same challenge." },
  { eyebrow: "03 / SHARED MOMENTUM", title: "With ideas made to leave the room", description: "Build together, test early, and carry the best parts forward after the final demo." },
];

const images = [
  { src: "/assets/collage-seated.webp", className: "story-image story-image--one" },
  { src: "/assets/collage-maker.webp", className: "story-image story-image--two" },
  { src: "/assets/collage-reader.webp", className: "story-image story-image--three" },
  { src: "/assets/collage-hands.webp", className: "story-image story-image--four" },
  { src: "/assets/collage-community.webp", className: "story-image story-image--five" },
  { src: "/assets/collage-explorer.webp", className: "story-image story-image--six" },
];

export function ExpertiseStory() {
  const ref = useRef<HTMLElement>(null);
  const [chapter, setChapter] = useState(0);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setChapter(Math.min(2, Math.floor(value * 3)));
  });

  return (
    <section className="expertise-story" ref={ref} aria-label="The people and ideas behind Flat Hack">
      <motion.div className="expertise-story__sticky" style={{ "--story-progress": reduceMotion ? 0 : scrollYProgress } as MotionStyle}>
        <span className="expertise-story__eyebrow">FLAT HACK 604 / A STORY IN THREE PARTS</span>
        <div className="expertise-story__images" aria-hidden="true">
          {images.map((image) => (
            <div className={image.className} key={image.src}>
              <Image src={image.src} alt="" fill sizes="(max-width: 700px) 40vw, 25vw" />
            </div>
          ))}
        </div>
        <div className="expertise-story__copy" key={chapter}>
          <span>{chapters[chapter].eyebrow}</span>
          <h2>{chapters[chapter].title}</h2>
          <p>{chapters[chapter].description}</p>
        </div>
        <div className="expertise-story__steps" aria-label={`Story chapter ${chapter + 1} of 3`}>
          {chapters.map((item, index) => <span className={index === chapter ? "active" : ""} key={item.eyebrow} />)}
        </div>
        <div className="expertise-story__progress" aria-hidden="true">
          <motion.span style={{ scaleY: reduceMotion ? 1 : progressScale }} />
        </div>
      </motion.div>
    </section>
  );
}
