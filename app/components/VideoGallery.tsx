'use client';

import { Play, Share2, Heart, MoreVertical } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  creator: string;
  likes: number;
  timestamp: string;
}

export function VideoGallery() {
  const videos: Video[] = [
    {
      id: '1',
      title: 'Cyberpunk City Night',
      thumbnail: '/placeholder-video-1.jpg',
      creator: 'alice.eth',
      likes: 142,
      timestamp: '2 hours ago',
    },
    {
      id: '2',
      title: 'Ocean Sunset Waves',
      thumbnail: '/placeholder-video-2.jpg',
      creator: 'bob.base',
      likes: 89,
      timestamp: '5 hours ago',
    },
    {
      id: '3',
      title: 'Magical Forest',
      thumbnail: '/placeholder-video-3.jpg',
      creator: 'charlie.fc',
      likes: 234,
      timestamp: '1 day ago',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-fg">Your Creations</h2>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm bg-surface text-fg rounded-lg hover:bg-primary/10 transition-all duration-200">
            Recent
          </button>
          <button className="px-4 py-2 text-sm bg-surface text-fg rounded-lg hover:bg-primary/10 transition-all duration-200">
            Popular
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group bg-surface rounded-lg border border-primary/20 overflow-hidden hover:shadow-card transition-all duration-200"
          >
            {/* Video Thumbnail */}
            <div className="relative aspect-video bg-bg">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary/30 transition-all duration-200">
                  <Play className="w-8 h-8 text-primary" />
                </div>
              </div>
              {/* Placeholder gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"></div>
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h3 className="text-lg font-medium text-fg mb-2">{video.title}</h3>
              <div className="flex items-center justify-between text-sm text-fg/70">
                <span>{video.creator}</span>
                <span>{video.timestamp}</span>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 mt-4 pt-4 border-t border-primary/10">
                <button className="flex items-center gap-1 text-fg/70 hover:text-primary transition-colors duration-200">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">{video.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-fg/70 hover:text-primary transition-colors duration-200">
                  <Share2 className="w-4 h-4" />
                  <span className="text-sm">Share</span>
                </button>
                <button className="ml-auto text-fg/70 hover:text-primary transition-colors duration-200">
                  <MoreVertical className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {videos.length === 0 && (
        <div className="text-center py-12">
          <div className="w-16 h-16 rounded-full bg-surface flex items-center justify-center mx-auto mb-4">
            <Play className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-fg mb-2">No videos yet</h3>
          <p className="text-fg/70 mb-6">Create your first AI-generated video to get started</p>
          <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-baseLight transition-all duration-200 shadow-interactive">
            Create Video
          </button>
        </div>
      )}
    </div>
  );
}
