import { Reveal } from "@/components/motion/Reveal";
import { schedule } from "@/content/home";

export function Schedule() {
  return (
    <section className="schedule section" id="schedule" aria-labelledby="schedule-title">
      <Reveal className="schedule-grid">
        <div className="schedule-sticky">
          <p className="section-kicker">The format</p>
          <h2 id="schedule-title">A clear arc from question to demo.</h2>
          <p>Exact timing will be published with registration. The sequence stays simple so teams spend their energy building.</p>
        </div>
        <ol className="timeline">
          {schedule.map(([title, copy], index) => (
            <li key={title}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{copy}</p></div></li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
