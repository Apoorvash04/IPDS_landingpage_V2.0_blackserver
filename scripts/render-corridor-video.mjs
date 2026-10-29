// Re-renders the phone hero video (public/hero/) from the live CSS corridor. Run it after changing the corridor CSS:
//   1. npm run build && npm run start   (serves http://localhost:4190)
//   2. npm i --no-save puppeteer-core@23.11.1 ffmpeg-static@5.2.0
//   3. node scripts/render-corridor-video.mjs .corridor-frames   (writes PNG frames, ~2.5 min)
//   4. encode each folder with ffmpeg (from ffmpeg-static), e.g. for intro and loop:
//      ffmpeg -framerate 30 -i .corridor-frames/loop/f%04d.png -vf scale=646:1400:flags=lanczos -c:v libx264 -preset veryslow
//        -crf 30 -pix_fmt yuv420p -g 60 -movflags +faststart -an public/hero/corridor-loop.mp4
//      and corridor-poster.jpg from loop/f0000.png. Keep INTRO/LOOP in sync with CorridorVideo.jsx.
// Set CHROME to your Chrome path if it differs from the default below.

import puppeteer from 'puppeteer-core';
import fs from 'node:fs';

// Renders the hero server corridor frame-by-frame (deterministic: every CSS animation is paused
// and seeked to the same time), for the phone video. Intro = 0–3.5s, loop = 3.5–10.5s.
// The loop is seamless because every looping animation's period divides 7s.
const out = process.argv[2];
const FPS = 30;
const INTRO = 3.5;
const LOOP = 7;

fs.mkdirSync(`${out}/intro`, { recursive: true });
fs.mkdirSync(`${out}/loop`, { recursive: true });

const b = await puppeteer.launch({
  executablePath: process.env.CHROME || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
});
const p = await b.newPage();
await p.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'no-preference' }]);
await p.setViewport({ width: 430, height: 932, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
await p.goto('http://localhost:4190/', { waitUntil: 'networkidle0' });

await p.addStyleTag({
  content: `
  .nav, .hero-content, .corridor-vignette, .corridor-video { display: none !important; }
  .corridor .scene, .corridor-light { display: block !important; }
  .is-lite .floor, .is-lite .ceil { opacity: 1 !important; visibility: visible !important; }
  .corridor-light { animation-duration: 3.5s !important; }
  /* LED blink periods chosen as 7s / n so the 7s loop wraps exactly */
  .cled-g { animation: ledOn 0.25s calc(var(--b) + 1.2s) both, ledFlicker calc(7s / (4 + var(--i))) steps(1) calc(var(--b) + 1.45s) infinite !important; }
  .crack-r .cled-g { animation: ledOn 0.25s calc(var(--b) + 1.2s) both, ledFlicker calc(7s / (5 + var(--i))) steps(1) calc(var(--b) + 1.45s) infinite !important; }
  .cled-g2 { animation: ledOn 0.25s calc(var(--b) + 1.25s) both, ledFlicker calc(7s / (5 + var(--i))) steps(1) calc(var(--b) + 1.5s) infinite reverse !important; }
  .cled-b { animation: ledOn 0.25s calc(var(--b) + 1.3s) both, ledBlink calc(7s / (2 + var(--i))) linear calc(var(--b) + 1.55s) infinite !important; }
  .cled-r { animation: ledOn 0.25s calc(var(--b) + 1.4s) both, ledBlink calc(7s / (2 + var(--i))) linear calc(var(--b) + 1.65s) infinite !important; }
  `,
});
await new Promise((r) => setTimeout(r, 300));

const seek = (ms) =>
  p.evaluate((ms) => {
    document.querySelector('.hero')?.classList.remove('is-lite', 'is-paused');
    for (const a of document.getAnimations()) {
      a.pause();
      a.currentTime = ms;
    }
  }, ms);

const shot = async (t, path) => {
  await seek(t * 1000);
  await p.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));
  await p.screenshot({ path, type: 'png' });
};

const n = (i) => String(i).padStart(4, '0');
for (let i = 0; i < INTRO * FPS; i++) await shot(i / FPS, `${out}/intro/f${n(i)}.png`);
for (let i = 0; i < LOOP * FPS; i++) await shot(INTRO + i / FPS, `${out}/loop/f${n(i)}.png`);
// should match loop frame 0 — used to check the seam
await shot(INTRO + LOOP, `${out}/seam-check.png`);

console.log('frames done');
await b.close();
