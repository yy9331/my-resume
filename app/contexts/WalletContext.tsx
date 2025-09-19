"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WalletInfo {
  address: string;
  balance: string;
  chainId: number;
  walletType: string;
}

interface WalletContextType {
  isConnected: boolean;
  walletInfo: WalletInfo | null;
  isConnecting: boolean;
  connectWallet: () => Promise<void>;
  disconnectWallet: () => void;
  updateWalletInfo: () => Promise<void>;
  switchNetwork: (chainId: number) => Promise<void>;
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: ReactNode }) {
  const [isConnected, setIsConnected] = useState(false);
  const [walletInfo, setWalletInfo] = useState<WalletInfo | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  // 检查是否已连接钱包
  useEffect(() => {
    checkWalletConnection();
    
    // 监听钱包状态变化
    if (typeof window !== 'undefined' && window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
      
      return () => {
        window.ethereum?.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum?.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleAccountsChanged = (accounts: unknown) => {
    const accountsArray = accounts as string[];
    if (accountsArray.length === 0) {
      disconnectWallet();
    } else {
      updateWalletInfoWithAddress(accountsArray[0]);
    }
  };

  const handleChainChanged = async (chainId: unknown) => {
    const chainIdString = chainId as string;
    console.log('Chain changed to:', chainIdString);
    
    // 如果有连接的钱包，立即更新网络信息
    if (isConnected && walletInfo?.address) {
      try {
        // 先立即更新 chainId，让 UI 响应更快
        const newChainId = parseInt(chainIdString, 16);
        setWalletInfo(prev => prev ? { ...prev, chainId: newChainId } : null);
        
        // 然后异步获取余额
        const balance = await window.ethereum!.request({
          method: 'eth_getBalance',
          params: [walletInfo.address, 'latest']
        }) as string;

        // 更新完整信息
        setWalletInfo(prev => prev ? {
          ...prev,
          balance: (parseInt(balance, 16) / 1e18).toFixed(4),
          chainId: newChainId
        } : null);
      } catch (error) {
        console.error('更新网络余额失败:', error);
        // 即使余额获取失败，chainId 已经更新了
      }
    } else {
      // 如果没有连接状态，尝试重新检查连接
      checkWalletConnection();
    }
  };

  const checkWalletConnection = async () => {
    if (typeof window !== 'undefined' && window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' }) as string[];
        if (accounts.length > 0) {
          await updateWalletInfoWithAddress(accounts[0]);
        }
      } catch (error) {
        console.error('检查钱包连接失败:', error);
      }
    }
  };

  const updateWalletInfoWithAddress = async (address: string) => {
    try {
        const balance = await window.ethereum!.request({
          method: 'eth_getBalance',
          params: [address, 'latest']
        }) as string;
      
      const chainId = await window.ethereum!.request({
        method: 'eth_chainId'
      }) as string;

      setWalletInfo({
        address,
        balance: (parseInt(balance, 16) / 1e18).toFixed(4),
        chainId: parseInt(chainId, 16),
        walletType: 'MetaMask'
      });
      setIsConnected(true);
    } catch (error) {
      console.error('获取钱包信息失败:', error);
    }
  };

  const updateWalletInfo = async () => {
    if (walletInfo?.address) {
      await updateWalletInfoWithAddress(walletInfo.address);
    }
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      throw new Error('MetaMask not found');
    }

    setIsConnecting(true);
    try {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts'
      }) as string[];
      
      if (accounts.length > 0) {
        await updateWalletInfoWithAddress(accounts[0]);
      }
    } catch (error: unknown) {
      console.error('连接钱包失败:', error);
      throw error;
    } finally {
      setIsConnecting(false);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletInfo(null);
  };

  const switchNetwork = async (chainId: number) => {
    if (!window.ethereum) {
      throw new Error('MetaMask not found');
    }
    
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      }) as void;
      
      // 切换成功后，立即更新钱包信息
      if (walletInfo?.address) {
        // 先立即更新 chainId
        setWalletInfo(prev => prev ? { ...prev, chainId } : null);
        
        // 然后获取新网络的余额
        try {
                const balance = await window.ethereum.request({
                  method: 'eth_getBalance',
                  params: [walletInfo.address, 'latest']
                }) as string;
                
                setWalletInfo(prev => prev ? {
                  ...prev,
                  balance: (parseInt(balance, 16) / 1e18).toFixed(4),
                  chainId
                } : null);
        } catch (balanceError) {
          console.error('获取新网络余额失败:', balanceError);
          // chainId 已经更新，即使余额获取失败也不影响网络显示
        }
      }
    } catch (switchError: unknown) {
      // 如果网络不存在，尝试添加网络
      const error = switchError as { code?: number };
      if (error.code === 4902) {
        await addNetwork(chainId);
        // 添加网络后，递归调用切换
        await switchNetwork(chainId);
      } else {
        console.error('切换网络失败:', switchError);
        throw switchError;
      }
    }
  };

  const addNetwork = async (chainId: number) => {
    type NetworkConfig = {
      chainId: string;
      chainName: string;
      nativeCurrency: { name: string; symbol: string; decimals: number };
      rpcUrls: string[];
      blockExplorerUrls: string[];
    };
    
    const networkConfigs: Record<number, NetworkConfig> = {
      10: {
        chainId: '0xa',
        chainName: 'Optimism',
        nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://mainnet.optimism.io'],
        blockExplorerUrls: ['https://optimistic.etherscan.io']
      },
      137: {
        chainId: '0x89',
        chainName: 'Polygon Mainnet',
        nativeCurrency: { name: 'MATIC', symbol: 'MATIC', decimals: 18 },
        rpcUrls: ['https://polygon-rpc.com'],
        blockExplorerUrls: ['https://polygonscan.com']
      },
      42161: {
        chainId: '0xa4b1',
        chainName: 'Arbitrum One',
        nativeCurrency: { name: 'Ethereum', symbol: 'ETH', decimals: 18 },
        rpcUrls: ['https://arb1.arbitrum.io/rpc'],
        blockExplorerUrls: ['https://arbiscan.io']
      },
      56: {
        chainId: '0x38',
        chainName: 'BNB Smart Chain',
        nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
        rpcUrls: ['https://bsc-dataseed.binance.org'],
        blockExplorerUrls: ['https://bscscan.com']
      }
    };

    const config = networkConfigs[chainId];
    if (!config) {
      throw new Error('Unsupported network');
    }

    try {
      await window.ethereum!.request({
        method: 'wallet_addEthereumChain',
        params: [config],
      }) as void;
    } catch (error) {
      console.error('添加网络失败:', error);
      throw error;
    }
  };

  return (
    <WalletContext.Provider 
      value={{
        isConnected,
        walletInfo,
        isConnecting,
        connectWallet,
        disconnectWallet,
        updateWalletInfo,
        switchNetwork
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}

// 扩展 Window 接口以支持 ethereum
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: unknown[] }) => Promise<unknown>;
      on: (event: string, callback: (data: unknown) => void) => void;
      removeListener: (event: string, callback: (data: unknown) => void) => void;
      isMetaMask?: boolean;
    };
  }
}
