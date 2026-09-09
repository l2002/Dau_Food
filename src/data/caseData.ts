import { TimelineEvent, EvidenceItem, LegalClause, ReviewCriterion, CommentItem } from '../types';

export const COMPANY_INFO = {
  name: 'CÔNG TY TNHH ĐẬU FOOD',
  shortName: 'Đậu Food',
  address: '296 Võ Thành Trang, Phường Bảy Hiền, Thành phố Hồ Chí Minh, Việt Nam',
  contactPerson: 'Chị Lan Anh (Nhân sự / Quản lý ca)',
  workerRole: 'Nhân viên bán hàng part-time / thử việc quầy',
  workedPeriod: '20/08/2026 – 21/08/2026 (2 ngày, 3 giờ/ngày)',
  wageRate: '25.000 đ/giờ (Thử việc) – 35.000 đ/giờ (Chính thức)',
  totalWageOwed: 'Khoản tiền công đang tranh chấp: 150.000 đ (2 ngày x 3 giờ x 25.000 đ)',
};

export const LEGAL_DISCLAIMER = `Trang này ghi nhận phản ánh và tài liệu do người đăng cung cấp về một tranh chấp tiền công cá nhân. Nội dung không thay thế kết luận của cơ quan nhà nước có thẩm quyền. Doanh nghiệp có quyền gửi phản hồi, tài liệu đối chứng hoặc yêu cầu đính chính; phản hồi phù hợp sẽ được cập nhật.`;

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'step-1',
    date: '20/08 – 21/08/2026',
    time: '2 ca làm việc',
    title: 'Thực hiện công việc part-time theo thỏa thuận',
    actor: 'laborer',
    badge: 'Đã hoàn thành công việc',
    description:
      'Người lao động làm việc thực tế 2 ngày tại quầy bán (mỗi ngày 3 tiếng). Mức lương thỏa thuận thử việc là 25.000đ/giờ. Có hình ảnh điểm danh, lịch làm việc và tin nhắn phân công làm việc thực tế.',
    details: [
      'Tổng thời gian làm việc thực tế: 6 giờ (2 ca, 3 giờ/ca).',
      'Khoản tiền công tương ứng theo mức thỏa thuận: 150.000 VNĐ.',
      'Người lao động thực hiện theo lịch phân công của quản lý.'
    ]
  },
  {
    id: 'step-2',
    date: '23/08/2026',
    time: '18:56 – 19:55',
    title: 'Nhận vị trí mới & Chủ động xin nghỉ vì khoảng cách địa lý',
    actor: 'laborer',
    badge: 'Chủ động thông báo',
    description:
      'Lúc 18:56, nhân sự gửi vị trí làm việc tại điểm B16 (kèm vị trí Google Maps). Lúc 19:11, người lao động phản hồi “Dạ chị”. Sau khi xem xét địa điểm, nhận thấy nơi làm việc xa không thuận tiện gắn bó lâu dài, lúc 19:55 (chưa đầy 1 giờ sau) người lao động chủ động nhắn tin xin lỗi và xin dừng việc.',
    evidenceRef: 'Hình 1',
    details: [
      'Chủ động nhắn tin xin nghỉ với lý do địa điểm làm việc xa.',
      'Thời điểm thông báo xin nghỉ chưa đầy 01 giờ kể từ khi nhận vị trí quầy mới.'
    ]
  },
  {
    id: 'step-3',
    date: '24/08/2026',
    time: '13:03',
    title: 'Phía nhân sự Đậu Food phản hồi: "oke em nha"',
    actor: 'company',
    badge: 'Ghi nhận tin nhắn',
    description:
      'Chị Lan Anh đại diện nhân sự phản hồi qua tin nhắn: "oke em nha ❤️". Phía người lao động hiểu rằng yêu cầu xin nghỉ đã được người quản lý tiếp nhận.',
    evidenceRef: 'Hình 1',
    details: [
      'Có tin nhắn phản hồi ghi nhận việc xin nghỉ việc.',
      'Người lao động chuẩn bị thông tin để nhận quyết toán tiền công.'
    ]
  },
  {
    id: 'step-4',
    date: 'Sau khi nghỉ việc',
    time: 'Nhiều lần liên hệ',
    title: 'Yêu cầu thanh toán tiền công → Chưa thống nhất phương thức giải quyết',
    actor: 'company',
    badge: 'Chưa thống nhất',
    description:
      'Theo phản ánh của người đăng, người lao động gửi STK và mã QR yêu cầu thanh toán khoản tiền công 150.000đ. Phía nhân sự trao đổi theo hướng cho rằng việc nghỉ đột xuất gây thiệt hại hàng đã sản xuất cao hơn tiền lương và đề xuất phương án chia 50/50.',
    evidenceRef: 'Hình 2 & 3',
    details: [
      'Phía nhân sự đề cập việc quên check-out và chi phí hàng đã sản xuất.',
      'Hai bên chưa thống nhất về phương thức thanh toán và căn cứ tính toán thiệt hại.'
    ]
  },
  {
    id: 'step-5',
    date: '07/09 – 08/09/2026',
    time: 'Trao đổi qua tin nhắn',
    title: 'Xóa khỏi nhóm chat & Trao đổi về danh sách blacklist và địa điểm nhận',
    actor: 'company',
    badge: 'Trao đổi căng thẳng',
    description:
      'Quản trị viên xóa người lao động ra khỏi nhóm trò chuyện SX-SALES. Khi người đại diện tiếp tục liên hệ, nhân sự yêu cầu đến trực tiếp văn phòng 296 Võ Thành Trang để nhận, đồng thời có tin nhắn phản hồi đề cập việc đưa thông tin vào blacklist của doanh nghiệp nếu bị hăm dọa.',
    evidenceRef: 'Hình 4 & 5',
    details: [
      'Công ty yêu cầu người lao động đến trực tiếp văn phòng 296 Võ Thành Trang để giải quyết.',
      'Phía người lao động mong muốn nhận chuyển khoản qua STK do đã nghỉ việc và ở xa.',
      'Có tin nhắn qua lại liên quan đến việc đưa vào danh sách blacklist.'
    ]
  },
  {
    id: 'step-6',
    date: '08/09/2026',
    time: 'Văn bản hòa giải',
    title: 'Lập Đơn đề nghị hòa giải tranh chấp lao động & Lưu hành thiện chí',
    actor: 'laborer',
    badge: 'Trình tự pháp lý',
    description:
      'Người lao động lập Đơn đề nghị hòa giải tranh chấp lao động kèm 5 hình ảnh chứng cứ thực tế, gửi trực tiếp văn bản (đã che thông tin cá nhân) cho phía Đậu Food với thời hạn thiện chí trước khi gửi đến cơ quan hòa giải có thẩm quyền.',
    details: [
      'Chuẩn bị hồ sơ đầy đủ gồm đơn hòa giải và 5 tài liệu đính kèm.',
      'Ưu tiên hai bên tự thương lượng và giải quyết khoản tiền công 150.000 VNĐ.'
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
  fileSize: '2.38 MB (Tệp PDF 8 trang gốc)',
  totalPages: 8,
  status: 'Đã hoàn thiện hồ sơ & Gửi trực tiếp cho Đậu Food (Đã che thông tin cá nhân)',
  submissionStatusNote: 'Bên người lao động chưa nộp lên cơ quan nhà nước, hiện đang gửi văn bản PDF đã che thông tin cá nhân và bộ 5 hình ảnh chứng cứ này trực tiếp cho Đậu Food.',
  createdDate: 'TPHCM, ngày 08 tháng 09 năm 2026',
  claimant: {
    name: 'LƯ KIM VÀNG',
    dob: '04/08/2004',
    cccd: '████████████ (Đã che)',
    issueDate: '11/05/2022',
    issuePlace: 'Cục trưởng Cục Cảnh sát quản lý hành chính về trật tự xã hội',
    permanentAddress: '████████████, Phường Long Phú, Tỉnh An Giang (Đã che)',
    currentAddress: '████████████, Phường Phú Thạnh, Thành phố Hồ Chí Minh (Đã che)',
    phone: '██████████ (Đã che)'
  },
  representative: 'Nguyễn Minh Luân (Anh của Kim Vàng)',
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
      title: 'Trang 3: Yêu cầu giải quyết & Danh mục tài liệu',
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
      evidenceCaption: 'Tin nhắn gửi vị trí quầy B16 lúc 18:56, phản hồi "Dạ chị" lúc 19:11, xin nghỉ lúc 19:55 và nhân sự phản hồi "oke em nha ❤️" lúc 13:03 ngày hôm sau.'
    },
    {
      pageNumber: 5,
      title: 'Trang 5: Danh sách chứng cứ kèm theo – Hình 2',
      subtitle: 'Sau khi yêu cầu thanh toán tiền công, nhân sự chưa giải quyết và xóa khỏi nhóm chat',
      type: 'evidence_image' as const,
      evidenceFigureNumber: 2,
      evidenceTitle: 'Hình 2: Sau khi yêu cầu thanh toán tiền công, phía nhân sự trao đổi về thiệt hại hàng hóa, chưa thống nhất phương thức giải quyết và xóa khỏi nhóm chat',
      evidenceCaption: 'Người lao động gửi STK và mã VietQR nhận 150.000đ; nhân sự trao đổi về thiệt hại hàng hóa, chuyển thông tin và sau đó xóa khỏi nhóm SX-SALES.'
    },
    {
      pageNumber: 6,
      title: 'Trang 6: Danh sách chứng cứ kèm theo – Hình 3',
      subtitle: 'Tin nhắn trao đổi về việc quên check-out và chi phí hàng hóa đã sản xuất',
      type: 'evidence_image' as const,
      evidenceFigureNumber: 3,
      evidenceTitle: 'Hình 3: Tin nhắn trao đổi về việc quên check-out và quan điểm phía công ty về chi phí hàng hóa đã sản xuất',
      evidenceCaption: 'Tin nhắn trao đổi về việc quên check-out và quan điểm của phía công ty về việc hàng đã sản xuất phục vụ ca làm việc.'
    },
    {
      pageNumber: 7,
      title: 'Trang 7: Danh sách chứng cứ kèm theo – Hình 4',
      subtitle: 'Đoạn tin nhắn yêu cầu thanh toán lương, không hề có lời lẽ đe dọa',
      type: 'evidence_image' as const,
      evidenceFigureNumber: 4,
      evidenceTitle: 'Hình 4: Đoạn tin nhắn yêu cầu thanh toán lương, không hề có lời lẽ đe dọa',
      evidenceCaption: 'Đại diện người lao động tóm tắt sự việc, viện dẫn Điều 102 Bộ luật Lao động 2019, gửi kèm tệp văn bản đề nghị hòa giải.'
    },
    {
      pageNumber: 8,
      title: 'Trang 8: Danh sách chứng cứ kèm theo – Hình 5',
      subtitle: 'Tin nhắn trao đổi về việc mời đến nhận trực tiếp và đề cập danh sách blacklist',
      type: 'evidence_image' as const,
      evidenceFigureNumber: 5,
      evidenceTitle: 'Hình 5: Trao đổi về phương thức nhận tiền và đề cập danh sách blacklist doanh nghiệp',
      evidenceCaption: 'Phía công ty yêu cầu lên trực tiếp văn phòng 296 Võ Thành Trang để nhận tiền, đồng thời có tin nhắn đề cập việc đưa thông tin vào blacklist của doanh nghiệp nếu bị đe dọa.'
    }
  ],
  evidenceAttachments: [
    {
      id: 'att-1',
      name: 'Trang_4_Hinh_1_Xin_nghi_va_oke_em_nha.jpg',
      type: 'image' as const,
      title: 'Hình 1 (Trang 4/8): Bằng chứng xin nghỉ với lý do hợp lý, không bỏ việc',
      caption: 'Quầy B16, lịch làm việc, tin nhắn 19:11 "Dạ chị", 19:55 xin nghỉ và 13:03 "oke em nha ❤️".',
      category: 'Thông báo chấm dứt thử việc',
      date: '23/08 – 24/08/2026'
    },
    {
      id: 'att-2',
      name: 'Trang_5_Hinh_2_Bo_tin_nhan_va_kick_group.jpg',
      type: 'image' as const,
      title: 'Hình 2 (Trang 5/8): Gửi STK đòi lương, trao đổi về hàng hóa & xóa khỏi nhóm',
      caption: 'Gửi STK, VietQR đề nghị thanh toán; trao đổi về hàng hóa và thông báo rời nhóm SX-SALES: 06h00.',
      category: 'Trao đổi thanh toán',
      date: 'Sau khi nghỉ việc'
    },
    {
      id: 'att-3',
      name: 'Trang_6_Hinh_3_Danh_dong_checkout_va_do_loi.jpg',
      type: 'image' as const,
      title: 'Hình 3 (Trang 6/8): Trao đổi về việc check-out & chi phí sản xuất',
      caption: 'Tin nhắn trao đổi về việc quên check-out và góc nhìn chi phí sản xuất của doanh nghiệp.',
      category: 'Giải trình hai bên',
      date: '28/08/2026'
    },
    {
      id: 'att-4',
      name: 'Trang_7_Hinh_4_Tin_nhan_yeu_cau_thanh_toan_khong_de_doa.jpg',
      type: 'image' as const,
      title: 'Hình 4 (Trang 7/8): Tin nhắn yêu cầu thanh toán tiền công, dẫn luật rõ ràng',
      caption: 'Tin nhắn gửi kèm tệp Don_de_nghi_lac_dong.pdf, viện dẫn căn cứ pháp luật.',
      category: 'Đề nghị hòa giải',
      date: '28/08/2026'
    },
    {
      id: 'att-5',
      name: 'Trang_8_Hinh_5_De_doa_blacklist_doanh_nghiep.jpg',
      type: 'image' as const,
      title: 'Hình 5 (Trang 8/8): Yêu cầu nhận trực tiếp & trao đổi về danh sách blacklist',
      caption: 'Công ty yêu cầu đến nhận trực tiếp tại 296 Võ Thành Trang và phản hồi về blacklist nếu bị hăm dọa.',
      category: 'Phương thức thanh toán',
      date: '28/08/2026'
    }
  ]
};

