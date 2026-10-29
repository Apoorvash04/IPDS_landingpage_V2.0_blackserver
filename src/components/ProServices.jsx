import { PRO_SERVICES } from '../data';
import Decrypt from './Decrypt';
import Icon from './Icon';

export default function ProServices() {
  return (
    <>
      <section className="svc-hero">
        <div className="container">
          <span className="eyebrow load-in">
            <span className="pulse-dot" /> Professional Services
          </span>
          <Decrypt as="h1" text="End-to-end IT, built to" accent="protect and perform" />
          <p className="load-in" style={{ '--d': '300ms' }}>
            Six practice areas, one team. From planning and networks to security, backup, hardware and
            day-to-day support, we design, deliver and look after your IT.
          </p>
          <div className="svc-jump load-in" style={{ '--d': '450ms' }}>
            {PRO_SERVICES.map((s, i) => (
              <a key={s.slug} href={`#${s.slug}`} className="chip-tag">
                <b>0{i + 1}</b> {s.short}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section svc-list">
        <div className="container svc-layout">
          <aside className="svc-rail" aria-label="Services on this page">
            <div className="svc-rail-track">
              <span className="svc-rail-fill" />
            </div>
            <ol>
              {PRO_SERVICES.map((s, i) => (
                <li key={s.slug}>
                  <a href={`#${s.slug}`} data-slug={s.slug}>
                    <span>0{i + 1}</span>
                    {s.short}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <div className="svc-stack">
            {PRO_SERVICES.map((s, i) => (
              // Revealed by a laser scan: a cover retracts downwards behind a red beam,
              // then each sub-service "comes online" one after another.
              <article key={s.slug} id={s.slug} className="svc reveal">
                <span className="svc-glow" aria-hidden="true" />
                <span className="svc-beam" aria-hidden="true" />

                <div className="svc-main">
                  <div className="svc-meta">
                    <span className="card-icon">
                      <Icon name={s.icon} size={26} />
                    </span>
                    <span className="svc-num">0{i + 1}</span>
                  </div>
                  <Decrypt as="h2" text={s.title} delay={500} className="svc-title" />
                  <p>{s.text}</p>
                  <a href="/#contact" className="card-link">
                    Discuss this service <Icon name="arrow" size={16} />
                  </a>
                </div>

                <ul className="svc-items">
                  {s.items.map((item, j) => (
                    <li key={item} style={{ '--i': j }}>
                      <span className="svc-led" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="svc-cta reveal">
            <h2>
              Not sure which service <span className="text-red">you need?</span>
            </h2>
            <p>Tell us about your setup. We&apos;ll audit it and suggest a plan that fits your business.</p>
            <a href="/#contact" className="btn btn-primary">
              Talk to an Expert <Icon name="arrow" size={18} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
