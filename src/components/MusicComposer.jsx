import React, { useEffect, useRef, useState } from 'react';
import artistImg from '../assets/641628195_1268803315349744_5660053867113583933_n.jpg.jpeg'; // replace with '../assets/artist.jpg' once saved

const stats = [
  { value: '50+', label: 'Compositions' },
  { value: '100+', label: 'Performances' },
  { value: '25+', label: 'Awards' },
];

const tags = ['Composer', 'Producer', 'Performer', 'Singer'];

export default function MusicComposer() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  /* Intersection Observer for scroll-triggered fade-in */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="featured-artist"
      ref={sectionRef}
      className="relative w-full py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black overflow-hidden"
    >
      {/* ── Background glow ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-700/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-yellow-600/8 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section header ── */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          <p className="uppercase tracking-[0.4em] text-red-500 font-poppins text-xs font-semibold mb-3">
            Featured Artist
          </p>
          <h2 className="text-4xl sm:text-5xl font-montserrat font-black text-white">
            Music{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Composer
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 bg-red-600/50" />
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="h-px w-16 bg-red-600/50" />
          </div>
        </div>

        {/* ── Main card: image left + info right ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* ─── Artist image card ─── */}
          <div
            className={`transition-all duration-700 delay-150 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="relative group">
              {/* Glow ring behind card */}
              <div className="absolute -inset-1 bg-gradient-to-br from-red-600/40 via-red-800/20 to-yellow-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />

              {/* Card */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
                <img
                  src={artistImg}
                  alt="Santhosh Narayanan"
                  className="w-full aspect-[4/5] object-cover object-top
                             scale-100 group-hover:scale-105
                             transition-transform duration-700 ease-out"
                />

                {/* Bottom gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Name badge inside image */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-montserrat font-black text-2xl text-white leading-tight">
                    Santhosh Narayanan
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-red-600/80 text-white font-poppins font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Info right ─── */}
          <div
            className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            {/* Quote / description */}
            <blockquote className="text-2xl sm:text-3xl font-montserrat font-bold text-white leading-snug mb-4">
              "A visionary composer{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-500">
                redefining
              </span>{' '}
              modern soundtracks."
            </blockquote>

            <p className="text-gray-400 font-poppins leading-relaxed mb-4">
              Blending tradition with experimental music, Santhosh Narayanan has
              crafted some of the most iconic Tamil film scores of the decade.
            </p>
            <p className="text-gray-500 font-poppins leading-relaxed mb-10">
              His live performances are known for their raw energy, creative
              spontaneity, and deep connection with audiences — a true musical
              experience that goes beyond the stage.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-5 text-center
                             hover:border-red-500/40 hover:bg-white/8 transition-all duration-300"
                >
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-yellow-300 to-yellow-500 font-montserrat">
                    {value}
                  </div>
                  <div className="text-gray-400 text-xs font-poppins mt-1 tracking-wide">
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              id="composer-learn-more-btn"
              href="#previous-events"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById('previous-events');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-red-600 to-red-800
                         hover:from-red-500 hover:to-red-700
                         text-white font-montserrat font-bold rounded-lg
                         transition-all duration-300
                         hover:scale-105 hover:shadow-xl hover:shadow-red-600/30"
            >
              Explore Artist →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
