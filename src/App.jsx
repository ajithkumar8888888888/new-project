import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Music, Calendar, MapPin, Ticket, ArrowRight, Lightbulb, Star, Zap, Mic, TrendingUp, Award } from 'lucide-react';
import HeroSection from './components/HeroSection';
import MusicComposer from './components/MusicComposer';
import PreviousEvents from './components/PreviousEvents';
import Booking from './components/Booking';
import './App.css';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-hidden bg-black text-white">
      {/* ===== HERO SECTION ===== */}
      <HeroSection />

      {/* ===== MUSIC COMPOSER ===== */}
      <MusicComposer />

      {/* ===== ABOUT COMPANY ===== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-black to-red-900/10 opacity-70"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-sm font-poppins text-red-500 uppercase tracking-widest mb-4">About Us</h2>
          <div className="relative">
            <h3 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200 font-montserrat mb-8">Raj Melodies presents</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6 font-poppins relative z-10">
              Raj Melodies is a premier event production company dedicated to bringing world-class musical experiences to audiences. With a track record of hosting over 200+ successful events, we specialize in creating unforgettable concert experiences that blend traditional artistry with modern production excellence.
            </p>
            <p className="text-gray-400 font-poppins relative z-10">
              From intimate performances to grand concert productions, we are committed to delivering excellence in every aspect - from artist management to technical production, ensuring each event is a masterpiece of entertainment and engagement.
            </p>
            {/* Borderless glow effect */}
            <div className="absolute -inset-10 bg-red-900/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      {/* ===== PREVIOUS EVENTS GALLERY ===== */}
      <PreviousEvents />

      {/* ===== EVENT DETAILS (Premium Design) ===== */}
      <section className="py-24 relative flex justify-center items-center">
        {/* Background ambient light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-red-900/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-6xl w-full mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-sm font-poppins text-red-500 uppercase tracking-[0.3em] mb-4">The Schedule</h2>
            <h3 className="text-5xl md:text-6xl font-black font-montserrat text-white drop-shadow-[0_0_15px_rgba(255,215,0,0.2)]">
              EVENT <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-gold">INFO</span>
            </h3>
          </div>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-8">
            {/* Date Details */}
            <div className="flex-1 relative group rounded-2xl overflow-hidden p-[1px]">
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/40 to-black rounded-2xl group-hover:opacity-100 opacity-50 transition-opacity duration-700 blur-sm"></div>
              <div className="relative h-full bg-black/60 backdrop-blur-xl border border-white/5 rounded-2xl p-10 flex flex-col items-center text-center transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(220,20,60,0.2)]">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/20 rounded-full blur-2xl group-hover:bg-red-500/40 transition-colors duration-700"></div>
                <Calendar className="w-16 h-16 text-red-400 mb-8 animate-pulse shadow-[0_0_20px_rgba(220,20,60,0.3)] rounded-full" />
                <h3 className="text-3xl font-bold text-white font-montserrat mb-3 group-hover:text-red-300 transition-colors">September 26, 2025</h3>
                <p className="text-gray-400 font-poppins text-lg tracking-wide rounded-full px-4 py-1 bg-white/5 border border-white/10 mt-2">Evening Show | 7:00 PM</p>
              </div>
            </div>

            {/* Separator Line */}
            <div className="hidden md:flex flex-col items-center justify-center">
              <div className="w-px h-16 bg-gradient-to-b from-transparent to-red-600/50"></div>
              <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_15px_rgba(255,0,0,0.8)] my-4 relative">
                <div className="absolute inset-0 rounded-full bg-red-500 animate-[ping_2s_ease-out_infinite] opacity-75"></div>
              </div>
              <div className="w-px h-16 bg-gradient-to-t from-transparent to-red-600/50"></div>
            </div>

            {/* Location Details */}
            <div className="flex-1 relative group rounded-2xl overflow-hidden p-[1px]">
              <div className="absolute inset-0 bg-gradient-to-bl from-gold/40 to-black rounded-2xl group-hover:opacity-100 opacity-50 transition-opacity duration-700 blur-sm"></div>
              <div className="relative h-full bg-black/60 backdrop-blur-xl border border-white/5 rounded-2xl p-10 flex flex-col items-center text-center transform transition-transform duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_rgba(255,215,0,0.15)]">
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gold/10 rounded-full blur-2xl group-hover:bg-gold/30 transition-colors duration-700"></div>
                <MapPin className="w-16 h-16 text-yellow-500 mb-8 animate-[bounce_3s_infinite] shadow-[0_0_20px_rgba(255,215,0,0.2)] rounded-full" />
                <h3 className="text-3xl font-bold text-white font-montserrat mb-3 group-hover:text-yellow-300 transition-colors">YMCA Nandanam</h3>
                <p className="text-gray-400 font-poppins text-lg tracking-wide rounded-full px-4 py-1 bg-white/5 border border-white/10 mt-2">Chennai, Tamil Nadu, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== THE EXPERIENCE ===== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-950/20 via-black to-black"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-black font-montserrat mb-12 drop-shadow-[0_5px_15px_rgba(220,20,60,0.3)]">
            THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-yellow-200">EXPERIENCE</span>
          </h2>

          <div className="relative p-[1px] rounded-3xl overflow-hidden group mb-20 inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-gold to-red-600 animate-[spin_4s_linear_infinite] opacity-30 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-10 sm:p-14 border border-white/5">
              <p className="text-xl sm:text-2xl text-gray-200 leading-relaxed font-poppins font-light">
                Experience an evening of pure musical brilliance as <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-gold font-semibold drop-shadow-[0_0_10px_rgba(255,215,0,0.5)]">Santhosh Narayanan</span> takes center stage. This spectacular show combines elements of classical Indian music with contemporary production, creating a unique fusion that appeals to both traditional music enthusiasts and modern audiences.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: '150+', label: 'Mins of Music', delay: '0ms' },
              { num: '20+', label: 'Musicians', delay: '150ms' },
              { num: '4K', label: 'Production', delay: '300ms' }
            ].map((stat, idx) => (
              <div key={idx} className="relative group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-white/10 transition-all duration-500 hover:-translate-y-3" style={{ transitionDelay: stat.delay }}>
                <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 group-hover:from-gold group-hover:to-yellow-600 transition-all duration-700 mb-4 drop-shadow-2xl">{stat.num}</div>
                <p className="text-red-400 text-sm font-poppins uppercase tracking-[0.2em] font-semibold group-hover:text-red-300 transition-colors">{stat.label}</p>
                {/* Bottom glowing line on hover */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent group-hover:w-full transition-all duration-700"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HIGHLIGHTS ===== */}
      <section className="py-24 relative bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-20 justify-center">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-red-500"></div>
            <h2 className="text-sm text-red-500 font-poppins uppercase tracking-[0.4em] font-bold">Highlights</h2>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-red-500"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { Icon: Music, title: 'Stage Design', desc: 'World-class setup with cutting-edge production' },
              { Icon: ArrowRight, title: 'Entry Experience', desc: 'Premium welcome with red carpet arrival' },
              { Icon: Lightbulb, title: 'Lighting Design', desc: 'Dynamic laser and LED synchronized with music' },
              { Icon: Star, title: 'Visual Effects', desc: 'Immersive pyrotechnics and special effects' },
            ].map((item, idx) => (
              <div key={idx} className="group relative bg-[#050505] border border-white/5 p-8 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-500">
                {/* Animated background gradient sweep */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-red-600/0 to-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 mb-8 rounded-full bg-red-950/50 flex items-center justify-center border border-red-500/20 group-hover:border-red-500/60 group-hover:shadow-[0_0_30px_rgba(220,20,60,0.4)] transition-all duration-500 group-hover:-translate-y-2">
                    <item.Icon className="w-10 h-10 text-gold group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-montserrat mb-4 group-hover:text-red-300 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 text-sm font-poppins leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PERFORMANCE SEGMENTS ===== */}
      <section className="py-32 relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-black via-[rgba(30,5,5,1)] to-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-20 items-center">

          <div className="flex-1">
            <h2 className="text-5xl font-black font-montserrat mb-6">
              PERFORMANCE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-600 to-red-800 drop-shadow-[0_0_20px_rgba(220,20,60,0.4)]">
                SEGMENTS
              </span>
            </h2>
            <p className="text-gray-400 font-poppins text-lg mb-12 max-w-md">
              A carefully curated journey through different musical dimensions, designed to keep you elevated from start to finish.
            </p>

            <div className="space-y-8 relative before:absolute before:inset-y-0 before:left-[1.35rem] before:w-[2px] before:bg-gradient-to-b before:from-red-600 before:via-red-800/20 before:to-transparent">
              {[
                { Icon: Zap, title: 'High Energy', desc: 'Explosive opening with high-energy performances and dance' },
                { Icon: Mic, title: 'Interaction', desc: 'Direct audience engagement with Q&A and meet-and-greet' },
                { Icon: Music, title: 'Melody', desc: 'Soulful renditions of timeless melodies and classics' },
                { Icon: Music, title: 'Band Jam', desc: 'Collaborative performance with live band and musicians' },
              ].map((item, idx) => (
                <div key={idx} className="relative pl-16 group">
                  <div className="absolute left-0 top-1 w-11 h-11 bg-black border-2 border-red-600 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:shadow-[0_0_20px_rgba(220,20,60,0.6)] group-hover:scale-110 transition-all duration-500 z-10">
                    <item.Icon className="w-5 h-5 text-red-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-montserrat mb-2 group-hover:text-red-400 transition-colors transform group-hover:translate-x-2 duration-300">{item.title}</h3>
                  <p className="text-gray-500 font-poppins leading-relaxed max-w-lg transform group-hover:translate-x-2 duration-300 delay-75">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Trending Songs Medley featured banner */}
          <div className="flex-1 flex items-center justify-center w-full">
            <div className="relative w-full max-w-lg group cursor-pointer mt-10 lg:mt-0">
              {/* Outer glow layer */}
              <div className="absolute -inset-1 bg-gradient-to-br from-gold via-red-600 to-black rounded-3xl blur-xl opacity-40 group-hover:opacity-80 transition-opacity duration-700 animate-pulse"></div>

              <div className="relative w-full bg-black border border-gold/30 rounded-3xl p-10 overflow-hidden transform group-hover:-translate-y-4 transition-all duration-700 shadow-2xl">
                {/* Diagonal shine effect */}
                <div className="absolute -top-32 -right-32 w-64 h-64 bg-gold opacity-10 blur-[80px] group-hover:opacity-20 transition-opacity duration-500"></div>

                <div className="w-20 h-20 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(255,215,0,0.5)]">
                  <TrendingUp className="w-10 h-10 text-black" />
                </div>

                <div className="mb-4">
                  <span className="text-xs font-poppins font-bold tracking-[0.2em] text-yellow-500 uppercase">Special Feature</span>
                </div>
                <h3 className="text-4xl font-black text-white font-montserrat mb-6 drop-shadow-md">Trending Songs <br />Medley</h3>
                <p className="text-gray-300 font-poppins leading-relaxed mb-10 text-lg">
                  Experience a non-stop medley of the biggest hits and trending tracks that have taken the world by storm. Re-arranged exclusively for the live stage.
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate('/book');
                  }}
                  className="mt-2 inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white font-montserrat font-bold text-sm tracking-widest rounded-lg hover:from-red-500 hover:to-red-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,20,60,0.5)] z-20 relative"
                >
                  BOOK YOUR TICKETS
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA SECTION ===== */}
      <section className="relative w-full py-32 overflow-hidden bg-black flex flex-col items-center">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-600 rounded-full mix-blend-multiply filter blur-[120px] animate-pulse"></div>
        </div>

        <h2 className="relative z-10 text-5xl md:text-7xl font-black font-montserrat text-center mb-8 glow-text tracking-tighter">
          EXPERIENCE<br />THE SHOW
        </h2>

        <p className="relative z-10 text-lg md:text-xl text-gray-400 mb-12 font-poppins max-w-2xl text-center px-6">
          Don't miss this once-in-a-lifetime concert experience. Secure your tickets now and join thousands of music lovers for an unforgettable evening.
        </p>

        <div className="relative z-10 flex flex-col sm:flex-row gap-6 px-6">
          <button onClick={() => navigate('/book')} className="px-12 py-5 bg-gradient-to-r from-red-600 to-red-800 text-white font-montserrat font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,20,60,0.5)] flex items-center justify-center gap-3">
            <Ticket className="w-6 h-6" />
            BOOK NOW
          </button>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="py-12 bg-black relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gold font-montserrat font-bold tracking-widest text-sm mb-4">RAJ MELODIES PRESENTS</p>
          <p className="text-gray-500 text-sm font-poppins">
            © 2025 Santhosh Narayanan Live Concert | All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book" element={<Booking />} />
    </Routes>
  );
}
