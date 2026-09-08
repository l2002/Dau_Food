import React, { useState } from 'react';
import { X, FileText, Download, Printer, AlertTriangle, ChevronLeft, ChevronRight, Layers } from 'lucide-react';
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

  const handleDownloadDoc = () => {
    const docContent = `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập – Tự do – Hạnh phúc
───────────────────
TPHCM, ngày 08 tháng 09 năm 2026

ĐƠN ĐỀ NGHỊ HÒA GIẢI TRANH CHẤP LAO ĐỘNG (ĐÃ CHE THÔNG TIN CÁ NHÂN)

Kính gửi:
– Cơ quan có thẩm quyền cử Hòa giải viên lao động tại Thành phố Hồ Chí Minh.
– Cơ quan chuyên môn thực hiện nhiệm vụ về lĩnh vực nội vụ thuộc Ủy ban nhân dân cấp xã;
– Hòa giải viên lao động.

Tôi tên là: LƯ KIM VÀNG
Sinh ngày: 04/08/2004
Số CCCD: [Đã che thông tin]  Ngày cấp: 11/05/2021  Nơi cấp: Cục trưởng Cục Cảnh sát QLHC về TTXH
Hộ khẩu: [Đã che thông tin], Phường Long Phú, Tỉnh An Giang
Chỗ ở hiện tại: [Đã che thông tin], TP.HCM
SĐT: [Đã che thông tin]

Bên bị yêu cầu: CÔNG TY TNHH ĐẬU FOOD (296 Võ Thành Trang, P11, Tân Bình)
Quản lý: Chị Lan Anh
Mức lương: 25.500đ/giờ thử việc. Đã làm 2 ngày: 20/08 và 21/08/2026 (mỗi ngày 3h = 6h).
Tổng tiền lương: 153.000 đồng.
`;
    const blob = new Blob([docContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const pageLabels = [
    'Trang 1: Đơn (P1 - Đã che TT)',
    'Trang 2: Đơn (P2)',
    'Trang 3: Đơn (P3 & Ký)',
    'Trang 4: Hình 1 (Xin nghỉ & Chấp thuận)',
    'Trang 5: Hình 2 (Đòi lương & Kick group)',
    'Trang 6: Hình 3 (Quên checkout & Shopping)',
    'Trang 7: Hình 4 (Văn bản 24h & File PDF)',
    'Trang 8: Hình 5 (Đe dọa Blacklist)'
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
                ĐƠN ĐỀ NGHỊ HÒA GIẢI TRANH CHẤP LAO ĐỘNG (FILE PDF ĐÃ CHE THÔNG TIN)
              </h3>
              <p className="text-[11px] text-zinc-400">
                Người làm đơn: <strong>LƯ KIM VÀNG</strong> • Bên bị yêu cầu: <strong>CÔNG TY TNHH ĐẬU FOOD</strong>
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsContinuous(!isContinuous)}
              className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 border transition-colors ${
                isContinuous
                  ? 'bg-red-950 border-red-500 text-red-300'
                  : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isContinuous ? 'Đang cuộn liên tục' : 'Xem cuộn 8 trang'}</span>
            </button>
            <button
              onClick={handleDownloadDoc}
              className="p-1.5 rounded-lg text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors"
              title="Tải văn bản"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-lg text-zinc-300 hover:text-white bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 transition-colors"
              title="In hoặc lưu PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              title="Đóng cửa sổ"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Status Callout Banner */}
        <div className="p-3 bg-amber-950/30 border-b border-amber-500/30 px-5 flex items-center justify-between gap-3 text-xs text-zinc-300">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Tình trạng:</strong> File PDF đã che thông tin cá nhân. Chưa nộp cơ quan nhà nước, đang gửi trực tiếp cho Đậu Food.
            </span>
          </div>
          <span className="text-[11px] font-mono text-red-400 hidden sm:inline">
            8 trang PDF (Đã che thông tin cá nhân)
          </span>
        </div>

        {/* Page Switcher Bar (if not continuous) */}
        {!isContinuous && (
          <div className="p-2.5 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs px-5">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 text-zinc-200"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Trang trước</span>
            </button>

            <div className="flex items-center gap-1.5 overflow-x-auto max-w-[60%]">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-6 h-6 rounded text-xs font-mono font-bold transition-all ${
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
              className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 text-zinc-200"
            >
              <span>Trang sau</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* Modal Body - Official Document Rendering on White Paper */}
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
            Hồ sơ pháp lý người lao động Lư Kim Vàng vs Đậu Food
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-white transition-colors"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
