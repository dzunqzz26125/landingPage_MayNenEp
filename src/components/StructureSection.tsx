import React from "react";

export interface StructureItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
}

const structureData: StructureItem[] = [
  {
    id: "01",
    badge: "BỘ ĐIỀU KHIỂN CHÍNH",
    title: "Bộ điều khiển trung tâm (Máy chính)",
    description:
      "Đóng vai trò trung tâm cung cấp khí nén và phân phối áp lực chuẩn xác đến từng khoang điều trị. Tích hợp màn hình hiển thị trực quan và bộ phím điều chỉnh dễ dàng.",
    highlights: [
      "Dải áp suất tùy biến: 30 – 220 mmHg linh hoạt theo mức độ điều trị",
      "Cài đặt thời gian tự động: Liệu trình tối đa 30 phút liên tục có tự ngắt an toàn",
      "Bảng nút bấm và đèn báo trạng thái rõ ràng, thao tác tiện lợi cho người lớn tuổi",
    ],
    image: "/uploads/pasted-image-2026-10-01t03-38-50-228z.png",
    alt: "Bộ điều khiển trung tâm máy nén ép",
  },
  {
    id: "02",
    badge: "BAO CHI CHÂN TRỊ LIỆU",
    title: "Hệ thống bao chi chân 6 khoang khí độc lập",
    description:
      "Hệ thống 2 bao chi chân ôm sát từ bàn chân đến đùi. Tích hợp 6 khoang khí độc lập co bóp tuần tự dạng sóng, kích thích dòng máu tĩnh mạch chảy về tim hiệu quả.",
    highlights: [
      "6 khoang khí ép nhịp nhàng theo chu kỳ từ bàn chân, cẳng chân lên đùi",
      "Chất liệu vải y tế dẻo dai, kháng khuẩn, thoáng khí và êm dịu khi tiếp xúc với da",
      "Khóa kéo và khóa dán chắc chắn, dễ dàng tháo mặc nhanh chóng tại nhà",
    ],
    image: "/uploads/pasted-image-2026-10-01t03-36-26-791z.png",
    alt: "Bao chi chân 6 khoang khí máy nén ép",
  },
  {
    id: "03",
    badge: "PHỤ KIỆN MỞ RỘNG TOÀN THÂN",
    title: "Bao chi tay và bao cuốn vùng eo - lưng",
    description:
      "Hệ thống bao cuốn mở rộng phạm vi massage cho vùng cánh tay, khớp vai, eo và thắt lưng, hỗ trợ giảm căng cứng và nhức mỏi toàn diện cho người dùng.",
    highlights: [
      "Bao chi tay: Hệ thống túi khí ôm trọn cánh tay, xoa dịu tê bì và mỏi khớp vai",
      "Bao eo lưng: Ôm sát vùng thắt lưng, hỗ trợ thư giãn cột sống và giải tỏa áp lực",
      "Linh hoạt hoán đổi hoặc sử dụng kết hợp theo nhu cầu của từng thành viên",
    ],
    image: "/uploads/pasted-image-2026-10-01t02-52-29-111z.png",
    alt: "Bao chi tay và bao cuốn eo lưng máy nén ép",
  },
  {
    id: "04",
    badge: "HỆ THỐNG DẪN KHÍ CHUYÊN DỤNG",
    title: "Đường dẫn khí đơn - đôi & Khớp nối an toàn",
    description:
      "Ống dẫn khí đa luồng chịu áp lực cao, kết nối trực tiếp máy chính với các bao khí giúp dòng khí lưu chuyển mượt mà, ổn định và chống rò rỉ tuyệt đối.",
    highlights: [
      "Tùy chọn ống dẫn khí đơn và ống dẫn khí đôi tiện dụng",
      "Khớp cắm chuẩn xác, chống tuột và kín hơi trong suốt liệu trình",
      "Dây dẫn dẻo dai, bền chắc, không lo gãy gập hay biến dạng sau thời gian dài sử dụng",
    ],
    image: "/uploads/pasted-image-2026-10-01t03-39-01-103z.png",
    alt: "Hệ thống đường dẫn khí đơn và đôi máy nén ép",
  },
];

