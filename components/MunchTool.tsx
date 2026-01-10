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
    const resultsElement = document.getElementById('results');
    if (resultsElement) {
      resultsElement.scrollIntoView({ behavior: 'smooth' });
    }
    
    const recs = await getRecommendations(genre, duration, meal || "a high-end meal");
    setRecommendations(recs);
    setIsLoading(false);
  };

  return (
    <div id="munch-tool" className="glass rounded-[2rem] p-6 lg:p-10 shadow-2xl relative group overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-600/50 to-transparent"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-600/5 blur-[80px] rounded-full pointer-events-none group-hover:bg-red-600/10 transition-all duration-700"></div>
      
      <div className="relative z-10 space-y-8">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-end gap-6 lg:gap-8">
          
          <div className="flex-1 space-y-3">
            <div className="flex items-center space-x-2">
               <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em]">01. Meal</span>
            </div>
            <input 
              type="text" 
              placeholder="What are you eating? (e.g. Sushi)"
              value={meal}
              onChange={(e) => setMeal(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 lg:p-5 focus:border-red-600/50 outline-none transition-all placeholder:text-zinc-600 font-bold text-sm lg:text-base"
            />
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex items-center space-x-2">
               <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em]">02. Genre</span>
            </div>
            <div className="relative">
              <select 
                value={genre}
                onChange={(e) => setGenre(e.target.value as Genre)}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 lg:p-5 focus:border-red-600/50 outline-none transition-all appearance-none font-bold text-sm lg:text-base cursor-pointer"
              >
                {Object.values(Genre).map(g => (
                  <option key={g} value={g} className="bg-zinc-900">{g}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex items-center space-x-2">
               <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.3em]">03. Time</span>
            </div>
            <div className="relative">
              <select 
                value={duration}
                onChange={(e) => setDuration(e.target.value as Duration)}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 lg:p-5 focus:border-red-600/50 outline-none transition-all appearance-none font-bold text-sm lg:text-base cursor-pointer"
              >
                {Object.values(Duration).map(d => (
                  <option key={d} value={d} className="bg-zinc-900">{d}</option>
                ))}
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <button 
            onClick={handleMunch}
            className="lg:w-auto bg-red-600 hover:bg-red-700 text-white px-10 h-[58px] lg:h-[68px] rounded-xl font-black uppercase tracking-[0.2em] text-xs transition-all transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-red-600/20 whitespace-nowrap"
          >
            Serve Curated Feed
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
          <div className="flex items-center space-x-3 text-zinc-500">
            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></div>
            <span className="text-[9px] font-black uppercase tracking-widest">Global Discovery Enabled</span>
          </div>
          <p className="text-[9px] font-bold text-zinc-600 uppercase tracking-widest italic">Personalizing for your ${meal || 'next meal'}</p>
        </div>
      </div>
    </div>
  );
};

export default MunchTool;