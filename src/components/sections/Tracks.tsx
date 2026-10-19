import Image from "next/image";
import { tracks } from "@/content/home";

const trackImages = [
  "/assets/collage-explorer.webp",
  "/assets/collage-maker.webp",
  "/assets/collage-reader.webp",
  "/assets/collage-community.webp",
];

export function Tracks() {
  return (
    <section className="tracks section section-teal" id="tracks" aria-labelledby="tracks-title">
      <div className="track-list">
          {tracks.map((track, index) => (
            <article className="track-row" key={track.number}>
              <Image src={trackImages[index]} alt="" fill sizes="(max-width: 700px) 100vw, 50vw" />
              <span className="track-row__shade" />
              <span className="track-row__number">{track.number} / A WAY IN</span>
              <div className="track-row__copy"><h3>{track.title}</h3><p>{track.copy}</p></div>
              <span className="track-arrow" aria-hidden="true">↗</span>
            </article>
          ))}
      </div>
      <h2 id="tracks-title" className="sr-only">Choose a direction</h2>
    </section>
  );
}
