import React from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  ArrowRight, 
  ShieldCheck, 
  User, 
  Building2 
} from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/caseData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Trình Tự Sự Việc Khách Quan</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Tóm tắt diễn biến vụ việc theo dòng thời gian
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Đối chiếu chi tiết thời gian thực giữa tin nhắn thỏa thuận, phản hồi của đại diện Đậu Food và hành vi từ chối thanh toán lương.
          </p>
        </div>

        {/* Chronological Timeline Container */}
        <div className="relative border-l-2 border-zinc-800 ml-4 sm:ml-8 md:ml-32 space-y-10">
          {TIMELINE_EVENTS.map((event, index) => {
            const isCompany = event.actor === 'company';
            const isLegal = event.actor === 'legal';

            return (
              <div key={event.id} className="relative pl-6 sm:pl-8 group">
                {/* Date marker for desktop on the left */}
                <div className="md:absolute md:-left-36 md:top-1 text-left md:text-right w-28 hidden md:block">
                  <span className="text-xs font-mono font-bold text-red-400 block">{event.date}</span>
                  <span className="text-[11px] text-zinc-500 font-mono block">{event.time}</span>
                </div>

                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[17px] top-1 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCompany
                      ? 'bg-zinc-950 border-red-500 text-red-400'
                      : isLegal
                      ? 'bg-zinc-950 border-amber-400 text-amber-300'
                      : 'bg-zinc-950 border-emerald-500 text-emerald-400'
                  }`}
                >
                  {isCompany ? (
                    <Building2 className="w-4 h-4" />
                  ) : isLegal ? (
                    <ShieldCheck className="w-4 h-4" />
                  ) : (
                    <User className="w-4 h-4" />
                  )}
                </div>

                {/* Card Body */}
                <div className="bg-zinc-900/90 border border-zinc-800/90 rounded-2xl p-5 sm:p-6 transition-all hover:border-zinc-700">
                  {/* Mobile Date Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 md:hidden">
                    <span className="text-xs font-mono font-bold text-red-400">{event.date}</span>
                    <span className="text-[11px] font-mono text-zinc-500">{event.time}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span
                      className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                        isCompany
                          ? 'bg-red-950 text-red-300 border border-red-800/50'
                          : isLegal
                          ? 'bg-amber-950 text-amber-300 border border-amber-800/50'
                          : 'bg-emerald-950 text-emerald-300 border border-emerald-800/50'
                      }`}
                    >
                      {event.badge}
                    </span>
                    {event.evidenceRef && (
                      <span className="text-xs font-medium text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded">
                        Có {event.evidenceRef}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-3">
                    {event.description}
                  </p>

                  {event.details && event.details.length > 0 && (
                    <ul className="space-y-1.5 pt-2 border-t border-zinc-800/80 text-xs text-zinc-400">
                      {event.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2">
                          <span className="text-red-500 font-bold mt-0.5">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Callout: Reality vs Allegation */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-lg font-bold text-white">
              Đối chiếu: Lời quy kết của Đậu Food vs Sự thật khách quan
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Phân tích logic bóc trần lý do vô lý nhằm quỵt 150.000đ tiền công
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Box 1: Cáo buộc vô căn cứ */}
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30">
              <div className="flex items-center gap-2 text-sm font-bold text-red-400 mb-2">
                <XCircle className="w-4 h-4 shrink-0" />
                <span>Cáo buộc của Đậu Food</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">-</span>
                  <span>Quy kết nhân viên "nghỉ ngang, nghỉ đột xuất chưa được duyệt".</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">-</span>
                  <span>Tự cho rằng "tiền hàng đã sản xuất cao hơn lương của em" để không trả lương.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 font-bold">-</span>
                  <span>Lấy lý do "từ đầu không đề cập hợp đồng thì không trách một phía" và đề nghị "chia 50/50".</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Sự thật được kiểm chứng */}
            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 mb-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Sự thật khách quan (Có tin nhắn chứng minh)</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&check;</span>
                  <span>Nhận địa điểm B16 lúc 18:56; nhắn tin xin nghỉ lúc 19:55 (chỉ sau 59 phút).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&check;</span>
                  <span>Nhân sự Lan Anh trả lời rõ ràng: <strong className="text-white">"oke em nha"</strong> lúc 13:03 ngày 24/08 (đã đồng ý).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&check;</span>
                  <span>Không có biên bản kiểm kê hàng hỏng, không có chứng từ xác định thiệt hại hay mối quan hệ nhân quả.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
