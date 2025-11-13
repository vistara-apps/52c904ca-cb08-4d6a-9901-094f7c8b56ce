'use client';

import { Coins } from 'lucide-react';

export function CreditBalance() {
  const credits = 250; // Mock data

  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-surface rounded-lg border border-primary/20">
      <Coins className="w-4 h-4 text-primary" />
      <span className="text-sm font-medium text-fg">{credits}</span>
      <button className="ml-2 text-xs text-primary hover:text-baseLight transition-colors duration-200">
        Buy
      </button>
    </div>
  );
}
