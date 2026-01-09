
import React from 'react';
import { UserProfile, VideoRecommendation } from '../types';
import VideoGrid from './VideoGrid';

interface ProfileProps {
  user: UserProfile;
  history: VideoRecommendation[];
}

const Profile: React.FC<ProfileProps> = ({ user, history }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-10">
      <div className="flex flex-col md:flex-row items-center md:items-end space-y-6 md:space-y-0 md:space-x-8 mb-16 pb-12 border-b border-zinc-800">
        <div className="w-40 h-40 rounded-2xl bg-zinc-800 p-2 shadow-2xl relative group">
          <img 
            src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.name}`} 
            alt="Avatar" 
            className="w-full h-full rounded-xl object-cover"
          />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl cursor-pointer">
            <span className="text-xs font-bold uppercase tracking-wider">Change Avatar</span>
          </div>
        </div>
        
        <div className="flex-1 text-center md:text-left space-y-2">
          <h1 className="text-5xl font-black tracking-tight">{user.name}'s Cinema</h1>
          <p className="text-gray-400 max-w-lg">Saving your mealtime journeys since you first picked up the fork.</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg">
              <span className="block text-xl font-black text-red-600">{history.length}</span>
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Videos Devoured</span>
            </div>
            <div className="px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-lg">
              <span className="block text-xl font-black text-red-600">Pro</span>
              <span className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest">Munch Tier</span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-10 text-white flex items-center space-x-3">
          <span className="w-2 h-8 bg-red-600 rounded-full"></span>
          <span>Viewing History</span>
        </h2>
        
        {history.length > 0 ? (
          <VideoGrid videos={history} onVideoClick={() => {}} />
        ) : (
          <div className="py-20 text-center bg-zinc-900 rounded-2xl border border-zinc-800 border-dashed">
            <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-zinc-600">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-400 mb-2">No History Yet</h3>
            <p className="text-gray-500 mb-8">Ready to start your first mealtime screening?</p>
            <button 
              onClick={() => window.location.hash = '#/'}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold transition-all"
            >
              Discover Content
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
