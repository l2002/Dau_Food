import React, { useState } from 'react';
import { X, Copy, Check, Share2, ExternalLink, MessageCircle } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  const [copiedPost, setCopiedPost] = useState(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = 'Review Đậu Food: Phản ánh trải nghiệm và tranh chấp tiền công part-time tại Công ty TNHH Đậu Food';
  const hashtags = '#ReviewĐậuFood #ĐánhGiáĐậuFood #CôngTyTNHHĐậuFood #TrảiNghiệmLaoĐộng #BảoVệNgườiLaoĐộng';
  const fullShareText = `${shareTitle}\nXem chi tiết bằng chứng và căn cứ pháp lý: ${currentUrl}\n\n${hashtags}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleCopyPost = () => {
    navigator.clipboard.writeText(fullShareText);
    setCopiedPost(true);
    setTimeout(() => setCopiedPost(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden p-6">
        <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400">
              <Share2 className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">Lan Tỏa Thông Tin Đánh Giá</h3>
              <p className="text-[11px] text-zinc-400">Chia sẻ trải nghiệm thực tế để cùng nắm rõ quyền lợi</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3 mb-6">
          <button
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
                '_blank'
              )
            }
            className="w-full flex items-center justify-between p-3 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#1877F2] text-xs font-semibold transition-all"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs font-bold">
                f
              </span>
              Chia sẻ lên Facebook
            </span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <button
            onClick={() =>
              window.open(
                `https://zalo.me/share?url=${encodeURIComponent(currentUrl)}`,
                '_blank'
              )
            }
            className="w-full flex items-center justify-between p-3 rounded-xl bg-[#0068FF]/10 hover:bg-[#0068FF]/20 border border-[#0068FF]/30 text-[#0068FF] text-xs font-semibold transition-all"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-[#0068FF] text-white flex items-center justify-center text-xs font-bold">
                Z
              </span>
              Gửi qua Zalo
            </span>
            <ExternalLink className="w-4 h-4" />
          </button>

          <button
            onClick={() =>
              window.open(
                `https://www.threads.net/intent/post?text=${encodeURIComponent(
                  `${shareTitle}\n${currentUrl}\n\n${hashtags}`
                )}`,
                '_blank'
              )
            }
            className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white text-xs font-semibold transition-all"
          >
            <span className="flex items-center gap-2.5">
              <span className="w-6 h-6 rounded-full bg-zinc-800 text-white flex items-center justify-center text-xs font-bold">
                @
              </span>
              Đăng lên Threads (Kèm hashtags)
            </span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        {/* Copy post with hashtags */}
        <div className="mb-4 p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-zinc-300 font-semibold">Nội dung mẫu kèm hashtag:</span>
            <button
              onClick={handleCopyPost}
              className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded transition-all ${
                copiedPost
                  ? 'bg-emerald-600/30 text-emerald-400 border border-emerald-500/40'
                  : 'bg-red-600/20 text-red-300 hover:text-white border border-red-500/30'
              }`}
            >
              {copiedPost ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              <span>{copiedPost ? 'Đã sao chép bài' : 'Chép bài đăng'}</span>
            </button>
          </div>
          <p className="text-[11px] text-zinc-400 font-mono bg-zinc-950 p-2 rounded-lg border border-zinc-800 leading-relaxed">
            {shareTitle}... {hashtags}
          </p>
        </div>

        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5">
            Hoặc sao chép đường link:
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-zinc-300 font-mono select-all focus:outline-none"
            />
            <button
              onClick={handleCopyLink}
              className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all ${
                copied
                  ? 'bg-emerald-600 text-white'
                  : 'bg-red-600 hover:bg-red-500 text-white'
              }`}
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã chép' : 'Chép'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
