import React, { useEffect, useRef, useState } from 'react';

import event1 from '../assets/events/event1.jpg.jpg';
import event2 from '../assets/events/event2.jpg.jpg';
import event3 from '../assets/events/event3.jpg.jpg';
import event4 from '../assets/events/event4.jpg.jpg';
import event5 from '../assets/events/event5.jpg.jpg';
import event6 from '../assets/events/event6.jpg.jpg';

const events = [
  { id: 1, title: 'Live in Chennai', artist: 'Sai Abhyankkar', image: event1 },
  { id: 2, title: 'Acoustic Sessions', artist: 'A. R. Rahman', image: event2 },
  { id: 3, title: 'The Grand Symphony', artist: 'Anirudh Ravichander', image: event3 },
  { id: 4, title: 'Unplugged Night', artist: 'Ilaiyaraaja', image: event4 },
  { id: 5, title: 'Festival of Lights', artist: 'D. Imman', image: event5 },
  { id: 6, title: 'Rhythm & Soul', artist: 'Harris Jayaraj', image: event6 },
];

export default function PreviousEvents() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeEvent, setActiveEvent] = useState(null);

  /* Intersection Observer for scroll-triggered fade-in */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="previous-events"
      ref={sectionRef}
      className="relative w-full py-24 px-6 bg-black overflow-hidden"
    >
      {/* ── Background glow effects ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-red-700/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-yellow-600/8 rounded-full filter blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* ── Section Header ── */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="uppercase tracking-[0.4em] text-red-500 font-poppins text-xs font-semibold mb-3">
            Past Performances
          </p>
          <h2 className="text-4xl sm:text-5xl font-montserrat font-black text-white">
            Previous{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Events
            </span>
          </h2>
        </div>

        {/* ── Events Grid (3 cols desktop, 2 cols tablet, 1 col mobile) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`group transition-all duration-700 cursor-pointer ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActiveEvent(activeEvent === event.id ? null : event.id)}
              onMouseLeave={() => setActiveEvent(null)}
            >
              {/* ── Event Card ── */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-all duration-500">
                {/* ── Image Container ── */}
                <div className="relative w-full h-64 sm:h-72 lg:h-80 overflow-hidden bg-gradient-to-br from-gray-800 via-gray-900 to-black">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  {/* ── Dark Overlay on Hover ── */}
                  <div className="absolute inset-0 bg-black/40 xl:group-hover:bg-black/10 transition-all duration-500" />

                  {/* ── Subtle gradient overlay ── */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                  {/* ── Artist Overlay ── */}
                  <div
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6 text-center transition-all duration-500 ease-in-out z-20 
                      ${activeEvent === event.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95 lg:group-hover:opacity-100 lg:group-hover:scale-100'}`}
                  >
                    <h4 className="text-2xl sm:text-3xl font-bold font-montserrat text-gold tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
                      {event.artist}
                    </h4>
                  </div>
                </div>

                {/* ── Event Title ── */}
                <div className="relative bg-gradient-to-b from-gray-900 to-black px-6 py-6 text-center">
                  <h3 className="text-xl font-montserrat font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                    {event.title}
                  </h3>
                </div>

                {/* ── Card Border Glow on Hover ── */}
                <div className="absolute inset-0 rounded-2xl border border-red-500/0 group-hover:border-red-500/50 transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
