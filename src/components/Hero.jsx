import React from 'react';
import bgImage from '../assets/641628195_1268803315349744_5660053867113583933_n.jpg.jpeg'; // swap to '../assets/artist.jpg' once file is saved

/**
 * Hero.jsx
 * Full-screen hero section with:
 *  - background.jpg as cover background
 *  - Dark overlay (black/60) for text contrast
 *  - Centered heading + subheading
 *  - Staggered fade-in animation on load
 *  - Fully responsive
 *  - Concert dark theme with red accents
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-black/60" />

      {/* ── Bottom gradient bleed into page ── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

      {/* ── Ambient red glow (top-left corner, mimics stage light) ── */}
      <div className="absolute -top-10 -left-10 w-96 h-96 bg-red-700/20 rounded-full filter blur-3xl pointer-events-none animate-pulse" />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 bg-red-900/15 rounded-full filter blur-3xl pointer-events-none animate-pulse"
        style={{ animationDelay: '2s' }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">

        {/* Eyebrow label */}
        <p
          className="uppercase tracking-[0.4em] text-red-400 font-poppins text-xs sm:text-sm font-semibold mb-5
                     opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
        >
          Raj Melodies Presents
        </p>

        {/* Main heading */}
        <h1
          className="font-montserrat font-black text-5xl sm:text-7xl md:text-8xl leading-none tracking-tight mb-6
                     text-white drop-shadow-2xl
                     opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
        >
          Experience
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-500 to-red-600">
            the Sound
          </span>
        </h1>

        {/* Decorative divider */}
        <div
          className="flex items-center justify-center gap-4 mb-6
                     opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
        >
          <div className="h-px w-16 sm:w-24 bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="h-px w-16 sm:w-24 bg-red-500/60" />
        </div>

        {/* Subheading */}
        <p
          className="font-poppins font-light text-lg sm:text-2xl text-gray-300 tracking-wide mb-10
                     opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
        >
          Where Music Meets Energy
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4
                     opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.65s', animationFillMode: 'forwards' }}
        >
          <button
            id="hero-book-btn"
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-red-600 to-red-800
                       hover:from-red-500 hover:to-red-700
                       text-white font-montserrat font-bold text-base rounded-lg
                       transition-all duration-300
                       hover:scale-105 hover:shadow-2xl hover:shadow-red-600/50
                       flex items-center justify-center gap-2"
          >
            🎟️&nbsp; Book Tickets
          </button>

          <button
            id="hero-explore-btn"
            className="w-full sm:w-auto px-10 py-4 border-2 border-white/30
                       hover:border-white/70 text-white
                       font-montserrat font-bold text-base rounded-lg
                       transition-all duration-300 backdrop-blur-sm
                       hover:bg-white/5 hover:scale-105"
          >
            Explore More
          </button>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
