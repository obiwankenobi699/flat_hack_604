import { Reveal } from "@/components/motion/Reveal";
import { faqs } from "@/content/home";

export function Faq() {
  return (
    <section className="faq section" id="faq" aria-labelledby="faq-title">
      <Reveal className="faq-grid">
        <div><p className="section-kicker">Before you arrive</p><h2 id="faq-title">The useful questions.</h2></div>
        <div className="faq-list">
          {faqs.map(([question, answer]) => (
            <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
