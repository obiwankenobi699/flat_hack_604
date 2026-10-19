import Image from "next/image";
import { navigation } from "@/content/home";
import { event, registrationHref } from "@/lib/site";

export function SiteFooter() {
  const registration = registrationHref(event.registrationUrl);

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <div className="site-footer__brand">
          <a className="footer-mark" href="#top">
            <Image src="/assets/flat-hack-house.svg" alt="" width={58} height={58} />
            <span>Flat Hack <strong>604</strong></span>
          </a>
          <p className="site-footer__summary">A collaborative build sprint for ambitious ideas, unlikely teams, and thoughtful prototypes.</p>
          <p className="site-footer__note">Built for people who make things together.</p>
        </div>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          <p className="site-footer__label">Explore</p>
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="site-footer__action">
          <p className="site-footer__label">MAKE SOMETHING THAT MATTERS</p>
          <a className="site-footer__primary" href={registration ?? "#register"} target={registration ? "_blank" : undefined} rel={registration ? "noopener noreferrer" : undefined}>
            {registration ? "Register for the sprint ↗" : "Registration opens soon ↗"}
          </a>
          <a className="site-footer__secondary" href="#schedule">See the event schedule</a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Flat Hack 604</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
