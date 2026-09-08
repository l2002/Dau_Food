import React, { useState } from 'react';
import { 
  Scale, 
  BookOpen, 
  CheckCircle, 
  AlertOctagon, 
  Calculator, 
  Shield, 
  ExternalLink 
} from 'lucide-react';
import { LEGAL_CLAUSES } from '../data/caseData';

export const LegalSection: React.FC = () => {
  // Simple interactive salary calculation tool for readers / part-timers
  const [hoursWorked, setHoursWorked] = useState<number>(6);
  const [hourlyRate, setHourlyRate] = useState<number>(25500);

  const calculatedTotal = hoursWorked * hourlyRate;

  return (
    <section id="legal" className="py-16 md:py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-red-950/60 border border-red-500/30 text-red-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Phân Tích Pháp Lý Ngắn Gọn</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Quy định của Bộ luật Lao động 2019 về quyền lợi part-time
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Trang bị kiến thức pháp lý vững chắc để người lao động và sinh viên không bị các chủ doanh nghiệp ép uổng hoặc dọa nạt trái luật.
          </p>
        </div>

        {/* 3 Core Legal Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {LEGAL_CLAUSES.map((clause, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-red-400 bg-red-950/80 px-2.5 py-1 rounded border border-red-800/40">
                    {clause.article}
                  </span>
                  <span className="text-[11px] text-zinc-500 font-medium">
                    {clause.law}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {clause.title}
                </h3>

                <blockquote className="text-xs text-zinc-400 italic border-l-2 border-zinc-700 pl-3 py-1 mb-3">
                  "{clause.quote}"
                </blockquote>

                <div className="text-xs text-zinc-300 space-y-2 mb-4 leading-relaxed">
                  <p>
                    <strong className="text-zinc-100">Hiểu đơn giản:</strong> {clause.plainExplanation}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 text-xs">
                <div className="text-amber-400 font-semibold mb-1 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 shrink-0" />
                  <span>Áp dụng vào trường hợp Đậu Food:</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  {clause.applicationToCase}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Salary & Rights Calculator for Part-timers */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-900/50 border border-zinc-800">
          <div className="max-w-2xl mx-auto text-center mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Tiện Ích Tính Tiền Công & Bảo Vệ Quyền Lợi</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Kiểm tra khoản tiền lương bạn được pháp luật bảo hộ
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Nhập số giờ làm việc thực tế và mức lương thỏa thuận của bạn để xem số tiền doanh nghiệp bắt buộc phải trả.
            </p>
          </div>

          <div className="max-w-xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Số giờ làm việc thực tế:
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={hoursWorked}
                  onChange={(e) => setHoursWorked(Math.max(1, Number(e.target.value) || 0))}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                />
                <span className="absolute right-3 top-2.5 text-xs text-zinc-500">giờ</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                Mức lương thỏa thuận / giờ:
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1000"
                  step="500"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500"
                />
                <span className="absolute right-3 top-2.5 text-xs text-zinc-500">đ/h</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="max-w-xl mx-auto p-4 rounded-xl bg-zinc-950 border border-red-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-zinc-400">Tiền công tối thiểu công ty phải trả:</div>
              <div className="text-2xl font-black text-red-400">
                {calculatedTotal.toLocaleString('vi-VN')} VNĐ
              </div>
              <div className="text-[11px] text-zinc-500">
                (Tương đương vụ việc Đậu Food: 6 giờ x 25.500đ = 153.000 VNĐ)
              </div>
            </div>

            <div className="text-left sm:text-right text-xs space-y-1">
              <div className="text-emerald-400 flex items-center sm:justify-end gap-1 font-medium">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Bắt buộc thanh toán theo Điều 90</span>
              </div>
              <div className="text-red-400 flex items-center sm:justify-end gap-1 font-medium">
                <AlertOctagon className="w-3.5 h-3.5 shrink-0" />
                <span>Cấm tự ý trừ tiền theo Điều 102</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
