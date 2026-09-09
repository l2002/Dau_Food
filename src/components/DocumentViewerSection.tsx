import React, { useState, useRef } from 'react';
import { 
  FileText, 
  Download, 
  Printer, 
  Maximize2, 
  Paperclip, 
  UploadCloud, 
  AlertTriangle, 
  FileCheck,
  ChevronLeft,
  ChevronRight,
  Layers,
  X
} from 'lucide-react';
import { REAL_DOCUMENT_INFO } from '../data/caseData';
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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

  const handleDownloadFullText = () => {
    const docContent = `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
Độc lập – Tự do – Hạnh phúc
───────────────────
TPHCM, ngày 08 tháng 09 năm 2026

ĐƠN ĐỀ NGHỊ HÒA GIẢI TRANH CHẤP LAO ĐỘNG

Kính gửi:
– Cơ quan có thẩm quyền cử Hòa giải viên lao động tại Thành phố Hồ Chí Minh.
– Cơ quan chuyên môn thực hiện nhiệm vụ về lĩnh vực nội vụ thuộc Ủy ban nhân dân cấp xã (bộ phận Lao động – Người có công – Xã hội);
– Hòa giải viên lao động.

Tôi tên là: LƯ KIM VÀNG
Sinh ngày: 04/08/2004
Số CCCD: [Đã che thông tin cá nhân]  Ngày cấp: 11/05/2021  Nơi cấp: Cục trưởng Cục Cảnh sát quản lý hành chính về trật tự xã hội
Hộ khẩu thường trú: [Đã che thông tin], Phường Long Phú, Tỉnh An Giang
Chỗ ở hiện tại: [Đã che thông tin], Phường Phú Thạnh, Thành phố Hồ Chí Minh
Số điện thoại liên hệ: [Đã che thông tin]

Tôi làm đơn này đề nghị cơ quan có thẩm quyền cử Hòa giải viên lao động tổ chức hòa giải tranh chấp lao động cá nhân giữa tôi và người sử dụng lao động về việc không thanh toán tiền lương/tiền công cho thời gian tôi đã làm việc thực tế, đồng thời tự ý quy kết “nghỉ ngang”, “gây thiệt hại” để chiếm dụng/không trả công sức lao động của tôi.

1. Thông tin về bên bị yêu cầu hòa giải
– Tên đơn vị/công ty: CÔNG TY TNHH ĐẬU FOOD
– Địa chỉ trụ sở/địa điểm làm việc: 296 Võ Thành Trang, Phường Bảy Hiền, Thành phố Hồ Chí Minh, Việt Nam
– Người quản lý/phụ trách trực tiếp: chị Lan Anh (nhân sự/quản lý ca) – liên hệ qua Zalo/tin nhắn.
– Hình thức làm việc: Part-time, thử việc; không ký hợp đồng lao động bằng văn bản (thỏa thuận bằng lời nói/tin nhắn).

2. Nội dung vụ việc và quá trình diễn biến
Tôi được tiếp nhận vào làm việc part-time, vị trí thử việc tại đơn vị nêu trên thông qua thỏa thuận bằng lời nói/tin nhắn, không được giao kết hợp đồng lao động bằng văn bản. Mức lương/tiền công thỏa thuận: Giai đoạn thử việc là 25.000 đồng/giờ; Giai đoạn chính thức là 35.000 đồng/giờ.
Quá trình làm việc thực tế của tôi: từ ngày 20/08/2026 đến hết ngày 21/08/2026, tổng số ngày công đã làm: 2 ngày (có điểm danh/ảnh chụp/lịch làm việc và tin nhắn phân công làm căn cứ).

Vào khoảng 18:56 ngày 23/08/2026, phía nhân sự (chị Lan Anh) gửi lịch làm và vị trí địa điểm làm việc (điểm B16, kèm vị trí Google Maps và hình ảnh quầy). Lúc 19:11 cùng ngày, tôi phản hồi “Dạ chị”. Sau khi xem xét địa điểm, nhận thấy nơi làm việc xa, không thuận tiện để gắn bó lâu dài, tôi đã chủ động nhắn tin xin nghỉ việc lúc 19:55 ngày 23/08/2026 (chưa quá 01 giờ kể từ khi nhận lịch/địa điểm), với nội dung xin lỗi và mong được thông cảm. Đến 13:03 ngày 24/08/2026, chị Lan Anh phản hồi “oke em nha”.

Sau khi chấm dứt việc làm, tôi đã nhiều lần liên hệ yêu cầu thanh toán tiền lương/tiền công tương ứng thời gian đã làm thực tế, đồng thời cung cấp số tài khoản để nhận lương. Tuy nhiên, phía đơn vị không thanh toán mà đưa ra các lý do quanh co, cụ thể:
– Quy kết tôi “nghỉ đột xuất/nghỉ ngang”, “chưa được duyệt mà đã nghỉ”, gây thất thoát cho doanh nghiệp;
– Tự ý cho rằng “tiền hàng thiệt hại đã sản xuất cao hơn lương” của tôi nên không trả lương;
– Đề nghị “mỗi bên 50%”, đồng thời phủ nhận trách nhiệm với lý do “từ đầu không đề cập hợp đồng”, “không hợp đồng thì không trách một phía”.

Tôi khẳng định: Việc không giao kết hợp đồng lao động bằng văn bản (khi pháp luật yêu cầu) là trách nhiệm thuộc về người sử dụng lao động, không làm mất quyền được trả tiền lương/tiền công cho phần việc tôi đã thực hiện. Trong thời gian thử việc, mỗi bên có quyền hủy bỏ thỏa thuận thử việc mà không cần báo trước và không phải bồi thường. Phía đơn vị đã phản hồi chấp nhận việc xin nghỉ (“oke em nha”). Việc tự ý lấy “hàng đã sản xuất” để trừ/chiếm toàn bộ lương, không chứng minh lỗi, mức thiệt hại thực tế và mối quan hệ nhân quả theo đúng trình tự pháp luật là trái quy định về trả lương và bồi thường thiệt hại.

3. Căn cứ pháp lý
– Bộ luật Lao động năm 2019 (được sửa đổi, bổ sung) về hợp đồng lao động, thử việc, trả lương, chấm dứt hợp đồng, bồi thường thiệt hại và giải quyết tranh chấp lao động cá nhân;
– Quy định về trình tự hòa giải tranh chấp lao động cá nhân của Hòa giải viên lao động;
– Thời hiệu yêu cầu hòa giải viên lao động hòa giải tranh chấp lao động cá nhân là 06 tháng kể từ ngày phát hiện hành vi cho rằng quyền và lợi ích hợp pháp bị vi phạm.

4. Yêu cầu giải quyết
1) Thanh toán đầy đủ tiền lương/tiền công cho thời gian tôi đã làm việc thực tế:
– Mức lương/công thỏa thuận: 25.000 đồng/giờ;
– Số ngày đã làm: 2 ngày (mỗi ngày 3 tiếng);
– Số tiền phải trả: 2 x (25.000 x 3) = 150.000 đồng (Bằng chữ: Một trăm năm mươi ba nghìn đồng).
2) Chấm dứt ngay việc trì hoãn, đùn đẩy, tự ý khấu trừ/chiếm dụng lương dưới danh nghĩa “thiệt hại hàng hóa” khi chưa chứng minh được lỗi, thiệt hại thực tế và chưa đúng trình tự, thủ tục theo pháp luật;
3) Xin lỗi và chấm dứt các quy kết sai trái mang tính xúc phạm uy tín, ảnh hưởng đến quyền lợi chính đáng của tôi (nếu có);
4) Hỗ trợ, tạo điều kiện thanh toán một lần qua tài khoản do tôi cung cấp ngay sau khi hòa giải thành hoặc theo thỏa thuận tại biên bản hòa giải.

5. Tài liệu, chứng cứ kèm theo (5 Hình ảnh thực tế từ Trang 4 đến Trang 8):
1. Bản sao CCCD của người đề nghị;
2. Hình 1: In/ảnh chụp toàn bộ tin nhắn Zalo với chị Lan Anh (gửi lịch, vị trí làm việc B16, phản hồi “Dạ chị”, tin xin nghỉ 19:55, phản hồi “oke em nha ❤️” lúc 13:03);
3. Hình 2: Ảnh gửi STK VietQR đòi lương, bị lấy cớ và bị xóa khỏi nhóm SX-SALES: 06h00;
4. Hình 3: Tin nhắn chị Lan Anh cố đánh đồng việc quên check-out với việc không trả lương và so sánh shopping;
5. Hình 4: Tin nhắn yêu cầu thanh toán lương kèm tệp Don_de_nghi_lac_dong.pdf thời hạn 24h;
6. Hình 5: Tin nhắn phía công ty bảo sẽ cho tên vào blacklist của các doanh nghiệp.

Tôi cam đoan những nội dung trình bày trên là đúng sự thật; nếu sai tôi xin chịu trách nhiệm trước pháp luật.

NGƯỜI LÀM ĐƠN
LƯ KIM VÀNG
`;

    const blob = new Blob([docContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Don_de_nghi_hoa_giai_tranh_chap_lao_dong_Dau_Food.txt';
    link.click();
    URL.revokeObjectURL(url);
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

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileUpload(e.dataTransfer.files);
  };

  const pageLabels = [
    { page: 1, tag: 'Đơn P1', title: 'Thông tin & Diễn biến' },
    { page: 2, tag: 'Đơn P2', title: 'Đối thoại & Căn cứ luật' },
    { page: 3, tag: 'Đơn P3', title: '4 Yêu cầu & Ký tên' },
    { page: 4, tag: 'Hình 1', title: 'Xin nghỉ & Lan Anh duyệt' },
    { page: 5, tag: 'Hình 2', title: 'Đòi lương & Bị kick group' },
    { page: 6, tag: 'Hình 3', title: 'Đánh đồng quên checkout' },
    { page: 7, tag: 'Hình 4', title: 'Yêu cầu thanh toán 24h' },
    { page: 8, tag: 'Hình 5', title: 'Đe dọa vào Blacklist' },
  ];

  return (
    <section id="document" className="py-16 md:py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Paperclip className="w-3.5 h-3.5" />
            <span>Hồ Sơ PDF Đã Che Thông Tin Cá Nhân (8 Trang)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Đơn đề nghị hòa giải (File PDF đã che thông tin)
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Xem toàn bộ 8 trang file PDF đã được che các thông tin cá nhân (CCCD, địa chỉ, số điện thoại) của người lao động Lư Kim Vàng kèm 5 tệp chứng cứ thực tế.
          </p>
        </div>

        {/* Real Status Notice (Clarifying NOT submitted to authorities yet) */}
        <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-zinc-900/90 border border-amber-500/40 shadow-lg shadow-amber-950/20">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1 text-xs sm:text-sm">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-bold text-white text-sm">
                  Trạng thái hồ sơ thực tế:
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-950 text-amber-300 border border-amber-700/60">
                  Chưa nộp lên cơ quan nhà nước
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-800 text-zinc-300 border border-zinc-700">
                  Đã hoàn thiện & gửi trực tiếp cho Đậu Food
                </span>
              </div>
              <p className="text-zinc-300 leading-relaxed pt-1">
                Bên người lao động <strong>chưa nộp lên cơ quan nhà nước</strong>. Bộ hồ sơ 8 trang đầy đủ chứng cứ này hiện đã gửi trực tiếp cho đại diện Công ty TNHH Đậu Food kèm thời hạn thiện chí để công ty tự thanh toán 150.000đ trước khi chính thức nộp lên cơ quan có thẩm quyền.
              </p>
            </div>
          </div>
        </div>

        {/* Document File Container Card */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          {/* File Top Navigation Bar */}
          <div className="p-4 sm:p-5 bg-zinc-950 border-b border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white text-sm sm:text-base">
                    {REAL_DOCUMENT_INFO.fileName}
                  </h3>
                  <span className="text-[10px] bg-red-950/80 text-red-300 border border-red-800/40 px-2 py-0.5 rounded font-mono">
                    8 TRANG PDF (ĐÃ CHE THÔNG TIN)
                  </span>
                </div>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Người làm đơn: <strong>LƯ KIM VÀNG</strong> • Bên bị yêu cầu: <strong>CÔNG TY TNHH ĐẬU FOOD</strong> • Ngày: 08/09/2026
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
                title="In hồ sơ"
              >
                <Printer className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">In</span>
              </button>
              <button
                onClick={handleDownloadFullText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700 transition-colors"
                title="Tải toàn văn bản"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Tải văn bản</span>
              </button>
              <button
                onClick={onOpenMediationModal}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-red-600 hover:bg-red-500 text-white shadow-md shadow-red-950/50 transition-colors"
                title="Mở toàn màn hình"
              >
                <Maximize2 className="w-3.5 h-3.5" />
                <span>Xem bản to</span>
              </button>
            </div>
          </div>

          {/* Sub-Tabs: 8 Pages vs Upload */}
          <div className="px-4 pt-3 border-b border-zinc-800 bg-zinc-950/50 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              <button
                onClick={() => setActiveTab('pages')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-t-xl text-xs font-semibold border-t-2 transition-all ${
                  activeTab === 'pages'
                    ? 'bg-zinc-900 border-red-500 text-white'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                }`}
              >
                <FileText className="w-4 h-4 text-red-400" />
                <span>File PDF đã che thông tin (8 Trang)</span>
              </button>

              <button
                onClick={() => setActiveTab('upload')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-t-xl text-xs font-semibold border-t-2 transition-all ${
                  activeTab === 'upload'
                    ? 'bg-zinc-900 border-red-500 text-white'
                    : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/40'
                }`}
              >
                <UploadCloud className="w-4 h-4 text-emerald-400" />
                <span>Tải tệp bổ sung ({userUploadedFiles.length})</span>
              </button>
            </div>

            {activeTab === 'pages' && (
              <button
                onClick={() => setShowAllPagesContinuous(!showAllPagesContinuous)}
                className={`text-xs px-2.5 py-1 rounded-lg border transition-colors flex items-center gap-1.5 ${
                  showAllPagesContinuous
                    ? 'bg-red-950/80 border-red-500 text-red-200'
                    : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{showAllPagesContinuous ? 'Đang cuộn liên tục 8 trang' : 'Xem cuộn cả 8 trang'}</span>
              </button>
            )}
          </div>

          {/* PAGE SELECTOR THUMBNAIL BAR */}
          {activeTab === 'pages' && !showAllPagesContinuous && (
            <div className="p-3 bg-zinc-950 border-b border-zinc-800 overflow-x-auto scrollbar-thin">
              <div className="flex items-center gap-2 min-w-max">
                <span className="text-xs font-semibold text-zinc-400 pr-1">Chọn trang:</span>
                {pageLabels.map((p) => {
                  const isActive = currentPage === p.page;
                  return (
                    <button
                      key={p.page}
                      onClick={() => setCurrentPage(p.page)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs transition-all font-medium ${
                        isActive
                          ? 'bg-red-600 text-white font-bold shadow-md shadow-red-950'
                          : 'bg-zinc-800/80 text-zinc-300 hover:bg-zinc-700 hover:text-white border border-zinc-700/60'
                      }`}
                    >
                      <span className={`text-[10px] px-1 py-0.2 rounded font-mono ${isActive ? 'bg-red-800 text-white' : 'bg-zinc-900 text-zinc-400'}`}>
                        {p.tag}
                      </span>
                      <span>{p.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* DOCUMENT PAGES CONTENT */}
          {activeTab === 'pages' && (
            <div className="p-4 sm:p-8 bg-zinc-950/80">
              <div className="max-w-3xl mx-auto space-y-6">
                {/* Page Navigation header */}
                {!showAllPagesContinuous && (
                  <div className="flex items-center justify-between bg-zinc-900 p-2.5 rounded-xl border border-zinc-800 text-xs">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-200 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Trang trước</span>
                    </button>

                    <div className="font-semibold text-white flex items-center gap-2">
                      <span>Trang {currentPage} / 8</span>
                      <span className="text-zinc-500">•</span>
                      <span className="text-red-400 font-normal">
                        {pageLabels[currentPage - 1]?.title}
                      </span>
                    </div>

                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(8, prev + 1))}
                      disabled={currentPage === 8}
                      className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed text-zinc-200 transition-colors"
                    >
                      <span>Trang sau</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                )}

                {/* White A4 paper container matching real PDF document */}
                {showAllPagesContinuous ? (
                  <div className="space-y-8">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((pageNumber) => (
                      <div
                        key={pageNumber}
                        className="bg-white rounded-xl p-6 sm:p-10 text-zinc-900 shadow-2xl border border-zinc-200 relative"
                      >
                        <div className="absolute top-3 right-4 text-[11px] font-mono text-zinc-400">
                          Trang {pageNumber} / 8
                        </div>
                        <DocumentEightPages activePage={pageNumber} />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-xl p-6 sm:p-10 text-zinc-900 shadow-2xl border border-zinc-200 relative min-h-[550px]">
                    <div className="absolute top-3 right-4 text-[11px] font-mono text-zinc-400">
                      Trang {currentPage} / 8
                    </div>
                    <DocumentEightPages activePage={currentPage} />
                  </div>
                )}

                {/* Bottom Pagination if single page */}
                {!showAllPagesContinuous && (
                  <div className="flex items-center justify-between text-xs pt-2">
                    <button
                      onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                      disabled={currentPage === 1}
                      className="text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400"
                    >
                      ← Trang trước
                    </button>
                    <div className="flex gap-1.5">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentPage(i)}
                          className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-all ${
                            currentPage === i
                              ? 'bg-red-600 text-white'
                              : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800'
                          }`}
                        >
                          {i}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() => setCurrentPage((prev) => Math.min(8, prev + 1))}
                      disabled={currentPage === 8}
                      className="text-zinc-400 hover:text-white disabled:opacity-30 disabled:hover:text-zinc-400"
                    >
                      Trang sau →
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Tab 2: Custom File Upload */}
          {activeTab === 'upload' && (
            <div className="p-5 sm:p-8 bg-zinc-950/70 space-y-6">
              <div className="max-w-2xl mx-auto space-y-4">
                <div className="text-center space-y-1">
                  <h4 className="text-base font-bold text-white">
                    Đính kèm hoặc tải tệp bổ sung từ thiết bị
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Bạn có thể tải thêm tệp PDF, Word hoặc ảnh chụp màn hình Zalo thực tế để hiển thị và lưu trữ trực tiếp trên trang.
                  </p>
                </div>

                {/* Drag and drop dropzone */}
                <div
                  onDragOver={(e) => {
                    e.preventDefault();
                    setIsDragOver(true);
                  }}
                  onDragLeave={() => setIsDragOver(false)}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={`p-8 border-2 border-dashed rounded-2xl text-center cursor-pointer transition-all ${
                    isDragOver
                      ? 'border-red-500 bg-red-950/30'
                      : 'border-zinc-700 hover:border-zinc-500 bg-zinc-900/50'
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
                  <UploadCloud className="w-10 h-10 text-red-400 mx-auto mb-3" />
                  <div className="text-sm font-bold text-white mb-1">
                    Kéo và thả tệp tài liệu / hình ảnh vào đây
                  </div>
                  <div className="text-xs text-zinc-400">
                    hoặc <span className="text-red-400 underline font-semibold">nhấp chuột để duyệt file từ máy tính/điện thoại</span>
                  </div>
                  <div className="text-[11px] text-zinc-500 mt-2">
                    Hỗ trợ: PDF, JPG, PNG, DOCX (Không giới hạn dung lượng xem trước)
                  </div>
                </div>

                {/* User uploaded files list */}
                {userUploadedFiles.length > 0 ? (
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold uppercase tracking-wider text-zinc-300">
                      Tệp của bạn đã tải lên ({userUploadedFiles.length}):
                    </div>
                    <div className="space-y-2">
                      {userUploadedFiles.map((file, fIdx) => (
                        <div
                          key={fIdx}
                          className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-3"
                        >
                          <div className="flex items-center gap-2.5 truncate">
                            <FileCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <div className="truncate">
                              <span className="text-xs font-bold text-white block truncate">
                                {file.name}
                              </span>
                              <span className="text-[10px] text-zinc-400">
                                {file.size} • Tải lên lúc {file.uploadedAt}
                              </span>
                            </div>
                          </div>
                          <a
                            href={file.dataUrl}
                            download={file.name}
                            className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-zinc-800 hover:bg-zinc-700 text-zinc-200 shrink-0"
                          >
                            Xem / Tải
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-xs text-zinc-500 py-2">
                    Chưa có tệp bổ sung nào được tải lên từ thiết bị của bạn.
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox / Image Detail Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm">
          <div className="bg-zinc-950 border border-zinc-800 rounded-2xl max-w-xl w-full p-6 space-y-4 shadow-2xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <h3 className="text-sm font-bold text-white">{selectedImage}</h3>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 bg-zinc-900 rounded-xl border border-zinc-800 text-center space-y-3">
              <div className="text-xs text-zinc-300">
                Chứng cứ hình ảnh thực tế được trích xuất trực tiếp từ hồ sơ vụ việc Đậu Food.
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-white"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
