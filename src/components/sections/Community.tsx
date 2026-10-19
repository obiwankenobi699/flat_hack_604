import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";

export function Community() {
  return (
    <section className="community section" aria-labelledby="community-title">
      <Reveal className="community-grid">
        <div><p className="section-kicker">Built together</p><h2 id="community-title">The<br />network<br />of makers.</h2></div>
        <Image src="/assets/builders.png" alt="A group gathered closely around digital tools" width={2048} height={1652} sizes="(max-width: 800px) 100vw, 50vw" />
        <p className="large-copy">The room works when teams do not all look alike. Deep technical skill meets research, storytelling, visual judgment, and lived experience.</p>
      </Reveal>
    </section>
  );
}
