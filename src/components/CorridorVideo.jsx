'use client';

import { useEffect, useRef } from 'react';

const INTRO = 3.5; // seconds — length of corridor-intro.mp4
const LOOP = 7; // seconds — length of corridor-loop.mp4 (starts exactly where the intro ends)
const PHONE = '(max-width: 600px)'; // keep in sync with the .corridor-video media query

// Phones get the server corridor as a pre-rendered video, rendered frame-by-frame from the CSS
// scene itself so it looks identical. Phone GPUs can't keep 16 large 3D-transformed racks smooth,
// but every phone decodes H.264 in hardware. Desktop and tablets keep the live CSS corridor.
export default function CorridorVideo({ playing }) {
  const wrap = useRef(null);
  const intro = useRef(null);
  const loop = useRef(null);
  const active = useRef(null);

  useEffect(() => {
    if (!matchMedia(PHONE).matches) return;
    const i = intro.current;
    const l = loop.current;
    const showLoop = () => wrap.current?.classList.add('is-looping');

    const play = (v) => {
      active.current = v;
      return v.play().catch(showLoop); // autoplay blocked (e.g. iOS low-power mode): show the poster
    };

    // Stay in step with the hero text, which has been animating since page load.
    const elapsed = () => {
      const a = document.querySelector('.brand-title')?.getAnimations()[0];
      return (a?.currentTime ?? performance.now()) / 1000;
    };

    const start = () => {
      const t = elapsed();
      if (t < INTRO - 0.25) {
        i.currentTime = t;
        play(i);
      } else {
        l.currentTime = (t - INTRO) % LOOP;
        showLoop();
        play(l);
      }
    };

    i.muted = l.muted = true;
    i.addEventListener('ended', () => play(l), { once: true });
    l.addEventListener('playing', showLoop, { once: true });
    i.addEventListener('canplay', start, { once: true });
    l.poster = '/hero/corridor-poster.jpg';
    l.src = '/hero/corridor-loop.mp4';
    i.src = '/hero/corridor-intro.mp4';

    return () => {
      i.pause();
      l.pause();
    };
  }, []);

  // pause while the hero is scrolled off-screen
  useEffect(() => {
    const v = active.current;
    if (!v) return;
    if (playing) v.play().catch(() => {});
    else v.pause();
  }, [playing]);

  return (
    <div ref={wrap} className="corridor-video" aria-hidden="true">
      <video ref={loop} muted playsInline loop preload="auto" />
      <video ref={intro} className="cv-intro" muted playsInline preload="auto" />
    </div>
  );
}
