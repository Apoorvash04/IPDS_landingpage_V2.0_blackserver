'use client';

import { useEffect } from 'react';

// Renders nothing; adds the /services page's interactive effects once it has hydrated:
// a cursor spotlight on each service panel, and the side rail's active item + scroll progress.
export default function ServicesFx() {
  useEffect(() => {
    const panels = [...document.querySelectorAll('.svc')];
    const cleanups = [];

    // Spotlight: only CSS variables change; the glow itself moves with `transform`.
    panels.forEach((el) => {
      let raf = 0;
      const onMove = (e) => {
        if (e.pointerType !== 'mouse' || raf) return;
        raf = requestAnimationFrame(() => {
          const r = el.getBoundingClientRect();
          el.style.setProperty('--mx', `${e.clientX - r.left}px`);
          el.style.setProperty('--my', `${e.clientY - r.top}px`);
          raf = 0;
        });
      };
      el.addEventListener('pointermove', onMove, { passive: true });
      cleanups.push(() => el.removeEventListener('pointermove', onMove));
    });

    // Rail: highlight the service crossing the middle of the screen.
    const links = new Map([...document.querySelectorAll('.svc-rail a')].map((a) => [a.dataset.slug, a]));
    const spy = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((a, slug) => a.classList.toggle('is-active', slug === e.target.id));
        }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    panels.forEach((el) => spy.observe(el));

    // Rail progress line fills as you read through the list.
    const stack = document.querySelector('.svc-stack');
    const fill = document.querySelector('.svc-rail-fill');
    let ticking = false;
    const onScroll = () => {
      if (ticking || !stack || !fill) return;
      ticking = true;
      requestAnimationFrame(() => {
        const r = stack.getBoundingClientRect();
        const p = Math.min(1, Math.max(0, (innerHeight * 0.5 - r.top) / r.height));
        fill.style.transform = `scaleY(${p})`;
        ticking = false;
      });
    };
    onScroll();
    addEventListener('scroll', onScroll, { passive: true });

    return () => {
      cleanups.forEach((f) => f());
      spy.disconnect();
      removeEventListener('scroll', onScroll);
    };
  }, []);

  return null;
}
