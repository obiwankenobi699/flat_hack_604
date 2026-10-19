"use client";

import Image from "next/image";
import { useState } from "react";
import { tracks } from "@/content/home";

const trackImages = [
  "/assets/track-creative-arena.png",
  "/assets/track-benchmarking.png",
  "/assets/track-creative-preference.png",
  "/assets/track-trajectories.png",
];

const trackPrompts = [
  "Find one frustrating workflow, remove a real point of friction, and leave with a prototype someone can use immediately.",
  "Turn an unexpected interaction into a playful build without losing clarity, accessibility, or purpose.",
  "Bring the question that does not fit a category, test the riskiest assumption, and make the learning visible.",
  "Pair unlike skills, share ownership early, and prove that the strongest result could only come from this team.",
];

export function Tracks() {
  const [activeTrack, setActiveTrack] = useState<number | null>(null);

  return (
    <section className="tracks section section-teal" id="tracks" aria-labelledby="tracks-title">
      <div className="track-list">
        {tracks.map((track, index) => (
          <button
            className="track-row"
            type="button"
            aria-expanded={activeTrack === index}
            aria-controls={`track-detail-${track.number}`}
            onClick={() => setActiveTrack(activeTrack === index ? null : index)}
            key={track.number}
          >
            <Image src={trackImages[index]} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
            <span className="track-row__color" aria-hidden="true" />
            <span className="track-row__pattern" aria-hidden="true" />
            <span className="track-row__shade" />
            <span className="track-row__number">{track.number} / A WAY IN</span>
            <span className="track-row__copy">
              <span className="track-row__title">{track.title}</span>
              <span className="track-row__hint">{activeTrack === index ? "Close the brief" : "Open the brief"}</span>
            </span>
            <span className="track-row__detail" id={`track-detail-${track.number}`} aria-hidden={activeTrack !== index}>
              <span>{trackPrompts[index]}</span>
              <span className="track-row__detail-note">{track.copy}</span>
            </span>
            <span className="track-arrow" aria-hidden="true">{activeTrack === index ? "×" : "↗"}</span>
          </button>
        ))}
      </div>
      <h2 id="tracks-title" className="sr-only">Choose a direction</h2>
    </section>
  );
}
