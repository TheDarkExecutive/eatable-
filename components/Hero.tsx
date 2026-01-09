
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[80vh] w-full flex items-center overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinematic Experience" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="max-w-3xl space-y-6">
          <div className="flex items-center space-x-4">
            <span className="h-[2px] w-12 bg-red-600 rounded-full"></span>
            <span className="text-red-500 text-xs font-black uppercase tracking-[0.5em]">The Human Touch</span>
          </div>
          
          <h1 className="text-7xl md:text-[100px] font-black leading-[0.9] tracking-tighter uppercase italic">
            EAT. <br/>
            <span className="text-red-600 drop-shadow-2xl">WATCH.</span> <br/>
            ENJOY.
          </h1>
          
          <p className="text-xl text-zinc-300 font-medium leading-relaxed max-w-xl">
            Escape the algorithm. We curate trending, top-rated human stories that match your meal duration. No automation, no slop, just pure cinema.
          </p>
          
          <div className="pt-6 flex flex-wrap gap-4">
            <button 
              onClick={() => document.getElementById('munch-tool')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-red-600/30 group"
            >
              <span className="flex items-center space-x-2">
                <span>Find my video</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      
      {/* Decorative vertical line */}
      <div className="absolute right-12 bottom-0 h-32 w-[1px] bg-gradient-to-b from-transparent to-zinc-700"></div>
    </div>
  );
};

export default Hero;
