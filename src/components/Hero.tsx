import React, { useState } from 'react';
import { 
  AlertOctagon, 
  ArrowDown, 
  Share2, 
  FileCheck, 
  MapPin, 
  Building2, 
  Clock, 
  DollarSign, 
  ShieldAlert, 
  CheckCircle2, 
  XCircle,
  Hash,
  Copy,
  Check
} from 'lucide-react';
import { COMPANY_INFO } from '../data/caseData';

interface HeroProps {
  onOpenShareModal: () => void;
  onOpenMediationDoc: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShareModal, onOpenMediationDoc }) => {
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  const hashtags = [
    '#ReviewĐậuFood',
    '#ĐậuFoodPhốt',
    '#PhốtĐậuFood',
    '#CôngTyTNHHĐậuFood',
    '#QuỵtLươngPartTime',
    '#BảoVệNgườiLaoĐộng'
  ];

  const handleCopyAllTags = () => {
    const allTagsText = '#ReviewĐậuFood #ĐậuFoodPhốt #PhốtĐậuFood #CôngTyTNHHĐậuFood #QuỵtLươngPartTime #BảoVệNgườiLaoĐộng #DauFoodPhot #ReviewDauFood';
    navigator.clipboard.writeText(allTagsText);
    setCopiedTag('all');
    setTimeout(() => setCopiedTag(null), 2500);
  };

  const handleCopySingleTag = (tag: string) => {
    navigator.clipboard.writeText(tag);
    setCopiedTag(tag);
    setTimeout(() => setCopiedTag(null), 2000);
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-zinc-800/80 bg-radial-[at_top_center] from-red-950/30 via-zinc-950 to-zinc-950">
      {/* Background Subtle Grid Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Warning Indicator Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-950/80 border border-red-500/40 text-red-300 text-xs font-semibold tracking-wide uppercase shadow-lg shadow-red-950/50">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <AlertOctagon className="w-4 h-4 text-red-400" />
            <span>Cảnh Báo Quyền Lợi Lao Động Part-Time</span>
          </div>
          <a href="#document" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 text-xs font-medium transition-colors">
            <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Có Tệp Hồ Sơ & Hình Ảnh Thực Tế</span>
          </a>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white text-center leading-[1.15] tracking-tight mb-6">
          CẢNH BÁO:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-rose-300">
            Công ty TNHH Đậu Food
          </span>
          <br className="hidden sm:inline" />
          <span className="text-zinc-100 text-2xl sm:text-3xl md:text-4xl block sm:inline mt-2 sm:mt-0">
            {' '}– Không trả lương cho người lao động part-time?
          </span>
        </h1>

        {/* Subtitle / Case Brief */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-300 text-center max-w-3xl mx-auto leading-relaxed mb-6">
          Phơi bày trải nghiệm làm việc thực tế của người lao động thử việc part-time bị doanh nghiệp từ chối trả tiền công sau 2 ca làm việc, tự ý quy kết <span className="text-red-400 font-semibold">“nghỉ ngang gây thiệt hại”</span>, kick khỏi nhóm chat và đe dọa <span className="text-red-400 font-semibold">“đưa vào blacklist của các doanh nghiệp”</span>.
        </p>

        {/* Trending Hashtags & SEO Tag Bar */}
        <div className="max-w-2xl mx-auto mb-10 p-3 sm:p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl backdrop-blur-sm">
          <div className="flex items-center justify-between gap-2 mb-2 px-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-300">
              <Hash className="w-3.5 h-3.5 text-red-500" />
              <span>Từ khóa cộng đồng & Hashtags thịnh hành:</span>
            </div>
            <button
              onClick={handleCopyAllTags}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-300 hover:text-white transition-colors"
              title="Sao chép toàn bộ hashtag để đăng bài"
            >
              {copiedTag === 'all' ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Đã chép tất cả</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Chép tất cả hashtag</span>
                </>
              )}
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
            {hashtags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleCopySingleTag(tag)}
                className={`group px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 border ${
                  copiedTag === tag
                    ? 'bg-emerald-950 border-emerald-600 text-emerald-300'
                    : 'bg-zinc-950/80 hover:bg-zinc-800 border-zinc-700/80 text-zinc-300 hover:text-white hover:border-red-500/40'
                }`}
                title={`Nhấp để sao chép ${tag}`}
              >
                <span className="text-red-400 group-hover:text-red-300">#</span>
                <span>{tag.replace('#', '')}</span>
                {copiedTag === tag ? (
                  <Check className="w-3 h-3 text-emerald-400 ml-0.5" />
                ) : (
                  <Copy className="w-2.5 h-2.5 opacity-0 group-hover:opacity-60 ml-0.5 transition-opacity" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12">
          <a
            id="btn-cta-evidence"
            href="#evidence"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-red-600 hover:bg-red-500 text-white transition-all shadow-lg shadow-red-900/40 hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Xem toàn bộ bằng chứng</span>
            <ArrowDown className="w-4 h-4" />
          </a>

          <button
            id="btn-cta-share"
            onClick={onOpenShareModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Share2 className="w-4 h-4 text-red-400" />
            <span>Chia sẻ để người khác biết</span>
          </button>

          <a
            id="btn-cta-mediation"
            href="#document"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-zinc-950 hover:bg-zinc-900 text-zinc-300 border border-red-500/30 hover:border-red-500/60 transition-all"
          >
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>Xem tệp hồ sơ & ảnh thực tế</span>
          </a>
        </div>

        {/* Highlight Quick Facts Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
          {/* Fact 1 */}
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4 text-red-400" />
              <span>Doanh nghiệp bị phản ánh</span>
            </div>
            <div className="text-sm font-bold text-white mb-1">{COMPANY_INFO.name}</div>
            <div className="flex items-start gap-1.5 text-xs text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
              <span>{COMPANY_INFO.address}</span>
            </div>
          </div>

          {/* Fact 2 */}
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Thời gian làm thực tế</span>
            </div>
            <div className="text-sm font-bold text-white mb-1">20/08 – 21/08/2026</div>
            <div className="text-xs text-zinc-400">
              Tổng 2 ngày (mỗi ngày 3 tiếng), vị trí thử việc bán hàng tại quầy.
            </div>
          </div>

          {/* Fact 3 */}
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              <DollarSign className="w-4 h-4 text-emerald-400" />
              <span>Tiền công bị từ chối</span>
            </div>
            <div className="text-lg font-black text-red-400 mb-1">150.000 VNĐ</div>
            <div className="text-xs text-zinc-400">
              Thỏa thuận 25.000đ/giờ. Đậu Food thanh toán: <span className="text-red-400 font-semibold">0 VNĐ</span>.
            </div>
          </div>

          {/* Fact 4 */}
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              <ShieldAlert className="w-4 h-4 text-rose-400" />
              <span>Vi phạm pháp lý chính</span>
            </div>
            <div className="text-sm font-bold text-white mb-1">Điều 27 & 102 BLLĐ 2019</div>
            <div className="text-xs text-zinc-400">
              Tự ý khấu trừ 100% lương, đe dọa blacklist nhân sự part-time.
            </div>
          </div>
        </div>

        {/* Reality check banner */}
        <div className="mt-4 p-3.5 rounded-xl bg-red-950/40 border border-red-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-300">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
            <span className="font-medium text-zinc-200">
              Ghi chú khách quan: Toàn bộ thông tin được đối chiếu trực tiếp từ văn bản yêu cầu và hồ sơ chứng cứ thực tế gửi Công ty TNHH Đậu Food (chưa nộp cơ quan chức năng, ưu tiên giải quyết thiện chí).
            </span>
          </div>
          <button
            onClick={onOpenMediationDoc}
            className="text-red-400 hover:text-red-300 underline font-semibold whitespace-nowrap"
          >
            Đọc trọn vẹn văn bản &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
