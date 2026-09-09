import React from 'react';
import { 
  ShieldCheck, 
  HelpCircle, 
  Scale, 
  FileCheck, 
  BookOpen, 
  Info,
  CheckCircle2
} from 'lucide-react';
import { CASE_RECOMMENDATION_POINTS, COMPANY_INFO } from '../data/caseData';

export const ScorecardSection: React.FC = () => {
  return (
    <section id="scorecard" className="py-16 md:py-24 border-b border-zinc-800 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Kinh Nghiệm & Phân Tích Thực Tiễn</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Khuyến nghị & Lưu ý khi làm việc part-time
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Từ vụ việc tranh chấp thực tế tại {COMPANY_INFO.name}, dưới đây là các điểm cần lưu ý để người lao động và doanh nghiệp đạt được sự đồng thuận minh bạch, hạn chế phát sinh tranh chấp.
          </p>
        </div>

        {/* 4 Core Recommendations Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {CASE_RECOMMENDATION_POINTS.map((point, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-6 flex flex-col justify-between transition-all"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold text-amber-400 bg-amber-950/50 px-2.5 py-1 rounded border border-amber-800/40">
                    {point.category}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    Lưu ý #{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                  {point.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
                <span className="flex items-center gap-1 text-zinc-300">
                  <Scale className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>Căn cứ pháp luật:</span>
                </span>
                <span className="font-mono text-[11px] text-amber-300">{point.legalBasis}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Objective Recommendation Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-zinc-900 via-zinc-950 to-zinc-900 border border-zinc-700 text-center">
          <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 mx-auto mb-3">
            <ShieldCheck className="w-6 h-6" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-1 block">
            LỜI KHUYÊN DÀNH CHO NGƯỜI TÌM VIỆC & ỨNG VIÊN
          </span>

          <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
            Chủ động tìm hiểu & Thỏa thuận rõ ràng trước khi nhận việc
          </h3>

          <p className="text-sm text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Người đọc nên chủ động thỏa thuận rõ về công việc, mức lương, địa điểm và phương thức thanh toán trước khi nhận việc để bảo vệ quyền và lợi ích hợp pháp của chính mình.
          </p>
        </div>
      </div>
    </section>
  );
};
