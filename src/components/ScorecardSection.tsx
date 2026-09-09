import React from 'react';
import { 
  Star, 
  AlertTriangle, 
  ThumbsDown, 
  ShieldAlert, 
  XOctagon, 
  Award, 
  CheckCircle2 
} from 'lucide-react';
import { REVIEW_CRITERIA, COMPANY_INFO } from '../data/caseData';

export const ScorecardSection: React.FC = () => {
  return (
    <section id="scorecard" className="py-16 md:py-24 border-b border-zinc-800 bg-zinc-900/30">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-red-400" />
            <span>Chỉ Số Tín Nhiệm Lao Động</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Đánh giá tổng quan: Công ty TNHH Đậu Food
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Tổng hợp điểm số dựa trên 4 tiêu chí cốt lõi về sự minh bạch, ứng xử và mức độ tuân thủ pháp luật lao động.
          </p>
        </div>

        {/* Overall Score Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
          {/* Big Score Card */}
          <div className="lg:col-span-4 bg-zinc-950 border-2 border-red-500/40 rounded-2xl p-6 flex flex-col items-center justify-center text-center shadow-xl shadow-red-950/30">
            <div className="text-xs uppercase font-bold tracking-widest text-zinc-400 mb-2">
              ĐIỂM ĐÁNH GIÁ TỔNG THỂ
            </div>

            <div className="flex items-baseline justify-center gap-1 mb-3">
              <span className="text-6xl sm:text-7xl font-black text-red-500 font-mono">
                {COMPANY_INFO.overallRating.toFixed(1)}
              </span>
              <span className="text-xl font-bold text-zinc-500">/ 5.0</span>
            </div>

            {/* Stars rating */}
            <div className="flex items-center gap-1.5 mb-4 text-red-500">
              <Star className="w-5 h-5 fill-red-500" />
              <Star className="w-5 h-5 text-zinc-700" />
              <Star className="w-5 h-5 text-zinc-700" />
              <Star className="w-5 h-5 text-zinc-700" />
              <Star className="w-5 h-5 text-zinc-700" />
            </div>

            <div className="px-3 py-1 rounded-full bg-red-950 text-red-400 text-xs font-bold border border-red-800">
              MỨC ĐỘ RỦI RO: CỰC KỲ CAO
            </div>

            <p className="text-xs text-zinc-400 mt-4 leading-relaxed">
              Xếp hạng dựa trên trải nghiệm thực tế bị chiếm dụng 150.000đ tiền lương và thái độ đe dọa người lao động.
            </p>
          </div>

          {/* Detailed Criteria Breakdown */}
          <div className="lg:col-span-8 bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between">
            <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span>Chi tiết 4 tiêu chí đánh giá</span>
            </h3>

            <div className="space-y-4">
              {REVIEW_CRITERIA.map((criterion, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-semibold text-zinc-200">{criterion.label}</span>
                    <span className="font-mono font-bold text-red-400">
                      {criterion.score.toFixed(1)} / {criterion.maxScore.toFixed(1)}
                    </span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                    <div
                      className="h-full bg-red-500 rounded-full transition-all duration-500"
                      style={{ width: `${(criterion.score / criterion.maxScore) * 100}%` }}
                    />
                  </div>

                  <p className="text-xs text-zinc-400">{criterion.critique}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big Warning Verdict Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950 via-zinc-950 to-red-950 border-2 border-red-500 text-center">
          <div className="w-12 h-12 rounded-full bg-red-600/30 border border-red-500/50 flex items-center justify-center text-red-400 mx-auto mb-3">
            <ThumbsDown className="w-6 h-6" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-red-400 mb-1 block">
            KẾT LUẬN & KHUYẾN NGHỊ CUỐI CÙNG
          </span>

          <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
            KHÔNG KHUYẾN KHÍCH ỨNG TUYỂN
          </h3>

          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Nếu bạn là sinh viên, học sinh hoặc người lao động coi trọng công sức, thời gian và sự tôn trọng quyền lợi hợp pháp của bản thân, <strong className="text-white underline decoration-red-500">hãy cân nhắc hết sức kỹ lưỡng trước khi nộp hồ sơ hoặc làm việc tại Công ty TNHH Đậu Food</strong>. Rủi ro bị trừ lương vô lý và đối xử bất công là hoàn toàn có thật!
          </p>
        </div>
      </div>
    </section>
  );
};
