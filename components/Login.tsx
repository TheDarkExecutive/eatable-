
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserProfile } from '../types';

interface LoginProps {
  onLogin: (user: UserProfile) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      onLogin({
        name,
        email,
        history: [],
        favorites: []
      });
      navigate('/');
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-[#141414] rounded-2xl p-10 border border-zinc-800 shadow-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black italic text-red-600 uppercase tracking-tighter mb-2">MunchMovies</h2>
            <p className="text-gray-400">Join the elite circle of mealtime viewers.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Display Name</label>
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-4 focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-600"
                placeholder="Cinema Gourmet"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email Address</label>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-4 focus:ring-2 focus:ring-red-600 outline-none transition-all placeholder:text-zinc-600"
                placeholder="gourmet@munch.com"
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-lg font-bold text-lg transition-all shadow-xl shadow-red-600/20 transform active:scale-95"
            >
              Start Munching
            </button>
          </form>

          <div className="mt-8 text-center text-xs text-gray-500">
            <p>By signing in, you agree to watch only high-quality content. No AI slop allowed on our tables.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