export const EVIDENCE_ITEMS: EvidenceItem[] = [
  {
    id: 'evidence-1',
    number: 1,
    title: 'Thông báo xin nghỉ kịp thời & Phản hồi tiếp nhận "oke em nha"',
    summary:
      'Người lao động đã chủ động thông báo xin dừng việc sau khi nhận địa điểm mới vì lý do khoảng cách xa, và nhân sự có tin nhắn phản hồi tiếp nhận.',
    keyTakeaway: 'Người lao động đã chủ động báo trước lịch sự và nhận được tin nhắn phản hồi từ nhân sự.',
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
    title: 'Đề nghị thanh toán tiền công, trao đổi về hàng hóa & Xóa khỏi nhóm chat',
    summary:
      'Theo phản ánh của người đăng, người lao động gửi STK ngân hàng đề nghị thanh toán tiền công 2 ngày đã làm việc; phía nhân sự trao đổi về thiệt hại hàng hóa và sau đó xóa khỏi nhóm.',
    keyTakeaway: 'Hai bên phát sinh bất đồng về phương thức giải quyết và thanh toán khoản tiền công 150.000 đồng.',
    lawViolationNote: 'Điều 94 và 97 Bộ luật Lao động 2019 quy định về nguyên tắc và thời hạn thanh toán tiền lương cho người lao động.',
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
        time: 'Sau khi chờ đợi',
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
        senderName: 'Thông báo nhóm chat',
        time: 'Sau đó',
        text: 'Quản trị viên đã xóa Lư Kim Vàng ra khỏi nhóm trò chuyện SX-SALES: 06h00...',
        isHighlighted: true
      }
    ]
  },
  {
    id: 'evidence-3',
    number: 3,
    title: 'Trao đổi về việc quên check-out & Góc nhìn chi phí hàng đã sản xuất',
    summary:
      'Nhân sự nêu ví dụ bản thân từng bị mất lương do quên check-out và giải thích về thiệt hại nguyên vật liệu sản xuất khi nhân viên dừng việc.',
    keyTakeaway: 'Hai bên có góc nhìn khác nhau giữa lỗi hành chính quên check-out và nghĩa vụ chi trả tiền công cho thời gian đã làm việc thực tế.',
    lawViolationNote: 'Điều 102 Bộ luật Lao động 2019 quy định người sử dụng lao động chỉ được khấu trừ tiền lương để bồi thường thiệt hại theo đúng trình tự luật định.',
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
    title: 'Tin nhắn trao đổi căn cứ pháp luật và đề nghị giải quyết hòa giải',
    summary:
      'Đại diện của người lao động gửi tin nhắn tóm tắt sự việc, viện dẫn Điều 102 Bộ luật Lao động 2019 và gửi kèm tệp đơn hòa giải.',
    keyTakeaway: 'Phía người lao động đưa ra các căn cứ pháp lý và đề nghị giải quyết trước khi nộp đơn lên cơ quan nhà nước.',
    lawViolationNote: 'Quy trình giải quyết tranh chấp lao động cá nhân theo quy định tại Chương XIV Bộ luật Lao động 2019.',
    messages: [
      {
        sender: 'representative',
        senderName: 'Đại diện người lao động (Nguyễn Minh Luân)',
        time: '11:30 ngày 28/08/2026',
        text: 'Chào Đậu Food, Mình xin tóm tắt lại: Lúc 19:55 ngày 23/08 Vàng đã chủ động xin nghỉ vì địa điểm xa. Lúc 13:03 ngày 24/08 chị Lan Anh trả lời "oke em nha" – tức đã tiếp nhận. Việc không ký HĐLĐ bằng văn bản không làm mất quyền được trả lương cho thời gian đã làm việc.'
      },
      {
        sender: 'representative',
        senderName: 'Đại diện người lao động (Nguyễn Minh Luân)',
        time: 'Trích dẫn pháp luật',
        text: 'Công ty không được tự ý trừ hết lương bằng cách tự tính thiệt hại hàng hóa khi chưa chứng minh được lỗi, mức thiệt hại thực tế và chưa đúng trình tự. Việc khấu trừ lương phải theo Điều 102 Bộ luật Lao động 2019. Đính kèm: Don_de_nghi...lao_dong.pdf',
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
    title: 'Yêu cầu đến nhận trực tiếp & Trao đổi về danh sách blacklist doanh nghiệp',
    summary:
      'Phía công ty yêu cầu người lao động đến nhận tiền trực tiếp tại văn phòng 296 Võ Thành Trang, đồng thời có trao đổi về việc đưa vào danh sách blacklist nếu bị đe dọa.',
    keyTakeaway: 'Doanh nghiệp yêu cầu đến nhận trực tiếp tại văn phòng; hai bên chưa thống nhất phương thức nhận chuyển khoản hay nhận trực tiếp.',
    lawViolationNote: 'Quyền và lợi ích hợp pháp của các bên được bảo vệ theo Bộ luật Dân sự 2015 và Bộ luật Lao động 2019.',
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
        text: 'Và đừng đem blacklist ra để gây áp lực cho người lao động.'
      },
      {
        sender: 'representative',
        senderName: 'Đại diện người lao động',
        time: '12:06',
        text: 'thắc mắc việc công ty làm chưa đúng = đe dọa? mình ko muốn đôi co ạ. Xin phép.'
      }
    ]
  }
];

