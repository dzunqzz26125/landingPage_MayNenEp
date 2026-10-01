import React from "react";
import BenefitsSection from "./components/BenefitsSection";
import StructureSection from "./components/StructureSection";

export default function App() {
  return (
    <main className="shop-page">
      {/* ================= HEADER ================= */}
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Trang chủ">
          <span className="brand-mark">+</span>
          <span>
            <b>AN TÂM</b>
            <small>CHĂM SÓC TẠI NHÀ</small>
          </span>
        </a>
        <nav aria-label="Điều hướng chính">
          <a href="#benefits">Công dụng</a>
          <a href="#details">Chi tiết máy</a>
          <a href="#reviews">Lưu ý sử dụng</a>
        </nav>
        <a className="nav-cta" href="#details">
          Xem chi tiết <span>↗</span>
        </a>
      </header>

      {/* ================= HERO ================= */}
      <section className="hero" id="top">
        <div className="hero-copy reveal">
          <div className="eyebrow">
            <span></span> THIẾT BỊ CHĂM SÓC SỨC KHỎE
          </div>
          <h1>
            Đôi chân nhẹ hơn,
            <br />
            <em>mỗi ngày.</em>
          </h1>
          <p className="lead">
            Máy nén ép suy giãn tĩnh mạch 6 khoang khí giúp massage áp lực tuần hoàn theo từng vùng, êm ái ngay tại nhà.
          </p>
          <div className="hero-actions">
            <a className="primary-btn" href="#benefits">
              Khám phá công dụng <span>→</span>
            </a>
            <a className="text-link" href="#details">
              Xem thông số <span>↓</span>
            </a>
          </div>
          <div className="trust-row">
            <span>✓ Bảo hành chính hãng</span>
            <span>✓ Đổi trả trong 15 ngày</span>
          </div>
        </div>

        <div className="hero-media reveal delay-1">
          <div className="media-orbit orbit-one"></div>
          <div className="media-orbit orbit-two"></div>
          <div className="image-frame">
            <img
              src="/uploads/pasted-image-2026-10-01t02-52-29-111z.png"
              alt="Máy nén ép suy giãn tĩnh mạch đang được sử dụng tại nhà"
            />
          </div>
          <div className="floating-note">
            <strong>6</strong>
            <span>
              khoang khí
              <br />
              độc lập
            </span>
          </div>
          <div className="image-caption">
            MASSAGE ÁP LỰC KHÍ
            <br />
            <b>TOÀN BỘ CHÂN</b>
          </div>
        </div>
      </section>

      {/* ================= SECTION 1: CÔNG DỤNG (ALTERNATING LAYOUT) ================= */}
      <BenefitsSection />

      {/* ================= SECTION 2: CẤU TẠO MÁY MÓC (ALTERNATING LAYOUT) ================= */}
      <StructureSection />

      {/* ================= SECTION 3: THAM KHẢO CÁC DÒNG MÁY ================= */}
      <section className="gallery-section" aria-label="Hình ảnh các dòng máy">
        <div className="section-heading">
          <span className="eyebrow">
            <span></span> THAM KHẢO CÁC DÒNG MÁY
          </span>
          <h2>
            Nhiều cấu hình,
            <br />
            <em>nhiều lựa chọn chăm sóc.</em>
          </h2>
        </div>
        <div className="product-gallery">
          <img
            src="/uploads/pasted-image-2026-10-01t03-38-56-022z.png"
            alt="Máy nén ép trị liệu UAM 8400"
            loading="lazy"
          />
          <img
            src="/uploads/pasted-image-2026-10-01t03-39-01-103z.png"
            alt="Máy nén ép trị liệu toàn thân UAM 8500"
            loading="lazy"
          />
          <img
            src="/uploads/pasted-image-2026-10-01t03-39-06-312z.png"
            alt="Máy nén ép trị liệu 6 khoang"
            loading="lazy"
          />
          <img
            src="/uploads/pasted-image-2026-10-01t03-39-11-909z.png"
            alt="Máy nén ép trị liệu 2 kênh 12 khoang khí"
            loading="lazy"
          />
        </div>
        <div className="model-list">
          <div>
            <b>01</b>
            <span>Máy nén ép trị liệu 01 chi trên có ống đơn</span>
            <small>Elettronica Pagani · HC LYMPHACTIVE · Ý</small>
          </div>
          <div>
            <b>02</b>
            <span>Máy nén ép 1 kênh chỉnh áp bằng phần mềm</span>
            <small>Maxstar · UAM 8400 · Hàn Quốc</small>
          </div>
          <div>
            <b>03</b>
            <span>Máy nén ép 2 kênh chỉnh áp bằng phần mềm</span>
            <small>Maxstar · UAM 8500 · Hàn Quốc</small>
          </div>
          <div>
            <b>04</b>
            <span>Máy nén ép 6 khoang điều chỉnh 5 chức năng</span>
            <small>Maxstar · UAM-9306 · Hàn Quốc</small>
          </div>
          <div>
            <b>05</b>
            <span>Máy nén ép 2 kênh sử dụng 12 khoang khí</span>
            <small>Maxstar · KJK-500 · Hàn Quốc</small>
          </div>
          <div>
            <b>06</b>
            <span>Máy nén ép có màn hình LCD và điều khiển từ xa</span>
            <small>Maxstar · UAM 9100 · Hàn Quốc</small>
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: LƯU Ý SỬ DỤNG ================= */}
      <section className="safety-section" id="reviews">
        <div>
          <span className="eyebrow">
            <span></span> LƯU Ý SỬ DỤNG
          </span>
          <h2>
            Đúng đối tượng,
            <br />
            <em>đúng cách, an tâm hơn.</em>
          </h2>
        </div>
        <div className="safety-grid">
          <div>
            <h3>Trường hợp có thể được chỉ định</h3>
            <p>
              Bệnh suy giãn tĩnh mạch, tiểu đường, tai biến; đau thần kinh tọa,
              thần kinh liên sườn, bong gân; hậu phẫu thuật và phục hồi sau chấn
              thương; suy giảm động mạch, xơ vữa tĩnh mạch; xoa bóp vùng nhức mỏi,
              tê cứng; massage trước khi ngủ và hỗ trợ tiêu hao calo.
            </p>
          </div>
          <div className="warning">
            <h3>Chống chỉ định</h3>
            <p>
              Viêm tắc động mạch chi hoặc tĩnh mạch chi; rung nhĩ; viêm cấp tính
              và viêm sưng có mủ. Cần tham khảo ý kiến bác sĩ trước khi sử dụng,
              đặc biệt khi đang điều trị bệnh lý nền.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="brand">
          <span className="brand-mark">+</span>
          <span>
            <b>AN TÂM</b>
            <small>CHĂM SÓC TẠI NHÀ</small>
          </span>
        </div>
        <p>Thiết bị chăm sóc sức khỏe cho nhịp sống chủ động.</p>
        <span>© {new Date().getFullYear()} An Tâm</span>
      </footer>
    </main>
  );
}
