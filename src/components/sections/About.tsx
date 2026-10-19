import { Reveal } from "@/components/motion/Reveal";

export function About() {
  return (
    <section className="intro section" id="about" aria-labelledby="about-title">
      <Reveal className="intro-grid">
        <p className="section-kicker">The Flat Hack ecosystem</p>
        <div>
          <h2 id="about-title">Meet the ideas<br />behind Flat Hack 604.</h2>
          <p className="large-copy">Four ways into one shared challenge. Find a problem worth solving, choose a sharp point of view, and turn it into a working prototype with people who bring different strengths.</p>
        </div>
      </Reveal>
    </section>
  );
}