export const LEGAL_CLAUSES: LegalClause[] = [
  {
    article: 'Điều 27',
    law: 'Bộ luật Lao động 2019 (Luật 45/2019/QH14)',
    title: 'Quyền kết thúc thời gian thử việc của các bên',
    quote:
      'Trong thời gian thử việc, mỗi bên có quyền hủy bỏ hợp đồng thử việc hoặc hợp đồng lao động đã giao kết mà không cần báo trước và không phải bồi thường.',
    plainExplanation:
      'Trong giai đoạn thử việc, người lao động hoặc người sử dụng lao động có quyền chấm dứt việc làm mà không cần báo trước và không phải chịu trách nhiệm bồi thường thiệt hại.',
    applicationToCase:
      'Người lao động thử việc 2 ngày và đã chủ động thông báo xin dừng việc. Do đó, người lao động có cơ sở để yêu cầu giải quyết tiền công cho thời gian đã làm việc thực tế.'
  },
  {
    article: 'Điều 102 & 129',
    law: 'Bộ luật Lao động 2019',
    title: 'Quy định về khấu trừ tiền lương & Trách nhiệm bồi thường',
    quote:
      'Người sử dụng lao động chỉ được khấu trừ tiền lương của người lao động để bồi thường thiệt hại do làm hư hỏng dụng cụ, thiết bị, tài sản... theo quy định tại Điều 129 của Bộ luật này. Người lao động có quyền được biết lý do khấu trừ tiền lương của mình.',
    plainExplanation:
      'Việc khấu trừ tiền lương chỉ được thực hiện khi có căn cứ chứng minh lỗi trực tiếp, mức độ thiệt hại thực tế và phải tuân thủ đúng trình tự, thủ tục pháp lý quy định.',
    applicationToCase:
      'Việc trao đổi khấu trừ tiền công do chi phí sản xuất hàng hóa cần được thực hiện trên cơ sở chứng minh thiệt hại thực tế và đúng trình tự luật định.'
  },
  {
    article: 'Điều 7',
    law: 'Luật An ninh mạng 2018 (Luật 24/2018/QH14)',
    title: 'Nguyên tắc bảo đảm an toàn thông tin & Phản ánh trung thực',
    quote:
      'Nghiêm cấm hành vi sử dụng không gian mạng để thông tin sai sự thật, vu khống, xúc phạm uy tín của tổ chức, danh dự, nhân phẩm của cá nhân.',
    plainExplanation:
      'Pháp luật cấm hành vi bịa đặt, thông tin sai sự thật; nhưng không cấm việc phản ánh trung thực, khách quan, có tài liệu căn cứ về một vụ việc tranh chấp dân sự/lao động.',
    applicationToCase:
      'Nội dung trên trang được cung cấp trung thực dựa trên tài liệu trao đổi thực tế giữa các bên, không nhằm mục đích xúc phạm hay bôi nhọ uy tín tổ chức, cá nhân.'
  },
  {
    article: 'Điều 11 & 584',
    law: 'Bộ luật Dân sự 2015',
    title: 'Bảo vệ quyền dân sự & Trách nhiệm bồi thường thiệt hại',
    quote:
      'Cá nhân, pháp nhân có quyền yêu cầu cơ quan có thẩm quyền bảo vệ quyền dân sự của mình... Người nào có hành vi xâm phạm danh dự, uy tín, tài sản của người khác mà gây thiệt hại thì phải bồi thường.',
    plainExplanation:
      'Mọi bên tham gia đều có quyền yêu cầu bảo vệ quyền lợi hợp pháp; nếu thông tin không đúng gây thiệt hại, doanh nghiệp có quyền yêu cầu đính chính, xin lỗi và bồi thường.',
    applicationToCase:
      'Doanh nghiệp có quyền gửi ý kiến phản hồi, tài liệu đối chứng để trang cập nhật thông tin hai chiều một cách khách quan nhất.'
  },
  {
    article: 'Điều 3 QĐ 1429/QĐ-UBND',
    law: 'Quyết định 1429/QĐ-UBND năm 2025 (TP.HCM)',
    title: 'Thẩm quyền tiếp nhận & Hướng dẫn hòa giải tranh chấp lao động',
    quote:
      'Quy định về quy trình tiếp nhận, phân công Hòa giải viên lao động giải quyết tranh chấp lao động cá nhân trên địa bàn Thành phố Hồ Chí Minh.',
    plainExplanation:
      'Tại TP.HCM, người lao động hoặc người sử dụng lao động có thể gửi yêu cầu hòa giải đến Sở Nội vụ hoặc Phòng Lao động - Thương binh và Xã hội / Phòng chuyên môn cấp xã để được tiếp nhận và cử Hòa giải viên.',
    applicationToCase:
      'Nếu hai bên không tự thống nhất phương thức thanh toán tiền công, vụ việc có thể được chuyển đến Hòa giải viên lao động tại TP.HCM giải quyết theo quy định.'
  }
];

