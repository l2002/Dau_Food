import React, { useState, useRef } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  Maximize2, 
  UploadCloud, 
  AlertTriangle, 
  FileCheck,
  ChevronLeft,
  ChevronRight,
  Layers,
  X,
  ExternalLink,
  Info
} from 'lucide-react';
import { REAL_DOCUMENT_INFO, LEGAL_DISCLAIMER } from '../data/caseData';
import { DocumentEightPages } from './DocumentEightPages';

interface DocumentViewerSectionProps {
  onOpenMediationModal: () => void;
}

export const DocumentViewerSection: React.FC<DocumentViewerSectionProps> = ({
  onOpenMediationModal
}) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showAllPagesContinuous, setShowAllPagesContinuous] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'pages' | 'upload'>('pages');
  const [userUploadedFiles, setUserUploadedFiles] = useState<Array<{
    name: string;
    size: string;
    type: string;
    dataUrl: string;
    uploadedAt: string;
  }>>([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPdfFile = () => {
    const link = document.createElement('a');
    link.href = '/Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf';
    link.download = 'Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpenPdfInNewTab = () => {
    window.open('/Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf', '_blank');
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setUserUploadedFiles((prev) => [
          ...prev,
          {
            name: file.name,
            size: (file.size / 1024).toFixed(1) + ' KB',
            type: file.type,
            dataUrl: result,
            uploadedAt: new Date().toLocaleTimeString('vi-VN')
          }
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const pageLabels = [
    'Trang 1: Đơn đề nghị (Phần 1 - Đã che TT cá nhân)',
    'Trang 2: Đơn đề nghị (Phần 2 - Diễn biến & Căn cứ)',
    'Trang 3: Đơn đề nghị (Phần 3 - Yêu cầu giải quyết & Ký tên)',
    'Trang 4: Danh sách chứng cứ – Hình 1 (Xin nghỉ & Chấp thuận)',
    'Trang 5: Danh sách chứng cứ – Hình 2 (Đòi lương & Rời nhóm)',
    'Trang 6: Danh sách chứng cứ – Hình 3 (Trao đổi checkout & Hàng hóa)',
    'Trang 7: Danh sách chứng cứ – Hình 4 (Văn bản thiện chí 24h & File PDF)',
    'Trang 8: Danh sách chứng cứ – Hình 5 (Trao đổi trực tiếp & Blacklist)'
  ];

  return (
    <section id="document" className="py-16 md:py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <FileText className="w-3.5 h-3.5" />
            <span>Hồ Sơ PDF Đã Che Thông Tin Cá Nhân (8 Trang)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Đơn đề nghị hòa giải (File PDF gốc)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Xem trực tiếp và tải về toàn bộ 8 trang file PDF đã được che các thông tin cá nhân (CCCD, địa chỉ, số điện thoại) của người lao động Lư Kim Vàng kèm 5 tài liệu đối chứng thực tế.
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="mb-8 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
          <div className="flex items-start gap-2.5">
            <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300">Ghi chú tình trạng hồ sơ:</strong>{' '}
              {REAL_DOCUMENT_INFO.submissionStatusNote}
            </div>
          </div>
        </div>

        {/* Action Bar / Tool Bar Above Document Viewer */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-t-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-3 shadow-md">
          {/* File Meta Pill */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800/40">
                  FILE PDF GỐC
                </span>
                <span className="font-bold text-xs sm:text-sm text-white">
                  {REAL_DOCUMENT_INFO.fileName}
                </span>
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5">
                {REAL_DOCUMENT_INFO.fileSize} • Cập nhật: 08/09/2026
              </div>
            </div>
          </div>

          {/* Viewer Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDownloadPdfFile}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-900/40 transition-all cursor-pointer"
              title="Tải tệp PDF 8 trang gốc về máy"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải file PDF</span>
            </button>

            <button
              onClick={handleOpenPdfInNewTab}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
              title="Mở tệp PDF trong tab mới"
            >
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              <span>Mở PDF</span>
            </button>

            <button
              onClick={onOpenMediationModal}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
              title="Phóng to toàn màn hình"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Phóng to</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors cursor-pointer"
              title="In tài liệu"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In</span>
            </button>
          </div>
        </div>

        {/* Tab Controls: 8 Pages vs Upload Attachment */}
        <div className="bg-zinc-900/90 border-x border-zinc-800 px-4 sm:px-6 py-2.5 flex items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('pages')}
              className={`px-3 py-1 rounded-lg font-semibold transition-colors cursor-pointer ${
                activeTab === 'pages'
                  ? 'bg-zinc-800 text-white border border-zinc-700'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Nội dung 8 trang PDF
            </button>
            <button
              onClick={() => setActiveTab('upload')}
              className={`px-3 py-1 rounded-lg font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                activeTab === 'upload'
                  ? 'bg-zinc-800 text-white border border-zinc-700'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <UploadCloud className="w-3.5 h-3.5 text-amber-400" />
              <span>Đính kèm thêm tệp ({userUploadedFiles.length})</span>
            </button>
          </div>

          {activeTab === 'pages' && (
            <button
              onClick={() => setShowAllPagesContinuous(!showAllPagesContinuous)}
              className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{showAllPagesContinuous ? 'Xem từng trang' : 'Cuộn liên tục 8 trang'}</span>
            </button>
          )}
        </div>

        {/* Sub-toolbar: Pagination Buttons (when in single-page mode) */}
        {activeTab === 'pages' && !showAllPagesContinuous && (
          <div className="bg-zinc-900 border-x border-b border-zinc-800 px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 text-xs">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-200 font-medium transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Trang trước</span>
            </button>

            {/* Page number indicators */}
            <div className="flex items-center gap-1 overflow-x-auto py-1">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                    currentPage === num
                      ? 'bg-red-600 text-white shadow-md shadow-red-900/50'
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
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-30 disabled:cursor-not-allowed text-zinc-200 font-medium transition-colors cursor-pointer"
            >
              <span>Trang sau</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {/* DOCUMENT CONTAINER */}
        <div className="bg-zinc-900 border-x border-b border-zinc-800 rounded-b-2xl p-4 sm:p-8 overflow-hidden shadow-2xl">
          {activeTab === 'pages' ? (
            <div>
              {showAllPagesContinuous ? (
                <div className="space-y-8">
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((pageNumber) => (
                    <div
                      key={pageNumber}
                      className="bg-white rounded-xl shadow-2xl p-6 sm:p-12 text-zinc-900 border border-zinc-300 relative transition-all"
                    >
                      <div className="absolute top-4 right-6 text-xs font-mono font-semibold text-zinc-400 border border-zinc-200 bg-zinc-50 px-2 py-0.5 rounded">
                        Trang {pageNumber} / 8
                      </div>
                      <DocumentEightPages activePage={pageNumber} />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-12 text-zinc-900 border border-zinc-300 relative min-h-[600px] transition-all">
                  <div className="absolute top-4 right-6 text-xs font-mono font-semibold text-zinc-400 border border-zinc-200 bg-zinc-50 px-2.5 py-1 rounded">
                    {pageLabels[currentPage - 1]}
                  </div>
                  <DocumentEightPages activePage={currentPage} />
                </div>
              )}
            </div>
          ) : (
            /* Upload custom attachments tab */
            <div className="space-y-6">
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragOver(true);
                }}
                onDragLeave={() => setIsDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragOver(false);
                  handleFileUpload(e.dataTransfer.files);
                }}
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-2xl p-8 sm:p-12 text-center cursor-pointer transition-all ${
                  isDragOver
                    ? 'border-amber-500 bg-amber-500/10'
                    : 'border-zinc-700 bg-zinc-950/50 hover:border-zinc-500 hover:bg-zinc-950'
                }`}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  multiple
                  accept=".pdf,.png,.jpg,.jpeg,.doc,.docx"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files)}
                />
                <UploadCloud className="w-12 h-12 text-amber-400 mx-auto mb-3" />
                <h4 className="text-base font-bold text-white mb-1">
                  Nhấp hoặc kéo thả để tải thêm tài liệu đối chứng
                </h4>
                <p className="text-xs text-zinc-400 max-w-md mx-auto">
                  Hỗ trợ các định dạng: PDF, JPG, PNG, DOCX. Tệp được lưu và hiển thị trực tiếp trong phiên làm việc của bạn.
                </p>
              </div>

              {userUploadedFiles.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                    Tài liệu đã đính kèm ({userUploadedFiles.length})
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {userUploadedFiles.map((file, fIdx) => (
                      <div
                        key={fIdx}
                        className="bg-zinc-950 border border-zinc-800 rounded-xl p-3.5 flex items-center justify-between gap-3"
                      >
                        <div className="flex items-center gap-3 truncate">
                          <FileCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                          <div className="truncate">
                            <div className="text-xs font-semibold text-white truncate">
                              {file.name}
                            </div>
                            <div className="text-[11px] text-zinc-500">
                              {file.size} • Đã tải lên: {file.uploadedAt}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() =>
                            setUserUploadedFiles((prev) => prev.filter((_, i) => i !== fIdx))
                          }
                          className="text-zinc-500 hover:text-red-400 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
