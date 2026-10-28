'use client';

import { useState } from 'react';
import { CONTACT, SERVICES } from '../data';
import Icon from './Icon';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', service: '', message: '' });
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  // No backend: opens the visitor's mail app with the enquiry pre-filled.
  const submit = (e) => {
    e.preventDefault();
    const subject = `Enquiry${form.service ? ` – ${form.service}` : ''} from ${form.name}`;
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nService: ${form.service || '-'}\n\n${form.message}`;
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container contact">
        <div className="contact-info">
          <span className="eyebrow reveal">Contact Us</span>
          <h2 className="reveal">
            Let's secure <span className="text-red">your business</span> together
          </h2>
          <p className="reveal">Have a query? Reach out and our team will get back to you shortly.</p>

          <ul className="info-list">
            <li className="reveal">
              <span className="info-icon"><Icon name="pin" size={20} /></span>
              <div>
                <small>Visit us</small>
                <span>{CONTACT.address}</span>
              </div>
            </li>
            <li className="reveal">
              <span className="info-icon"><Icon name="phone" size={20} /></span>
              <div>
                <small>Call us</small>
                <span>
                  {CONTACT.phones.map((p, i) => (
                    <a key={p} href={`tel:${p.replace(/\s/g, '')}`}>
                      {p}{i < CONTACT.phones.length - 1 ? ', ' : ''}
                    </a>
                  ))}
                </span>
              </div>
            </li>
            <li className="reveal">
              <span className="info-icon"><Icon name="mail" size={20} /></span>
              <div>
                <small>Email us</small>
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
            </li>
          </ul>
        </div>

        <form className="form reveal" onSubmit={submit}>
          <h3>Get in touch</h3>
          <div className="form-row">
            <label>
              <span>Your name</span>
              <input required value={form.name} onChange={update('name')} placeholder="Full name" />
            </label>
            <label>
              <span>Phone</span>
              <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+91" />
            </label>
          </div>
          <label>
            <span>Service</span>
            <select value={form.service} onChange={update('service')}>
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s.title}>{s.title}</option>
              ))}
            </select>
          </label>
          <label>
            <span>Message</span>
            <textarea required rows="4" value={form.message} onChange={update('message')} placeholder="Tell us about your requirement" />
          </label>
          <button type="submit" className="btn btn-primary btn-block">
            Send Message <Icon name="arrow" size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
