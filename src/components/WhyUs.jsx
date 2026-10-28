import { WHY } from '../data';
import Icon from './Icon';

export default function WhyUs() {
  return (
    <section id="why" className="section">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow reveal">Why Us</span>
          <h2 className="reveal">
            Centralized, virtualized and secured — <span className="text-red">we are your IT backbone.</span>
          </h2>
        </div>

        <div className="why-grid">
          {WHY.map((w, i) => (
            <div key={w.title} className="why reveal" style={{ '--d': `${(i % 3) * 90}ms` }}>
              <div className="why-icon">
                <Icon name={w.icon} size={22} />
              </div>
              <div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
