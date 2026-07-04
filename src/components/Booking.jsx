import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Booking() {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-black pt-12 sm:pt-24 pb-12 px-6 flex flex-col items-center">
      <div className="w-full max-w-2xl bg-gradient-to-b from-gray-950 to-black p-8 sm:p-12 rounded-3xl border border-red-900/30 shadow-2xl shadow-red-900/10">
        <div className="text-center mb-10">
          <p className="uppercase tracking-[0.3em] text-red-500 font-poppins text-xs font-semibold mb-3">
            Secure Your Spot
          </p>
          <h2 className="text-4xl sm:text-5xl font-montserrat font-black text-white mb-4">
            Ticket <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Booking</span>
          </h2>
          <p className="text-gray-400 font-poppins text-sm sm:text-base">
            Book your tickets now for an unforgettable musical experience.
          </p>
        </div>

        <form className="flex flex-col gap-6" onSubmit={(e) => { e.preventDefault(); alert('Booking confirmed!'); navigate('/'); }}>
          <div className="flex flex-col gap-2">
            <label className="text-white font-montserrat font-semibold text-sm tracking-wide">Full Name</label>
            <input type="text" className="w-full bg-black/60 border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-gray-500 font-poppins" placeholder="John Doe" required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-white font-montserrat font-semibold text-sm tracking-wide">Email Address</label>
              <input type="email" className="w-full bg-black/60 border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-gray-500 font-poppins" placeholder="john@example.com" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white font-montserrat font-semibold text-sm tracking-wide">Phone Number</label>
              <input type="tel" className="w-full bg-black/60 border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-gray-500 font-poppins" placeholder="+1 234 567 890" required />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-gray-400 font-montserrat font-semibold text-sm tracking-wide uppercase">Event</label>
              <div className="w-full pt-3 pb-4 text-gold font-poppins font-semibold text-lg flex items-center gap-3 select-none pointer-events-none">
                <div className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 shadow-[0_0_10px_rgba(220,20,60,0.8)]"></span>
                </div>
                Santhosh Narayanan Concert
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-white font-montserrat font-semibold text-sm tracking-wide">Number of Tickets</label>
              <input type="number" min="1" max="10" className="w-full bg-black/60 border border-gray-800 rounded-xl p-4 text-white focus:outline-none focus:border-red-500 transition-colors placeholder-gray-500 font-poppins" placeholder="1" required />
            </div>
          </div>

          <button type="submit" className="mt-8 w-full py-4 bg-gradient-to-r from-red-600 to-red-800 hover:from-red-500 hover:to-red-700 text-white font-montserrat font-bold text-lg rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-red-600/40">
            Confirm Booking
          </button>
        </form>

        <div className="mt-8 pt-6 text-center border-t border-gray-900/50">
          <button onClick={() => navigate('/')} className="text-red-500 hover:text-red-400 font-montserrat font-semibold text-sm transition-colors uppercase tracking-wider">
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
