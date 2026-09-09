import { TimelineEvent, EvidenceItem, LegalClause, ReviewCriterion, CommentItem } from '../types';

export const COMPANY_INFO = {
  name: 'CÔNG TY TNHH ĐẬU FOOD',
  shortName: 'Đậu Food',
  address: '296 Võ Thành Trang, Phường Bảy Hiền, Thành phố Hồ Chí Minh, Việt Nam',
  contactPerson: 'Chị Lan Anh (Nhân sự / Quản lý ca)',
  workerRole: 'Nhân viên bán hàng part-time / thử việc quầy',
  workedPeriod: '20/08/2026 – 21/08/2026 (2 ngày, 3 giờ/ngày)',
  wageRate: '25.000 đ/giờ (Thử việc) – 35.000 đ/giờ (Chính thức)',
  totalWageOwed: '150.000 đ (2 ngày x 3 giờ x 25.000 đ)',
  overallRating: 1.2,
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'step-1',
    date: '20/08 – 21/08/2026',
    time: '2 ca làm việc',
    title: 'Thực hiện công việc part-time theo thỏa thuận',
    actor: 'laborer',
    badge: 'Đã hoàn thành công việc',
    description:
      'Người lao động làm việc thực tế 2 ngày tại quầy bán (mỗi ngày 3 tiếng). Mức lương thỏa thuận thử việc là 25.000đ/giờ. Có hình ảnh điểm danh, lịch làm việc và tin nhắn giao việc đầy đủ làm căn cứ xác thực.',
    details: [
      'Tổng thời gian làm việc thực tế: 6 giờ.',
      'Tiền công tương ứng cần thanh toán: 150.000 VNĐ.',
      'Người lao động chấp hành nghiêm túc sự phân công của quản lý ca.'
    ]
  },
  {
    id: 'step-2',
    date: '23/08/2026',
    time: '18:56 – 19:55',
    title: 'Nhận vị trí mới & Chủ động xin nghỉ vì khoảng cách quá xa',
    actor: 'laborer',
    badge: 'Thông báo trước',
    description:
      'Lúc 18:56, nhân sự gửi vị trí làm việc tại điểm B16 (kèm vị trí Google Maps). Lúc 19:11, người lao động phản hồi “Dạ chị”. Sau khi xem xét nhận thấy địa điểm quá xa không thuận tiện gắn bó lâu dài, lúc 19:55 (chưa đầy 1 giờ sau) người lao động chủ động nhắn tin xin lỗi và xin phép dừng việc.',
    evidenceRef: 'Bằng chứng 1',
    details: [
      'Không hề có hành vi bỏ ngang hay tự ý biến mất không lý do.',
      'Chủ động báo trước với thái độ lịch sự, nêu rõ lý do khoảng cách địa lý không phù hợp.'
    ]
  },
  {
    id: 'step-3',
    date: '24/08/2026',
    time: '13:03',
    title: 'Phía nhân sự Đậu Food phản hồi chấp thuận: "oke em nha"',
    actor: 'company',
    badge: 'Hai bên đã thống nhất',
    description:
      'Chị Lan Anh đại diện nhân sự công ty nhắn lại nguyên văn: "oke em nha". Điều này thể hiện người sử dụng lao động đã tiếp nhận và đồng ý cho nhân viên nghỉ việc trong giai đoạn thử việc.',
    evidenceRef: 'Bằng chứng 1',
    details: [
      'Đã có sự ghi nhận và chấp thuận bằng văn bản tin nhắn của người quản lý.',
      'Quan hệ thử việc chấm dứt hợp lệ theo quy định của pháp luật lao động.'
    ]
  },
  {
    id: 'step-4',
    date: 'Sau khi nghỉ việc',
    time: 'Nhiều lần liên hệ',
    title: 'Yêu cầu thanh toán tiền công → Công ty từ chối và đổ lỗi',
    actor: 'company',
    badge: 'Vi phạm nghĩa vụ trả lương',
    description:
      'Người lao động nhiều lần nhắn tin gửi số tài khoản ngân hàng và mã VietQR yêu cầu thanh toán 150.000đ tiền công đã làm. Nhân sự không giải quyết mà quanh co: quy kết "nghỉ ngang gây thất thoát", tự cho rằng "tiền hàng thiệt hại đã sản xuất cao hơn lương" và đề nghị "chia 50/50".',
    evidenceRef: 'Bằng chứng 2 & 3',
    details: [
      'Đánh đồng lỗi thủ tục quên chụp ảnh check-out với việc từ chối trả toàn bộ tiền lương.',
      'Tự ý quy kết thiệt hại hàng hóa không qua kiểm kê, không có biên bản, không chứng minh lỗi.'
    ]
  },
  {
    id: 'step-5',
    date: '07/09/2026 - Ngày thanh toán lương hàng tháng',
    time: 'Giai đoạn leo thang',
    title: 'Kick khỏi group chat làm việc & Đe dọa đưa vào Blacklist',
    actor: 'company',
    badge: 'Ứng xử thiếu chuyên nghiệp',
    description:
      'Để né tránh đối diện với yêu cầu trả lương, phía quản lý đã kick người lao động ra khỏi group chat công việc. Khi người lao động tiếp tục yêu cầu quyền lợi chính đáng, đại diện công ty nhắn tin đe dọa: "bạn hăm doạ mình thì mình cũng cho tên bạn kia vào blacklist của các doanh nghiệp được nhé".',
    evidenceRef: 'Bằng chứng 5',
    details: [
      'Sử dụng quyền lực ảo để uy hiếp tinh thần người lao động trẻ / sinh viên.',
      'Né tránh nghĩa vụ thanh toán khoản tiền công tối thiểu theo luật định.'
    ]
  },
  {
    id: 'step-6',
    date: 'Hiện tại (08/09/2026)',
    time: 'Gửi văn bản cảnh báo',
    title: 'Lập văn bản yêu cầu thanh toán & Chuẩn bị hồ sơ khiếu nại',
    actor: 'laborer',
    badge: 'Chờ thiện chí của Đậu Food',
    description:
      'Người lao động đã hoàn thành văn bản yêu cầu thanh toán tiền lương và hồ sơ bằng chứng thực tế gửi cho đại diện Đậu Food (chưa nộp cơ quan chức năng vì ưu tiên để công ty tự giải quyết). Nếu công ty tiếp tục thoái thác hoặc thách thức, hồ sơ này sẽ được chính thức nộp lên cơ quan có thẩm quyền.',
    details: [
      'Đã gửi văn bản kèm đầy đủ hình ảnh tin nhắn đối chất cho Đậu Food.',
      'Sẵn sàng nộp cơ quan có thẩm quyền nếu Đậu Food không hoàn trả 150.000 VNĐ.'
    ]
  }
];

