'use client';

import { useState } from 'react';
import { Wallet } from 'lucide-react';

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState<string | null>(null);

  const handleConnect = async () => {
    // Simulate wallet connection
    // In production, this would use OnchainKit's ConnectWallet component
    setIsConnected(true);
    setAddress('0x1234...5678');
  };

  if (isConnected && address) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 bg-surface rounded-lg border border-primary/20">
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        <span className="text-sm text-fg font-mono">{address}</span>
      </div>
    );
  }

  return (
    <button
      onClick={handleConnect}
      className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-baseLight transition-all duration-200 shadow-interactive"
    >
      <Wallet className="w-4 h-4" />
      <span className="text-sm font-medium">Connect</span>
    </button>
  );
}
