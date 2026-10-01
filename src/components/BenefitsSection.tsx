import React from "react";

export interface BenefitItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  image: string;
  alt: string;
}

const benefitsData: BenefitItem[] = [
  {
    id: "01",
    badge: "PHÒNG & HỖ TRỢ ĐIỀU TRỊ",
    title: "Hỗ trợ giảm suy giãn tĩnh mạch",
    description:
      "Máy tạo áp lực khí tuần tự lên vùng điều trị, hỗ trợ đưa lượng máu bị ứ đọng lưu thông tốt hơn. Đây là thiết bị hỗ trợ, người bệnh nên thăm khám và tuân theo phác đồ của bác sĩ.",
    highlights: [
      "Tạo áp lực nhịp nhàng đưa máu tĩnh mạch về tim",
      "Hỗ trợ giảm cảm giác nặng nề, căng tức chân",
      "Hạn chế tình trạng ứ trệ tuần hoàn chi dưới",
    ],
    image: "/uploads/pasted-image-2026-10-01t03-36-34-087z.png",
    alt: "Minh họa vùng chân suy giãn tĩnh mạch",
  },
  {
    id: "02",
    badge: "THƯ GIÃN CƠ BẮP",
    title: "Thư giãn cơ và giảm nhức mỏi",
    description:
      "Lực ép nhịp nhàng giúp các vùng cơ đang căng, mỏi, tê cứng hoặc ê buốt được thư giãn, tạo cảm giác dễ chịu sau thời gian đứng lâu, ngồi lâu hoặc vận động nhiều.",
    highlights: [
      "Xoa dịu các bó cơ đang căng cứng và ê buốt",
      "Giảm nhức mỏi bắp chân sau thời gian dài đứng hoặc ngồi",
      "Tạo cảm giác dễ chịu, thư thái nhanh chóng sau khi sử dụng",
    ],
    image: "/uploads/pasted-image-2026-10-01t03-36-50-728z.png",
    alt: "Minh họa thư giãn vùng cơ thể nhức mỏi",
  },
  {
    id: "03",
    badge: "TUẦN HOÀN MÁU TOÀN DIỆN",
    title: "Hỗ trợ lưu thông máu",
    description:
      "Các túi khí lần lượt co bóp tạo áp lực lên tay, chân và vùng điều trị, hỗ trợ quá trình tuần hoàn, hạn chế cảm giác nặng và dồn ứ tại một vị trí.",
    highlights: [
      "Bơm xả luân phiên hỗ trợ tuần hoàn ngoại vi",
      "Giảm áp lực tích tụ tại các tĩnh mạch sâu chi dưới",
      "Cải thiện sự lưu thông khí huyết cho cả cơ thể",
    ],
    image: "/uploads/pasted-image-2026-10-01t03-36-26-791z.png",
    alt: "Sử dụng máy nén ép trị liệu cho vùng chân",
  },
  {
    id: "04",
    badge: "TIÊU DỊCH PHÙ NỀ",
    title: "Giảm cảm giác bầm tím, phù nề dưới da",
    description:
      "Áp lực được điều chỉnh theo từng khoang có thể hỗ trợ vùng bị phù nề, thâm tím và khó chịu dưới da. Mức ép cần được thiết lập phù hợp với tình trạng sử dụng.",
    highlights: [
      "Hỗ trợ dẫn lưu dịch ứ đọng ở mô kẽ dưới da",
      "Mức áp lực điều chỉnh linh hoạt theo thể trạng từng người",
      "Góp phần thúc đẩy quá trình hồi phục mô mềm",
    ],
    image: "/uploads/pasted-image-2026-10-01t03-38-44-517z.png",
    alt: "Thiết bị máy nén ép trị liệu",
  },
  {
    id: "05",
    badge: "VẬN ĐỘNG LINH HOẠT",
    title: "Hỗ trợ vận động thoải mái hơn",
    description:
      "Khi cơ được thả lỏng và cảm giác nặng mỏi giảm bớt, người dùng có thể cảm thấy dễ chịu hơn khi đi lại và vận động hằng ngày.",
    highlights: [
      "Giúp đôi chân nhẹ nhàng, bước đi linh hoạt hơn",
      "Tăng sự thoải mái trong sinh hoạt và công việc hàng ngày",
      "Hỗ trợ duy trì sự vận động tích cực cho người lớn tuổi",
    ],
    image: "/uploads/pasted-image-2026-10-01t03-38-50-228z.png",
    alt: "Máy nén ép trị liệu hỗ trợ chăm sóc chân",
  },
  {
    id: "06",
    badge: "GIẤC NGỦ ÊM ÁI",
    title: "Xoa bóp thư giãn trước khi ngủ",
    description:
      "Liệu trình massage bằng túi khí giúp cơ thể thư giãn, giảm cảm giác mệt mỏi và hỗ trợ chuẩn bị cho giấc ngủ sâu hơn.",
    highlights: [
      "Liệu trình 20 - 30 phút buổi tối giúp xoa dịu hệ thần kinh",
      "Hạn chế cảm giác bứt rứt, tê buồn chân khi nằm ngủ",
      "Giúp tinh thần thư thái, dễ đi vào giấc ngủ ngon",
    ],
    image: "/uploads/pasted-image-2026-10-01t03-39-16-120z.png",
    alt: "Máy nén ép trị liệu và bộ bao khí",
  },
];

