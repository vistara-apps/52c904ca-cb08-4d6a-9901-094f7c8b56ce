'use client';

import { useState } from 'react';
import { Sparkles, Wand2, Send } from 'lucide-react';

export function PromptStudio() {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const suggestions = [
    'A futuristic city at night with neon lights',
    'Ocean waves crashing on a beach at sunset',
    'A magical forest with glowing mushrooms',
    'Time-lapse of a flower blooming',
  ];

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="text-center py-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary font-medium">AI-Powered Video Generation</span>
        </div>
        <h2 className="text-3xl font-semibold text-fg mb-2">
          Transform Your Ideas Into Reality
        </h2>
        <p className="text-fg/70 max-w-2xl mx-auto">
          Describe your vision and watch as AI creates stunning hyperrealistic videos in seconds
        </p>
      </div>

      {/* Prompt Input */}
      <div className="max-w-3xl mx-auto">
        <div className="bg-surface rounded-lg border border-primary/20 shadow-card p-6">
          <label className="block text-sm font-medium text-fg mb-3">
            Describe your video
          </label>
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="A cinematic shot of a cyberpunk city with flying cars and holographic billboards..."
            className="w-full h-32 px-4 py-3 bg-bg text-fg rounded-lg border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none transition-all duration-200"
          />
          
          {/* AI Stylist Suggestions */}
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-3">
              <Wand2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-fg">AI Suggestions</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  onClick={() => setPrompt(suggestion)}
                  className="px-3 py-1.5 text-sm bg-primary/10 text-primary rounded-md hover:bg-primary/20 transition-all duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Generate Button */}
          <button
            onClick={handleGenerate}
            disabled={!prompt.trim() || isGenerating}
            className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-baseLight disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-interactive"
          >
            {isGenerating ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Generating...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Generate Video</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Generation Progress */}
      {isGenerating && (
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface rounded-lg border border-primary/20 shadow-card p-6">
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-fg">Creating your video...</span>
                  <span className="text-sm text-fg/70">45%</span>
                </div>
                <div className="h-2 bg-bg rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full animate-shimmer" style={{ width: '45%' }}></div>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-fg/70">
              This usually takes 30-60 seconds. We'll notify you when it's ready!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
