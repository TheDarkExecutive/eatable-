import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[85vh] w-full flex items-center overflow-hidden">
      {/* Background Layer with Parallax-like feel */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=2000" 
          alt="Cinematic Experience" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20">
        <div className="max-w-4xl space-y-8">
          <div className="flex items-center space-x-4">
            <div className="h-1 w-12 bg-red-600"></div>
            <span className="text-red-600 text-[10px] font-black uppercase tracking-[0.6em]">Premium Human-Made Stories</span>
          </div>
          
          <h1 className="text-6xl sm:text-8xl md:text-[120px] font-black leading-[0.85] tracking-tighter uppercase italic">
            DIGEST <br/>
            <span className="text-transparent border-t-2 border-b-2 border-white/20 py-2">EXCELLENCE.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 font-medium leading-relaxed max-w-2xl">
            Escape the automated void. We hand-curate high-production human cinema designed to last exactly as long as your meal.
          </p>
          
          <div className="pt-10 flex flex-wrap gap-6">
            <button 
              onClick={() => document.getElementById('munch-tool')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 rounded-xl font-black uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-2xl shadow-red-600/20 group"
            >
              <span className="flex items-center space-x-3">
                <span>Discover Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </button>
            
            <button className="glass hover:bg-white/10 text-white px-10 py-5 rounded-xl font-black uppercase tracking-widest text-xs transition-all">
              The Manifesto
            </button>
          </div>
        </div>
      </div>
      
      {/* Visual Accents */}
      <div className="absolute right-10 bottom-20 hidden lg:flex flex-col items-center space-y-6">
        <span className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.5em] vertical-text transform rotate-180">Cinephile Grade</span>
        <div className="h-20 w-[1px] bg-gradient-to-t from-zinc-800 to-transparent"></div>
      </div>
    </div>
  );
};

export default Hero;