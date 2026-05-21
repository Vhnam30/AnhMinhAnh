// ============================================================
// Footer.js – Footer 3 cột
// Cột 1: Thông tin công ty + địa chỉ + hotline + email
// Cột 2: Hình thức thanh toán + Chính sách
// Cột 3: Chứng chỉ Bộ Y Tế
// ============================================================
// import React from 'react';
// import styles from './Footer.module.scss';
// // Dữ liệu hình thức thanh toán
// const PAYMENT_METHODS = [
//   { label: 'Visa', icon: '💳' },
//   { label: 'Mastercard', icon: '💳' },
//   { label: 'CK Ngân hàng', icon: '🏦' },
//   { label: 'Tiền mặt', icon: '💵' },
//   { label: 'VNPay', icon: '📱' },
//   { label: 'MoMo', icon: '📱' },
//   { label: 'ZaloPay', icon: '📱' },
// ];
// // Liên kết chính sách
// const POLICIES = [
//   { label: 'Chính sách bảo hành', href: '#' },
//   { label: 'Chính sách đổi trả', href: '#' },
//   { label: 'Chính sách vận chuyển', href: '#' },
//   { label: 'Chính sách bảo mật', href: '#' },
//   { label: 'Điều khoản sử dụng', href: '#' },
//   { label: 'Hướng dẫn mua hàng', href: '#' },
// ];
// // Chứng chỉ
// const CERT_DOCS = [
//   { label: 'Tải hồ sơ năng lực', href: '#' },
//   { label: 'Xem giấy phép đầy đủ', href: '#' },
//   { label: 'Tra cứu chứng nhận', href: '#' },
// ];
// const CURRENT_YEAR = new Date().getFullYear();
// function Footer() {
//   return (
//     <footer className={styles.footer} role="contentinfo">
//       {/* ── Nội dung 3 cột ── */}
//       <div className={styles.inner}>
//         <div className={styles.grid}>
//           {/* ── Cột 1: Thông tin công ty ── */}
//           <div className={styles.col}>
//             {/* Logo */}
//             <div className={styles.logo}>
//               <div className={styles.logoIcon} aria-hidden="true">🏥</div>
//               <span className={styles.logoText}>Anh Minh Anh</span>
//             </div>
//             {/* Mô tả */}
//             <p className={styles.desc}>
//               Chuyên cung cấp thiết bị y tế chính hãng, chất lượng cao phục vụ
//               hệ thống y tế Việt Nam. Uy tín – Chuyên nghiệp – Tận tâm.
//             </p>
//             {/* Thông tin liên hệ */}
//             <address className={styles.contactList}>
//               <div className={styles.contactItem}>
//                 <span aria-hidden="true">📍</span>
//                 123 Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP.HCM
//               </div>
//               <div className={styles.contactItem}>
//                 <span aria-hidden="true">📞</span>
//                 <a href="tel:0901234567" className={styles.contactLink}>
//                   0901 234 567
//                 </a>{' '}
//                 |{' '}
//                 <a href="tel:02839305678" className={styles.contactLink}>
//                   028 3930 5678
//                 </a>
//               </div>
//               <div className={styles.contactItem}>
//                 <span aria-hidden="true">📧</span>
//                 <a href="mailto:info@anhminhanhmedical.vn" className={styles.contactLink}>
//                   info@anhminhanhmedical.vn
//                 </a>
//               </div>
//               <div className={styles.contactItem}>
//                 <span aria-hidden="true">🏢</span>
//                 MST: 0312 456 789 – do Sở KH&ĐT TP.HCM cấp
//               </div>
//             </address>
//           </div>
//           {/* ── Cột 2: Thanh toán & Chính sách ── */}
//           <div className={styles.col}>
//             <h3 className={styles.colHeading}>Hình thức thanh toán</h3>
//             <div className={styles.paymentGrid} role="list" aria-label="Phương thức thanh toán">
//               {PAYMENT_METHODS.map((p) => (
//                 <span key={p.label} className={styles.paymentChip} role="listitem">
//                   <span aria-hidden="true">{p.icon}</span> {p.label}
//                 </span>
//               ))}
//             </div>
//             <h3 className={`${styles.colHeading} ${styles.colHeadingMt}`}>Chính sách</h3>
//             <ul className={styles.linkList}>
//               {POLICIES.map((p) => (
//                 <li key={p.label}>
//                   <a href={p.href} className={styles.footerLink}>
//                     {p.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           {/* ── Cột 3: Chứng chỉ Bộ Y Tế ── */}
//           <div className={styles.col}>
//             <h3 className={styles.colHeading}>Chứng chỉ &amp; Giấy phép</h3>
//             {/* Badge Bộ Y Tế */}
//             <div className={styles.certCard}>
//               <div className={styles.certIcon} aria-hidden="true">🏅</div>
//               <div className={styles.certName}>Bộ Y Tế Việt Nam</div>
//               <p className={styles.certDesc}>
//                 Giấy phép kinh doanh TTBYT số 4234/BYT-TB-CT
//               </p>
//             </div>
//             {/* Badge ISO */}
//             <div className={styles.certCard}>
//               <div className={styles.certIcon} aria-hidden="true">🌐</div>
//               <div className={styles.certName}>ISO 13485:2016</div>
//               <p className={styles.certDesc}>
//                 Chứng nhận hệ thống quản lý chất lượng thiết bị y tế
//               </p>
//             </div>
//             {/* Links tài liệu */}
//             <ul className={styles.linkList} style={{ marginTop: '14px' }}>
//               {CERT_DOCS.map((d) => (
//                 <li key={d.label}>
//                   <a href={d.href} className={styles.footerLink}>
//                     ↗ {d.label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//       {/* ── Bottom bar ── */}
//       <div className={styles.bottomBar}>
//         <div className={styles.bottomInner}>
//           <span>© {CURRENT_YEAR} Anh Minh Anh Medical. Bảo lưu mọi quyền.</span>
//           <span>Thiết kế bởi Anh Minh Anh Tech Team</span>
//         </div>
//       </div>
//     </footer>
//   );
// }
// export default Footer;
"use strict";