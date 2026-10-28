import { ABOUT_POINTS } from '../data';
import Icon from './Icon';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container about">
        <div className="about-visual reveal anim-scope" aria-hidden="true">
          <div className="core">
            <span className="ring ring-1"><i /></span>
            <span className="ring ring-2"><i /></span>
            <span className="ring ring-3"><i /></span>
            <div className="core-logo">
              <img src="/logo-icon.png" alt="" width="96" height="96" loading="lazy" />
            </div>
          </div>
          <div className="about-badge">
            <strong>ICT</strong>
            <span>Large-scale, fast-track projects</span>
          </div>
        </div>

        <div className="about-copy">
          <span className="eyebrow reveal">Who We Are</span>
          <h2 className="reveal">
            A Technology Partner <span className="text-red">You Can Trust</span>
          </h2>
          <p className="reveal">
            Running a business is not easy. With expert IT services &amp; solutions, you maximize
            productivity with the help of seasoned professionals. IP &amp; Data Solutions has
            extensive experience on large-scale, fast-track ICT projects, providing managed IT
            services and cloud computing solutions to businesses in any industry.
          </p>
          <p className="reveal">
            IT infrastructure is a critical part of every organization. Staying on the cutting edge
            while controlling costs is tough — and your team may not have the time to perform
            upgrades, migrate applications and deploy backup plans. That's where we come in, with
            reliable and affordable ICT solutions.
          </p>
          <ul className="check-list">
            {ABOUT_POINTS.map((p, i) => (
              <li key={p} className="reveal" style={{ '--d': `${i * 90}ms` }}>
                <span className="check-icon"><Icon name="check" size={16} /></span>
                {p}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
