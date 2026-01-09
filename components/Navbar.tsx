
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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 right-0 left-0 lg:left-64 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-xl border-b border-zinc-800 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <div className="hidden md:flex space-x-8 text-sm font-bold uppercase tracking-widest">
            <Link to="/" className={`${location.pathname === '/' ? 'text-red-500' : 'text-zinc-400 hover:text-white'} transition-colors`}>Discover</Link>
            <Link to="/trending" className={`${location.pathname === '/trending' ? 'text-red-500' : 'text-zinc-400 hover:text-white'} transition-colors`}>Live Now</Link>
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <button className="text-zinc-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/profile" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 rounded-full border-2 border-zinc-800 group-hover:border-red-600 transition-colors overflow-hidden">
                   <img 
                    src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} 
                    alt="Avatar" 
                  />
                </div>
                <span className="hidden sm:inline text-sm font-bold group-hover:text-red-500 transition-colors">{user.name}</span>
              </Link>
            </div>
          ) : (
            <Link 
              to="/login" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-lg hover:scale-105"
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
