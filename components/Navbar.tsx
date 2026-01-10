import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserProfile } from '../types';

interface NavbarProps {
  user: UserProfile | null;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ user, onLogout }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 right-0 left-0 lg:left-64 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          {/* Logo only on mobile in navbar since sidebar logo is hidden */}
          <Link to="/" className="lg:hidden flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
               <span className="text-white font-black text-sm italic">E</span>
            </div>
          </Link>

          <div className="hidden sm:flex space-x-10 text-[11px] font-black uppercase tracking-[0.2em]">
            <Link to="/" className={`${location.pathname === '/' ? 'text-red-500' : 'text-zinc-400 hover:text-white'} transition-colors`}>The Feed</Link>
            <Link to="/trending" className={`${location.pathname === '/trending' ? 'text-red-500' : 'text-zinc-400 hover:text-white'} transition-colors`}>Curated</Link>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-zinc-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="flex items-center space-x-3 group">
                <div className="w-9 h-9 rounded-xl border border-white/10 group-hover:border-red-600 transition-all overflow-hidden p-0.5">
                   <img 
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} 
                    className="w-full h-full rounded-[10px]"
                    alt="Avatar" 
                  />
                </div>
                <span className="hidden md:inline text-[11px] font-black uppercase tracking-widest group-hover:text-red-500 transition-colors">{user.name}</span>
              </Link>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-white text-black hover:bg-red-600 hover:text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl hover:scale-105"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;