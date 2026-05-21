// ============================================================
// About.js – Giới thiệu công ty (rút gọn)
// - Ảnh trái, text phải
// - 4 stats nổi bật
// - Lịch sử thành lập & giá trị cốt lõi
// ============================================================
import React from 'react';
import styles from './About.module.scss';
import { aboutBg } from '../../assets/img';
// Số liệu thống kê công ty
const STATS = [
  { value: '10+', label: 'Bệnh viện đối tác' },
  { value: '50+', label: 'Thiết bị bàn giao' },
  { value: '20+',  label: 'Kỹ sư kỹ thuật' },
  // { value: '10+',  label: 'Năm kinh nghiệm' },
];

// Giá trị cốt lõi
const VALUES = [
  { icon: '🤝', text: 'Uy tín – Minh bạch trong mọi giao dịch' },
  { icon: '💡', text: 'Chuyên nghiệp – Đội ngũ được đào tạo quốc tế' },
  { icon: '❤️', text: 'Tận tâm – Phục vụ vì sức khỏe cộng đồng' },
];

function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* ── Cột trái: Visual ── */}
          <div className={styles.visualCol}>
            <div className={styles.visual} role="img" aria-label="Trụ sở Anh Minh Anh">
              <span className={styles.visualIcon} aria-hidden="true">
                <img src={aboutBg} className={styles.visualBg}/>
              </span>
            </div>
            {/* <div className={styles.foundedBadge}>
              <span>📅</span> Thành lập năm 2025
            </div> */}
          </div>

          {/* ── Cột phải: Nội dung ── */}
          <div className={styles.textCol}>
            <span className={styles.tag}>Về chúng tôi</span>
            <h2 className={styles.title}>
             Đồng Hành
              <br />Cùng Y Tế Việt Nam
            </h2>
            <div className={styles.divider} aria-hidden="true" />

            <p className={styles.desc}>
              Công ty Thiết bị y tế <strong>Anh Minh Anh</strong> được
              thành lập năm 2025, chuyên nhập khẩu và phân phối thiết bị y tế cao
              cấp từ Angelsounds (Tập đoàn JUMPER) tại Việt Nam

            </p>
            <p className={styles.desc}>
              Chúng tôi tự hào là đối tác tin cậy của hơn 10 bệnh viện và phòng
              khám trên toàn quốc, cung cấp thiết bị đạt chuẩn, dịch vụ bảo hành
              chuyên nghiệp và đào tạo nhân lực tận tâm.
            </p>

            {/* Giá trị cốt lõi */}
            <div className={styles.values}>
              {VALUES.map((v) => (
                <div key={v.text} className={styles.valueItem}>
                  <span className={styles.valueIcon} aria-hidden="true">{v.icon}</span>
                  <span>{v.text}</span>
                </div>
              ))}
            </div>

            {/* Stats grid */}
            <div className={styles.statsGrid} role="list" aria-label="Thành tựu công ty">
              {STATS.map((s) => (
                <div key={s.label} className={styles.stat} role="listitem">
                  <strong className={styles.statValue}>{s.value}</strong>
                  <span className={styles.statLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;