import React from 'react';
import { VideoRecommendation } from '../types';

interface VideoGridProps {
  videos: VideoRecommendation[];
  onVideoClick: (video: VideoRecommendation) => void;
  compact?: boolean;
}

const VideoGrid: React.FC<VideoGridProps> = ({ videos, onVideoClick, compact = false }) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 ${compact ? 'lg:grid-cols-4' : 'lg:grid-cols-3'} gap-6 lg:gap-10`}>
      {videos.map((video, idx) => (
        <a 
          key={video.id}
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => onVideoClick(video)}
          className="group relative bg-[#0a0a0a] rounded-[1.5rem] overflow-hidden transition-all duration-500 border border-white/5 hover:border-red-600/30 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.8)]"
        >
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity"></div>
            
            <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-lg text-[8px] font-black uppercase tracking-widest flex items-center space-x-2">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse"></span>
              <span>Selection 0{idx + 1}</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform shadow-2xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 bg-black/90 px-3 py-1 rounded-lg text-[9px] font-black tracking-widest text-white border border-white/10 uppercase">
              {video.duration}
            </div>
          </div>
          
          <div className="p-6 space-y-4">
            <h3 className="font-black text-lg line-clamp-2 leading-tight tracking-tight text-zinc-100 group-hover:text-red-500 transition-colors uppercase italic">
              {video.title}
            </h3>
            
            <div className="flex items-center space-x-3">
              <div className="w-5 h-5 rounded-lg bg-zinc-800 flex items-center justify-center text-[10px] font-black text-zinc-500">
                {video.source.charAt(0)}
              </div>
              <span className="text-[9px] font-black text-zinc-500 uppercase tracking-widest">
                {video.source}
              </span>
            </div>
            
            {!compact && (
              <p className="text-[11px] text-zinc-600 line-clamp-2 font-medium leading-relaxed italic">
                "{video.description}"
              </p>
            )}
            
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
               <div className="flex items-center space-x-2">
                  <span className="text-[10px] font-black text-red-600 tracking-tighter">SCORE {video.rating.toFixed(1)}</span>
               </div>
               <span className="text-[8px] font-black text-zinc-500 uppercase tracking-widest px-2 py-1 bg-white/5 rounded">
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