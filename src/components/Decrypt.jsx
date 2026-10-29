'use client';

import { useEffect, useRef } from 'react';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%@*+=/';
const esc = (c) => (c === '&' ? '&amp;' : c === '<' ? '&lt;' : c === '>' ? '&gt;' : c);

// Heading that "decrypts" itself when it scrolls into view: random glyphs resolve into the real
// text. The real text is server-rendered (SEO, screen readers) and only made transparent while
// an aria-hidden overlay plays the effect on top of it.
export default function Decrypt({ as: Tag = 'h2', text, accent, delay = 0, className = '' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const nodes = el.querySelectorAll('.decrypt-fx > span');
    const parts = accent ? [text, accent] : [text];
    const total = parts.join(' ').length;
    const dur = Math.min(1500, 550 + total * 26);
    // each character gets its own unlock time: roughly left-to-right, with jitter
    let offset = 0;
    const at = parts.map((p) => {
      const times = [...p].map((_, i) => ((offset + i) / total) * dur * 0.7 + Math.random() * dur * 0.3);
      offset += p.length + 1;
      return times;
    });

    const paint = (elapsed) =>
      parts.forEach((p, k) => {
        let html = '';
        let locked = '';
        [...p].forEach((c, i) => {
          if (c === ' ' || elapsed >= at[k][i]) {
            if (locked) html += `<i>${locked}</i>`;
            locked = '';
            html += esc(c);
          } else locked += GLYPHS[(Math.random() * GLYPHS.length) | 0];
        });
        nodes[k].innerHTML = locked ? `${html}<i>${locked}</i>` : html;
      });

    paint(0);
    el.classList.add('is-armed');

    let raf;
    let timer;
    let start = 0;
    let last = 0;
    const tick = (t) => {
      if (!start) start = t;
      const elapsed = t - start;
      if (elapsed >= dur) {
        el.classList.remove('is-armed');
        nodes.forEach((n) => (n.textContent = ''));
        return;
      }
      if (t - last > 45) {
        paint(elapsed);
        last = t;
      }
      raf = requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        timer = setTimeout(() => (raf = requestAnimationFrame(tick)), delay);
      },
      { threshold: 0.6 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
      el.classList.remove('is-armed');
    };
  }, [text, accent, delay]);

  return (
    <Tag ref={ref} className={`decrypt ${className}`}>
      <span className="decrypt-real">
        {text}
        {accent && (
          <>
            {' '}
            <span className="text-red">{accent}</span>
          </>
        )}
      </span>
      <span className="decrypt-fx" aria-hidden="true">
        <span />
        {accent && (
          <>
            {' '}
            <span className="decrypt-acc" />
          </>
        )}
      </span>
    </Tag>
  );
}
