import Image from "next/image";
import { IntroLoader } from "@/components/motion/IntroLoader";
import { HeroVideo } from "@/components/motion/HeroVideo";
import { Countdown } from "@/components/motion/Countdown";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { event, registrationHref } from "@/lib/site";

export function Hero() {
  const registration = registrationHref(event.registrationUrl);
  return (
    <section className="hero" aria-labelledby="hero-title">
      <IntroLoader />
      <div className="hero-media" aria-hidden="true">
        <Image className="hero-poster" src="/assets/flat-hack-hero-poster.webp" alt="" fill priority sizes="100vw" />
        <HeroVideo />
      </div>
      <div className="hero-copy">
        <h1 id="hero-title">Build what’s next.</h1>
        <p className="hero-intro">A focused hackathon for ambitious ideas, unlikely teams, and prototypes that earn their place in the world.</p>
        <div className="hero-actions">
          <ButtonLink href={registration ?? "#register"} target={registration ? "_blank" : undefined} rel={registration ? "noopener noreferrer" : undefined}>Register for the hackathon</ButtonLink>
          <ButtonLink href="#about" variant="light">Explore the event</ButtonLink>
        </div>
      </div>
      <Countdown startAt={event.startAt} />
      <span className="hero-index" aria-hidden="true">604 / BUILD</span>
    </section>
  );
}
