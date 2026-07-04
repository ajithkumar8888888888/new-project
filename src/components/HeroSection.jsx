import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImage from '../assets/concert-bbbg.jpg';

/**
 * HeroSection.jsx
 * ─────────────────────────────────────────────
 * Full-viewport hero with:
 *  ✔ background.jpg as 100vh cover background
 *  ✔ Dark overlay (rgba 0,0,0 / 0.6)
 *  ✔ Centered heading, subheading, CTA button
 *  ✔ Staggered fade-in on load
 *  ✔ Subtle Ken-Burns (slow zoom) on bg image
 *  ✔ Button hover glow + scale
 *  ✔ Fully responsive
 *  ✔ Concert theme: black · red · gold
 */
export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  // Trigger animations after first paint
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fadeBase =
    'transition-all duration-1000 ease-out';
  const visible = 'opacity-100 translate-y-0';
  const hidden = 'opacity-0 translate-y-8';

  return (
    <section
      id="hero-section"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh' }}
    >
      {/* ── Background image with slow Ken-Burns zoom ── */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url(${bgImage})`,
          animation: 'kenBurns 18s ease-in-out infinite alternate',
        }}
      />

      {/* ── Dark overlay rgba(0,0,0,0.6) ── */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ── Gradient bleed at bottom → blends into page ── */}
      <div className="absolute inset-x-0 bottom-0 h-40
                      bg-gradient-to-t from-black to-transparent" />

      {/* ── Ambient red glow (top corners) ── */}
      <div className="absolute top-0 left-0 w-80 h-80
                      bg-red-700/20 rounded-full filter blur-3xl
                      pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72
                      bg-red-800/15 rounded-full filter blur-3xl
                      pointer-events-none" />

      {/* ══════════════════════════════════════
          CONTENT — vertically + horizontally centered
      ══════════════════════════════════════ */}
      <div className="relative z-10 h-full flex flex-col
                      items-center justify-center
                      text-center px-6">

        {/* ── Eyebrow label ── */}
        <p
          className={`${fadeBase} ${mounted ? visible : hidden}
                      uppercase tracking-[0.45em] text-red-400
                      font-poppins text-xs sm:text-sm font-semibold mb-5`}
          style={{ transitionDelay: '0ms' }}
        >
          Raj Melodies Presents
        </p>

        {/* ── Main heading ── */}
        <h1
          className={`${fadeBase} ${mounted ? visible : hidden}
                      font-montserrat font-black
                      text-5xl sm:text-7xl md:text-8xl
                      leading-[1.05] tracking-tight
                      text-white drop-shadow-2xl mb-5`}
          style={{ transitionDelay: '160ms' }}
        >
          Feel The&nbsp;
          <span className="text-transparent bg-clip-text
                           bg-gradient-to-r from-red-400 via-red-500 to-red-600">
            Music
          </span>
          <br />
          Live
        </h1>

        {/* ── Gold divider ── */}
        <div
          className={`${fadeBase} ${mounted ? visible : hidden}
                      flex items-center gap-3 mb-6`}
          style={{ transitionDelay: '280ms' }}
        >
          <div className="h-px w-16 sm:w-24 bg-yellow-500/50" />
          <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/60" />
          <div className="h-px w-16 sm:w-24 bg-yellow-500/50" />
        </div>

        {/* ── Subheading ── */}
        <p
          className={`${fadeBase} ${mounted ? visible : hidden}
                      font-poppins font-light
                      text-lg sm:text-2xl
                      text-gray-300 tracking-wide mb-12 max-w-xl`}
          style={{ transitionDelay: '380ms' }}
        >
          Experience sound like never before
        </p>

        {/* ── CTA Button ── */}
        <div
          className={`${fadeBase} ${mounted ? visible : hidden}
                      flex flex-col sm:flex-row gap-4`}
          style={{ transitionDelay: '500ms' }}
        >
          <a
            id="hero-explore-now-btn"
            href="#featured-artist"
            onClick={(e) => {
              e.preventDefault();
              const element = document.getElementById('featured-artist');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
            className="group relative px-10 py-4 overflow-hidden
                       bg-gradient-to-r from-red-600 to-red-800
                       text-white font-montserrat font-bold
                       text-base rounded-lg
                       transition-all duration-300
                       hover:scale-105
                       hover:shadow-2xl hover:shadow-red-600/50 block text-center"
          >
            {/* Shimmer on hover */}
            <span className="absolute inset-0 -translate-x-full
                             group-hover:translate-x-full
                             bg-gradient-to-r from-transparent
                             via-white/10 to-transparent
                             transition-transform duration-700" />
            <span className="relative">Explore Now →</span>
          </a>

          <button
            id="hero-tickets-btn"
            onClick={() => navigate('/book')}
            className="px-10 py-4 border-2 border-yellow-500/50
                       hover:border-yellow-400
                       text-yellow-400 font-montserrat font-bold
                       text-base rounded-lg backdrop-blur-sm
                       transition-all duration-300
                       hover:bg-yellow-400/5 hover:scale-105
                       hover:shadow-xl hover:shadow-yellow-400/20"
          >
            🎟️ Book Tickets
          </button>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2
                      z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40
                        flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>

      {/* ── Ken-Burns keyframe (injected inline) ── */}
      <style>{`
        @keyframes kenBurns {
          0%   { transform: scale(1.05) translate(0px, 0px); }
          100% { transform: scale(1.12) translate(-8px, -6px); }
        }
      `}</style>
    </section>
  );
}