export interface CaseRecommendationItem {
  title: string;
  category: string;
  summary: string;
  legalBasis: string;
}

export const CASE_RECOMMENDATION_POINTS: CaseRecommendationItem[] = [
  {
    title: 'Chủ động thỏa thuận rõ phương thức & thời điểm nhận tiền công',
    category: 'Thanh toán tiền công',
    summary:
      'Trước khi nhận việc, ứng viên nên thống nhất rõ với người tuyển dụng về hình thức thanh toán (chuyển khoản qua ngân hàng hay nhận tiền mặt trực tiếp tại văn phòng) và ngày trả tiền công cụ thể.',
    legalBasis: 'Điều 94, 96 Bộ luật Lao động 2019'
  },
  {
    title: 'Nắm vững quyền chấm dứt thỏa thuận trong giai đoạn thử việc',
    category: 'Quyền thử việc',
    summary:
      'Theo quy định pháp luật lao động, trong thời gian thử việc, cả người lao động và người sử dụng lao động đều có quyền chấm dứt thỏa thuận mà không cần báo trước và không phải bồi thường.',
    legalBasis: 'Điều 27 Bộ luật Lao động 2019'
  },
  {
    title: 'Lưu giữ đầy đủ tin nhắn giao việc, điểm danh và hình ảnh làm việc',
    category: 'Tài liệu đối chứng',
    summary:
      'Người lao động part-time cần chủ động lưu trữ tin nhắn giao nhận việc, hình ảnh tại quầy bán hoặc xác nhận ca làm để làm căn cứ giải quyết quyền lợi khi có phát sinh bất đồng.',
    legalBasis: 'Điều 14 Bộ luật Lao động 2019'
  },
  {
    title: 'Tuân thủ trình tự pháp lý khi phát sinh tranh chấp lao động',
    category: 'Quy trình giải quyết',
    summary:
      'Khi hai bên chưa thống nhất ý kiến, các bên có thể gửi đơn đề nghị hòa giải đến Hòa giải viên lao động có thẩm quyền tại địa phương để được hỗ trợ hòa giải theo đúng quy định.',
    legalBasis: 'Chương XIV BLLĐ 2019 & QĐ 1429/QĐ-UBND 2025'
  }
];

export const INITIAL_COMMENTS: CommentItem[] = [
  {
    id: 'c1',
    author: 'Trần Minh K.',
    role: 'Sinh viên năm 2 - ĐH Kinh Tế TP.HCM',
    timestamp: '2 giờ trước',
    content:
      'Mình từng đi làm part-time chuỗi đồ uống, nếu thử việc thấy không hợp quản lý cho nghỉ bình thường và cuối tháng vẫn chuyển khoản từng giờ công đã làm. Doanh nghiệp làm ăn mà 150k cũng tìm cớ đổ thừa hàng hóa để quy.t của sinh viên thì quá tệ!',
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
