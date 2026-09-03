

import React from 'react';
import styles from './Feature.module.scss';

const FEATURES = [
  {
    icon: '🏭',
    title: 'Đơn vị phân phối độc quyền',
    desc: 'Angelsounds (Tập đoàn JUMPER) tại Việt Nam'
  },
  {
    icon: '✅',
    title: 'Hàng chính hãng - Minh bạch nguồn gốc',
    desc: 'Phân phối trực tiếp từ nhà sản xuất, đầy đủ giấy tờ CO/CQ'
  },
  {
    icon: '🛡️',
    title: 'Bảo hành chính hãng',
    desc: 'Bảo hành dài hạn theo đúng chính sách của nhà sản xuất'
  },
  {
    icon: '📍',
    title: 'Hỗ trợ kỹ thuật 24/7',
    desc: 'Tại TP.HCM'
  },
  // {
  //   icon: '🤝',
  //   title: 'Hỗ trợ tư vấn & đấu thầu',
  //   desc: 'Hỗ trợ các phòng khám và bệnh viện toàn quốc'
  // }
];

function Feature() {
  return (
    <section className={styles.section} id="feature">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Lý do chọn Thiết Bị Y Tế Anh Minh Anh</h2>
          <p className={styles.subtitle}>
            Đối tác tin cậy của các phòng khám và cơ sở y tế trên toàn quốc
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

export default Feature;