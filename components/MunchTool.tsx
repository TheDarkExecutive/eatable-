
import React, { useState } from 'react';
import { Genre, Duration, VideoRecommendation } from '../types';
import { getRecommendations } from '../geminiService';

interface MunchToolProps {
  setRecommendations: (recs: VideoRecommendation[]) => void;
  setIsLoading: (loading: boolean) => void;
}

const MunchTool: React.FC<MunchToolProps> = ({ setRecommendations, setIsLoading }) => {
  const [genre, setGenre] = useState<Genre>(Genre.CINEMA);
  const [duration, setDuration] = useState<Duration>(Duration.MEAL);
  const [meal, setMeal] = useState('');

  const handleMunch = async () => {
    setIsLoading(true);
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
    
    const recs = await getRecommendations(genre, duration, meal || "a high-end meal");
    setRecommendations(recs);
    setIsLoading(false);
  };

  return (
    <div id="munch-tool" className="bg-[#111111]/80 backdrop-blur-3xl rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative group">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/10 blur-[80px] rounded-full pointer-events-none group-hover:bg-red-600/20 transition-all duration-700"></div>
      
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
             <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-red-500 font-bold text-xs italic">01</div>
             <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">What's for dinner?</label>
          </div>
          <input 
            type="text" 
            placeholder="Steak, Tacos, Salad..."
            value={meal}
            onChange={(e) => setMeal(e.target.value)}
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 focus:ring-2 focus:ring-red-600/50 outline-none transition-all placeholder:text-zinc-600 font-bold text-lg"
          />
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
             <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-red-500 font-bold text-xs italic">02</div>
             <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Mood / Genre</label>
          </div>
          <div className="relative">
            <select 
              value={genre}
              onChange={(e) => setGenre(e.target.value as Genre)}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 focus:ring-2 focus:ring-red-600/50 outline-none transition-all appearance-none font-bold text-lg cursor-pointer"
            >
              {Object.values(Genre).map(g => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
             <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center text-red-500 font-bold text-xs italic">03</div>
             <label className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em]">Duration</label>
          </div>
          <div className="relative">
            <select 
              value={duration}
              onChange={(e) => setDuration(e.target.value as Duration)}
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl p-5 focus:ring-2 focus:ring-red-600/50 outline-none transition-all appearance-none font-bold text-lg cursor-pointer"
            >
              {Object.values(Duration).map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-800/50 pt-10">
        <div className="flex items-center space-x-3 bg-zinc-900/80 px-4 py-2 rounded-full border border-zinc-800">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
          <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest italic">Authenticity Engine Active</span>
        </div>
        
        <button 
          onClick={handleMunch}
          className="w-full sm:w-auto bg-white text-black hover:bg-red-600 hover:text-white px-16 py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm transition-all transform hover:scale-105 active:scale-95 shadow-2xl"
        >
          Serve Curated Feed
        </button>
      </div>
    </div>
  );
};

export default MunchTool;
