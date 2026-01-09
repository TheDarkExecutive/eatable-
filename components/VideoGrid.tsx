
import React from 'react';
import { VideoRecommendation } from '../types';

interface VideoGridProps {
  videos: VideoRecommendation[];
  onVideoClick: (video: VideoRecommendation) => void;
  compact?: boolean;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onVideoClick, compact = false }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${compact ? 'xl:grid-cols-4' : 'xl:grid-cols-4'} gap-8`}>
      {videos.map((video, idx) => (
        <a 
          key={video.id}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onVideoClick(video)}
          className="group relative bg-[#111] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)] border border-white/5"
        >
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
            
            <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-xl">
              #{idx + 1} Trending
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black tracking-widest text-white border border-white/10">
              {video.duration}
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <h3 className="font-black text-lg line-clamp-2 leading-tight tracking-tight text-white group-hover:text-red-500 transition-colors">
              {video.title}
            </h3>
            
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-red-600 to-zinc-900"></div>
              </div>
              <span className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                {video.source}
              </span>
            </div>
            
            {!compact && (
              <p className="text-xs text-zinc-500 line-clamp-2 font-medium italic">
                "{video.description}"
              </p>
            )}
            
            <div className="flex items-center justify-between pt-2 border-t border-zinc-800/50">
               <div className="flex items-center space-x-1">
                  <span className="text-xs font-black text-red-500 tracking-tighter">{video.rating.toFixed(1)}</span>
                  <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-tighter">Gourmet Score</span>
               </div>
               <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest px-2 py-1 bg-zinc-900 rounded border border-zinc-800">
                {video.genre}
               </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default VideoGrid;
