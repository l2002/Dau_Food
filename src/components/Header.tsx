import React from 'react';
import { AlertTriangle, FileText, Share2, CodeXml, ShieldAlert, Download } from 'lucide-react';

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
      <div className="bg-zinc-900 border-b border-zinc-800 text-zinc-300 text-xs font-semibold px-4 py-1.5 text-center flex items-center justify-center gap-2">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
        <span>THÔNG TIN REVIEW & PHẢN ÁNH TRANH CHẤP LAO ĐỘNG • TRẢI NGHIỆM THỰC TẾ TẠI CÔNG TY TNHH ĐẬU FOOD</span>
        <span className="hidden md:inline text-zinc-400">| 296 Võ Thành Trang, Phường Bảy Hiền, TP. Hồ Chí Minh</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
        {/* Brand/Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-base tracking-tight text-white group-hover:text-amber-400 transition-colors">
                Review Đậu Food
              </span>
              <span className="bg-zinc-800 text-amber-400 border border-zinc-700 text-[10px] px-1.5 py-0.5 rounded font-mono font-medium">
                PHẢN ÁNH THỰC TẾ
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 hidden sm:block">
              Hồ sơ đối chứng & Tài liệu trao đổi tiền công
            </p>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-zinc-300">
          <a href="#timeline" className="hover:text-amber-400 transition-colors">
            Diễn biến
          </a>
          <a href="#document" className="text-amber-400 hover:text-amber-300 transition-colors font-semibold">
            Tệp PDF đơn & ảnh
          </a>
          <a href="#evidence" className="hover:text-amber-400 transition-colors">
            Tài liệu tin nhắn
          </a>
          <a href="#legal" className="hover:text-amber-400 transition-colors">
            Căn cứ pháp lý
          </a>
          <a href="#scorecard" className="hover:text-amber-400 transition-colors">
            Lưu ý & Khuyến nghị
          </a>
          <a href="#community" className="hover:text-amber-400 transition-colors">
            Cộng đồng
          </a>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="/Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf"
            download="Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-sm shadow-red-950 transition-all cursor-pointer"
            title="Tải tệp PDF 8 trang gốc"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Tải PDF</span>
            <span className="sm:hidden">PDF</span>
          </a>

          <button
            id="btn-open-doc"
            onClick={onOpenMediationDoc}
            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-zinc-500 transition-colors cursor-pointer"
            title="Xem toàn văn văn bản yêu cầu và hình ảnh thực tế"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Xem 8 trang</span>
          </button>

          <button
            id="btn-export-html"
            onClick={onOpenExportHtml}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-zinc-500 transition-colors cursor-pointer"
            title="Tải hoặc sao chép mã nguồn HTML độc lập"
          >
            <CodeXml className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Xuất HTML</span>
            <span className="sm:hidden">HTML</span>
          </button>

          <button
            id="btn-share-header"
            onClick={onOpenShareModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-all cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Chia sẻ</span>
          </button>
        </div>
      </div>
    </header>
  );
};
