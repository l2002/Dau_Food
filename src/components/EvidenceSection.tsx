import React, { useState } from 'react';
import { 
  FileCheck2, 
  MessageSquare, 
  AlertTriangle, 
  ShieldAlert, 
  Scale, 
  Check, 
  CornerDownRight, 
  Info,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { EVIDENCE_ITEMS } from '../data/caseData';

export const EvidenceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0); // 0 = all, 1-5 = specific

  const displayedEvidence =
    activeTab === 0
      ? EVIDENCE_ITEMS
      : EVIDENCE_ITEMS.filter((item) => item.number === activeTab);

  return (
    <section id="evidence" className="py-16 md:py-24 border-b border-zinc-800 bg-zinc-900/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Hồ Sơ Chứng Cứ Trích Xuất</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Nội dung bằng chứng tin nhắn thực tế
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Trích lược trung thực và khách quan từ các hội thoại Zalo giữa người lao động và nhân sự Đậu Food (đã nộp kèm Đơn đề nghị hòa giải tranh chấp lao động).
          </p>
        </div>

        {/* Legal Mandate Highlight Banner */}
        <div className="mb-10 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-red-950/70 via-zinc-900 to-red-950/70 border-2 border-red-500/60 shadow-xl shadow-red-950/30">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 shrink-0">
              <Scale className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase font-bold tracking-wider text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800/40">
                  NGUYÊN TẮC BẤT KHẢ XÂM PHẠM
                </span>
                <span className="text-xs text-zinc-400 hidden sm:inline">Bộ luật Lao động Việt Nam 2019</span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                Không có hợp đồng bằng văn bản không đồng nghĩa với việc doanh nghiệp được quyền không trả tiền công!
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                Người sử dụng lao động có trách nhiệm phải ký kết hợp đồng bằng văn bản. Việc công ty không giao kết hợp đồng là vi phạm của chính công ty. 
                <strong className="text-white"> Người lao động đã bỏ sức lao động thực tế (2 ca, 6 giờ) thì tuyệt đối có quyền được hưởng đủ tiền công 150.000 VNĐ</strong> theo thỏa thuận, không một lý do nào được phép cướp đi quyền lợi này.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab(0)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeTab === 0
                ? 'bg-red-600 text-white shadow-md shadow-red-900/40'
                : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700'
            }`}
          >
            Tất cả 5 bằng chứng
          </button>
          {EVIDENCE_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.number)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === item.number
                  ? 'bg-red-600 text-white shadow-md shadow-red-900/40'
                  : 'bg-zinc-800 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700'
              }`}
            >
              Hình {item.number}
            </button>
          ))}
        </div>

        {/* Evidence Cards List */}
        <div className="space-y-8">
          {displayedEvidence.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg transition-all hover:border-zinc-700"
            >
              {/* Card Header */}
              <div className="p-5 sm:p-6 border-b border-zinc-800/80 bg-zinc-900/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-lg bg-red-600/20 border border-red-500/40 flex items-center justify-center text-red-400 font-bold text-sm shrink-0">
                    #{item.number}
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-zinc-400 mt-0.5">{item.summary}</p>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="text-[11px] font-mono text-zinc-400 bg-zinc-800 px-2.5 py-1 rounded-md border border-zinc-700">
                    Trích xuất Zalo xác thực
                  </span>
                </div>
              </div>

              {/* Card Body: Simulated Zalo UI */}
              <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Zalo Simulated Chat Screen */}
                <div className="lg:col-span-7 bg-zinc-900/90 border border-zinc-800 rounded-xl p-4 flex flex-col justify-between">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-800 text-xs text-zinc-400">
                    <span className="font-semibold text-zinc-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Mô phỏng nhật ký tin nhắn (Zalo)
                    </span>
                    <span className="text-[11px] font-mono text-zinc-500">Đính kèm Đơn hòa giải</span>
                  </div>

                  {/* Messages Bubble List */}
                  <div className="space-y-3">
                    {item.messages.map((msg, mIdx) => {
                      const isApplicant = msg.sender === 'applicant';
                      const isRepresentative = msg.sender === 'representative';
                      const isSystem = msg.senderName.includes('Hệ thống') || msg.senderName.includes('nhóm chat');

                      if (isSystem) {
                        return (
                          <div key={mIdx} className="text-center my-2">
                            <span className="inline-block text-[11px] font-medium bg-red-950/80 border border-red-800/40 text-red-300 px-3 py-1 rounded-full">
                              {msg.text}
                            </span>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={mIdx}
                          className={`flex flex-col ${
                            isApplicant || isRepresentative ? 'items-end' : 'items-start'
                          }`}
                        >
                          <div className="text-[11px] font-medium text-zinc-400 mb-1 px-1 flex items-center gap-1.5">
                            <span>{msg.senderName}</span>
                            <span className="text-zinc-600 text-[10px]">• {msg.time}</span>
                          </div>
                          <div
                            className={`max-w-[90%] sm:max-w-[85%] rounded-2xl p-3 text-xs sm:text-sm leading-relaxed ${
                              isApplicant || isRepresentative
                                ? 'bg-red-600 text-white rounded-tr-none'
                                : 'bg-zinc-800 text-zinc-100 rounded-tl-none border border-zinc-700/80'
                            } ${msg.isHighlighted ? 'ring-2 ring-amber-400/80 shadow-md shadow-amber-950/30' : ''}`}
                          >
                            <p>{msg.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Analytical Insight & Law Reference */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                  {/* Takeaway */}
                  <div className="p-4 rounded-xl bg-zinc-900/60 border border-zinc-800">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-1.5 uppercase tracking-wide">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Ý nghĩa bằng chứng</span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {item.keyTakeaway}
                    </p>
                  </div>

                  {/* Legal Note */}
                  <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-red-400 mb-1.5 uppercase tracking-wide">
                      <Scale className="w-3.5 h-3.5" />
                      <span>Căn cứ pháp lý vi phạm</span>
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed">
                      {item.lawViolationNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
