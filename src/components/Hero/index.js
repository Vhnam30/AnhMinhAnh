// ============================================================
// Hero.js – Hero Section lớn đầu trang
// - Background gradient xanh đậm với pattern trang trí
// - Tiêu đề, slogan, 2 nút CTA
// - Stats row phía dưới
// - Visual card hiển thị sản phẩm nổi bật bên phải
// ============================================================
import React, { useEffect, useState } from 'react';
import styles from './Hero.module.scss';

// Dữ liệu thống kê hiển thị trong hero
const STATS = [
  { value: '50+', label: 'Thiết bị bàn giao' },
  { value: '10+', label: 'Bệnh viện tin dùng' },
  // { value: '10+',  label: 'Năm kinh nghiệm' },
  { value: '24/7', label: 'Hỗ trợ kỹ thuật' },
];

function Hero() {
  // State cho animation fade-in khi mount
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Delay nhỏ để trigger CSS animation sau khi mount
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll tới section product
  const handleCTAProduct = (e) => {
    e.preventDefault();
    document.querySelector('#product')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCTAContact = (e) => {
    e.preventDefault();
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className={styles.hero} id="hero" aria-label="Giới thiệu công ty">
      {/* Background dot pattern trang trí */}
      <div className={styles.bgPattern} aria-hidden="true" />

      {/* Hình trang trí hình tròn góc */}
      <div className={styles.bgCircle1} aria-hidden="true" />
      <div className={styles.bgCircle2} aria-hidden="true" />

      <div className={`${styles.content} ${visible ? styles.visible : ''}`}>
        {/* ── Cột trái: Text + CTA ── */}
        <div className={styles.textCol}>
          {/* Badge chứng nhận */}
          <div className={styles.badge} role="note">
            🏅 Được cấp phép bởi Bộ Y Tế Việt Nam
          </div>

          {/* Tiêu đề chính */}
          <h1 className={styles.heading}>
            Thiết Bị Y Tế{' '}
            <em className={styles.highlight}>Chính Hãng</em>
            <br />– Chất Lượng
            <br />Tiêu Chuẩn Quốc Tế
          </h1>

          {/* Slogan mô tả */}
          <p className={styles.slogan}>
            Anh Minh Anh cung cấp thiết bị y tế hiện đại, đạt chuẩn Bộ Y Tế,
            phục vụ bệnh viện và phòng khám toàn quốc với đội ngũ kỹ thuật
            chuyên nghiệp và dịch vụ hậu mãi tận tâm.
          </p>

          {/* Nút hành động */}
          <div className={styles.ctaRow}>
            <a
              href="#product"
              className={styles.btnPrimary}
              onClick={handleCTAProduct}
            >
              🔬 Tìm hiểu sản phẩm
            </a>
            <a
              href="#contact"
              className={styles.btnOutline}
              onClick={handleCTAContact}
            >
              Liên hệ ngay →
            </a>
          </div>

          {/* Thống kê nhanh */}
          <div className={styles.statsRow} role="list" aria-label="Thống kê nổi bật">
            {STATS.map((s) => (
              <div key={s.label} className={styles.stat} role="listitem">
                <strong className={styles.statValue}>{s.value}</strong>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Cột phải: Visual card ── */}
       
      </div>
    </section>
  );
}

export default Hero;