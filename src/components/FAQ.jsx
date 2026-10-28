'use client';

import { useState } from 'react';
import { FAQS, INDUSTRIES } from '../data';
import Icon from './Icon';

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section">
      <div className="container faq-wrap">
        <div className="faq-side">
          <span className="eyebrow reveal">FAQs</span>
          <h2 className="reveal">
            Frequently asked <span className="text-red">questions</span>
          </h2>
          <p className="reveal">
            We work with businesses of all sizes across diverse industries, delivering customized
            ICT solutions for every need.
          </p>
          <div className="chips reveal">
            {INDUSTRIES.map((x) => (
              <span key={x} className="chip-tag">{x}</span>
            ))}
          </div>
        </div>

        <div className="faq-list">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`faq reveal ${isOpen ? 'is-open' : ''}`} style={{ '--d': `${i * 50}ms` }}>
                <button
                  className="faq-q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  {f.q}
                  <span className="faq-icon"><Icon name="plus" size={18} /></span>
                </button>
                {/* grid-rows trick animates height smoothly without measuring the DOM */}
                <div id={`faq-${i}`} className="faq-a" role="region">
                  <div>
                    <p>{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
