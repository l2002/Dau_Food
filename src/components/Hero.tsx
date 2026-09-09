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
  Scale,
  Hash,
  Copy,
  Check,
  Info,
  Download
} from 'lucide-react';
import { COMPANY_INFO, LEGAL_DISCLAIMER } from '../data/caseData';

interface HeroProps {
  onOpenShareModal: () => void;
  onOpenMediationDoc: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenShareModal, onOpenMediationDoc }) => {
  const [copiedTag, setCopiedTag] = useState<string | null>(null);

  const hashtags = [
    '#ReviewĐậuFood',
    '#ĐánhGiáĐậuFood',
    '#CôngTyTNHHĐậuFood',
    '#TrảiNghiệmLaoĐộng',
    '#BảoVệNgườiLaoĐộng',
    '#ReviewDauFood'
  ];

  const handleCopyAllTags = () => {
    const allTagsText = '#ReviewĐậuFood #ĐánhGiáĐậuFood #CôngTyTNHHĐậuFood #TrảiNghiệmLaoĐộng #BảoVệNgườiLaoĐộng #ReviewDauFood';
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
    <section className="relative overflow-hidden w-full max-w-full pt-8 pb-16 md:pt-14 md:pb-20 border-b border-zinc-800/80 bg-radial-[at_top_center] from-red-950/20 via-zinc-950 to-zinc-950">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative w-full max-w-5xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* MANDATORY LEGAL DISCLAIMER BANNER */}
        <div className="mb-6 p-3.5 sm:p-4 rounded-2xl bg-amber-950/30 border border-amber-500/40 text-xs text-zinc-300 shadow-xl backdrop-blur-sm break-words">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-bold text-amber-300 uppercase tracking-wide block mb-1">
                Lưu ý pháp lý & Miễn trừ trách nhiệm:
              </span>
              <p className="text-zinc-200 text-xs sm:text-[13px] leading-relaxed">
                {LEGAL_DISCLAIMER}
              </p>
            </div>
          </div>
        </div>

        {/* Tag pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 max-w-full">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 text-zinc-200 text-xs font-semibold tracking-wide uppercase text-center">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span className="break-words">Phản Ánh Tranh Chấp Part-Time</span>
          </div>
          <a href="#document" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-xs font-medium transition-colors text-center">
            <FileCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span className="break-words">Tệp PDF Gốc (8 Trang) & Bằng Chứng</span>
          </a>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-center leading-[1.2] tracking-tight mb-5 break-words">
          Review & Đánh Giá:{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-rose-300 to-amber-300 inline-block">
            Công ty TNHH Đậu Food
          </span>
          <br className="hidden sm:inline" />
          <span className="text-zinc-100 text-xl sm:text-2xl md:text-3xl block sm:inline mt-2 sm:mt-0 font-bold">
            {' '}– Phản ánh tranh chấp về thanh toán tiền công
          </span>
        </h1>

        {/* Subtitle / Case Brief */}
        <p className="text-sm sm:text-base md:text-lg text-zinc-300 text-center max-w-3xl mx-auto leading-relaxed mb-6 break-words">
          Ghi nhận phản ánh trải nghiệm làm việc của người lao động thử việc part-time về khoản tiền công <span className="text-amber-300 font-semibold">150.000 đồng đang có tranh chấp</span> sau 2 ca làm việc thực tế (20/08 – 21/08/2026); quá trình trao đổi giữa hai bên về việc xin dừng việc, chi phí hàng đã sản xuất, địa điểm nhận tiền và phương thức thanh toán.
        </p>

        {/* Trending Hashtags & SEO Tag Bar */}
        <div className="w-full max-w-2xl mx-auto mb-8 p-3 sm:p-3.5 rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-xl backdrop-blur-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2 px-1">
            <div className="flex items-center gap-1.5 text-xs font-bold text-zinc-300 min-w-0">
              <Hash className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span className="truncate">Từ khóa & Hashtags thảo luận:</span>
            </div>
            <button
              onClick={handleCopyAllTags}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 text-red-300 hover:text-white transition-colors cursor-pointer shrink-0"
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
                className={`group px-2.5 py-1 rounded-lg text-xs font-medium transition-all flex items-center gap-1 border cursor-pointer ${
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
        <div className="w-full flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 mb-10">
          <a
            id="btn-cta-pdf-direct"
            href="/Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf"
            download="Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-bold bg-red-600 hover:bg-red-500 text-white transition-all shadow-lg shadow-red-900/40 hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span className="break-words">Tải Tệp PDF Đơn Hòa Giải (8 Trang Gốc)</span>
          </a>

          <a
            id="btn-cta-evidence"
            href="#evidence"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 hover:border-zinc-500 transition-all hover:scale-[1.02] active:scale-[0.98] text-center"
          >
            <span>Xem 5 tài liệu chứng cứ</span>
            <ArrowDown className="w-4 h-4 shrink-0" />
          </a>

          <button
            id="btn-cta-share"
            onClick={onOpenShareModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold bg-zinc-950 hover:bg-zinc-900 text-zinc-300 border border-zinc-700 hover:border-zinc-500 transition-all cursor-pointer text-center"
          >
            <Share2 className="w-4 h-4 text-red-400 shrink-0" />
            <span>Chia sẻ thông tin</span>
          </button>
        </div>

        {/* Highlight Quick Facts Bento Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
          {/* Fact 1 */}
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              <Building2 className="w-4 h-4 text-red-400" />
              <span>Doanh nghiệp liên quan</span>
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
              <span>Thời gian làm việc thực tế</span>
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
              <span>Khoản tiền công tranh chấp</span>
            </div>
            <div className="text-lg font-black text-amber-400 mb-1">150.000 VNĐ</div>
            <div className="text-xs text-zinc-400">
              Mức thỏa thuận 25.000đ/giờ (chưa thống nhất phương thức nhận).
            </div>
          </div>

          {/* Fact 4 */}
          <div className="p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors">
            <div className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
              <Scale className="w-4 h-4 text-rose-400" />
              <span>Căn cứ pháp lý viện dẫn</span>
            </div>
            <div className="text-sm font-bold text-white mb-1">Điều 27, 102 BLLĐ 2019</div>
            <div className="text-xs text-zinc-400">
              Điều 7 Luật ANM 2018 & QĐ 1429/QĐ-UBND 2025.
            </div>
          </div>
        </div>

        {/* Status note */}
        <div className="mt-4 p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-zinc-300">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
            <span className="font-medium text-zinc-300">
              Hồ sơ hòa giải (PDF đã che thông tin cá nhân) hiện đang được lưu hành thiện chí gửi trực tiếp cho Đậu Food trước khi gửi đến cơ quan có thẩm quyền.
            </span>
          </div>
          <button
            onClick={onOpenMediationDoc}
            className="text-amber-400 hover:text-amber-300 underline font-semibold whitespace-nowrap cursor-pointer"
          >
            Xem tệp PDF 8 trang &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
