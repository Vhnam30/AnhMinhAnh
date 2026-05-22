import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.scss';
import { logo } from '../../assets/img';

const NAV_ITEMS = [
  { label: 'Trang chủ', href: '#hero' },
  { label: 'Sản phẩm', href: '#product' },
  {label: 'Dịch vụ', href: '#services' },
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