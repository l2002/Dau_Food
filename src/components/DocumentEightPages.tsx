import React from 'react';
import { 
  FileText, 
  Paperclip, 
  AlertTriangle, 
  MapPin, 
  Clock, 
  UserCheck, 
  ShieldAlert, 
  CheckCircle2, 
  ExternalLink,
  QrCode,
  Users,
  MessageSquare,
  AlertCircle
} from 'lucide-react';
import { REAL_DOCUMENT_INFO } from '../data/caseData';

interface DocumentEightPagesProps {
  activePage: number;
  onSelectPage?: (page: number) => void;
}

export const DocumentEightPages: React.FC<DocumentEightPagesProps> = ({
  activePage
}) => {
  return (
    <div className="w-full">
      {/* PAGE 1: Đơn đề nghị hòa giải (Phần 1) */}
      {activePage === 1 && (
        <div className="space-y-6 text-zinc-800 text-xs sm:text-sm font-serif leading-relaxed">
          {/* Header Quốc hiệu */}
          <div className="text-center space-y-1 pb-4 border-b border-zinc-300">
            <div className="font-bold text-sm sm:text-base uppercase tracking-wider text-black font-sans">
              CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
            </div>
            <div className="font-semibold text-xs sm:text-sm text-zinc-800 font-sans">
              Độc lập – Tự do – Hạnh phúc
            </div>
            <div className="text-zinc-500 font-mono text-xs">───────────────────</div>
            <div className="text-right text-xs text-zinc-600 italic pt-2">
              TPHCM, ngày 08 tháng 09 năm 2026
            </div>
          </div>

          {/* Tiêu đề đơn */}
          <div className="text-center pt-2">
            <h2 className="text-base sm:text-lg md:text-xl font-bold uppercase text-red-700 tracking-wide font-sans">
              ĐƠN ĐỀ NGHỊ HÒA GIẢI TRANH CHẤP LAO ĐỘNG
            </h2>
          </div>

          {/* Kính gửi */}
          <div className="p-3.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs space-y-1.5 font-sans">
            <div className="font-bold text-zinc-900">Kính gửi:</div>
            <p>– Cơ quan có thẩm quyền cử Hòa giải viên lao động tại Thành phố Hồ Chí Minh.</p>
            <p>– Cơ quan chuyên môn thực hiện nhiệm vụ về lĩnh vực nội vụ thuộc Ủy ban nhân dân cấp xã (bộ phận Lao động – Người có công – Xã hội);</p>
            <p>– Hòa giải viên lao động.</p>
          </div>

          {/* Thông tin người làm đơn */}
          <div className="space-y-2 text-xs sm:text-sm">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p><strong>Tôi tên là:</strong> <span className="font-bold uppercase text-zinc-950 font-sans">LƯ KIM VÀNG</span></p>
              <p><strong>Sinh ngày:</strong> 04/08/2004</p>
            </div>
            <p><strong>Số CCCD:</strong> <span className="font-mono font-semibold">089304013108</span> • <strong>Ngày cấp:</strong> 11/05/2021 • <strong>Nơi cấp:</strong> Cục trưởng Cục Cảnh sát quản lý hành chính về trật tự xã hội</p>
            <p><strong>Hộ khẩu thường trú:</strong> Số 57, Tổ 9, Khóm Long Hưng, Phường Long Phú, Tỉnh An Giang</p>
            <p><strong>Chỗ ở hiện tại:</strong> 2/3 Cây Keo, Khu phố 4, Phường Phú Thạnh, Thành phố Hồ Chí Minh</p>
            <p><strong>Số điện thoại liên hệ:</strong> <span className="font-mono font-bold text-red-700">0374903127</span></p>
          </div>

          <p className="text-justify indent-6">
            Tôi làm đơn này đề nghị cơ quan có thẩm quyền cử Hòa giải viên lao động tổ chức hòa giải tranh chấp lao động cá nhân giữa tôi và người sử dụng lao động về việc không thanh toán tiền lương/tiền công cho thời gian tôi đã làm việc thực tế, đồng thời tự ý quy kết “nghỉ ngang”, “gây thiệt hại” để chiếm dụng/không trả công sức lao động của tôi.
          </p>

          {/* Mục 1 */}
          <div className="space-y-1.5 pt-2">
            <h3 className="font-bold text-zinc-950 font-sans uppercase text-xs sm:text-sm border-b border-zinc-200 pb-1">
              1. Thông tin về bên bị yêu cầu hòa giải
            </h3>
            <p>– <strong>Tên đơn vị/công ty:</strong> <span className="font-bold text-red-800">CÔNG TY TNHH ĐẬU FOOD</span></p>
            <p>– <strong>Địa chỉ trụ sở/địa điểm làm việc:</strong> 296 Võ Thành Trang, P11, quận Tân Bình</p>
            <p>– <strong>Người quản lý/phụ trách trực tiếp:</strong> chị Lan Anh (nhân sự/quản lý ca) – liên hệ qua Zalo/tin nhắn.</p>
            <p>– <strong>Hình thức làm việc:</strong> Part-time, thử việc; không ký hợp đồng lao động bằng văn bản (thỏa thuận bằng lời nói/tin nhắn).</p>
          </div>

          {/* Mục 2 (phần đầu) */}
          <div className="space-y-1.5 pt-2">
            <h3 className="font-bold text-zinc-950 font-sans uppercase text-xs sm:text-sm border-b border-zinc-200 pb-1">
              2. Nội dung vụ việc và quá trình diễn biến
            </h3>
            <p className="text-justify indent-6">
              Tôi được tiếp nhận vào làm việc part-time, vị trí thử việc tại đơn vị nêu trên thông qua thỏa thuận bằng lời nói/tin nhắn, không được giao kết hợp đồng lao động bằng văn bản. Mức lương/tiền công thỏa thuận: Giai đoạn thử việc là <strong>25.500 đồng/giờ</strong>; Giai đoạn chính thức là <strong>35.000 đồng/giờ</strong>.
            </p>
            <p className="text-justify indent-6">
              Quá trình làm việc thực tế của tôi: từ ngày 20/08/2026 đến hết ngày 21/08/2026, tổng số ngày công đã làm: <strong>2 ngày</strong> (có điểm danh/ảnh chụp/lịch làm việc và tin nhắn phân công làm căn cứ).
            </p>
          </div>

          <div className="text-right text-[11px] text-zinc-400 font-sans italic pt-4">
            [Hết Trang 1 / Tiếp tục Trang 2...]
          </div>
        </div>
      )}

      {/* PAGE 2: Đơn đề nghị hòa giải (Phần 2) */}
      {activePage === 2 && (
        <div className="space-y-6 text-zinc-800 text-xs sm:text-sm font-serif leading-relaxed">
          <div className="text-xs font-sans text-zinc-400 border-b border-zinc-200 pb-1 flex justify-between">
            <span>ĐƠN ĐỀ NGHỊ HÒA GIẢI TRANH CHẤP LAO ĐỘNG</span>
            <span>Trang 2/8</span>
          </div>

          <div className="space-y-3 text-justify">
            <p className="indent-6">
              Vào khoảng 18:56 ngày 23/08/2026, phía nhân sự (chị Lan Anh) gửi lịch làm và vị trí địa điểm làm việc (điểm B16, kèm vị trí Google Maps và hình ảnh quầy). Lúc 19:11 cùng ngày, tôi phản hồi “Dạ chị”. Sau khi xem xét địa điểm, nhận thấy nơi làm việc xa, không thuận tiện để gắn bó lâu dài, tôi đã chủ động nhắn tin xin nghỉ việc lúc 19:55 ngày 23/08/2026 (chưa quá 01 giờ kể từ khi nhận lịch/địa điểm), với nội dung xin lỗi và mong được thông cảm. Đến 13:03 ngày 24/08/2026, chị Lan Anh phản hồi “oke em nha”.
            </p>

            <p className="indent-6">
              Sau khi chấm dứt việc làm, tôi đã nhiều lần liên hệ yêu cầu thanh toán tiền lương/tiền công tương ứng thời gian đã làm thực tế, đồng thời cung cấp số tài khoản để nhận lương. Tuy nhiên, phía đơn vị không thanh toán mà đưa ra các lý do quanh co, cụ thể:
            </p>

            <ul className="list-none space-y-1.5 pl-6 font-sans text-xs sm:text-sm text-zinc-800">
              <li>– Quy kết tôi “nghỉ đột xuất/nghỉ ngang”, “chưa được duyệt mà đã nghỉ”, gây thất thoát cho doanh nghiệp;</li>
              <li>– Tự ý cho rằng “tiền hàng thiệt hại đã sản xuất cao hơn lương” của tôi nên không trả lương;</li>
              <li>– Đề nghị “mỗi bên 50%”, đồng thời phủ nhận trách nhiệm với lý do “từ đầu không đề cập hợp đồng”, “không hợp đồng thì không trách một phía”.</li>
            </ul>

            <p className="indent-6">
              <strong>Tôi khẳng định:</strong> Việc không giao kết hợp đồng lao động bằng văn bản (khi pháp luật yêu cầu) là trách nhiệm thuộc về người sử dụng lao động, không làm mất quyền được trả tiền lương/tiền công cho phần việc tôi đã thực hiện. <strong>Trong thời gian thử việc, mỗi bên có quyền hủy bỏ thỏa thuận thử việc mà không cần báo trước và không phải bồi thường.</strong> Phía đơn vị đã phản hồi chấp nhận việc xin nghỉ (“oke em nha”). Việc tự ý lấy “hàng đã sản xuất” để trừ/chiếm toàn bộ lương, không chứng minh lỗi, mức thiệt hại thực tế và mối quan hệ nhân quả theo đúng trình tự pháp luật là trái quy định về trả lương và bồi thường thiệt hại.
            </p>
          </div>

          {/* Mục 3 */}
          <div className="space-y-2 pt-2">
            <h3 className="font-bold text-zinc-950 font-sans uppercase text-xs sm:text-sm border-b border-zinc-200 pb-1">
              3. Căn cứ pháp lý
            </h3>
            <ul className="space-y-1.5 pl-2 font-sans text-xs">
              <li>– Bộ luật Lao động năm 2019 (được sửa đổi, bổ sung) về hợp đồng lao động, thử việc, trả lương, chấm dứt hợp đồng, bồi thường thiệt hại và giải quyết tranh chấp lao động cá nhân;</li>
              <li>– Quy định về trình tự hòa giải tranh chấp lao động cá nhân của Hòa giải viên lao động; đơn yêu cầu được gửi đến cơ quan có thẩm quyền cử hòa giải viên lao động hoặc trực tiếp tới Hòa giải viên lao động;</li>
              <li>– Thời hiệu yêu cầu hòa giải viên lao động hòa giải tranh chấp lao động cá nhân là 06 tháng kể từ ngày phát hiện hành vi cho rằng quyền và lợi ích hợp pháp bị vi phạm.</li>
            </ul>
          </div>

          {/* Mục 4 (tiếp nối) */}
          <div className="space-y-1.5 pt-2">
            <h3 className="font-bold text-zinc-950 font-sans uppercase text-xs sm:text-sm border-b border-zinc-200 pb-1">
              4. Yêu cầu giải quyết
            </h3>
            <p className="indent-6">
              Căn cứ các quy định nêu trên và toàn bộ chứng cứ đính kèm, tôi kính đề nghị cơ quan có thẩm quyền cử Hòa giải viên lao động tổ chức phiên hòa giải và yêu cầu bên sử dụng lao động:
            </p>
          </div>

          <div className="text-right text-[11px] text-zinc-400 font-sans italic pt-4">
            [Hết Trang 2 / Tiếp tục Trang 3...]
          </div>
        </div>
      )}

      {/* PAGE 3: 4 Yêu cầu & Ký tên (Phần 3) */}
      {activePage === 3 && (
        <div className="space-y-6 text-zinc-800 text-xs sm:text-sm font-serif leading-relaxed">
          <div className="text-xs font-sans text-zinc-400 border-b border-zinc-200 pb-1 flex justify-between">
            <span>ĐƠN ĐỀ NGHỊ HÒA GIẢI TRANH CHẤP LAO ĐỘNG</span>
            <span>Trang 3/8</span>
          </div>

          {/* 4 Yêu cầu */}
          <div className="space-y-3 font-sans text-xs sm:text-sm pl-2">
            <div className="p-3 rounded-lg bg-red-50 border border-red-200">
              <strong className="text-red-900 block mb-1">1) Thanh toán đầy đủ tiền lương/tiền công cho thời gian tôi đã làm việc thực tế, số tiền cụ thể như sau:</strong>
              <p>– Mức lương/công thỏa thuận: 25.500 đồng/giờ;</p>
              <p>– Số ngày đã làm: 2 ngày (mỗi ngày 3 tiếng);</p>
              <p>– Số tiền phải trả: <strong>2 x (25.500 x 3) = 153.000 đồng</strong></p>
              <p><em>(Bằng chữ: Một trăm năm mươi ba nghìn đồng).</em></p>
            </div>

            <p><strong>2)</strong> Chấm dứt ngay việc trì hoãn, đùn đẩy, tự ý khấu trừ/chiếm dụng lương dưới danh nghĩa “thiệt hại hàng hóa” khi chưa chứng minh được lỗi, thiệt hại thực tế và chưa đúng trình tự, thủ tục theo pháp luật;</p>
            <p><strong>3)</strong> Xin lỗi và chấm dứt các quy kết sai trái mang tính xúc phạm uy tín, ảnh hưởng đến quyền lợi chính đáng của tôi (nếu có);</p>
            <p><strong>4)</strong> Hỗ trợ, tạo điều kiện thanh toán một lần qua tài khoản do tôi cung cấp ngay sau khi hòa giải thành hoặc theo thỏa thuận tại biên bản hòa giải.</p>
          </div>

          <p className="text-justify indent-6 italic text-zinc-700">
            Trong trường hợp hòa giải không thành hoặc hết thời hạn mà việc hòa giải không được tiến hành, tôi xin bảo lưu quyền khiếu nại đến Thanh tra lao động, yêu cầu Hội đồng trọng tài lao động hoặc khởi kiện tại Tòa án nhân dân có thẩm quyền theo quy định của pháp luật.
          </p>

          {/* Mục 5 */}
          <div className="space-y-1.5 pt-2">
            <h3 className="font-bold text-zinc-950 font-sans uppercase text-xs sm:text-sm border-b border-zinc-200 pb-1">
              5. Tài liệu, chứng cứ kèm theo
            </h3>
            <ol className="list-decimal list-inside space-y-1 pl-2 font-sans text-xs text-zinc-700">
              <li>Bản sao CCCD của người đề nghị;</li>
              <li>In/ảnh chụp toàn bộ tin nhắn Zalo với chị Lan Anh (gửi lịch, vị trí làm việc, phản hồi “Dạ chị”, tin xin nghỉ, phản hồi “oke em nha”, các tin đòi lương và phía bên kia từ chối/đề nghị 50-50);</li>
              <li>Ảnh điểm danh/lịch làm việc/vị trí quầy;</li>
              <li>Thông tin số tài khoản nhận lương đã gửi cho phía đơn vị;</li>
              <li>Các tài liệu, chứng cứ khác có liên quan (nếu có).</li>
            </ol>
          </div>

          <p className="indent-6 text-justify">
            Tôi cam đoan những nội dung trình bày trên là đúng sự thật; nếu sai tôi xin chịu trách nhiệm trước pháp luật.
          </p>
          <p className="indent-6 text-justify">
            Kính đề nghị cơ quan có thẩm quyền xem xét, cử Hòa giải viên lao động và tổ chức hòa giải theo quy định, bảo vệ quyền và lợi ích hợp pháp của tôi.
          </p>
          <p className="indent-6">Tôi xin trân trọng cảm ơn!</p>

          {/* Chữ ký */}
          <div className="pt-6 flex justify-end text-center font-sans">
            <div className="w-56 space-y-16">
              <div>
                <strong className="uppercase text-xs sm:text-sm block text-zinc-950">NGƯỜI LÀM ĐƠN</strong>
                <span className="text-xs text-zinc-500 italic">(Ký, ghi rõ họ tên)</span>
              </div>
              <div className="font-bold text-sm text-zinc-950 uppercase border-t border-zinc-300 pt-2">
                LƯ KIM VÀNG
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 4: DANH SÁCH CHỨNG CỨ KÈM THEO - Hình 1 */}
      {activePage === 4 && (
        <div className="space-y-6 text-zinc-800 text-xs sm:text-sm">
          <div className="text-center pb-2 border-b border-zinc-300">
            <div className="font-bold text-base sm:text-lg uppercase text-black font-sans">
              DANH SÁCH CHỨNG CỨ KÈM THEO
            </div>
            <p className="text-xs text-zinc-500 italic mt-0.5">Tệp tài liệu đính kèm theo Đơn đề nghị hòa giải tranh chấp lao động (Trang 4/8)</p>
          </div>

          <div className="p-3 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
            <h4 className="font-bold text-red-900 text-sm font-sans">
              Hình 1: Bằng chứng xin nghỉ với lý do hợp lý, không bỏ việc, nghỉ ngang không thông báo
            </h4>
          </div>

          {/* Visual Reproduction of Zalo Screenshots in Page 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Screenshot 1: 18:56 nhận lịch & vị trí quầy B16 */}
            <div className="bg-[#EBF2F8] border border-zinc-300 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between text-xs">
              <div className="bg-[#0088FF] text-white p-2.5 flex items-center justify-between font-sans">
                <span className="font-semibold text-xs flex items-center gap-1.5">
                  <span>←</span> Lan Anhh
                </span>
                <span className="text-[10px] opacity-80">21:51 • 24%</span>
              </div>
              <div className="p-3 space-y-2.5 bg-gradient-to-b from-[#EBF2F8] to-[#E3ECF5] flex-1">
                <div className="text-center text-[10px] text-zinc-500 font-mono">18:56 23/08/2026</div>
                <div className="bg-red-100 border border-red-300 rounded-lg p-1.5 text-center text-red-800 font-bold text-[11px]">
                  Nhận lịch làm lúc 18:56
                </div>
                
                {/* Lan Anhh speech bubble */}
                <div className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-full bg-blue-300 text-blue-900 font-bold flex items-center justify-center text-xs shrink-0">LA</div>
                  <div className="bg-white p-2 rounded-2xl rounded-tl-none shadow-xs max-w-[85%] space-y-1 text-zinc-800">
                    <p>từ mai em bán riêng được rồi nha</p>
                    <div className="p-1.5 rounded bg-blue-50 text-[10px] text-blue-700 underline font-mono break-all">
                      https://maps.app.goo.gl/43S4zCtdVjBm7Gr78?g_st=iz
                    </div>
                    <p className="font-semibold text-zinc-900">b16 nhe, chị gửi vị trí quầy B16</p>
                  </div>
                </div>

                {/* Photo of Stall */}
                <div className="p-2 rounded-lg bg-white border border-zinc-200 text-center space-y-1">
                  <div className="bg-amber-100 border border-amber-300 rounded p-2 text-amber-900 font-semibold text-[11px]">
                    [Ảnh quầy xe Đậu Food - Biển hiệu Điểm danh 06:07 Thứ Hai, 18 Tháng 8]
                  </div>
                  <span className="text-[10px] text-zinc-500 italic">Quầy bán hàng tại điểm B16</span>
                </div>
              </div>
              <div className="p-2 bg-white border-t border-zinc-200 text-[11px] text-zinc-600">
                Lan Anhh gửi vị trí quầy B16 lúc 18:56 tối 23/08/2026.
              </div>
            </div>

            {/* Screenshot 2: 19:11 Dạ chị, 19:55 xin nghỉ & 13:03 oke em nha */}
            <div className="bg-[#EBF2F8] border border-zinc-300 rounded-xl overflow-hidden shadow-sm flex flex-col justify-between text-xs">
              <div className="bg-[#0088FF] text-white p-2.5 flex items-center justify-between font-sans">
                <span className="font-semibold text-xs flex items-center gap-1.5">
                  <span>←</span> Lan Anhh
                </span>
                <span className="text-[10px] opacity-80">21:52 • 24%</span>
              </div>
              <div className="p-3 space-y-2.5 bg-gradient-to-b from-[#EBF2F8] to-[#E3ECF5] flex-1">
                {/* 19:11 Vàng phản hồi */}
                <div className="flex justify-end">
                  <div className="bg-[#D1E8FF] p-2 rounded-2xl rounded-tr-none shadow-xs text-zinc-900 max-w-[85%] border border-blue-200">
                    <p className="font-semibold">Dạ chị</p>
                    <span className="text-[9px] text-zinc-500 block text-right">19:11</span>
                  </div>
                </div>
                <div className="text-center text-[10px] text-zinc-500 font-mono">19:55 23/08/2026</div>

                {/* 19:55 Vàng xin nghỉ */}
                <div className="flex justify-end">
                  <div className="bg-[#D1E8FF] p-2.5 rounded-2xl rounded-tr-none shadow-xs text-zinc-900 max-w-[90%] border border-blue-200 space-y-1">
                    <p className="leading-relaxed">
                      Chị ơi, em xin phép báo chị là em muốn xin nghỉ việc ạ 🥺 công việc thì ổn nhưng sau 2 ngày làm, em xem lịch sắp xếp em thấy địa điểm hiện tại hơi xa, đi lại không thuận tiện với em nên em sợ không thể làm lâu dài được ạ :&lt;&lt; em cũng xin lỗi vì báo nghỉ, mong chị thông cảm giúp em nha.
                    </p>
                    <div className="flex justify-between items-center text-[9px] text-zinc-500 pt-0.5">
                      <span className="text-red-700 font-bold">Chủ động báo trước sau 59 phút</span>
                      <span>19:55</span>
                    </div>
                  </div>
                </div>

                <div className="text-center text-[10px] text-zinc-500 font-mono">13:03 24/08/2026</div>

                {/* 13:03 Lan Anhh phản hồi chấp nhận */}
                <div className="flex gap-2 items-start">
                  <div className="w-7 h-7 rounded-full bg-blue-300 text-blue-900 font-bold flex items-center justify-center text-xs shrink-0">LA</div>
                  <div className="bg-white p-2.5 rounded-2xl rounded-tl-none shadow-xs max-w-[85%] border-2 border-emerald-500 space-y-1">
                    <p className="font-bold text-emerald-800 text-sm">oke em nha ❤️</p>
                    <span className="text-[9px] text-zinc-500 block">13:03</span>
                  </div>
                </div>
                <div className="text-center text-[10px] text-emerald-700 font-bold bg-emerald-100 rounded py-0.5">
                  ✓ Nhân sự bơ đến trưa hôm sau mới phản hồi và chấp thuận rõ ràng
                </div>
              </div>
              <div className="p-2 bg-white border-t border-zinc-200 text-[11px] text-zinc-600">
                Đồng thuận chấm dứt thử việc theo Điều 27 Bộ luật Lao động 2019.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 5: DANH SÁCH CHỨNG CỨ KÈM THEO - Hình 2 */}
      {activePage === 5 && (
        <div className="space-y-6 text-zinc-800 text-xs sm:text-sm">
          <div className="text-center pb-2 border-b border-zinc-300">
            <div className="font-bold text-base sm:text-lg uppercase text-black font-sans">
              DANH SÁCH CHỨNG CỨ KÈM THEO
            </div>
            <p className="text-xs text-zinc-500 italic mt-0.5">Tệp tài liệu đính kèm theo Đơn đề nghị hòa giải tranh chấp lao động (Trang 5/8)</p>
          </div>

          <div className="p-3 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
            <h4 className="font-bold text-red-900 text-xs sm:text-sm font-sans">
              Hình 2: Sau khi yêu cầu thanh toán lương cho những ngày đã làm việc, phía nhân sự không giải quyết mà liên tục bơ tin nhắn, đùn đẩy trách nhiệm, sau đó kick tôi khỏi group chat để tránh đối diện. Đây là hành vi né tránh nghĩa vụ trả lương.
            </h4>
          </div>

          {/* 3 Panels corresponding to Page 5 screenshots */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
            {/* Panel 1: Chat với Lan Anhh đòi lương */}
            <div className="bg-[#EBF2F8] border border-zinc-300 rounded-xl overflow-hidden text-xs flex flex-col justify-between">
              <div className="bg-[#0088FF] text-white p-2 text-xs font-semibold">Lan Anhh (18:17)</div>
              <div className="p-2.5 space-y-2 bg-[#EBF2F8] flex-1">
                <div className="bg-[#D1E8FF] p-2 rounded-xl text-zinc-900">
                  <p>Em gửi stk, có j chị thanh toán giúp em nha. Em cảm ơn ạ</p>
                  <span className="text-[9px] text-zinc-500 block text-right">18:35</span>
                </div>
                <div className="bg-[#D1E8FF] p-2 rounded-xl text-zinc-900">
                  <p>Chị có thấy tin của em thì rep giùm em với nha 🥺 em hỏi bạn Từng về vụ lương, bạn báo kiểm tra mà giờ em chưa nhận được hồi âm ạ...</p>
                  <span className="text-[9px] text-zinc-500 block text-right">16:39</span>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-red-300 space-y-1">
                  <span className="text-[10px] text-red-700 font-bold block">Lan Anhh:</span>
                  <p className="text-zinc-900">
                    bữa đó em nghỉ chị tính tiền hàng thiệt hại đã sản xuất cao hơn lương của em á Vàng ơi
                  </p>
                  <p className="text-zinc-700 text-[11px]">
                    chị chưa duyệt mà em nghỉ đột xuất như vậy
                  </p>
                  <p className="text-zinc-700 text-[11px]">
                    chị cũng bận để truy cứu trách nhiệm
                  </p>
                  <span className="text-[9px] text-zinc-400 block text-right">18:17</span>
                </div>
              </div>
              <div className="p-1.5 bg-red-100 text-red-800 text-[10px] text-center font-bold">
                Tự quy kết thiệt hại cao hơn lương
              </div>
            </div>

            {/* Panel 2: Nhóm SX-SALES: 06h00 và bị kick */}
            <div className="bg-[#EBF2F8] border border-zinc-300 rounded-xl overflow-hidden text-xs flex flex-col justify-between">
              <div className="bg-[#0088FF] text-white p-2 text-xs font-semibold flex items-center justify-between">
                <span>SX-SALES: 06h00...</span>
                <span className="text-[10px]">46 thành viên</span>
              </div>
              <div className="p-2.5 space-y-2 bg-[#EBF2F8] flex-1">
                <div className="p-1.5 rounded bg-white text-center text-[10px] text-zinc-600 font-mono">
                  [Bảng chấm công danh sách phân ca]
                </div>
                <div className="bg-[#D1E8FF] p-1.5 rounded-lg text-zinc-900 text-[11px]">
                  <span className="text-blue-700 font-bold">@Lan Anhh</span> rep tin nhắn em với ạ
                </div>
                <div className="bg-[#D1E8FF] p-1.5 rounded-lg text-zinc-900 text-[11px]">
                  <span className="text-blue-700 font-bold">@Từngg</span> có xem tin nhắn rồi thì tl giúp em nhé
                </div>
                <div className="p-2 rounded-lg bg-red-100 border border-red-300 text-red-900 text-center font-bold text-[11px] space-y-0.5">
                  <AlertCircle className="w-4 h-4 mx-auto text-red-600" />
                  <p>Quản trị viên đã xóa Lư Kim Vàng ra khỏi nhóm trò chuyện</p>
                </div>
              </div>
              <div className="p-1.5 bg-red-100 text-red-800 text-[10px] text-center font-bold">
                Kick khỏi nhóm chat để né tránh
              </div>
            </div>

            {/* Panel 3: Chat với Từngg kèm mã VietQR */}
            <div className="bg-[#EBF2F8] border border-zinc-300 rounded-xl overflow-hidden text-xs flex flex-col justify-between">
              <div className="bg-[#0088FF] text-white p-2 text-xs font-semibold">Từngg (Người lạ)</div>
              <div className="p-2.5 space-y-2 bg-[#EBF2F8] flex-1">
                <div className="bg-[#D1E8FF] p-1.5 rounded-lg text-zinc-900 text-[11px]">
                  Dạ Lư Kim Vàng ạ. Cho em hỏi mình kiểm tra như nào rồi ạ?
                </div>
                <div className="bg-[#D1E8FF] p-2 rounded-lg text-zinc-900 text-[11px] space-y-1">
                  <p>Kiểm tra xong chưa bạn, giải quyết nhanh nha, làm ăn gì cứ im im z, có gì không biết nói hả?</p>
                  <p className="font-semibold text-red-800">
                    Kiểm tra rồi thì thanh toán lương giúp mình, có 100 mấy bắt nói quài mệt quá bạn
                  </p>
                </div>
                <div className="p-2 bg-white rounded border border-zinc-300 text-center space-y-1">
                  <QrCode className="w-10 h-10 mx-auto text-zinc-800" />
                  <span className="text-[10px] font-mono text-zinc-600 block">Mã VietQR tài khoản ngân hàng</span>
                </div>
              </div>
              <div className="p-1.5 bg-zinc-200 text-zinc-700 text-[10px] text-center font-bold">
                153.000 VNĐ tiền công mồ hôi nước mắt
              </div>
            </div>
          </div>
        </div>
      )}

      {/* PAGE 6: DANH SÁCH CHỨNG CỨ KÈM THEO - Hình 3 */}
      {activePage === 6 && (
        <div className="space-y-6 text-zinc-800 text-xs sm:text-sm">
          <div className="text-center pb-2 border-b border-zinc-300">
            <div className="font-bold text-base sm:text-lg uppercase text-black font-sans">
              DANH SÁCH CHỨNG CỨ KÈM THEO
            </div>
            <p className="text-xs text-zinc-500 italic mt-0.5">Tệp tài liệu đính kèm theo Đơn đề nghị hòa giải tranh chấp lao động (Trang 6/8)</p>
          </div>

          <div className="p-3 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
            <h4 className="font-bold text-red-900 text-xs sm:text-sm font-sans">
              Hình 3: Tin nhắn chị Lan Anh cố đánh đồng việc quên check-out (lỗi thủ tục của người lao động) với việc công ty không trả lương cho ngày đã làm (nghĩa vụ bắt buộc của người sử dụng lao động). Hai việc này hoàn toàn khác nhau. Liên tục đổ lỗi, lấy lý do rằng tôi nghỉ ngang nên trốn tránh việc thanh toán lương.
            </h4>
          </div>

          {/* Chat Long Screenshot Transcript of Lan Anhh */}
          <div className="max-w-xl mx-auto bg-[#EBF2F8] border border-zinc-300 rounded-xl overflow-hidden shadow-sm text-xs">
            <div className="bg-[#0088FF] text-white p-2.5 flex items-center justify-between font-sans">
              <span className="font-semibold flex items-center gap-1">← Lan Anhh</span>
              <span className="text-[10px] opacity-80">06:02 • 100%</span>
            </div>

            <div className="p-4 space-y-2.5 bg-gradient-to-b from-[#EBF2F8] to-[#E3ECF5]">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-zinc-200 space-y-1.5 text-zinc-900">
                <p>vấn đề là chị ko có lời mà chị thấy chị mệt dữ rồi á em</p>
                <p>em có làm căng thì chị cũng ko bị sao hết</p>
                <p className="font-semibold text-zinc-950">chị nói thật</p>
                <p>chị thật tâm nói với em</p>
                <p>chị là em là chị tự thấy mình có phần ko đúng rồi</p>
                <p>ko phải chì cá nhân nhé</p>
                <p>em ko tin thì chị cũng chịu</p>
                <p className="text-red-700 font-semibold">em là người gây khó khăn cho chị</p>
                <p>bản thân chị đã từng làm ở đây</p>
                <p>từng đi bán hàng</p>
                <p className="text-zinc-800 bg-amber-50 p-1 rounded border border-amber-200">
                  chị từng quên chụp ảnh checkout và chị bị mất ngày lương, chị phải chấp nhận th
                </p>
                <p>có kiện cáo cũng ko có tiền với mất công sức thêm</p>
                <p>thời gian đó mình kiếm lại còn hay hơn</p>
                <p>à, em có nhắn Tuấn thì bạn cũng ko giải quyết đc đâu</p>
                <p>chị và bạn cũng chỉ làm cho ngta th</p>
                <p className="italic text-zinc-600">chị kick em khỏi gr để em ko làm loãng thông tin chứ em đừng nghĩ xa xôi</p>
              </div>

              {/* The "Shopping" speech bubble */}
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border-2 border-red-500 space-y-1 text-zinc-900">
                <span className="text-[10px] font-bold text-red-600 uppercase">Đoạn so sánh phản cảm:</span>
                <p className="font-bold text-red-950 text-sm">
                  "lần đầu chị gặp trường hợp như em á, tưởng đâu em đi làm mà như đi shopping tính tiền t trả lại @@, đăng ký đi làm thì hàng đã sản xuất cho em đi làm, em nói nghỉ là nghỉ thì bất công cho phía doanh nghiệp quá"
                </p>
              </div>
            </div>

            <div className="p-2.5 bg-zinc-100 border-t border-zinc-200 text-xs text-zinc-700 text-center font-sans">
              <strong>Phân tích pháp lý:</strong> Quên check-out không thể là căn cứ hợp pháp để doanh nghiệp tước đoạt 100% tiền công người lao động đã làm việc.
            </div>
          </div>
        </div>
      )}

      {/* PAGE 7: DANH SÁCH CHỨNG CỨ KÈM THEO - Hình 4 */}
      {activePage === 7 && (
        <div className="space-y-6 text-zinc-800 text-xs sm:text-sm">
          <div className="text-center pb-2 border-b border-zinc-300">
            <div className="font-bold text-base sm:text-lg uppercase text-black font-sans">
              DANH SÁCH CHỨNG CỨ KÈM THEO
            </div>
            <p className="text-xs text-zinc-500 italic mt-0.5">Tệp tài liệu đính kèm theo Đơn đề nghị hòa giải tranh chấp lao động (Trang 7/8)</p>
          </div>

          <div className="p-3 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
            <h4 className="font-bold text-red-900 text-xs sm:text-sm font-sans">
              Hình 4: Đoạn tin nhắn yêu cầu thanh toán lương, không hề có lời lẽ đe dọa
            </h4>
          </div>

          {/* Screenshot Representation of Page 7: Tin nhắn của Nguyễn Minh Luân gửi Đậu Food */}
          <div className="max-w-xl mx-auto bg-[#EBF2F8] border border-zinc-300 rounded-xl overflow-hidden shadow-sm text-xs">
            <div className="bg-[#0088FF] text-white p-2.5 flex items-center justify-between font-sans">
              <span className="font-semibold flex items-center gap-1">← Lan Anhh (Người lạ)</span>
              <span className="text-[10px] opacity-80">11:31</span>
            </div>

            <div className="p-4 space-y-3 bg-gradient-to-b from-[#EBF2F8] to-[#E3ECF5]">
              {/* Outgoing Message from Representative */}
              <div className="flex justify-end">
                <div className="bg-[#D1E8FF] p-3.5 rounded-2xl rounded-tr-none border border-blue-200 text-zinc-900 space-y-2 max-w-[95%]">
                  <p className="font-semibold">
                    Chào Đậu Food, Mình là Nguyễn Minh Luân – chuyên viên SEO tại công ty MPF (mình không phải người lạ đến quấy rầy) – là anh của Kim Vàng.
                  </p>
                  <p>Sau khi tiếp nhận sự việc, mình xin tóm tắt lại một lần nữa cho rõ ràng:</p>
                  <ul className="list-disc list-inside space-y-1 pl-1 text-[11px] text-zinc-800">
                    <li>18:56 ngày 23/08/2026, phía công ty gửi lịch và vị trí làm việc. Lúc đó Vàng mới làm được khoảng 2 ngày.</li>
                    <li>Sau khoảng 40 phút sau (19:55), Vàng đã chủ động xin nghỉ vì địa điểm xa, không phù hợp.</li>
                    <li>13:03 ngày 24/08/2026, chị Lan Anh trả lời "oke em nha" – tức là đã chấp thuận việc Vàng nghỉ.</li>
                  </ul>

                  <p className="text-[11px]">
                    Sau khi nghỉ, Vàng đã nhiều lần yêu cầu thanh toán tiền lương cho những ngày đã làm thực tế. Phía công ty không thanh toán mà đưa ra các lý do: Quy kết "nghỉ đột xuất/nghỉ ngang", tự lấy "tiền hàng thiệt hại đã sản xuất" cao hơn lương, đề nghị chia 50/50.
                  </p>

                  <div className="p-2 rounded bg-white border border-blue-300 text-xs font-semibold text-blue-900 space-y-1">
                    <p>• Việc không ký HĐLĐ bằng văn bản không làm mất quyền được trả lương cho thời gian Vàng đã làm việc.</p>
                    <p>• Công ty không được tự ý chiếm dụng hoặc trừ hết lương bằng cách tự tính thiệt hại hàng hóa khi chưa chứng minh được lỗi theo quy định.</p>
                    <p className="text-red-800 font-bold">• Vi phạm Điều 102 Bộ luật Lao động 2019 về khấu trừ tiền lương.</p>
                  </div>

                  {/* Attached PDF Icon in chat */}
                  <div className="p-2 rounded-lg bg-red-50 border border-red-200 flex items-center gap-2 text-red-900">
                    <FileText className="w-5 h-5 text-red-600 shrink-0" />
                    <div>
                      <div className="font-bold text-xs">Don_de_nghi_lac_dong.pdf</div>
                      <div className="text-[10px] text-zinc-500">Tệp PDF đính kèm</div>
                    </div>
                  </div>

                  <p className="font-semibold text-zinc-950 pt-1">
                    Mình yêu cầu công ty thanh toán đầy đủ tiền lương cho những ngày Vàng đã làm việc trong thời hạn 24h kể từ khi nhận tin này. Nếu quá thời hạn trên mà công ty vẫn không thanh toán, mình sẽ gửi đơn đề nghị hòa giải tranh chấp lao động đến cơ quan có thẩm quyền...
                  </p>

                  <span className="text-[9px] text-zinc-500 block text-right">11:31</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 bg-zinc-100 border-t border-zinc-200 text-xs text-zinc-700 text-center font-sans">
              Toàn văn lời lẽ văn minh, lịch sự, đúng mực, viện dẫn pháp luật và thời hạn giải quyết thiện chí 24 giờ.
            </div>
          </div>
        </div>
      )}

      {/* PAGE 8: DANH SÁCH CHỨNG CỨ KÈM THEO - Hình 5 */}
      {activePage === 8 && (
        <div className="space-y-6 text-zinc-800 text-xs sm:text-sm">
          <div className="text-center pb-2 border-b border-zinc-300">
            <div className="font-bold text-base sm:text-lg uppercase text-black font-sans">
              DANH SÁCH CHỨNG CỨ KÈM THEO
            </div>
            <p className="text-xs text-zinc-500 italic mt-0.5">Tệp tài liệu đính kèm theo Đơn đề nghị hòa giải tranh chấp lao động (Trang 8/8)</p>
          </div>

          <div className="p-3 bg-red-50 border-l-4 border-red-600 rounded-r-lg">
            <h4 className="font-bold text-red-900 text-xs sm:text-sm font-sans">
              Hình 5: Phía công ty bảo sẽ cho tôi vào blacklist của các doanh nghiệp
            </h4>
          </div>

          {/* Screenshot Reproduction of Page 8: Tin nhắn Lan Anhh dọa Blacklist */}
          <div className="max-w-xl mx-auto bg-[#EBF2F8] border border-zinc-300 rounded-xl overflow-hidden shadow-sm text-xs">
            <div className="bg-[#0088FF] text-white p-2.5 flex items-center justify-between font-sans">
              <span className="font-semibold flex items-center gap-1">← Lan Anhh (Gửi yêu cầu kết bạn)</span>
              <span className="text-[10px] opacity-80">11:57 – 12:06</span>
            </div>

            <div className="p-4 space-y-3 bg-gradient-to-b from-[#EBF2F8] to-[#E3ECF5]">
              {/* Lan Anhh incoming bubbles */}
              <div className="space-y-1.5 max-w-[85%]">
                <div className="bg-white p-2 rounded-xl text-zinc-900 shadow-xs">
                  vậy thì kêu Vàng đến đây nhận nhé bạn
                </div>
                <div className="bg-white p-2 rounded-xl text-zinc-900 shadow-xs">
                  mệt quá trời
                </div>
                <div className="bg-white p-2 rounded-xl text-zinc-900 font-bold shadow-xs">
                  296 Võ Thành Trang
                </div>
                <div className="bg-white p-2 rounded-xl text-zinc-900 shadow-xs">
                  lên thẳng văn phòng nhận nhé
                </div>
                <div className="bg-white p-2 rounded-xl text-zinc-900 shadow-xs">
                  bạn làm đơn trên AI hả :)))
                </div>
                <div className="bg-white p-2 rounded-xl text-zinc-900 shadow-xs">
                  bên mình cũng có luật sư ngay tại văn phòng nhé
                </div>
                <div className="bg-white p-2 rounded-xl text-zinc-900 shadow-xs">
                  muốn trao đổi thì lên thẳng đây nhé bạn
                </div>

                {/* THE RED HIGHLIGHT BOX AS IN THE ORIGINAL PDF */}
                <div className="bg-red-50 p-3 rounded-xl border-2 border-red-600 shadow-sm space-y-1">
                  <span className="text-[10px] font-bold text-red-600 uppercase block">Trích xuất câu đe dọa (Đóng khung đỏ trong hồ sơ):</span>
                  <p className="font-black text-red-950 text-sm">
                    "bạn hăm dọa mình thì mình cũng cho tên bạn kia vào blacklist của các doanh nghiệp được nhé"
                  </p>
                  <p className="text-zinc-800 text-xs">
                    "ko nói chứ ko phải ko có cách nhé bạn"
                  </p>
                </div>
              </div>

              {/* Representative Response */}
              <div className="flex justify-end pt-2">
                <div className="bg-[#D1E8FF] p-2.5 rounded-2xl rounded-tr-none border border-blue-200 text-zinc-900 space-y-1 max-w-[85%]">
                  <p className="font-semibold text-blue-950">
                    Đúng rồi bạn, mình làm trên emlaw.vn. Và đừng ngáo quyền lực bằng việc đem blacklist ra để dọa người lao động.
                  </p>
                  <span className="text-[9px] text-zinc-500 block text-right">12:02</span>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-[#D1E8FF] p-2 rounded-2xl rounded-tr-none border border-blue-200 text-zinc-900 text-xs max-w-[85%]">
                  <p>thắc mắc việc công ty làm sai = đe dọa? mình ko muốn đôi co ạ. Xin phép.</p>
                  <span className="text-[9px] text-zinc-500 block text-right">12:06</span>
                </div>
              </div>
            </div>

            <div className="p-2.5 bg-red-100 border-t border-red-200 text-xs text-red-900 font-sans text-center font-bold">
              Minh chứng rõ ràng cho việc sử dụng đe dọa "blacklist" để trốn tránh trả 153.000đ tiền công.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
