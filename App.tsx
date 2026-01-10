import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { VideoRecommendation, UserProfile } from './types';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import MunchTool from './components/MunchTool';
import VideoGrid from './components/VideoGrid';
import Login from './components/Login';
import Profile from './components/Profile';

const App: React.FC = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [recommendations, setRecommendations] = useState<VideoRecommendation[]>([]);
  const [history, setHistory] = useState<VideoRecommendation[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('munch_user');
    if (savedUser) {
      const parsed = JSON.parse(savedUser);
      setUser(parsed);
      setHistory(parsed.history || []);
    }
  }, []);

  const handleLogin = (userData: UserProfile) => {
    setUser(userData);
    localStorage.setItem('munch_user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('munch_user');
  };

  const updateHistory = (video: VideoRecommendation) => {
    const newHistory = [video, ...history.filter(h => h.id !== video.id)].slice(0, 20);
    setHistory(newHistory);
    if (user) {
      const updatedUser = { ...user, history: newHistory };
      setUser(updatedUser);
      localStorage.setItem('munch_user', JSON.stringify(updatedUser));
    }
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-[#050505] text-white">
        <Sidebar />
        
        <div className="flex-1 lg:ml-64 transition-all duration-300 pb-24 lg:pb-0">
          <Navbar user={user} onLogout={handleLogout} />
          
          <main className="relative">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20 -mt-16 lg:-mt-24 relative z-20">
                    <MunchTool 
                      setRecommendations={setRecommendations} 
                      setIsLoading={setIsLoading} 
                    />
                    
                    {isLoading ? (
                      <div className="flex flex-col items-center justify-center py-32 glass rounded-[2rem] mt-12">
                        <div className="w-16 h-16 border-[4px] border-red-600/10 border-t-red-600 rounded-full animate-spin mb-8"></div>
                        <h3 className="text-xl font-black uppercase tracking-[0.3em] text-white italic">Curating Content...</h3>
                        <p className="text-zinc-600 mt-2 font-bold text-xs uppercase tracking-widest">Excluding low-quality slop from your feed.</p>
                      </div>
                    ) : (
                      recommendations.length > 0 && (
                        <div id="results" className="mt-20 scroll-mt-32">
                          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
                            <div>
                              <span className="text-red-600 font-black uppercase tracking-[0.4em] text-[10px] mb-3 block">Premium Selection</span>
                              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase italic">The Menu</h2>
                            </div>
                            <div className="h-[1px] flex-1 bg-white/5 mx-0 md:mx-10 mb-4 hidden md:block"></div>
                            <div className="text-zinc-500 font-bold text-[10px] uppercase tracking-widest bg-white/5 px-4 py-2 rounded-full border border-white/5">
                              {recommendations.length} Gourmet Choices
                            </div>
                          </div>
                          <VideoGrid videos={recommendations} onVideoClick={updateHistory} />
                        </div>
                      )
                    )}

                    {history.length > 0 && (
                      <div className="mt-32 border-t border-white/5 pt-20">
                        <div className="flex items-center space-x-4 mb-12">
                           <h2 className="text-xl font-black tracking-widest text-zinc-400 uppercase italic">Revisited Classics</h2>
                           <div className="flex-1 h-[1px] bg-white/5"></div>
                        </div>
                        <VideoGrid videos={history} onVideoClick={updateHistory} compact />
                      </div>
                    )}
                  </div>
                </>
              } />
              
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/profile" element={user ? <Profile user={user} history={history} /> : <Login onLogin={handleLogin} />} />
              <Route path="*" element={<div className="flex items-center justify-center h-screen text-zinc-700 uppercase tracking-[0.5em] font-black italic">Curating...</div>} />
            </Routes>
          </main>

          <footer className="py-20 border-t border-white/5 bg-[#030303] text-center text-zinc-600">
            <div className="flex flex-col items-center space-y-6">
              <span className="text-2xl font-black italic tracking-tighter text-zinc-300 uppercase">Eatable</span>
              <p className="text-[10px] font-black uppercase tracking-[0.3em] max-w-xs leading-relaxed">The premier cinema platform for the discerning mealtime viewer.</p>
              <div className="flex space-x-8 text-[9px] font-black uppercase tracking-[0.2em]">
                <a href="#" className="hover:text-red-600 transition-colors">Ethics</a>
                <a href="#" className="hover:text-red-600 transition-colors">Curation</a>
                <a href="#" className="hover:text-red-600 transition-colors">Join Us</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;