export interface AttachedEvidenceFile {
  id: string;
  name: string;
  type: 'image' | 'document';
  title: string;
  caption: string;
  previewUrl?: string;
  category: string;
  date: string;
}

export interface DocumentPage {
  pageNumber: number;
  title: string;
  subtitle: string;
  type: 'legal_text' | 'evidence_image';
  evidenceFigureNumber?: number;
  evidenceTitle?: string;
  evidenceCaption?: string;
}

export const REAL_DOCUMENT_INFO = {
  documentTitle: 'ĐƠN ĐỀ NGHỊ HÒA GIẢI TRANH CHẤP LAO ĐỘNG (ĐÃ CHE THÔNG TIN)',
  fullDocumentHeading: 'CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM\nĐộc lập – Tự do – Hạnh phúc\n───────────────────\nTPHCM, ngày 08 tháng 09 năm 2026',
  fileName: 'Don_de_nghi_hoa_giai_tranh_chap_lao_dong_che_thong_tin.pdf',
  fileSize: '8 trang (File PDF đã che thông tin cá nhân)',
  totalPages: 8,
  status: 'Đã hoàn thiện hồ sơ & Gửi trực tiếp cho Đậu Food (Đã che thông tin cá nhân)',
  submissionStatusNote: 'Bên mình chưa nộp lên cơ quan nhà nước, hiện đang gửi văn bản PDF đã che thông tin cá nhân và bộ 5 hình ảnh chứng cứ này trực tiếp cho Đậu Food.',
  createdDate: 'TPHCM, ngày 08 tháng 09 năm 2026',
  claimant: {
    name: 'LƯ KIM VÀNG',
    dob: '04/08/2004',
    cccd: '████████████ (Đã che)',
    issueDate: '11/05/2021',
    issuePlace: 'Cục trưởng Cục Cảnh sát quản lý hành chính về trật tự xã hội',
    permanentAddress: '████████████, Phường Long Phú, Tỉnh An Giang (Đã che)',
    currentAddress: '████████████, Phường Phú Thạnh, Thành phố Hồ Chí Minh (Đã che)',
    phone: '██████████ (Đã che)'
  },
  representative: 'Nguyễn Minh Luân (Chuyên viên SEO tại công ty MPF - Anh của Kim Vàng)',
  respondent: {
    companyName: 'CÔNG TY TNHH ĐẬU FOOD',
    address: '296 Võ Thành Trang, Phường Bảy Hiền, Thành phố Hồ Chí Minh, Việt Nam',
    manager: 'chị Lan Anh (nhân sự/quản lý ca) – liên hệ qua Zalo/tin nhắn',
    workType: 'Part-time, thử việc; không ký hợp đồng lao động bằng văn bản (thỏa thuận bằng lời nói/tin nhắn)'
  },
  totalClaim: '150.000 VNĐ (2 ngày làm việc x 3 tiếng/ngày x 25.000 đ/giờ)',
  pages: [
    {
      pageNumber: 1,
      title: 'Trang 1: Thông tin đương sự & Quá trình diễn biến',
      subtitle: 'Đơn đề nghị hòa giải tranh chấp lao động (Phần 1)',
      type: 'legal_text' as const
    },
    {
      pageNumber: 2,
      title: 'Trang 2: Chi tiết vụ việc & Căn cứ pháp lý',
      subtitle: 'Đơn đề nghị hòa giải tranh chấp lao động (Phần 2)',
      type: 'legal_text' as const
    },
    {
      pageNumber: 3,
      title: 'Trang 3: 4 Yêu cầu giải quyết & Chữ ký người làm đơn',
      subtitle: 'Đơn đề nghị hòa giải tranh chấp lao động (Phần 3)',
      type: 'legal_text' as const
    },
    {
      pageNumber: 4,
      title: 'Trang 4: Danh sách chứng cứ kèm theo – Hình 1',
      subtitle: 'Bằng chứng xin nghỉ với lý do hợp lý, không bỏ việc, nghỉ ngang không thông báo',
      type: 'evidence_image' as const,
      evidenceFigureNumber: 1,
      evidenceTitle: 'Hình 1: Bằng chứng xin nghỉ với lý do hợp lý, không bỏ việc, nghỉ ngang không thông báo',
      evidenceCaption: 'Tin nhắn gửi vị trí quầy b16 lúc 18:56, phản hồi "Dạ chị" lúc 19:11, xin nghỉ lúc 19:55 và nhân sự chấp thuận "oke em nha ❤️" lúc 13:03 ngày hôm sau.'
    },
    {
      pageNumber: 5,
      title: 'Trang 5: Danh sách chứng cứ kèm theo – Hình 2',
      subtitle: 'Né tránh nghĩa vụ trả lương & Kick khỏi group chat',
      type: 'evidence_image' as const,
      evidenceFigureNumber: 2,
      evidenceTitle: 'Hình 2: Sau khi yêu cầu thanh toán lương cho những ngày đã làm việc, phía nhân sự không giải quyết mà liên tục bơ tin nhắn, đùn đẩy trách nhiệm, sau đó kick tôi khỏi group chat để tránh đối diện. Đây là hành vi né tránh nghĩa vụ trả lương.',
      evidenceCaption: 'Người lao động gửi STK và mã VietQR nhận 150.000đ; nhân sự lấy cớ thiệt hại hàng hóa, đùn đẩy sang Từngg rồi kick khỏi group SX-SALES.'
    },
    {
      pageNumber: 6,
      title: 'Trang 6: Danh sách chứng cứ kèm theo – Hình 3',
      subtitle: 'Đánh đồng quên check-out với quỵt lương & So sánh shopping',
      type: 'evidence_image' as const,
      evidenceFigureNumber: 3,
      evidenceTitle: 'Hình 3: Tin nhắn chị Lan Anh cố đánh đồng việc quên check-out (lỗi thủ tục của người lao động) với việc công ty không trả lương cho ngày đã làm (nghĩa vụ bắt buộc của người sử dụng lao động). Hai việc này hoàn toàn khác nhau. Liên tục đổ lỗi, lấy lý do rằng tôi nghỉ ngang nên trốn tránh việc thanh toán lương.',
      evidenceCaption: 'Lan Anh nhắn: "tưởng đâu em đi làm mà như đi shopping tính tiền t trả lại @@, đăng ký đi làm thì hàng đã sản xuất cho em đi làm, em nói nghỉ là nghỉ thì bất công cho phía doanh nghiệp quá".'
    },
    {
      pageNumber: 7,
      title: 'Trang 7: Danh sách chứng cứ kèm theo – Hình 4',
      subtitle: 'Đoạn tin nhắn yêu cầu thanh toán lương, không hề có lời lẽ đe dọa',
      type: 'evidence_image' as const,
      evidenceFigureNumber: 4,
      evidenceTitle: 'Hình 4: Đoạn tin nhắn yêu cầu thanh toán lương, không hề có lời lẽ đe dọa',
      evidenceCaption: 'Đại diện người lao động (Nguyễn Minh Luân) tóm tắt sự việc, viện dẫn Điều 102 Bộ luật Lao động 2019, gửi kèm tệp Don_de_nghi_lac_dong.pdf với thời hạn thiện chí 24 giờ.'
    },
    {
      pageNumber: 8,
      title: 'Trang 8: Danh sách chứng cứ kèm theo – Hình 5',
      subtitle: 'Phía công ty bảo sẽ cho tôi vào blacklist của các doanh nghiệp',
      type: 'evidence_image' as const,
      evidenceFigureNumber: 5,
      evidenceTitle: 'Hình 5: Phía công ty bảo sẽ cho tôi vào blacklist của các doanh nghiệp',
      evidenceCaption: 'Lan Anh (Đậu Food) đe dọa: "bạn hăm dọa mình thì mình cũng cho tên bạn kia vào blacklist của các doanh nghiệp được nhé. ko nói chứ ko phải ko có cách nhé bạn".'
    }
  ],
  evidenceAttachments: [
    {
      id: 'att-1',
      name: 'Trang_4_Hinh_1_Xin_nghi_va_oke_em_nha.jpg',
      type: 'image' as const,
      title: 'Hình 1 (Trang 4/8): Bằng chứng xin nghỉ với lý do hợp lý, không bỏ việc',
      caption: 'Quầy B16, lịch làm việc, tin nhắn 19:11 "Dạ chị", 19:55 xin nghỉ và 13:03 "oke em nha ❤️".',
      category: 'Đồng thuận chấm dứt',
      date: '23/08 – 24/08/2026'
    },
    {
      id: 'att-2',
      name: 'Trang_5_Hinh_2_Bo_tin_nhan_va_kick_group.jpg',
      type: 'image' as const,
      title: 'Hình 2 (Trang 5/8): Bơ tin nhắn, đùn đẩy trách nhiệm & kick khỏi group',
      caption: 'Gửi STK, VietQR đòi lương thì bị lấy cớ thiệt hại hàng hóa và xóa khỏi nhóm SX-SALES: 06h00.',
      category: 'Trốn tránh trả lương',
      date: 'Sau khi nghỉ việc'
    },
    {
      id: 'att-3',
      name: 'Trang_6_Hinh_3_Danh_dong_checkout_va_do_loi.jpg',
      type: 'image' as const,
      title: 'Hình 3 (Trang 6/8): Đánh đồng quên check-out & so sánh "đi làm như đi shopping"',
      caption: 'Tin nhắn Lan Anh nói chuyện quên checkout bị mất lương và trách cứ nhân viên gây khó khăn.',
      category: 'Biện bạch vô căn cứ',
      date: '28/08/2026'
    },
    {
      id: 'att-4',
      name: 'Trang_7_Hinh_4_Tin_nhan_yeu_cau_thanh_toan_khong_de_doa.jpg',
      type: 'image' as const,
      title: 'Hình 4 (Trang 7/8): Tin nhắn yêu cầu thanh toán lương, không hề có lời lẽ đe dọa',
      caption: 'Tin nhắn gửi kèm Don_de_nghi_lac_dong.pdf, dẫn luật rõ ràng và văn minh.',
      category: 'Yêu cầu thiện chí',
      date: '28/08/2026'
    },
    {
      id: 'att-5',
      name: 'Trang_8_Hinh_5_De_doa_blacklist_doanh_nghiep.jpg',
      type: 'image' as const,
      title: 'Hình 5 (Trang 8/8): Phía công ty bảo sẽ cho tôi vào blacklist của các doanh nghiệp',
      caption: 'Đại diện Đậu Food đe dọa cho tên vào blacklist của các doanh nghiệp và thách thức đến 296 Võ Thành Trang.',
      category: 'Đe dọa uy tín',
      date: '28/08/2026'
    }
  ]
};

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'evidence-1',
    number: 1,
    title: 'Bằng chứng xin nghỉ hợp lý, quản lý chấp thuận "oke em nha"',
    summary:
      'Minh chứng rõ ràng việc người lao động đã thông báo xin nghỉ kịp thời chỉ sau gần 1 giờ nhận lịch và được quản lý xác nhận đồng thuận, không hề có việc "nghỉ ngang đột xuất".',
    keyTakeaway: 'Phía công ty đã nhắn tin xác nhận "oke em nha" nhưng sau đó lại lật lọng quy kết người lao động bỏ việc không phép.',
    lawViolationNote: 'Theo Điều 27 Bộ luật Lao động 2019: Trong thời gian thử việc, mỗi bên có quyền hủy bỏ thỏa thuận thử việc mà không cần báo trước và không phải bồi thường.',
    messages: [
      {
        sender: 'hr',
        senderName: 'Lan Anhh (Nhân sự Đậu Food)',
        time: '18:56 ngày 23/08/2026',
        text: 'b16 nhe, chị gửi vị trí quầy B16 [Đính kèm link Google Maps và hình ảnh quầy hàng]'
      },
      {
        sender: 'applicant',
        senderName: 'Người lao động (Vàng)',
        time: '19:11 ngày 23/08/2026',
        text: 'Dạ chị.'
      },
      {
        sender: 'applicant',
        senderName: 'Người lao động (Vàng)',
        time: '19:55 ngày 23/08/2026',
        text: 'Chị ơi, em xin phép báo chị là em muốn xin nghỉ việc ạ 🥺 Công việc thì ổn nhưng sau 2 ngày làm, em xem lịch sắp xếp em thấy địa điểm hiện tại hơi xa, đi lại không thuận tiện với em nên em sợ không thể làm lâu dài được ạ :<< Em cũng xin lỗi vì báo nghỉ, mong chị thông cảm giúp em nha.',
        isHighlighted: true
      },
      {
        sender: 'hr',
        senderName: 'Lan Anhh (Nhân sự Đậu Food)',
        time: '13:03 ngày 24/08/2026',
        text: 'oke em nha ❤️',
        isHighlighted: true
      }
    ]
  },
  {
    id: 'evidence-2',
    number: 2,
    title: 'Bơ tin nhắn đòi lương, đùn đẩy trách nhiệm & kick khỏi group chat',
    summary:
      'Sau khi người lao động gửi STK ngân hàng yêu cầu nhận lương 2 ngày đã làm việc thực tế, nhân sự liên tục lảng tránh, đùn đẩy sang người khác rồi kick thẳng tay khỏi nhóm.',
    keyTakeaway: 'Hành vi kick người lao động ra khỏi group chat ngay khi được hỏi về tiền lương là hành động trốn tránh nghĩa vụ trắng trợn.',
    lawViolationNote: 'Người sử dụng lao động có nghĩa vụ trả lương đầy đủ, đúng hạn theo Điều 94 và 97 Bộ luật Lao động 2019.',
    messages: [
      {
        sender: 'applicant',
        senderName: 'Người lao động (Vàng)',
        time: 'Tin nhắn gửi kèm STK VietQR',
        text: 'Em gửi STK, có gì chị thanh toán giúp em nha. Em cảm ơn ạ [Đính kèm ảnh mã VietQR ngân hàng]'
      },
      {
        sender: 'applicant',
        senderName: 'Người lao động (Vàng)',
        time: 'Sau khi chờ đợi không thấy phản hồi',
        text: 'Chị có thấy tin của em thì rep giúp em với nha 🥺 Em hỏi bạn Tùng về lương, bạn bảo kiểm tra mà giờ em chưa nhận được hồi âm ạ. Có gì chị liên hệ bạn ấy bảo bạn tính giúp em với nha.'
      },
      {
        sender: 'hr',
        senderName: 'Lan Anhh (Nhân sự Đậu Food)',
        time: '18:17',
        text: 'Bữa đó em nghỉ chị tính tiền hàng thiệt hại đã sản xuất cao hơn lương của em á Vàng ơi. Chị chưa duyệt mà em nghỉ đột xuất như vậy. Chị cũng bận để truy cứu trách nhiệm.',
        isHighlighted: true
      },
      {
        sender: 'applicant',
        senderName: 'Thông báo hệ thống nhóm chat',
        time: 'Sau đó',
        text: '⚠️ Quản trị viên đã xóa Lư Kim Vàng ra khỏi nhóm trò chuyện SX-SALES: 06h00...',
        isHighlighted: true
      }
    ]
  },
  {
    id: 'evidence-3',
    number: 3,
    title: 'Đánh đồng quên check-out với quỵt lương & Ngụy biện "thiệt hại hàng hóa"',
    summary:
      'Nhân sự cố tình lấy ví dụ cá nhân mình từng bị mất ngày lương do quên chụp ảnh check-out để ép người lao động chấp nhận mất 100% tiền công 2 ngày làm việc.',
    keyTakeaway: 'Quên chụp ảnh check-out (nếu có) chỉ là lỗi thủ tục hành chính, trong khi thực tế người lao động đã có mặt làm việc tại quầy, có camera và quản lý xác nhận.',
    lawViolationNote: 'Điều 102 BLLĐ 2019 cấm người sử dụng lao động tự ý khấu trừ tiền lương mà không qua quy trình và không chứng minh được lỗi gây thiệt hại trực tiếp.',
    messages: [
      {
        sender: 'hr',
        senderName: 'Lan Anhh (Nhân sự Đậu Food)',
        time: '06:02 sáng',
        text: 'Chị nói thật, chị thật tâm nói với em... Bản thân chị đã từng làm ở đây, từng đi bán hàng, chị từng quên chụp ảnh check out và chị bị mất ngày lương, chị phải chấp nhận thôi. Có kiện cáo cũng không có tiền với mất công sức thêm.'
      },
      {
        sender: 'hr',
        senderName: 'Lan Anhh (Nhân sự Đậu Food)',
        time: 'Tiếp tục tin nhắn',
        text: 'Thời gian đó mình kiếm lại còn hay hơn. À em có nhờ Tuấn thì bạn cũng không giải quyết được đâu... Chị kick em khỏi group để em không làm loãng thông tin chứ em đừng nghĩ xa xôi.'
      },
      {
        sender: 'hr',
        senderName: 'Lan Anhh (Nhân sự Đậu Food)',
        time: 'Đoạn kết',
        text: 'Lần đầu chị gặp trường hợp như em á, tưởng đâu em đi làm mà như đi shopping tính tiền một trả một @@. Đăng ký đi làm thì hàng đã sản xuất cho em đi làm, em nói nghỉ là nghỉ thì bất công cho phía doanh nghiệp quá.',
        isHighlighted: true
      }
    ]
  },
  {
    id: 'evidence-4',
    number: 4,
    title: 'Tin nhắn bảo vệ quyền lợi hợp pháp, dẫn chứng Điều 102 Bộ luật Lao động 2019',
    summary:
      'Đại diện của người lao động đã gửi tin nhắn giải trình cặn kẽ, khách quan, phân tích điều luật và cho công ty thời hạn 24 giờ giải quyết trước khi nộp đơn hòa giải.',
    keyTakeaway: 'Người lao động hành xử văn minh, đúng trình tự pháp luật và có gửi kèm Đơn đề nghị hòa giải chính thức.',
    lawViolationNote: 'Bảo vệ quyền khởi kiện và yêu cầu hòa giải tranh chấp lao động cá nhân theo quy định tại Chương XIV Bộ luật Lao động 2019.',
    messages: [
      {
        sender: 'representative',
        senderName: 'Đại diện người lao động (Nguyễn Minh Luân)',
        time: '11:30 ngày 28/08/2026',
        text: 'Chào Đậu Food, Mình xin tóm tắt lại: Lúc 19:55 ngày 23/08 Vàng đã chủ động xin nghỉ vì địa điểm xa. Lúc 13:03 ngày 24/08 chị Lan Anh trả lời "oke em nha" – tức đã chấp nhận. Việc không ký HĐLĐ bằng văn bản không làm mất quyền được trả lương cho thời gian đã làm việc.'
      },
      {
        sender: 'representative',
        senderName: 'Đại diện người lao động (Nguyễn Minh Luân)',
        time: 'Trích dẫn pháp luật',
        text: 'Công ty không được tự ý chiếm dụng hoặc trừ hết lương bằng cách tự tính thiệt hại hàng hóa khi chưa chứng minh được lỗi, mức thiệt hại thực tế và chưa đúng trình tự. Việc khấu trừ lương phải theo Điều 102 Bộ luật Lao động 2019. Đính kèm: Don_de_nghi...lao_dong.pdf',
        isHighlighted: true
      },
      {
        sender: 'representative',
        senderName: 'Đại diện người lao động (Nguyễn Minh Luân)',
        time: '11:31',
        text: 'Yêu cầu công ty thanh toán đầy đủ tiền lương trong thời hạn 24h. Nếu quá thời hạn, chúng tôi sẽ gửi đơn đề nghị hòa giải tranh chấp lao động đến cơ quan có thẩm quyền.'
      }
    ]
  },
  {
    id: 'evidence-5',
    number: 5,
    title: 'Đe dọa đưa tên người lao động vào "Blacklist của các doanh nghiệp"',
    summary:
      'Khi bị nhắc nhở về vi phạm pháp luật và đơn thư hòa giải, đại diện công ty không những không giải quyết mà còn có lời lẽ đe dọa chèn ép con đường tìm việc của người lao động.',
    keyTakeaway: 'Một doanh nghiệp sẵn sàng đe dọa "cho vào blacklist các doanh nghiệp" đối với một nhân viên part-time mới đi làm 2 ngày đòi 150.000đ tiền công.',
    lawViolationNote: 'Hành vi đe dọa, xúc phạm uy tín người lao động vi phạm nghiêm trọng chuẩn mực ứng xử nghề nghiệp và đạo đức kinh doanh.',
    messages: [
      {
        sender: 'hr',
        senderName: 'Lan Anhh (Nhân sự Đậu Food)',
        time: '11:57',
        text: 'vậy thì kêu Vàng đến đây nhận nhé bạn, mệt quá trời, 296 Võ Thành Trang lên thẳng văn phòng nhận nhé. Bạn làm đơn trên AI hả :))) Bên mình cũng có luật sư ngay tại văn phòng nhé, muốn trao đổi thì lên thẳng đây nhé bạn.'
      },
      {
        sender: 'hr',
        senderName: 'Lan Anhh (Nhân sự Đậu Food)',
        time: '11:58',
        text: 'bạn hăm dọa mình thì mình cũng cho tên bạn kia vào blacklist của các doanh nghiệp được nhé. ko nói chứ ko phải ko có cách nhé bạn',
        isHighlighted: true
      },
      {
        sender: 'representative',
        senderName: 'Đại diện người lao động',
        time: '12:02',
        text: 'Và đừng ngáo quyền lực bằng việc đem blacklist ra để dọa người lao động.'
      },
      {
        sender: 'representative',
        senderName: 'Đại diện người lao động',
        time: '12:06',
        text: 'thắc mắc việc công ty làm sai = đe dọa? mình ko muốn đôi co ạ. Xin phép.'
      }
    ]
  }
];

