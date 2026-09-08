import React from 'react';
import { AlertTriangle, FileText, Share2, CodeXml, ShieldAlert } from 'lucide-react';

interface HeaderProps {
  onOpenMediationDoc: () => void;
  onOpenExportHtml: () => void;
  onOpenShareModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenMediationDoc,
  onOpenExportHtml,
  onOpenShareModal
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-md">
      {/* Top Banner Notice */}
      <div className="bg-red-600 text-white text-xs font-semibold px-4 py-1.5 text-center flex items-center justify-center gap-2">
        <AlertTriangle className="w-3.5 h-3.5 animate-pulse" />
        <span>CẢNH BÁO TRANH CHẤP LAO ĐỘNG PART-TIME • HỒ SƠ THỰC TẾ CÔNG TY TNHH ĐẬU FOOD</span>
        <span className="hidden md:inline text-red-200">| Địa chỉ: 296 Võ Thành Trang, P11, Tân Bình</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand/Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-red-400 transition-colors">
                Cảnh Báo Đậu Food
              </span>
              <span className="bg-red-500/20 text-red-400 border border-red-500/30 text-[10px] px-1.5 py-0.5 rounded font-mono font-medium">
                SỰ THẬT & BẰNG CHỨNG
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 hidden sm:block">
              Hồ sơ chứng cứ & Văn bản đòi quyền lợi lao động
            </p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-zinc-300">
          <a href="#timeline" className="hover:text-red-400 transition-colors">
            Diễn biến
          </a>
          <a href="#document" className="text-amber-400 hover:text-amber-300 transition-colors font-semibold">
            Tệp đơn & ảnh thực tế
          </a>
          <a href="#evidence" className="hover:text-red-400 transition-colors">
            Bằng chứng tin nhắn
          </a>
          <a href="#legal" className="hover:text-red-400 transition-colors">
            Căn cứ pháp lý
          </a>
          <a href="#scorecard" className="hover:text-red-400 transition-colors">
            Đánh giá
          </a>
          <a href="#community" className="hover:text-red-400 transition-colors">
            Cộng đồng
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            id="btn-open-doc"
            onClick={onOpenMediationDoc}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-zinc-500 transition-colors"
            title="Xem toàn văn văn bản yêu cầu và hình ảnh thực tế"
          >
            <FileText className="w-3.5 h-3.5 text-red-400" />
            <span>Tệp hồ sơ & ảnh</span>
          </button>

          <button
            id="btn-export-html"
            onClick={onOpenExportHtml}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-zinc-500 transition-colors"
            title="Tải hoặc sao chép mã nguồn HTML độc lập"
          >
            <CodeXml className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Xuất file HTML</span>
            <span className="sm:hidden">HTML</span>
          </button>

          <button
            id="btn-share-header"
            onClick={onOpenShareModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-red-600 hover:bg-red-500 text-white transition-all shadow-sm shadow-red-950 hover:shadow-red-700/50"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Chia sẻ</span>
          </button>
        </div>
      </div>
    </header>
  );
};
