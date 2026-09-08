import React from 'react';
import { ShieldCheck, Scale, FileText, AlertCircle, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/caseData';

interface FooterProps {
  onOpenMediationDoc: () => void;
  onOpenExportHtml: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMediationDoc, onOpenExportHtml }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-zinc-950 text-zinc-400 text-xs border-t border-zinc-800/80 pt-12 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-zinc-800/80">
          {/* Col 1: Brand & Disclaimer */}
          <div className="md:col-span-7 space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">
                Cảnh Báo Lao Động: {COMPANY_INFO.name}
              </span>
              <span className="text-[10px] bg-red-950 text-red-400 border border-red-800/50 px-1.5 py-0.5 rounded font-mono">
                BẢO VỆ NGƯỜI LAO ĐỘNG
              </span>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-lg">
              Trang web này được thành lập với tinh thần thượng tôn pháp luật, dựa trên{' '}
              <strong className="text-zinc-200">
                Văn bản yêu cầu thanh toán tiền lương và bộ hồ sơ hình ảnh chứng cứ thực tế
              </strong>{' '}
              gửi đại diện Công ty TNHH Đậu Food (bên người lao động chưa nộp cơ quan chức năng, ưu tiên tạo cơ hội giải quyết thiện chí).
            </p>

            {/* Mandatory Disclaimer from prompt */}
            <div className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-[11px] text-zinc-400 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-zinc-200">Tuyên bố miễn trừ:</strong> Trang này{' '}
                <span className="text-amber-300 font-semibold">
                  KHÔNG ĐẠI DIỆN CHO BẤT KỲ CƠ QUAN NHÀ NƯỚC NÀO
                </span>
                . Mọi thông tin phản ánh được bảo lưu quyền khiếu nại, tố cáo và hòa giải theo đúng trình tự pháp luật của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam.
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links & Tools */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-zinc-300 mb-3">
                Tài Liệu Căn Cứ & Tiện Ích
              </div>
              <ul className="space-y-2 text-xs">
                <li>
                  <a
                    href="#document"
                    className="hover:text-red-400 transition-colors flex items-center gap-1.5 text-zinc-300"
                  >
                    <FileText className="w-3.5 h-3.5 text-red-400" />
                    <span>Xem văn bản yêu cầu & 5 tệp ảnh thực tế</span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={onOpenExportHtml}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-zinc-300"
                  >
                    <Scale className="w-3.5 h-3.5 text-amber-400" />
                    <span>Tải mã nguồn HTML độc lập (Offline)</span>
                  </button>
                </li>
                <li>
                  <a
                    href="#timeline"
                    className="hover:text-white transition-colors text-zinc-400"
                  >
                    Trình tự vụ việc: 20/08 – 08/09/2026
                  </a>
                </li>
                <li>
                  <a
                    href="#evidence"
                    className="hover:text-white transition-colors text-zinc-400"
                  >
                    5 bộ bằng chứng tin nhắn xác thực
                  </a>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-700 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Về đầu trang</span>
              </button>
            </div>
          </div>
        </div>

        {/* SEO Keywords & Tags Badge Bar */}
        <div className="py-4 border-b border-zinc-900 flex flex-wrap items-center gap-2 text-[11px] text-zinc-400">
          <span className="font-semibold text-zinc-300">Từ khóa SEO:</span>
          <span className="bg-zinc-900/80 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">review đậu food</span>
          <span className="bg-zinc-900/80 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">đậu food phốt</span>
          <span className="bg-zinc-900/80 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">phốt đậu food</span>
          <span className="bg-zinc-900/80 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">công ty tnhh đậu food</span>
          <span className="bg-zinc-900/80 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">đậu food quỵt lương</span>
          <span className="bg-zinc-900/80 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">đậu food 296 võ thành trang</span>
          <span className="bg-zinc-900/80 px-2 py-0.5 rounded text-zinc-400 border border-zinc-800">bảo vệ người lao động part-time</span>
        </div>

        {/* Bottom copyright / date */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <div>
            © 2026 Hồ Sơ Tranh Chấp Lao Động Part-Time. Tôn trọng sự thật & pháp luật.
          </div>
          <div>
            Cập nhật mới nhất: Tháng 09/2026 (Hồ sơ tại TP.HCM)
          </div>
        </div>
      </div>
    </footer>
  );
};