export const LEGAL_CLAUSES: LegalClause[] = [
  {
    article: 'Điều 13, 14 & 90',
    law: 'Bộ luật Lao động 2019',
    title: 'Xác lập quan hệ lao động & Nghĩa vụ trả tiền lương',
    quote:
      'Hợp đồng lao động là sự thỏa thuận giữa người lao động và người sử dụng lao động về việc làm có trả công, tiền lương... Trước khi nhận người lao động vào làm việc thì người sử dụng lao động phải giao kết hợp đồng lao động.',
    plainExplanation:
      'Dù công ty không đưa hợp đồng bằng văn bản cho bạn ký, nhưng chỉ cần hai bên đã thỏa thuận công việc và mức lương (qua tin nhắn, lời nói), quan hệ lao động đã phát sinh. Người sử dụng lao động bắt buộc phải trả lương cho mọi giờ bạn đã làm việc.',
    applicationToCase:
      'Đậu Food không ký HĐLĐ bằng văn bản là lỗi và vi phạm của chính công ty, hoàn toàn không làm mất đi quyền nhận 150.000đ của người lao động.'
  },
  {
    article: 'Điều 27',
    law: 'Bộ luật Lao động 2019',
    title: 'Quyền kết thúc thời gian thử việc của hai bên',
    quote:
      'Trong thời gian thử việc, mỗi bên có quyền hủy bỏ hợp đồng thử việc hoặc hợp đồng lao động đã giao kết mà không cần báo trước và không phải bồi thường.',
    plainExplanation:
      'Khi đang trong thời gian thử việc (nhất là part-time), bạn có toàn quyền dừng làm việc nếu thấy không phù hợp mà KHÔNG phải bồi thường bất kỳ khoản tiền nào cho công ty. Công ty cũng không được vin vào đây để trừ lương.',
    applicationToCase:
      'Người lao động mới thử việc 2 ngày, đã xin nghỉ lịch sự và nhân sự đã nhắn "oke em nha". Việc công ty gán tội "nghỉ đột xuất gây thiệt hại" là hoàn toàn trái luật.'
  },
  {
    article: 'Điều 102 & 129',
    law: 'Bộ luật Lao động 2019',
    title: 'Nghiêm cấm tự ý khấu trừ tiền lương & Trách nhiệm bồi thường',
    quote:
      'Người sử dụng lao động chỉ được khấu trừ tiền lương của người lao động để bồi thường thiệt hại do làm hư hỏng dụng cụ, thiết bị, tài sản... theo quy định tại Điều 129 của Bộ luật này. Người lao động có quyền được biết lý do khấu trừ tiền lương của mình.',
    plainExplanation:
      'Công ty không được phép "tự phán xét" rồi trừ sạch tiền lương của bạn. Muốn bắt đền tài sản hay hàng hóa, công ty phải thành lập biên bản, chứng minh lỗi trực tiếp của bạn, chứng minh thiệt hại thực tế và phải tuân thủ hạn mức khấu trừ (không quá 30% tiền lương hàng tháng).',
    applicationToCase:
      'Đậu Food tự nói mồm "tiền hàng thiệt hại đã sản xuất cao hơn lương" mà không có bất kỳ biên bản kiểm kê, không chứng minh hàng bị hỏng hay bán ế do lỗi của nhân sự thử việc, rồi chiếm giữ toàn bộ tiền lương là hành vi chiếm đoạt công sức lao động.'
  }
];

