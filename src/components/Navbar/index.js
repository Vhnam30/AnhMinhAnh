// ============================================================
// Navbar.js – Navigation cố định với hiệu ứng scroll
// - Logo trái, menu giữa, hotline phải
// - Scroll > 50px: bg thay đổi từ #20733b sang #ffbf20
// - Hamburger menu cho mobile
// ============================================================\

/**
 * 

 */
// import React, { useState, useEffect } from 'react';
// import styles from './Navbar.module.scss';
// import { logo } from '../../assets/img';

// // Danh sách menu items
// const NAV_ITEMS = [
//   { label: 'Trang chủ', href: '#hero' },
//   { label: 'Sản phẩm', href: '#product' },
//   { label: 'Liên hệ', href: '#contact' },
//   { label: 'Về chúng tôi', href: '#about' },
//   // { label: 'Blog', href: '#blog' },
// ];

// const HOTLINE = '0901 234 567';

// function Navbar() {
//   // State theo dõi scroll để đổi màu navbar
//   const [isScrolled, setIsScrolled] = useState(false);
//   // State điều khiển hamburger menu
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Lắng nghe sự kiện scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });

//     // Cleanup khi component unmount
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Đóng mobile menu khi click ra ngoài
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (menuOpen && !e.target.closest('[data-navbar]')) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, [menuOpen]);

//   // Xử lý smooth scroll khi click menu
//   const handleNavClick = (e, href) => {
//     e.preventDefault();
//     const target = document.querySelector(href);
//     if (target) {
//       target.scrollIntoView({ behavior: 'smooth' });
//     }
//     setMenuOpen(false);
//   };

//   return (
//     <>
//       {/* Navbar chính */}
//       <nav
//         className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}
//         data-navbar
//         role="navigation"
//         aria-label="Navigation chính"
//       >
//         {/* Logo */}
//         <a href="#hero" className={styles.logo} onClick={(e) => handleNavClick(e, '#hero')}>
//           <div className={styles.logoIcon} aria-hidden="true">
//             <img src={logo} alt="Logo Anh Minh Anh" className={styles.logoImage} />
//           </div>
//           <div className={styles.logoText}>
//             <span className={styles.logoName}>Anh Minh Anh</span>
//             <span className={styles.logoTagline}>Thiết Bị Y Tế</span>
//           </div>
//         </a>

//         {/* Menu desktop */}
//         <ul className={styles.menu} role="menubar">
//           {NAV_ITEMS.map((item) => (
//             <li key={item.href} role="none">
//               <a
//                 href={item.href}
//                 role="menuitem"
//                 className={styles.menuLink}
//                 onClick={(e) => handleNavClick(e, item.href)}
//               >
//                 {item.label}
//               </a>
//             </li>
//           ))}
//         </ul>

//         {/* Hotline */}
//         <div className={styles.hotline} aria-label="Hotline liên hệ">
//           <span className={styles.hotlineIcon} aria-hidden="true">📞</span>
//           <a href={`tel:${HOTLINE.replace(/\s/g, '')}`} className={styles.hotlineNumber}>
//             {HOTLINE}
//           </a>
//         </div>

//         {/* Hamburger button cho mobile */}
//         <button
//           className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
//           onClick={() => setMenuOpen((prev) => !prev)}
//           aria-expanded={menuOpen}
//           aria-label="Mở menu di động"
//         >
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>
//       </nav>

//       {/* Mobile menu dropdown */}
//       {menuOpen && (
//         <div className={styles.mobileMenu} role="menu" aria-label="Menu di động">
//           {NAV_ITEMS.map((item) => (
//             <a
//               key={item.href}
//               href={item.href}
//               role="menuitem"
//               className={styles.mobileLink}
//               onClick={(e) => handleNavClick(e, item.href)}
//             >
//               {item.label}
//             </a>
//           ))}
//           <a href={`tel:${HOTLINE.replace(/\s/g, '')}`} className={styles.mobileHotline}>
//             📞 {HOTLINE}
//           </a>
//         </div>
//       )}
//     </>
//   );
// }

// export default Navbar;



import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { logo } from '../../assets/img';

const NAV_ITEMS = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Sản phẩm', href: '#product' },
  { label: 'Liên hệ', href: '#contact' },
  { label: 'Về chúng tôi', href: '#about' },
];

const HOTLINES = [
  '0369 270 210',
  '0379 880 210',
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`} data-navbar>
        {/* Logo */}
        <a href="#hero" className={styles.logo} onClick={(e) => handleNavClick(e, '#hero')}>
          <img src={logo} alt="Anh Minh Anh" className={styles.logoImage} />
          <div className={styles.logoText}>
            <span className={styles.logoName}>Anh Minh Anh</span>
            <span className={styles.logoTagline}>Thiết Bị Y Tế</span>
          </div>
        </a>

        {/* Menu Desktop */}
        <ul className={styles.menu}>
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hotline Desktop */}
        <div className={styles.hotlineGroup}>
          {HOTLINES.map((number, index) => (
            <a
              key={index}
              href={`tel:${number.replace(/\s/g, '')}`}
              className={styles.hotline}
            >
              <span className={styles.hotlineIcon}>📞</span>
              {number}
            </a>
          ))}
        </div>

        {/* Hamburger */}
        <button
          className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={styles.mobileMenu}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={styles.mobileLink}
            >
              {item.label}
            </a>
          ))}

          <div className={styles.mobileHotlineTitle}>Hotline liên hệ</div>
          {HOTLINES.map((number, index) => (
            <a
              key={index}
              href={`tel:${number.replace(/\s/g, '')}`}
              className={styles.mobileHotline}
            >
              📞 {number}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;