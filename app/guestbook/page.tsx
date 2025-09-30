"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { GuestbookMessage } from "../lib/db";
import { useLanguage } from "../contexts/LanguageContext";
import { useWallet } from "../contexts/WalletContext";

const OWNER_ADDRESS = "0xea1e562c8e689d938d67a8ef9bd44d4ddb82e76b";

export default function GuestbookPage() {
  const router = useRouter();
  const { language } = useLanguage();
  const { walletInfo, connectWallet } = useWallet();
  
  const [messages, setMessages] = useState<GuestbookMessage[]>([]);
  const [loading, setLoading] = useState(true);
  const [newMessage, setNewMessage] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authMethod, setAuthMethod] = useState<"wallet" | "github" | null>(null);
  const [githubUser, setGithubUser] = useState<string | null>(null);

  const account = walletInfo?.address;
  const isOwner = account?.toLowerCase() === OWNER_ADDRESS.toLowerCase();

  const t = language === "en" ? {
    title: "Guestbook",
    signIn: "Sign in to leave a message",
    signInWallet: "Sign in with Wallet",
    signInGithub: "Sign in with GitHub",
    yourName: "Your Name",
    message: "Message",
    submit: "Submit",
    submitting: "Submitting...",
    back: "Back to CV",
    ownerView: "Viewing all messages (Owner)",
    userView: "Your messages",
    noMessages: "No messages yet",
    messagePlaceholder: "Leave your message...",
    namePlaceholder: "Your name",
    delete: "Delete",
    deleteConfirm: "Are you sure you want to delete this message?",
    deleteSuccess: "Message deleted",
    deleteFailed: "Failed to delete message"
  } : {
    title: "留言板",
    signIn: "登录后留言",
    signInWallet: "钱包登录",
    signInGithub: "GitHub 登录",
    yourName: "您的姓名",
    message: "留言内容",
    submit: "提交",
    submitting: "提交中...",
    back: "返回简历",
    ownerView: "查看所有留言（所有者）",
    userView: "您的留言",
    noMessages: "暂无留言",
    messagePlaceholder: "写下您的留言...",
    namePlaceholder: "您的姓名",
    delete: "删除",
    deleteConfirm: "确定要删除这条留言吗？",
    deleteSuccess: "删除成功",
    deleteFailed: "删除失败"
  };

  useEffect(() => {
    loadMessages();
  }, [account, githubUser, isOwner]);

  const loadMessages = async () => {
    setLoading(true);
    try {
      // Everyone can see all messages now
      const response = await fetch('/api/guestbook');
      const { data, error } = await response.json();
      
      if (error) throw new Error(error);
      setMessages(data || []);
    } catch (error) {
      console.error("Failed to load messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (messageId: string) => {
    if (!confirm(t.deleteConfirm)) return;
    
    if (!account) {
      alert(language === "en" ? "Please connect wallet to delete messages" : "请连接钱包以删除留言");
      return;
    }

    try {
      const response = await fetch(`/api/guestbook?id=${messageId}&address=${account}`, {
        method: 'DELETE',
      });

      const { error } = await response.json();
      
      if (error) {
        throw new Error(error);
      }

      alert(t.deleteSuccess);
      loadMessages();
    } catch (error) {
      console.error("Failed to delete message:", error);
      alert(t.deleteFailed);
    }
  };

  const handleWalletAuth = async () => {
    await connectWallet();
    setAuthMethod("wallet");
  };

  const handleGithubAuth = () => {
    // Simplified GitHub auth - in production use OAuth
    const username = prompt(language === "en" ? "Enter your GitHub username:" : "输入您的 GitHub 用户名:");
    if (username) {
      setGithubUser(username);
      setAuthMethod("github");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim() || !authorName.trim()) return;

    try {
      const messageData = {
        author_name: authorName,
        message: newMessage,
        author_address: authMethod === "wallet" && account ? account : undefined,
        author_github: authMethod === "github" && githubUser ? githubUser : undefined,
      };

      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(messageData),
      });

      const { error } = await response.json();
      if (error) throw new Error(error);

      setNewMessage("");
      setAuthorName("");
      loadMessages();
    } catch (error) {
      console.error("Failed to submit message:", error);
      alert(language === "en" ? "Failed to submit message" : "提交失败");
    }
  };

  const isAuthenticated = authMethod === "wallet" ? !!account : !!githubUser;

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: "var(--background)", color: "var(--foreground)" }}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold" style={{ color: "var(--heading)" }}>{t.title}</h1>
          <button
            onClick={() => router.push("/")}
            className="px-4 py-2 rounded-md"
            style={{
              background: "var(--card-bg)",
              border: "1px solid var(--card-border)",
              color: "var(--foreground)"
            }}
          >
            {t.back}
          </button>
        </div>

        {isOwner && (
          <div className="mb-4 p-3 rounded-md" style={{ background: "var(--card-bg)", border: "1px solid var(--card-border)" }}>
            <p className="text-sm font-semibold" style={{ color: "var(--heading)" }}>{t.ownerView}</p>
          </div>
        )}

        {!isAuthenticated && (
          <div className="card p-6 mb-6">
            <p className="mb-4 text-center">{t.signIn}</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={handleWalletAuth}
                className="px-6 py-2 rounded-md"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  color: "var(--heading)"
                }}
              >
                {t.signInWallet}
              </button>
              <button
                onClick={handleGithubAuth}
                className="px-6 py-2 rounded-md"
                style={{
                  background: "var(--card-bg)",
                  border: "1px solid var(--card-border)",
                  color: "var(--heading)"
                }}
              >
                {t.signInGithub}
              </button>
            </div>
          </div>
        )}

        {isAuthenticated && (
          <form onSubmit={handleSubmit} className="card p-6 mb-6">
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">{t.yourName}</label>
              <input
                type="text"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                placeholder={t.namePlaceholder}
                className="w-full px-4 py-2 rounded-md"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--card-border)",
                  color: "var(--foreground)"
                }}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium">{t.message}</label>
              <textarea
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder={t.messagePlaceholder}
                rows={4}
                className="w-full px-4 py-2 rounded-md"
                style={{
                  background: "var(--background)",
                  border: "1px solid var(--card-border)",
                  color: "var(--foreground)"
                }}
                required
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2 rounded-md"
              style={{
                background: "var(--heading)",
                color: "#000",
                fontWeight: "bold"
              }}
            >
              {t.submit}
            </button>
          </form>
        )}

        <div className="space-y-4">
          {loading ? (
            <p className="text-center muted">Loading...</p>
          ) : messages.length === 0 ? (
            <p className="text-center muted">{t.noMessages}</p>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="card p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-semibold" style={{ color: "var(--heading)" }}>{msg.author_name}</p>
                    <p className="text-xs muted">
                      {msg.author_address && `Wallet: ${msg.author_address.slice(0, 6)}...${msg.author_address.slice(-4)}`}
                      {msg.author_github && `GitHub: @${msg.author_github}`}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="text-xs muted">{new Date(msg.created_at).toLocaleDateString()}</p>
                    {isOwner && (
                      <button
                        onClick={() => handleDelete(msg.id)}
                        className="p-2 rounded-md hover:opacity-80 transition-opacity"
                        style={{
                          background: "#ef4444",
                          color: "#fff",
                          border: "1px solid #dc2626"
                        }}
                        title={t.delete}
                      >
                        <FaTrash className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
                <p className="whitespace-pre-wrap">{msg.message}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

