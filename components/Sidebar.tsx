import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', path: '/' },
    { name: 'Trending', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6', path: '/trending' },
    { name: 'Parties', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z', path: '/watch-party' },
    { name: 'Gourmet', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z', path: '/gourmet' },
    { name: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', path: '/profile' },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-[#050505] border-r border-zinc-900 hidden lg:flex flex-col z-[60] transition-all duration-300 shadow-2xl">
        <div className="p-8 mb-4">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform">
               <span className="text-white font-black text-xl italic">E</span>
            </div>
            <span className="hidden lg:block text-2xl font-black italic tracking-tighter text-white uppercase group-hover:text-red-500 transition-colors">Eatable</span>
          </Link>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center p-3.5 rounded-xl transition-all duration-300 group/item ${
                  isActive 
                  ? 'bg-red-600/10 text-red-500' 
                  : 'text-zinc-500 hover:bg-zinc-900/50 hover:text-white'
                }`}
              >
                <svg 
                  className={`w-6 h-6 flex-shrink-0 transition-colors ${isActive ? 'text-red-500' : 'text-zinc-500 group-hover/item:text-red-500'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
                <span className={`ml-4 hidden lg:block font-bold text-sm tracking-tight transition-all ${isActive ? 'translate-x-1' : 'group-hover/item:translate-x-1'}`}>
                  {item.name}
                </span>
              </Link>
            );
          })}
        </nav>

        <div className="p-6 border-t border-zinc-900">
          <div className="glass rounded-2xl p-4 hidden lg:block">
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-3">Chef's Specials</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-[11px] group cursor-pointer font-bold">
                <span className="text-zinc-400 group-hover:text-red-500 transition-colors">Trending Now</span>
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-zinc-500">24</span>
              </div>
              <div className="flex items-center justify-between text-[11px] group cursor-pointer font-bold">
                <span className="text-zinc-400 group-hover:text-red-500 transition-colors">Award Winning</span>
                <span className="bg-zinc-800 px-2 py-0.5 rounded-full text-zinc-500">8</span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-20 glass border-t border-white/10 lg:hidden flex items-center justify-around px-4 z-[100] safe-area-bottom">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex flex-col items-center justify-center space-y-1 w-16 transition-all duration-300 ${
                isActive ? 'text-red-500' : 'text-zinc-500'
              }`}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
              </svg>
              <span className="text-[9px] font-black uppercase tracking-widest">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
};

export default Sidebar;