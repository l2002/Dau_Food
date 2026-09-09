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
  Building2,
  FileText
} from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/caseData';

export const TimelineSection: React.FC = () => {
  return (
    <section id="timeline" className="py-16 md:py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Trình Tự Sự Việc Theo Dòng Thời Gian</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Diễn biến quá trình làm việc & Trao đổi giải quyết
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Tóm tắt diễn biến theo các mốc thời gian dựa trên tài liệu tin nhắn và đơn đề nghị hòa giải do người đăng cung cấp.
          </p>
        </div>

        {/* Chronological Timeline Container */}
        <div className="relative border-l-2 border-zinc-800 ml-3.5 sm:ml-6 md:ml-32 space-y-8 sm:space-y-10">
          {TIMELINE_EVENTS.map((event) => {
            const isCompany = event.actor === 'company';
            const isLegal = event.actor === 'legal';

            return (
              <div key={event.id} className="relative pl-4 sm:pl-8 group">
                {/* Date marker for desktop on the left */}
                <div className="md:absolute md:-left-36 md:top-1 text-left md:text-right w-28 hidden md:block">
                  <span className="text-xs font-mono font-bold text-amber-400 block">{event.date}</span>
                  <span className="text-[11px] text-zinc-500 font-mono block">{event.time}</span>
                </div>

                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[15px] sm:-left-[17px] top-1 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                    isCompany
                      ? 'bg-zinc-950 border-amber-500 text-amber-400'
                      : isLegal
                      ? 'bg-zinc-950 border-blue-400 text-blue-300'
                      : 'bg-zinc-950 border-emerald-500 text-emerald-400'
                  }`}
                >
                  {isCompany ? (
                    <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : isLegal ? (
                    <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  ) : (
                    <User className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  )}
                </div>

                {/* Card Body */}
                <div className="bg-zinc-900/90 border border-zinc-800/90 rounded-2xl p-3.5 sm:p-6 transition-all hover:border-zinc-700">
                  {/* Mobile Date Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2 md:hidden">
                    <span className="text-xs font-mono font-bold text-amber-400">{event.date}</span>
                    <span className="text-[11px] font-mono text-zinc-500">{event.time}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-2">
                    <span
                      className={`text-[11px] sm:text-xs font-semibold px-2 sm:px-2.5 py-0.5 rounded-full ${
                        isCompany
                          ? 'bg-zinc-800 text-amber-300 border border-zinc-700'
                          : isLegal
                          ? 'bg-blue-950 text-blue-300 border border-blue-800/50'
                          : 'bg-emerald-950 text-emerald-300 border border-emerald-800/50'
                      }`}
                    >
                      {event.badge}
                    </span>
                    {event.evidenceRef && (
                      <span className="text-[11px] sm:text-xs font-medium text-zinc-400 bg-zinc-800/80 px-2 py-0.5 rounded">
                        Có {event.evidenceRef}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm sm:text-lg font-bold text-white mb-2 leading-snug">
                    {event.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-3">
                    {event.description}
                  </p>

                  {event.details && event.details.length > 0 && (
                    <ul className="space-y-1.5 pt-2 border-t border-zinc-800/80 text-[11px] sm:text-xs text-zinc-400">
                      {event.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-1.5 sm:gap-2">
                          <span className="text-amber-400 font-bold mt-0.5">•</span>
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

        {/* Comparison Callout: 2 Perspectives */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-zinc-900 border border-zinc-800">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="text-lg font-bold text-white">
              Đối chiếu: Nội dung trao đổi giữa hai bên
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Phản ánh khách quan các trao đổi về khoản tiền công 150.000 VNĐ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Box 1: Phía công ty */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-700">
              <div className="flex items-center gap-2 text-sm font-bold text-amber-400 mb-2">
                <Building2 className="w-4 h-4 shrink-0" />
                <span>Nội dung trao đổi từ phía công ty</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Nhân sự cho rằng việc nghỉ đột xuất gây phát sinh chi phí hàng đã sản xuất.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Đề nghị phương án chia 50/50 vì hai bên ban đầu không giao kết hợp đồng văn bản.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">•</span>
                  <span>Yêu cầu người lao động đến trực tiếp văn phòng tại 296 Võ Thành Trang để giải quyết và nhận tiền.</span>
                </li>
              </ul>
            </div>

            {/* Box 2: Phía người lao động */}
            <div className="p-4 rounded-xl bg-zinc-950 border border-zinc-700">
              <div className="flex items-center gap-2 text-sm font-bold text-emerald-400 mb-2">
                <User className="w-4 h-4 shrink-0" />
                <span>Thông tin, tài liệu do người đăng cung cấp</span>
              </div>
              <ul className="space-y-2 text-xs text-zinc-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&check;</span>
                  <span>Nhận địa điểm B16 lúc 18:56; nhắn tin xin dừng việc lúc 19:55 (sau 59 phút) vì nơi làm việc xa.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&check;</span>
                  <span>Nhân sự có tin nhắn phản hồi tiếp nhận: <strong className="text-white">"oke em nha"</strong> lúc 13:03 ngày 24/08.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">&check;</span>
                  <span>Mong muốn nhận chuyển khoản qua STK ngân hàng do đã dừng việc và ở xa, tránh phát sinh tranh chấp.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
