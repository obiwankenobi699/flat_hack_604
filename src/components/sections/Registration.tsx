import { Reveal } from "@/components/motion/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { event, registrationHref } from "@/lib/site";

export function Registration() {
  const registration = registrationHref(event.registrationUrl);
  return (
    <section className="register section section-teal" id="register" aria-labelledby="register-title">
      <Reveal>
        <p className="section-kicker">Flat Hack 604</p>
        <h2 id="register-title">Bring the idea<br />you cannot leave alone.</h2>
        <div className="register-bottom">
          <p>{registration ? "Bring your perspective to Flat Hack 604. The form opens in a new tab." : "The confirmed date, venue, and Google registration form will appear here as soon as they are announced."}</p>
          {registration ? <ButtonLink href={registration} target="_blank" rel="noopener noreferrer">Register with Google Forms ↗</ButtonLink> : <span className="button button-dark is-disabled" aria-disabled="true">Registration opens soon</span>}
        </div>
      </Reveal>
    </section>
  );
}
