'use client';

import { useEffect, useRef, useState } from 'react';
import ServerCorridor from './ServerCorridor';
import Icon from './Icon';

export default function Hero() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(true);

  // Pause every hero animation once it scrolls off-screen — zero cost while reading the rest of the page.
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  // Auto quality: after the intro, sample the frame rate for ~1.5s. Devices without a real GPU
  // (old PCs, remote desktops) switch to a lighter corridor so the page never feels laggy.
  const [lite, setLite] = useState(false);
  useEffect(() => {
    let raf;
    let frames = 0;
    let start = 0;
    const tick = (t) => {
      if (!start) start = t;
      frames++;
      if (t - start < 1500) raf = requestAnimationFrame(tick);
      else if ((frames * 1000) / (t - start) < 45) setLite(true);
    };
    const timer = setTimeout(() => (raf = requestAnimationFrame(tick)), 3500);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="home" ref={ref} className={`hero ${visible ? '' : 'is-paused'} ${lite ? 'is-lite' : ''}`}>
      <ServerCorridor />

      <div className="container hero-content">
        {/* Company name flies out of the far end of the server corridor, then lands with a light burst */}
        <div className="brand-stage">
          <span className="brand-flash" aria-hidden="true" />
          <h1 className="brand-title">
            IP <b>&amp;</b> Data Solutions
          </h1>
          <span className="brand-line" aria-hidden="true" />
        </div>
        <p className="hero-tag load-in" style={{ '--d': '3000ms' }}>
          From innovation to information, we protect what matters most —{' '}
          <span className="text-red">your IP and your data.</span>
        </p>
        <div className="hero-actions load-in" style={{ '--d': '3200ms' }}>
          <a href="#services" className="btn btn-primary">
            Explore Services <Icon name="arrow" size={18} />
          </a>
          <a href="#contact" className="btn btn-ghost">
            Talk to an Expert
          </a>
        </div>
      </div>
    </section>
  );
}
