import React, { useState } from 'react';
import { X, FileText, Download, Printer, AlertTriangle, ChevronLeft, ChevronRight, Layers, ExternalLink } from 'lucide-react';
import { REAL_DOCUMENT_INFO } from '../data/caseData';
import { DocumentEightPages } from './DocumentEightPages';

interface MediationDocumentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MediationDocumentModal: React.FC<MediationDocumentModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isContinuous, setIsContinuous] = useState<boolean>(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = '/Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf';
    link.download = 'Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenPdf = () => {
    window.open('/Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf', '_blank');
  };

  const pageLabels = [
    'Trang 1: Đơn (P1 - Đã che TT cá nhân)',
    'Trang 2: Đơn (P2 - Quá trình & Căn cứ)',
    'Trang 3: Đơn (P3 - Yêu cầu & Ký tên)',
    'Trang 4: Hình 1 (Xin nghỉ & Chấp thuận)',
    'Trang 5: Hình 2 (Đòi lương & Rời nhóm)',
    'Trang 6: Hình 3 (Trao đổi checkout & Hàng hóa)',
    'Trang 7: Hình 4 (Văn bản thiện chí & Tệp PDF)',
    'Trang 8: Hình 5 (Trao đổi trực tiếp & Blacklist)'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[92vh] bg-zinc-950 border border-zinc-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 bg-zinc-900 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 truncate">
            <div className="w-9 h-9 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div className="truncate">
              <h3 className="text-sm font-bold text-white truncate">
                ĐƠN ĐỀ NGHỊ HÒA GIẢI TRANH CHẤP LAO ĐỘNG (FILE PDF GỐC 8 TRANG)
              </h3>
              <p className="text-[11px] text-zinc-400">
                Người làm đơn: <strong>LƯ KIM VÀNG</strong> • Bên liên quan: <strong>CÔNG TY TNHH ĐẬU FOOD</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsContinuous(!isContinuous)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 border transition-colors cursor-pointer ${
                isContinuous
                  ? 'bg-amber-950 border-amber-500 text-amber-300'
                  : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isContinuous ? 'Xem từng trang' : 'Cuộn 8 trang'}</span>
            </button>
            <button
              onClick={handleDownloadPdf}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-red-600 hover:bg-red-500 transition-colors cursor-pointer"
              title="Tải tệp PDF 8 trang gốc"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Tải PDF</span>
            </button>
            <button
              onClick={handleOpenPdf}
              className="p-1.5 rounded-lg text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors cursor-pointer"
              title="Mở PDF trong tab mới"
            >
              <ExternalLink className="w-4 h-4 text-amber-400" />
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors cursor-pointer"
              title="In hoặc lưu PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
              title="Đóng cửa sổ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Status Callout Banner */}
        <div className="p-3 bg-zinc-900 border-b border-zinc-800 px-5 flex items-center justify-between gap-3 text-xs text-zinc-300">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Tình trạng hồ sơ:</strong> {REAL_DOCUMENT_INFO.submissionStatusNote}
            </span>
          </div>
          <span className="text-[11px] font-mono text-amber-400 hidden sm:inline">
            8 trang PDF (2.38 MB)
          </span>
        </div>

        {/* Page Switcher Bar (if not continuous) */}
        {!isContinuous && (
          <div className="p-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs px-5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 text-zinc-200 cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Trang trước</span>
            </button>

            <div className="flex items-center gap-1.5 overflow-x-auto max-w-[60%]">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-6 h-6 rounded text-xs font-mono font-bold transition-all cursor-pointer ${
                    currentPage === num
                      ? 'bg-red-600 text-white shadow'
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200'
                  }`}
                  title={pageLabels[num - 1]}
                >
                  {num}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(8, p + 1))}
              disabled={currentPage === 8}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 text-zinc-200 cursor-pointer"
            >
              <span>Trang sau</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-zinc-900/60">
          <div className="max-w-3xl mx-auto">
            {isContinuous ? (
              <div className="space-y-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((pNum) => (
                  <div
                    key={pNum}
                    className="bg-white rounded-xl p-6 sm:p-10 text-zinc-900 shadow-xl border border-zinc-200 relative"
                  >
                    <div className="absolute top-3 right-4 text-[11px] font-mono text-zinc-400">
                      Trang {pNum} / 8
                    </div>
                    <DocumentEightPages activePage={pNum} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-xl p-6 sm:p-10 text-zinc-900 shadow-xl border border-zinc-200 relative min-h-[500px]">
                <div className="absolute top-3 right-4 text-[11px] font-mono text-zinc-400">
                  {pageLabels[currentPage - 1]}
                </div>
                <DocumentEightPages activePage={currentPage} />
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="p-3.5 border-t border-zinc-800 bg-zinc-900 flex items-center justify-between text-xs">
          <span className="text-zinc-400">
            Hồ sơ hòa giải tranh chấp lao động: Lư Kim Vàng vs Đậu Food (TP.HCM)
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-white transition-colors cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