export default function BenefitsSection() {
  return (
    <section className="max-w-[1220px] mx-auto px-[5vw] py-20 lg:py-28 border-t border-[#d8ccc1]" id="benefits">
      <div className="max-w-[1140px] mx-auto mb-12 lg:mb-16">
        <div className="eyebrow flex items-center gap-2 text-[10px] tracking-[0.18em] text-[#e6532d] font-bold">
          <span className="inline-block w-6 h-[1px] bg-[#e6532d]"></span>
          CÔNG DỤNG NỔI BẬT
        </div>
        <h2 className="font-['Hanken_Grotesk'] text-3xl sm:text-4xl lg:text-[46px] font-bold tracking-tight text-[#25221f] leading-[1.08] mt-4">
          Hỗ trợ tuần hoàn,
          <br />
          <em className="not-italic text-[#e6532d]">thư giãn toàn thân.</em>
        </h2>
      </div>

      <div className="max-w-[1140px] mx-auto flex flex-col gap-12 sm:gap-14 lg:gap-16">
        {benefitsData.map((item, index) => {
          const isEven = index % 2 === 1;
          return (
            <article
              key={item.id}
              className={`flex flex-col ${
                isEven ? "lg:flex-row-reverse" : "lg:flex-row"
              } items-center justify-between gap-7 lg:gap-12 p-6 sm:p-8 lg:p-9 bg-white rounded-2xl border border-[#e7ded4] shadow-[0_8px_24px_rgba(37,34,31,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(37,34,31,0.08)] hover:border-[#d6c6b8]`}
            >
              {/* IMAGE: 45-50% width on Desktop */}
              <div className="w-full lg:w-[47%] shrink-0">
                <div className="w-full h-56 sm:h-72 lg:h-[310px] rounded-xl overflow-hidden bg-[#f4eee7] border border-[#e2d7cc]">
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
                <div className="inline-flex items-center gap-2 w-fit px-3.5 py-1 bg-[#faece5] text-[#e6532d] rounded-full text-[11px] font-bold tracking-wider uppercase">
                  <span className="font-['Hanken_Grotesk'] text-xs font-extrabold">{item.id}</span>
                  <span className="opacity-60">·</span>
                  <span>{item.badge}</span>
                </div>

                <h3 className="font-['Hanken_Grotesk'] text-xl sm:text-2xl font-bold text-[#25221f] leading-snug mt-1">
                  {item.title}
                </h3>

                <p className="text-[14.5px] sm:text-[15px] leading-relaxed text-[#635d56]">
                  {item.description}
                </p>

                <ul className="mt-2 flex flex-col gap-2">
                  {item.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-normal text-[#453f3a]">
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
    </section>
  );
}
