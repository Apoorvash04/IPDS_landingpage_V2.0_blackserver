import { CONTACT, SOCIALS } from '../data';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <a href="#home" className="brand">
            <img src="/logo-icon.png" alt="" width="36" height="36" loading="lazy" />
            <span className="brand-text">
              IP <b>&amp;</b> Data Solutions
            </span>
          </a>
          <p className="footer-tag">
            From innovation to information, we protect what matters most — your IP and your data.
          </p>
          <div className="socials">
            {SOCIALS.map((s) => (
              <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                <Icon name={s.icon} size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h4>Get In Touch</h4>
          <ul>
            <li>{CONTACT.address}</li>
            {CONTACT.phones.map((p) => (
              <li key={p}><a href={`tel:${p.replace(/\s/g, '')}`}>{p}</a></li>
            ))}
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} IPDS — IP &amp; Data Solutions. All rights reserved.</span>
        <a href="#home" className="to-top" aria-label="Back to top">
          <Icon name="up" size={18} />
        </a>
      </div>
    </footer>
  );
}
