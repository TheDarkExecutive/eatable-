
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
      <div className="flex min-h-screen bg-[#0a0a0a] text-white">
        <Sidebar />
        
        <div className="flex-1 lg:ml-64 transition-all duration-300">
          <Navbar user={user} onLogout={handleLogout} />
          
          <main className="relative">
            <Routes>
              <Route path="/" element={
                <>
                  <Hero />
                  <div className="max-w-7xl mx-auto px-6 pb-20 -mt-20 relative z-20">
                    <MunchTool 
                      setRecommendations={setRecommendations} 
                      setIsLoading={setIsLoading} 
                    />
                    
                    {isLoading ? (
                      <div className="flex flex-col items-center justify-center py-32 bg-[#111] rounded-3xl mt-12 border border-zinc-800/50">
                        <div className="w-20 h-20 border-[6px] border-red-600/20 border-t-red-600 rounded-full animate-spin mb-8"></div>
                        <h3 className="text-2xl font-black uppercase tracking-widest text-white">Filtering the Slop...</h3>
                        <p className="text-zinc-500 mt-2 font-medium">Finding the world's best human-made meal companions.</p>
                      </div>
                    ) : (
                      recommendations.length > 0 && (
                        <div id="results" className="mt-20 scroll-mt-24">
                          <div className="flex items-end justify-between mb-10">
                            <div>
                              <span className="text-red-500 font-black uppercase tracking-[0.3em] text-[10px] mb-2 block">Curated Just Now</span>
                              <h2 className="text-4xl font-black tracking-tighter">TODAY'S SPECIALS</h2>
                            </div>
                            <div className="hidden md:block h-[2px] flex-1 bg-zinc-800/50 mx-10 mb-4 rounded-full"></div>
                          </div>
                          <VideoGrid videos={recommendations} onVideoClick={updateHistory} />
                        </div>
                      )
                    )}

                    {history.length > 0 && (
                      <div className="mt-24">
                        <h2 className="text-2xl font-black tracking-tight mb-8 text-zinc-300 uppercase italic">Previously Devoured</h2>
                        <VideoGrid videos={history} onVideoClick={updateHistory} compact />
                      </div>
                    )}
                  </div>
                </>
              } />
              
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              <Route path="/profile" element={user ? <Profile user={user} history={history} /> : <Login onLogin={handleLogin} />} />
              {/* Other conceptual routes */}
              <Route path="*" element={<div className="flex items-center justify-center h-screen text-zinc-500 uppercase tracking-widest font-bold">This section is being curated...</div>} />
            </Routes>
          </main>

          <footer className="py-16 border-t border-zinc-900 bg-[#070707] text-center text-zinc-600">
            <div className="flex flex-col items-center space-y-4">
              <span className="text-xl font-black italic tracking-tighter text-zinc-400 uppercase">Eatable</span>
              <p className="text-sm font-medium">© 2024 Cinematic Mealtime Experience. All rights reserved.</p>
              <div className="flex space-x-6 text-xs font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-red-500 transition-colors">Terms</a>
                <a href="#" className="hover:text-red-500 transition-colors">Privacy</a>
                <a href="#" className="hover:text-red-500 transition-colors">About</a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
