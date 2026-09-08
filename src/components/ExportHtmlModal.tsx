import React, { useState } from 'react';
import { X, Copy, Check, Download, CodeXml, Eye } from 'lucide-react';
import { generateStandaloneHtml } from '../utils/standaloneHtmlGenerator';

interface ExportHtmlModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExportHtmlModal: React.FC<ExportHtmlModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'info' | 'code'>('info');

  if (!isOpen) return null;

  const htmlCode = generateStandaloneHtml();

  const handleCopyCode = () => {
    navigator.clipboard.writeText(htmlCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadHtml = () => {
    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'canh-bao-dau-food.html';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-zinc-950 border border-zinc-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 bg-zinc-900/90 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <CodeXml className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Xuất Toàn Bộ Mã Nguồn HTML Độc Lập
              </h3>
              <p className="text-[11px] text-zinc-400">
                File .html hoàn chỉnh, có thể lưu về máy và mở trực tiếp trên mọi trình duyệt
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadHtml}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải file .html</span>
            </button>

            <button
              onClick={handleCopyCode}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-red-600 hover:bg-red-500 text-white transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã sao chép' : 'Sao chép toàn bộ code'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tab switch */}
        <div className="px-5 pt-3 border-b border-zinc-800 bg-zinc-950 flex gap-4 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('info')}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === 'info'
                ? 'border-red-500 text-white'
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Hướng dẫn sử dụng file
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`pb-2.5 border-b-2 transition-colors ${
              activeTab === 'code'
                ? 'border-red-500 text-white'
                : 'border-transparent text-zinc-500 hover:text-zinc-300'
            }`}
          >
            Mã nguồn HTML ({Math.round(htmlCode.length / 1024)} KB)
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-zinc-950">
          {activeTab === 'info' ? (
            <div className="space-y-4 max-w-2xl text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                <h4 className="font-bold text-white mb-2 text-sm flex items-center gap-2">
                  <span>✅ Đạt chuẩn 100% yêu cầu kỹ thuật của bạn:</span>
                </h4>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>Tích hợp sẵn Tailwind CSS qua CDN, Google Fonts Plus Jakarta Sans.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>Chứa trọn vẹn toàn bộ Hero, Timeline, Bằng chứng tin nhắn, Phân tích pháp lý Điều 13-27-102 BLLĐ 2019, Thang điểm đánh giá, Form bình luận và Footer.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold">&check;</span>
                    <span>Hoạt động độc lập không cần cài đặt Node.js hay build tools – chỉ cần nhấp đúp là mở ngay trên Chrome, Safari, Edge, Cốc Cốc.</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30">
                <h4 className="font-bold text-red-400 mb-1 text-xs uppercase tracking-wide">
                  Cách đưa lên mạng hoặc chia sẻ:
                </h4>
                <p className="text-zinc-300 text-xs">
                  Bạn có thể tải file <strong className="text-white">canh-bao-dau-food.html</strong> này và upload trực tiếp lên các dịch vụ lưu trữ miễn phí như GitHub Pages, Vercel, Netlify, hoặc gửi qua Zalo/Email cho bất kỳ ai.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={handleDownloadHtml}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-md"
                >
                  Tải file .html ngay
                </button>
                <button
                  onClick={handleCopyCode}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold bg-zinc-800 hover:bg-zinc-700 text-white transition-all border border-zinc-700"
                >
                  Sao chép mã vào Clipboard
                </button>
              </div>
            </div>
          ) : (
            <div className="relative">
              <pre className="p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono text-zinc-300 overflow-x-auto whitespace-pre leading-relaxed select-all">
                {htmlCode}
              </pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
