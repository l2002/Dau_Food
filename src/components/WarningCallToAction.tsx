import React, { useState } from 'react';
import { 
  AlertTriangle, 
  Share2, 
  Copy, 
  Check, 
  MessageCircle, 
  ExternalLink, 
  ShieldCheck, 
  FileWarning, 
  Send,
  Hash
} from 'lucide-react';

interface WarningCallToActionProps {
  onOpenShareModal: () => void;
}

export const WarningCallToAction: React.FC<WarningCallToActionProps> = ({ onOpenShareModal }) => {
  const [copied, setCopied] = useState(false);
  const [copiedPost, setCopiedPost] = useState(false);
  const [copiedTags, setCopiedTags] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const hashtagsText = '#ReviewĐậuFood #ĐậuFoodPhốt #PhốtĐậuFood #CôngTyTNHHĐậuFood #QuỵtLươngPartTime';
  const shareTitle = 'CẢNH BÁO: Công ty TNHH Đậu Food phốt không trả tiền công cho người lao động part-time';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const postTemplate = `${shareTitle}\nĐầy đủ bằng chứng và căn cứ pháp lý: ${currentUrl}\n\n${hashtagsText}`;

  const handleCopyPost = () => {
    navigator.clipboard.writeText(postTemplate);
    setCopiedPost(true);
    setTimeout(() => setCopiedPost(false), 2500);
  };

  const handleCopyHashtags = () => {
    navigator.clipboard.writeText(hashtagsText);
    setCopiedTags(true);
    setTimeout(() => setCopiedTags(false), 2500);
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareToZalo = () => {
    window.open(`https://zalo.me/share?url=${encodeURIComponent(currentUrl)}`, '_blank');
  };

  const shareToThreads = () => {
    window.open(`https://www.threads.net/intent/post?text=${encodeURIComponent(postTemplate)}`, '_blank');
  };

  return (
    <section id="action" className="py-16 md:py-24 border-b border-zinc-800 bg-zinc-950 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Cảnh Báo & Hành Động Cộng Đồng</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Cảnh báo cho ứng viên & Lời kêu gọi chia sẻ
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Hãy lan tỏa thông tin để bảo vệ các bạn trẻ, sinh viên đi làm thêm không trở thành nạn nhân tiếp theo.
          </p>
        </div>

        {/* 2-Column Grid: Checklist & Social Share */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Candidate Checklist */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-red-400 uppercase tracking-wider mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Checklist 5 nguyên tắc khi xin việc Part-time / F&B</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-950 border border-red-800 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    <strong className="text-white">Lưu giữ mọi tin nhắn thỏa thuận:</strong> Chụp ảnh màn hình tin nhắn về mức lương, thời gian thử việc, địa điểm làm việc trước khi bắt đầu ca đầu tiên.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-950 border border-red-800 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    <strong className="text-white">Điểm danh và chụp ảnh ca làm:</strong> Luôn có ảnh chụp quầy hàng, bảng phân công hoặc tin nhắn giao việc để làm căn cứ đã lao động thực tế.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-950 border border-red-800 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    <strong className="text-white">Nắm rõ quyền nghỉ việc khi thử việc:</strong> Theo Điều 27 BLLĐ 2019, thử việc không cần báo trước và không phải bồi thường.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-950 border border-red-800 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </span>
                  <span>
                    <strong className="text-white">Từ chối "trừ tiền hàng" vô căn cứ:</strong> Công ty muốn trừ lương phải lập biên bản kiểm kê, chứng minh lỗi và thiệt hại cụ thể (Điều 102 BLLĐ 2019).
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-red-950 border border-red-800 text-red-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    5
                  </span>
                  <span>
                    <strong className="text-white">Không sợ lời dọa "Blacklist":</strong> Các cá nhân hay quản lý nhỏ lẻ không có thẩm quyền hay hệ thống nào cấm bạn xin việc ở doanh nghiệp khác.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 text-xs text-zinc-400">
              * Ghi nhớ: Dù số tiền chỉ là vài trăm nghìn đồng (như 153.000đ), đó là mồ hôi công sức hợp pháp của bạn!
            </div>
          </div>

          {/* Social Share & Spread */}
          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-2">
                <Share2 className="w-5 h-5 text-red-500" />
                <span>Chia sẻ cảnh báo này</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Chỉ 1 lượt chia sẻ của bạn có thể giúp một người bạn hoặc sinh viên khác tránh được cảnh làm không công và bị đối xử thiếu tôn trọng.
              </p>

              {/* Social Buttons */}
              <div className="space-y-2.5">
                <button
                  onClick={shareToFacebook}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#1877F2] font-semibold text-xs sm:text-sm transition-all"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs font-bold">f</span>
                    Chia sẻ lên Facebook
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <button
                  onClick={shareToZalo}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#0068FF]/10 hover:bg-[#0068FF]/20 border border-[#0068FF]/30 text-[#0068FF] font-semibold text-xs sm:text-sm transition-all"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0068FF] text-white flex items-center justify-center text-xs font-bold">Z</span>
                    Gửi qua Zalo
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <button
                  onClick={shareToThreads}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-semibold text-xs sm:text-sm transition-all"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-zinc-950 text-white flex items-center justify-center text-xs font-bold">@</span>
                    Đăng lên Threads (Kèm hashtags)
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Ready-to-copy post with hashtags */}
              <div className="mt-5 p-3.5 rounded-xl bg-zinc-950 border border-zinc-800 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-zinc-300 flex items-center gap-1.5">
                    <Hash className="w-3.5 h-3.5 text-red-500" />
                    <span>Hashtags chiến dịch:</span>
                  </span>
                  <button
                    onClick={handleCopyHashtags}
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded transition-all ${
                      copiedTags
                        ? 'bg-emerald-600/30 text-emerald-400 border border-emerald-500/40'
                        : 'bg-red-600/20 text-red-300 hover:text-white border border-red-500/30'
                    }`}
                  >
                    {copiedTags ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedTags ? 'Đã chép' : 'Chép hashtag'}</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-red-400 font-mono">#ReviewĐậuFood</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-red-400 font-mono">#ĐậuFoodPhốt</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono">#PhốtĐậuFood</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono">#CôngTyTNHHĐậuFood</span>
                </div>
                <button
                  onClick={handleCopyPost}
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white flex items-center justify-center gap-2 transition-colors"
                >
                  {copiedPost ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
                  <span>{copiedPost ? 'Đã sao chép toàn bộ bài đăng mẫu' : 'Sao chép bài đăng mẫu kèm link & hashtag'}</span>
                </button>
              </div>
            </div>

            {/* Quick Copy Link Box */}
            <div className="mt-6 pt-5 border-t border-zinc-800">
              <label className="block text-xs font-medium text-zinc-400 mb-2">
                Sao chép liên kết trang:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  readOnly
                  value={currentUrl || 'https://canhbao-daufood.info'}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-zinc-300 select-all font-mono focus:outline-none"
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
                  <span>{copied ? 'Đã chép' : 'Sao chép'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
