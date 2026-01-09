
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', path: '/' },
    { name: 'Trending', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', path: '/trending' },
    { name: 'Watch Party', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', path: '/watch-party' },
    { name: 'Gourmet Picks', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', path: '/gourmet' },
    { name: 'Hidden Gems', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z', path: '/gems' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-[#0a0a0a] border-r border-zinc-800 flex flex-col z-[60] transition-all duration-300 group">
      <div className="p-6 mb-8 flex items-center">
        <Link to="/" className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-lg shadow-red-600/20">
             <span className="text-white font-black text-xl">E</span>
          </div>
          <span className="hidden lg:block text-2xl font-black italic tracking-tighter text-white uppercase">Eatable</span>
        </Link>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center p-3 rounded-xl transition-all duration-200 group/item ${
                isActive 
                ? 'bg-red-600 text-white sidebar-active-glow' 
                : 'text-zinc-500 hover:bg-zinc-900 hover:text-white'
              }`}
            >
              <svg 
                className={`w-6 h-6 flex-shrink-0 transition-colors ${isActive ? 'text-white' : 'text-zinc-500 group-hover/item:text-red-500'}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className={`ml-4 hidden lg:block font-semibold transition-all ${isActive ? 'translate-x-1' : 'group-hover/item:translate-x-1'}`}>
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-zinc-800">
        <div className="bg-zinc-900/50 rounded-2xl p-4 hidden lg:block">
          <p className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2">My Menu</p>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs group cursor-pointer">
              <span className="text-zinc-400 group-hover:text-white transition-colors">Favorites</span>
              <span className="bg-zinc-800 px-1.5 rounded text-zinc-500">12</span>
            </div>
            <div className="flex items-center justify-between text-xs group cursor-pointer">
              <span className="text-zinc-400 group-hover:text-white transition-colors">Playlists</span>
              <span className="bg-zinc-800 px-1.5 rounded text-zinc-500">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
