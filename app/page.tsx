'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Sparkles, Video, Users, Zap } from 'lucide-react';
import { ConnectWallet } from './components/ConnectWallet';
import { PromptStudio } from './components/PromptStudio';
import { VideoGallery } from './components/VideoGallery';
import { CreditBalance } from './components/CreditBalance';

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [activeTab, setActiveTab] = useState<'create' | 'gallery' | 'collaborate'>('create');

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
    setIsReady(true);
  }, []);

  if (!isReady) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <div className="animate-pulse-glow inline-block p-4 rounded-lg bg-surface">
            <Sparkles className="w-12 h-12 text-primary" />
          </div>
          <p className="mt-4 text-fg">Loading Hyperreal...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-lg border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/10">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h1 className="text-xl font-semibold text-fg">Hyperreal</h1>
            </div>
            <div className="flex items-center gap-4">
              <CreditBalance />
              <ConnectWallet />
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-surface border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2">
            <button
              onClick={() => setActiveTab('create')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'create'
                  ? 'bg-primary text-white shadow-interactive'
                  : 'text-fg/70 hover:text-fg hover:bg-primary/10'
              }`}
            >
              <Video className="w-4 h-4" />
              <span className="text-sm font-medium">Create</span>
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'gallery'
                  ? 'bg-primary text-white shadow-interactive'
                  : 'text-fg/70 hover:text-fg hover:bg-primary/10'
              }`}
            >
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Gallery</span>
            </button>
            <button
              onClick={() => setActiveTab('collaborate')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all duration-200 ${
                activeTab === 'collaborate'
                  ? 'bg-primary text-white shadow-interactive'
                  : 'text-fg/70 hover:text-fg hover:bg-primary/10'
              }`}
            >
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Collaborate</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'create' && <PromptStudio />}
        {activeTab === 'gallery' && <VideoGallery />}
        {activeTab === 'collaborate' && (
          <div className="text-center py-12">
            <Users className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-fg mb-2">Collaborative Creation</h2>
            <p className="text-fg/70">Invite friends to co-create amazing videos together</p>
            <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-baseLight transition-all duration-200 shadow-interactive">
              Start Collaboration
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
