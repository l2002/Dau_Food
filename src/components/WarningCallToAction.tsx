import React, { useState } from 'react';
import { 
  Share2, 
  Copy, 
  Check, 
  ExternalLink, 
  ShieldCheck, 
  Hash,
  Download,
  Info
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

  const hashtagsText = '#ReviewĐậuFood #ĐánhGiáĐậuFood #CôngTyTNHHĐậuFood #TrảiNghiệmLaoĐộng #BảoVệNgườiLaoĐộng';
  const shareTitle = 'Review Đậu Food: Phản ánh trải nghiệm và tranh chấp tiền công part-time tại Công ty TNHH Đậu Food';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const postTemplate = `${shareTitle}\nĐầy đủ tài liệu đối chứng và căn cứ pháp lý: ${currentUrl}\n\n${hashtagsText}`;

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
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Kinh Nghiệm Thực Tế & Chia Sẻ</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Lưu ý cho ứng viên & Chia sẻ thông tin đánh giá
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Chia sẻ trải nghiệm thực tế để người lao động và các bạn sinh viên chủ động nắm rõ quyền lợi và thỏa thuận minh bạch khi tìm việc part-time.
          </p>
        </div>

        {/* 2-Column Grid: Checklist & Social Share */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Candidate Checklist */}
          <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-amber-400 uppercase tracking-wider mb-4">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>5 nguyên tắc cần nhớ khi làm việc Part-time</span>
              </div>

              <ul className="space-y-3.5 text-xs sm:text-sm text-zinc-300">
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <span>
                    <strong className="text-white">Lưu giữ mọi tin nhắn thỏa thuận:</strong> Chụp ảnh màn hình tin nhắn về mức lương, thời gian thử việc, địa điểm làm việc và phương thức thanh toán trước khi bắt đầu ca đầu tiên.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <span>
                    <strong className="text-white">Điểm danh và lưu bằng chứng ca làm:</strong> Luôn có ảnh chụp quầy hàng, bảng phân công hoặc tin nhắn giao việc để làm căn cứ đã lao động thực tế.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <span>
                    <strong className="text-white">Nắm rõ quyền trong giai đoạn thử việc:</strong> Theo Điều 27 BLLĐ 2019, trong thời gian thử việc mỗi bên có quyền hủy bỏ thỏa thuận mà không cần báo trước và không phải bồi thường.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    4
                  </span>
                  <span>
                    <strong className="text-white">Thực hiện khấu trừ lương đúng trình tự:</strong> Doanh nghiệp muốn khấu trừ tiền lương để bồi thường phải chứng minh lỗi, mức thiệt hại thực tế theo đúng trình tự Điều 102 BLLĐ 2019.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-zinc-800 border border-zinc-700 text-amber-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    5
                  </span>
                  <span>
                    <strong className="text-white">Chủ động gửi đơn hòa giải khi có bất đồng:</strong> Nếu hai bên không thống nhất được, có thể gửi yêu cầu hòa giải đến Hòa giải viên lao động tại địa phương (Quyết định 1429/QĐ-UBND).
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <span>* Tệp PDF đơn hòa giải đính kèm 8 trang đã có sẵn để tải về.</span>
              <a
                href="/Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf"
                download="Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf"
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải PDF</span>
              </a>
            </div>
          </div>

          {/* Social Share & Spread */}
          <div className="lg:col-span-5 bg-zinc-900 border border-zinc-800 rounded-2xl p-4 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider mb-2">
                <Share2 className="w-5 h-5 text-amber-400" />
                <span>Chia sẻ thông tin đánh giá</span>
              </div>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Chia sẻ thông tin khách quan để người lao động và bạn bè nắm rõ các quy định pháp luật khi tìm việc part-time.
              </p>

              {/* Social Buttons */}
              <div className="space-y-2.5">
                <button
                  onClick={shareToFacebook}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 border border-[#1877F2]/30 text-[#1877F2] font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-xs font-bold">f</span>
                    Chia sẻ lên Facebook
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <button
                  onClick={shareToZalo}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-[#0068FF]/10 hover:bg-[#0068FF]/20 border border-[#0068FF]/30 text-[#0068FF] font-semibold text-xs sm:text-sm transition-all cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#0068FF] text-white flex items-center justify-center text-xs font-bold">Z</span>
                    Gửi qua Zalo
                  </span>
                  <ExternalLink className="w-4 h-4" />
                </button>

                <button
                  onClick={shareToThreads}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-white font-semibold text-xs sm:text-sm transition-all cursor-pointer"
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
                    <Hash className="w-3.5 h-3.5 text-amber-400" />
                    <span>Hashtags đánh giá:</span>
                  </span>
                  <button
                    onClick={handleCopyHashtags}
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded transition-all cursor-pointer ${
                      copiedTags
                        ? 'bg-emerald-600/30 text-emerald-400 border border-emerald-500/40'
                        : 'bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-700'
                    }`}
                  >
                    {copiedTags ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedTags ? 'Đã chép' : 'Chép hashtag'}</span>
                  </button>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-amber-400 font-mono">#ReviewĐậuFood</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono">#ĐánhGiáĐậuFood</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-900 border border-zinc-700 text-zinc-300 font-mono">#CôngTyTNHHĐậuFood</span>
                </div>
                <button
                  onClick={handleCopyPost}
                  className="w-full mt-2 py-2 px-3 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-xs font-semibold text-zinc-200 hover:text-white flex items-center justify-center gap-2 transition-colors cursor-pointer"
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
                  value={currentUrl || 'https://review-daufood.info'}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-3 py-2 text-xs text-zinc-300 select-all font-mono focus:outline-none"
                />
                <button
                  onClick={handleCopyLink}
                  className={`px-3 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 transition-all cursor-pointer ${
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
