import React, { useState } from 'react';
import { 
  Scale, 
  BookOpen, 
  CheckCircle, 
  Calculator, 
  Shield, 
  Info 
} from 'lucide-react';
import { LEGAL_CLAUSES } from '../data/caseData';

export const LegalSection: React.FC = () => {
  const [hoursWorked, setHoursWorked] = useState<number>(6);
  const [hourlyRate, setHourlyRate] = useState<number>(25000);

  const calculatedTotal = hoursWorked * hourlyRate;

  return (
    <section id="legal" className="py-16 md:py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-800 border border-zinc-700 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Scale className="w-3.5 h-3.5" />
            <span>Căn Cứ Pháp Lý Trọng Tâm</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Hệ thống quy định pháp luật điều chỉnh vụ việc
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400">
            Tổng hợp các quy định của Bộ luật Lao động 2019, Luật An ninh mạng 2018, Bộ luật Dân sự 2015 và Quyết định 1429/QĐ-UBND TP.HCM về quyền, nghĩa vụ và quy trình giải quyết tranh chấp.
          </p>
        </div>

        {/* Core Legal Clauses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {LEGAL_CLAUSES.map((clause, idx) => (
            <div
              key={idx}
              className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:border-zinc-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-amber-400 bg-zinc-950 px-2.5 py-1 rounded border border-zinc-700">
                    {clause.article}
                  </span>
                  <span className="text-[11px] text-zinc-400 font-medium">
                    {clause.law}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug">
                  {clause.title}
                </h3>

                <blockquote className="text-xs text-zinc-300 italic border-l-2 border-amber-500/60 pl-3 py-1 mb-3 bg-zinc-950/40 rounded-r">
                  "{clause.quote}"
                </blockquote>

                <div className="text-xs text-zinc-300 space-y-2 mb-4 leading-relaxed">
                  <p>
                    <strong className="text-zinc-100">Ý nghĩa pháp lý:</strong> {clause.plainExplanation}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-800 text-xs">
                <div className="text-amber-400 font-semibold mb-1 flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 shrink-0" />
                  <span>Áp dụng vào vụ việc:</span>
                </div>
                <p className="text-zinc-400 text-[11px] leading-relaxed">
                  {clause.applicationToCase}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Salary Calculation Tool */}
        <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800">
          <div className="max-w-2xl mx-auto text-center mb-6">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>Tiện Ích Tính Tiền Công Thỏa Thuận</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white">
              Tính toán khoản tiền công theo giờ làm thực tế
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              Nhập số giờ làm việc thực tế và mức lương thỏa thuận để tính tổng tiền công tương ứng.
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
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
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
                  className="w-full bg-zinc-950 border border-zinc-700 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-amber-500"
                />
                <span className="absolute right-3 top-2.5 text-xs text-zinc-500">đ/h</span>
              </div>
            </div>
          </div>

          {/* Result Card */}
          <div className="max-w-xl mx-auto p-4 rounded-xl bg-zinc-950 border border-zinc-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-zinc-400">Tiền công tính theo thỏa thuận:</div>
              <div className="text-2xl font-black text-amber-400">
                {calculatedTotal.toLocaleString('vi-VN')} VNĐ
              </div>
              <div className="text-[11px] text-zinc-500">
                (Thực tế vụ việc: 6 giờ làm x 25.000đ = 150.000 VNĐ)
              </div>
            </div>

            <div className="text-left sm:text-right text-xs space-y-1">
              <div className="text-emerald-400 flex items-center sm:justify-end gap-1 font-medium">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>Quy định trả lương (BLLĐ 2019)</span>
              </div>
              <div className="text-zinc-400 flex items-center sm:justify-end gap-1 font-medium">
                <Info className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                <span>Quy trình giải quyết (QĐ 1429/QĐ-UBND)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
