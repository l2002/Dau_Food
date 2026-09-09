import React, { useState } from 'react';
import { 
  AlertTriangle, 
  FileText, 
  Share2, 
  CodeXml, 
  ShieldAlert, 
  Download, 
  Menu, 
  X,
  MessageSquare,
  Scale,
  BookOpen,
  Calendar,
  Cloud
} from 'lucide-react';

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#timeline', label: 'Diễn biến', icon: Calendar },
    { href: '#document', label: 'Tệp PDF 8 Trang', icon: FileText, highlight: true },
    { href: '#evidence', label: 'Tài liệu tin nhắn', icon: MessageSquare },
    { href: '#legal', label: 'Căn cứ pháp lý', icon: Scale },
    { href: '#scorecard', label: 'Lưu ý part-time', icon: BookOpen },
    { href: '#community', label: 'Bình luận Cloud', icon: Cloud },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800 bg-zinc-950/95 backdrop-blur-md">
      {/* Top Banner Notice - Responsive & compact on mobile */}
      <div className="bg-zinc-900 border-b border-zinc-800 text-zinc-300 text-[11px] sm:text-xs font-semibold px-3 py-1.5 text-center flex items-center justify-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
        <AlertTriangle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span className="truncate">
          REVIEW & PHẢN ÁNH TRANH CHẤP LAO ĐỘNG • CÔNG TY TNHH ĐẬU FOOD
        </span>
        <span className="hidden md:inline text-zinc-500 font-normal">| 296 Võ Thành Trang, P. Bảy Hiền, TP.HCM</span>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand/Logo */}
        <a href="#" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-500 group-hover:bg-red-600 group-hover:text-white transition-colors shrink-0">
            <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="font-bold text-sm sm:text-base tracking-tight text-white group-hover:text-amber-400 transition-colors">
                Review Đậu Food
              </span>
              <span className="bg-zinc-800 text-amber-400 border border-zinc-700 text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded font-mono font-medium">
                THỰC TẾ
              </span>
            </div>
            <p className="text-[10px] sm:text-[11px] text-zinc-400 hidden sm:block">
              Hồ sơ đối chứng & Tài liệu trao đổi tiền công
            </p>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 text-sm font-medium text-zinc-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${
                link.highlight
                  ? 'text-amber-400 hover:text-amber-300 font-semibold'
                  : 'hover:text-amber-400'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <a
            href="/Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf"
            download="Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf"
            className="min-h-[36px] sm:min-h-[38px] inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-500 active:bg-red-700 text-white shadow-sm shadow-red-950 transition-all cursor-pointer"
            title="Tải tệp PDF 8 trang gốc"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden xs:inline sm:inline">Tải PDF</span>
          </a>

          <button
            id="btn-open-doc"
            onClick={onOpenMediationDoc}
            className="hidden md:inline-flex min-h-[38px] items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-zinc-500 transition-colors cursor-pointer"
            title="Xem toàn văn văn bản yêu cầu và hình ảnh thực tế"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Xem 8 trang</span>
          </button>

          <button
            id="btn-export-html"
            onClick={onOpenExportHtml}
            className="hidden sm:inline-flex min-h-[38px] items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 hover:border-zinc-500 transition-colors cursor-pointer"
            title="Tải hoặc sao chép mã nguồn HTML độc lập"
          >
            <CodeXml className="w-3.5 h-3.5 text-amber-400" />
            <span>Xuất HTML</span>
          </button>

          <button
            id="btn-share-header"
            onClick={onOpenShareModal}
            className="min-h-[36px] sm:min-h-[38px] inline-flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-900 text-zinc-200 border border-zinc-700 transition-all cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Chia sẻ</span>
          </button>

          {/* Mobile menu hamburger toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-h-[36px] min-w-[36px] p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-300 hover:text-white transition-colors flex items-center justify-center cursor-pointer"
            aria-label="Mở menu điều hướng"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Horizontal Quick-Nav Bar */}
      <div className="lg:hidden border-t border-zinc-800/80 bg-zinc-950/80 px-2.5 py-2 overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 w-max">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`min-h-[34px] px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1.5 whitespace-nowrap transition-colors border ${
                  link.highlight
                    ? 'bg-amber-950/60 border-amber-600/50 text-amber-300 font-semibold'
                    : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Icon className="w-3 h-3" />
                <span>{link.label}</span>
              </a>
            );
          })}
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800 bg-zinc-950 p-4 space-y-3 animate-fadeIn shadow-2xl">
          <div className="space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`min-h-[44px] flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    link.highlight
                      ? 'bg-amber-950/40 text-amber-300 border border-amber-800/40'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-zinc-800/80 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenMediationDoc();
              }}
              className="min-h-[44px] w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs font-semibold text-zinc-200"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Xem 8 trang PDF</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenExportHtml();
              }}
              className="min-h-[44px] w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-xs font-semibold text-zinc-200"
            >
              <CodeXml className="w-4 h-4 text-amber-400" />
              <span>Xuất mã HTML</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
