import { SERVICES } from '../data';
import Icon from './Icon';

export default function Services() {
  return (
    <section id="services" className="section section-alt">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">Services</span>
          <h2 className="reveal">
            Expert IT services to <span className="text-red">protect, streamline</span> and grow
            your business
          </h2>
        </div>

        <div className="cards">
          {SERVICES.map((s, i) => (
            <article key={s.title} className="card reveal" style={{ '--d': `${(i % 3) * 90}ms` }}>
              <span className="card-num">0{i + 1}</span>
              <div className="card-icon">
                <Icon name={s.icon} size={26} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#contact" className="card-link">
                Enquire <Icon name="arrow" size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
