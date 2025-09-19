"use client";
import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useWallet } from "../contexts/WalletContext";

// 网络选择下拉组件
function NetworkSelectDropdown({ 
  currentChainId, 
  onNetworkChange, 
  getChainInfo 
}: { 
  currentChainId?: number, 
  onNetworkChange: (chainId: number) => void,
  getChainInfo: (chainId: number) => { name: string, symbol: string, color: string }
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  // 点击外部关闭下拉框
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.network-dropdown')) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isOpen]);

  const networks = [
    { chainId: 1, name: 'Ethereum' },
    { chainId: 10, name: 'Optimism' },
    { chainId: 137, name: 'Polygon' },
    { chainId: 42161, name: 'Arbitrum' }
  ];

  const currentNetwork = currentChainId ? getChainInfo(currentChainId) : null;

  const handleNetworkSelect = (chainId: number) => {
    onNetworkChange(chainId);
    setIsOpen(false);
  };

  return (
    <div className="relative network-dropdown">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-2 py-1 rounded text-xs transition-all duration-200"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          color: 'var(--heading)'
        }}
      >
        {currentNetwork && (
          <div 
            className="w-2 h-2 rounded-full"
            style={{ background: currentNetwork.color }}
          />
        )}
        <span className="font-medium">
          {currentNetwork?.name || 'Unknown'}
        </span>
        <svg 
          width="10" 
          height="10" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s'
          }}
        >
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      </button>

      {isOpen && (
        <div 
          className="absolute right-0 top-full mt-1 rounded-lg shadow-lg border z-50 min-w-[120px]"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
          }}
        >
          {networks.map(({ chainId, name }) => {
            const chainInfo = getChainInfo(chainId);
            const isCurrentChain = currentChainId === chainId;
            
            return (
              <button
                key={chainId}
                onClick={() => handleNetworkSelect(chainId)}
                disabled={isCurrentChain}
                className="w-full flex items-center gap-2 px-3 py-2 text-xs transition-all duration-200 first:rounded-t-lg last:rounded-b-lg"
                style={{
                  background: isCurrentChain 
                    ? 'rgba(34, 197, 94, 0.1)' 
                    : 'transparent',
                  color: isCurrentChain 
                    ? 'rgb(34, 197, 94)' 
                    : 'var(--heading)',
                  cursor: isCurrentChain ? 'default' : 'pointer'
                }}
                onMouseEnter={(e) => {
                  if (!isCurrentChain) {
                    e.currentTarget.style.background = 'var(--card-border)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isCurrentChain) {
                    e.currentTarget.style.background = 'transparent';
                  }
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ background: chainInfo.color }}
                />
                <span className="font-medium flex-1 text-left">{name}</span>
                {isCurrentChain && (
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20,6 9,17 4,12"/>
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function WalletConnect() {
  const { language } = useLanguage();
  const { isConnected, walletInfo, isConnecting, connectWallet, disconnectWallet, switchNetwork } = useWallet();

  const handleConnectWallet = async () => {
    try {
      await connectWallet();
    } catch (error: unknown) {
      const err = error as { message?: string; code?: number };
      if (err.message === 'MetaMask not found') {
        alert(language === 'zh' ? '请安装 MetaMask 钱包' : 'Please install MetaMask wallet');
      } else if (err.code === 4001) {
        alert(language === 'zh' ? '用户拒绝了连接请求' : 'User rejected the connection request');
      } else {
        alert(language === 'zh' ? '连接钱包失败' : 'Failed to connect wallet');
      }
    }
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const supportedNetworks = {
    1: { name: 'Ethereum', symbol: 'ETH', color: '#627EEA' },
    10: { name: 'Optimism', symbol: 'ETH', color: '#FF0420' },
    56: { name: 'BSC', symbol: 'BNB', color: '#F3BA2F' },
    137: { name: 'Polygon', symbol: 'MATIC', color: '#8247E5' },
    42161: { name: 'Arbitrum', symbol: 'ETH', color: '#28A0F0' },
    43114: { name: 'Avalanche', symbol: 'AVAX', color: '#E84142' },
    250: { name: 'Fantom', symbol: 'FTM', color: '#1969FF' }
  };

  const getChainInfo = (chainId: number) => {
    return supportedNetworks[chainId as keyof typeof supportedNetworks] || 
           { name: `Chain ${chainId}`, symbol: 'ETH', color: '#627EEA' };
  };

  const handleSwitchNetwork = async (chainId: number) => {
    // 如果已经是当前网络，直接返回
    if (walletInfo?.chainId === chainId) {
      return;
    }
    
    try {
      console.log(`Switching to network ${chainId}...`);
      await switchNetwork(chainId);
      console.log(`Successfully switched to network ${chainId}`);
    } catch (error: unknown) {
      const err = error as { message?: string; code?: number };
      console.error('切换网络失败:', error);
      if (err.message === 'Unsupported network') {
        alert(language === 'zh' ? '不支持的网络' : 'Unsupported network');
      } else if (err.code === 4001) {
        alert(language === 'zh' ? '用户拒绝了网络切换' : 'User rejected network switch');
      } else {
        alert(language === 'zh' ? '切换网络失败' : 'Failed to switch network');
      }
    }
  };

  if (!isConnected) {
    return (
      <button
        onClick={handleConnectWallet}
        disabled={isConnecting}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          color: 'var(--heading)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-1px)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        {isConnecting ? (
          <>
            <div className="w-3 h-3 border-2 border-current border-t-transparent rounded-full animate-spin" />
            <span className="text-xs">
              {language === 'zh' ? '连接中...' : 'Connecting...'}
            </span>
          </>
        ) : (
          <>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 7l-10 10"/>
              <path d="M8 7l9 0l0 9"/>
            </svg>
            <span className="text-xs font-medium">
              {language === 'zh' ? '连接钱包' : 'Connect Wallet'}
            </span>
          </>
        )}
      </button>
    );
  }

  return (
    <div className="group relative">
      {/* 简化的连接状态显示 */}
      <div
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg cursor-pointer transition-all duration-200"
        style={{
          background: 'var(--card-bg)',
          border: '1px solid var(--card-border)',
          color: 'var(--heading)'
        }}
      >
        <div 
          className="w-2 h-2 rounded-full"
          style={{ background: 'rgb(34, 197, 94)' }}
        />
        <span className="text-xs font-mono" style={{ color: 'var(--heading)' }}>
          {walletInfo?.address && formatAddress(walletInfo.address)}
        </span>
      </div>

      {/* 悬浮详情卡片 */}
      <div className="absolute right-0 top-full mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        <div
          className="p-3 rounded-lg shadow-lg"
          style={{
            background: 'var(--card-bg)',
            border: '1px solid var(--card-border)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
          }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-medium" style={{ color: 'var(--muted)' }}>
              {walletInfo?.walletType}
            </span>
            <span 
              className="text-xs px-2 py-1 rounded-full"
              style={{ 
                background: 'rgba(34, 197, 94, 0.1)',
                color: 'rgb(34, 197, 94)'
              }}
            >
              {language === 'zh' ? '已连接' : 'Connected'}
            </span>
          </div>
          
          <div className="space-y-2 mb-3">
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: 'var(--muted)' }}>
                {language === 'zh' ? '地址' : 'Address'}
              </span>
              <span className="text-xs font-mono" style={{ color: 'var(--heading)' }}>
                {walletInfo?.address && formatAddress(walletInfo.address)}
              </span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-xs" style={{ color: 'var(--muted)' }}>
                {language === 'zh' ? '余额' : 'Balance'}
              </span>
              <span className="text-xs font-mono" style={{ color: 'var(--heading)' }}>
                {walletInfo?.balance} {walletInfo?.chainId && getChainInfo(walletInfo.chainId).symbol}
              </span>
            </div>
            
             <div className="flex items-center justify-between">
               <span className="text-xs" style={{ color: 'var(--muted)' }}>
                 {language === 'zh' ? '网络' : 'Network'}
               </span>
               <NetworkSelectDropdown 
                 currentChainId={walletInfo?.chainId}
                 onNetworkChange={handleSwitchNetwork}
                 getChainInfo={getChainInfo}
               />
             </div>
          </div>


          {/* 断开连接按钮 */}
          <button
            onClick={disconnectWallet}
            className="flex items-center justify-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all duration-200 w-full text-xs"
            style={{
              background: 'rgba(239, 68, 68, 0.1)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              color: 'rgb(239, 68, 68)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16,17 21,12 16,7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
            {language === 'zh' ? '断开连接' : 'Disconnect'}
          </button>
        </div>
      </div>
    </div>
  );
}
