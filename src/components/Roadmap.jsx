import { ROADMAP } from '../data';

export default function Roadmap() {
  return (
    <section id="roadmap" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">Roadmap</span>
          <h2 className="reveal">
            We translate your dream <span className="text-red">into reality</span>
          </h2>
        </div>

        <ol className="roadmap reveal">
          <span className="roadmap-line" aria-hidden="true" />
          {ROADMAP.map((r, i) => (
            <li key={r.title} className="step" style={{ '--d': `${300 + i * 140}ms` }}>
              <span className="step-dot">{i + 1}</span>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