export const REVIEW_CRITERIA: ReviewCriterion[] = [
  {
    label: 'Thanh toán tiền lương đúng hạn & Đầy đủ',
    score: 1.0,
    maxScore: 5.0,
    critique:
      'Từ chối thanh toán 150.000 VNĐ cho 2 ngày làm việc thực tế của nhân viên thử việc, lấy cớ tiền hàng sản xuất để quỵt lương.',
    impact: 'critical'
  },
  {
    label: 'Tính minh bạch về hợp đồng lao động',
    score: 1.0,
    maxScore: 5.0,
    critique:
      'Không giao kết hợp đồng lao động bằng văn bản theo luật, sau đó đổ lỗi "từ đầu không đề cập hợp đồng thì không trách một phía".',
    impact: 'critical'
  },
  {
    label: 'Văn hóa ứng xử với nhân viên Part-time',
    score: 1.0,
    maxScore: 5.0,
    critique:
      'Bơ tin nhắn, kick nhân viên khỏi nhóm chat khi bị đòi lương, buông lời đe dọa "cho vào blacklist của các doanh nghiệp".',
    impact: 'critical'
  },
  {
    label: 'Tuân thủ pháp luật & Đạo đức kinh doanh',
    score: 1.5,
    maxScore: 5.0,
    critique:
      'Không tuân thủ quy định về thử việc tại Điều 27 và khấu trừ tiền lương tại Điều 102 Bộ luật Lao động 2019.',
    impact: 'high'
  }
];