export default function StructureSection() {
  return (
    <section className="bg-[#24221f] text-[#f8f0e9] py-20 lg:py-28 px-[5vw]" id="details">
      <div className="max-w-[1140px] mx-auto mb-12 lg:mb-16">
        <div className="eyebrow flex items-center gap-2 text-[10px] tracking-[0.18em] text-[#e6532d] font-bold">
          <span className="inline-block w-6 h-[1px] bg-[#e6532d]"></span>
          CẤU TẠO VÀ THÔNG SỐ
        </div>
        <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#f8f0e9] leading-[1.08] mt-4">
          Thiết kế theo từng vùng,
          <br />
          <em className="not-italic text-[#e6532d]">điều chỉnh theo nhu cầu.</em>
        </h2>
      </div>

      {/* Alternating rows for machine structure */}
      <div className="max-w-[1140px] mx-auto flex flex-col gap-12 sm:gap-14 lg:gap-16">
        {structureData.map((item, index) => {
          const isEven = index % 2 === 1;
          return (
            <article
              key={item.id}
              className={`flex flex-col ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center justify-between gap-7 lg:gap-12 p-6 sm:p-8 lg:p-9 bg-[#2d2925] rounded-2xl border border-[#453f39] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.35)] hover:border-[#635a52]`}
            >
              {/* IMAGE: 45-50% width on Desktop */}
              <div className="w-full lg:w-[47%] shrink-0">
                <div className="w-full h-56 sm:h-72 lg:h-[310px] rounded-xl overflow-hidden bg-[#201d1a] border border-[#4b443e]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>

              {/* TEXT CONTENT: 50-55% width on Desktop */}
              <div className="w-full lg:w-[50%] flex flex-col gap-3">
                <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1 bg-[#3f3229] text-[#ff8563] rounded-full text-[11px] font-bold tracking-wider uppercase">
                  <span className="font-['Hanken_Grotesk'] text-xs font-extrabold">{item.id}</span>
                  <span className="opacity-60">·</span>
                  <span>{item.badge}</span>
                </div>

                <h3 className="font-['Hanken_Grotesk'] text-xl sm:text-2xl font-bold text-[#f8f0e9] leading-snug mt-1">
                  {item.title}
                </h3>

                <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#b7ada4]">
                  {item.description}
                </p>

                <ul className="mt-2 flex flex-col gap-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-normal text-[#d6cdc3]">
                      <span className="inline-flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#e6532d] text-white text-[10px] font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>

      {/* Specifications & Operating Principle */}
      <div className="max-w-[1140px] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-[#2d2925] border border-[#453f39] rounded-2xl p-6 sm:p-8">
          <div className="text-[11px] tracking-[0.16em] text-[#a8b9a5] font-bold mb-4">
            THÔNG SỐ KỸ THUẬT TỔNG QUAN
          </div>
          <div className="divide-y divide-[#413a34] text-[13.5px]">
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[#a9a09a]">
              <span>Bộ điều khiển</span>
              <b className="text-white font-normal sm:text-right">Điều chỉnh lực ép, thời gian tác dụng và công tắc đóng mở</b>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[#a9a09a]">
              <span>Bao chi chân</span>
              <b className="text-white font-normal sm:text-right">Hệ thống túi khí ở 2 bao chi chân (6 khoang khí)</b>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[#a9a09a]">
              <span>Bao chi tay</span>
              <b className="text-white font-normal sm:text-right">Hệ thống túi khí ở 2 bao chi tay</b>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[#a9a09a]">
              <span>Bao eo và lưng</span>
              <b className="text-white font-normal sm:text-right">Hệ thống túi khí ở bao cuốn eo và lưng</b>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[#a9a09a]">
              <span>Đường dẫn khí</span>
              <b className="text-white font-normal sm:text-right">Ống dẫn khí đơn và ống dẫn khí đôi chịu áp lực cao</b>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[#a9a09a]">
              <span>Thời gian điều trị</span>
              <b className="text-white font-normal sm:text-right">Cài đặt trong vòng 30 phút liên tục</b>
            </div>
            <div className="py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-[#a9a09a]">
              <span>Áp suất mỗi khoang</span>
              <b className="text-white font-normal sm:text-right">30 – 220 mmHg (điều chỉnh linh hoạt)</b>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 bg-[#342e29] border border-[#48413b] rounded-2xl p-7 sm:p-8">
          <div className="text-[#e6532d] text-2xl font-serif">✦</div>
          <h3 className="font-['Hanken_Grotesk'] text-2xl font-bold text-[#f8f0e9] mt-3 mb-3">
            Nguyên tắc hoạt động
          </h3>
          <p className="text-sm text-[#c3b8af] leading-relaxed mb-4">
            Hệ thống túi khí được bơm lần lượt để tạo lực nén lên các vùng điều trị, hỗ trợ massage tay chân, huyệt đạo, thư giãn gân cốt và điều hòa khí huyết.
          </p>
          <p className="text-xs text-[#92887f] italic leading-normal border-t border-[#48413b] pt-3">
            Sản phẩm hỗ trợ chăm sóc sức khỏe, không thay thế chẩn đoán hoặc điều trị y khoa.
          </p>
        </div>
      </div>

      {/* 5 usage steps */}
      <div className="max-w-[1140px] mx-auto mt-14">
        <div className="text-[11px] tracking-[0.16em] text-[#a8b9a5] font-bold mb-3.5">
          5 BƯỚC SỬ DỤNG NHANH CHÓNG
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          <div className="bg-[#2d2925] border border-[#453f39] rounded-xl p-5">
            <b className="block text-[#e6532d] font-['Hanken_Grotesk'] text-sm mb-2">01</b>
            <span className="text-[13px] text-[#d6cdc3] leading-snug">Lắp các túi khí đúng vị trí theo hướng dẫn.</span>
          </div>
          <div className="bg-[#2d2925] border border-[#453f39] rounded-xl p-5">
            <b className="block text-[#e6532d] font-['Hanken_Grotesk'] text-sm mb-2">02</b>
            <span className="text-[13px] text-[#d6cdc3] leading-snug">Kết nối nguồn điện và khởi động máy chính.</span>
          </div>
          <div className="bg-[#2d2925] border border-[#453f39] rounded-xl p-5">
            <b className="block text-[#e6532d] font-['Hanken_Grotesk'] text-sm mb-2">03</b>
            <span className="text-[13px] text-[#d6cdc3] leading-snug">Cắm dây túi khí vào hệ thống điều khiển.</span>
          </div>
          <div className="bg-[#2d2925] border border-[#453f39] rounded-xl p-5">
            <b className="block text-[#e6532d] font-['Hanken_Grotesk'] text-sm mb-2">04</b>
            <span className="text-[13px] text-[#d6cdc3] leading-snug">Cài đặt mức áp suất và thời gian massage.</span>
          </div>
          <div className="bg-[#2d2925] border border-[#453f39] rounded-xl p-5">
            <b className="block text-[#e6532d] font-['Hanken_Grotesk'] text-sm mb-2">05</b>
            <span className="text-[13px] text-[#d6cdc3] leading-snug">Nhấn công tắc để bắt đầu liệu trình thư giãn.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
