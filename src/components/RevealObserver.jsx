'use client';

import { useEffect } from 'react';

// Renders nothing; wires up scroll reveals and off-screen animation pausing for the
// server-rendered sections once the page has hydrated.
export default function RevealObserver() {
  // One shared IntersectionObserver for every `.reveal` element; each is unobserved after it
  // appears, so scrolling does no JS work at all once content has been revealed.
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));

    // Pause looping animations (rings, marquee) whenever they are off-screen.
    const scopes = document.querySelectorAll('.anim-scope');
    const pauser = new IntersectionObserver((entries) =>
      entries.forEach((e) => e.target.classList.toggle('is-paused', !e.isIntersecting))
    );
    scopes.forEach((el) => pauser.observe(el));

    return () => {
      io.disconnect();
      pauser.disconnect();
    };
  }, []);

  return null;
}