export const INITIAL_COMMENTS: CommentItem[] = [
  {
    id: 'c1',
    author: 'Trần Minh K.',
    role: 'Sinh viên năm 2 - ĐH Kinh Tế TP.HCM',
    timestamp: '2 giờ trước',
    content:
      'Mình từng đi làm part-time chuỗi đồ uống, nếu thử việc thấy không hợp quản lý cho nghỉ bình thường và cuối tháng vẫn chuyển khoản từng giờ công đã làm. Doanh nghiệp làm ăn mà 153k cũng tìm cớ đổ thừa hàng hóa để quỵt của sinh viên thì quá tệ!',
    likes: 42,
    verified: true
  },
  {
    id: 'c2',
    author: 'Lê Hoàng Yến',
    role: 'Cựu nhân viên dịch vụ F&B',
    timestamp: '5 giờ trước',
    content:
      'Đọc đoạn tin nhắn "cho vào blacklist của các doanh nghiệp" mà cười ra nước mắt. Một công ty tư nhân nhỏ lấy tư cách gì ra danh sách đen doanh nghiệp? Dọa các bạn sinh viên mới ra đời chưa hiểu luật thôi. Ủng hộ bạn làm đơn hòa giải đến cùng!',
    likes: 89,
    verified: true
  },
  {
    id: 'c3',
    author: 'Võ Quốc Huy',
    role: 'Cử nhân Luật Lao Động',
    timestamp: '1 ngày trước',
    content:
      'Theo Điều 27 BLLĐ 2019, thử việc hai bên đều có quyền hủy bỏ mà không cần báo trước và không phải bồi thường. Công ty tự ý quy kết thiệt hại sản xuất mà không có biên bản kiểm kê, không chứng minh lỗi trực tiếp là vi phạm nghiêm trọng Điều 102 và Điều 129.',
    likes: 126,
    verified: true
  }
];
