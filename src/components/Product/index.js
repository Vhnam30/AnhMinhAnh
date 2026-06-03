import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.scss";
import { jumper300pa } from "../../assets/img/jumperJpd300pa/index.js";
import { l8pm } from "../../assets/img/l8pm/index.js";
import { l8d } from "../../assets/img/l8d/index.js";
// Dữ liệu sản phẩm (bạn có thể tách ra file riêng sau)
const PRODUCTS = [
  {
    id: "jumper-jpd-300pa",
    name: (<>MÁY CTG <span className={styles.highlight}>không dây</span> JUMPER JPD-300Pa</>),
    brand: "JUMPER - Angelsounds",
    description: (
      <>
        Máy theo dõi tim thai và cơn co tử cung cao cấp với đầu dò{" "}
        <span className={styles.highlight}>không dây</span> hiện đại.
      </>
    ),
    images: [jumper300pa[0], jumper300pa[1], jumper300pa[2]],
    badge: "Nổi bật",
  },
  {
    id: "ctg-lukcome-l8pm",
    name: (<>MÁY CTG <span className={styles.highlight}>không dây</span> LUCKCOME L8P-M</>),
    brand: "LUCKCOME",
    description: (
      <>
        Máy theo dõi sản khoa cao cấp với màn hình{" "}
        <span className={styles.highlight}>cảm ứng</span> 10.2 inch, hỗ trợ theo
        dõi đồng thời FHR, TOCO, FM và thai đôi.
      </>
    ),
    images: [l8pm[0], l8pm[1], l8pm[2]],
    badge: "Mới",
  },
  {
    id: "ctg-lukcome-l8d",
    name: "MÁY CTG LUCKCOME L8D",
    brand: "LUCKCOME",
    description:
      "Máy theo dõi sản khoa L8D với màn hình TFT 7 inch, hỗ trợ theo dõi đồng thời FHR, TOCO, FM và thai đôi. Tích hợp máy in nhiệt, pin Lithium và kết nối Wi-Fi/Ethernet.",
    images: [l8d[0], l8d[1], l8d[2]],
    badge: "Phổ biến",
  },
];
function Product({ fullMode = false }) {
  const [currentIndex, setCurrentIndex] = useState({});

  const handlePrev = (id) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) - 1 + 3) % 3,
    }));
  };

  const handleNext = (id) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [id]: ((prev[id] || 0) + 1) % 3,
    }));
  };

  const displayedProducts = fullMode ? PRODUCTS : PRODUCTS.slice(0, 6);

  return (
    <section className={styles.section} id="product">
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {fullMode ? "Tất Cả Sản Phẩm" : "Sản Phẩm Nổi Bật"}
          </h2>
          {!fullMode && (
            <Link to="/san-pham" className={styles.viewAll}>
              Xem tất cả →
            </Link>
          )}
        </div>

        <div className={styles.productGrid}>
          {displayedProducts.map((product) => {
            const index = currentIndex[product.id] || 0;
            const currentImage = product.images[index] || "";

            return (
              <div key={product.id} className={styles.productCard}>
                {/* Hình ảnh + Slide */}
                <div className={styles.imageWrapper}>
                  <div className={styles.imageBox}>
                    {currentImage ? (
                      <img
                        src={currentImage}
                        alt={product.name}
                        className={styles.productImage}
                      />
                    ) : (
                      <div className={styles.placeholder}>
                        <span className={styles.placeholderIcon}>🖼️</span>
                        <p>Đang cập nhật</p>
                      </div>
                    )}
                  </div>

                  {/* Nút chuyển slide */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        className={styles.sliderBtn}
                        onClick={() => handlePrev(product.id)}
                      >
                        ‹
                      </button>
                      <button
                        className={styles.sliderBtn}
                        onClick={() => handleNext(product.id)}
                      >
                        ›
                      </button>
                    </>
                  )}

                  {product.badge && (
                    <div className={styles.badge}>{product.badge}</div>
                  )}
                </div>

                {/* Thông tin sản phẩm */}
                <div className={styles.info}>
                  <div className={styles.brand}>{product.brand}</div>
                  <h3 className={styles.name}>{product.name}</h3>
                  <p className={styles.description}>{product.description}</p>
                  {/* 2 nút */}
                  <div className={styles.btnGroup}>
                    <Link
                      to={`/san-pham/${product.id}`}
                      className={styles.btnDetail}
                    >
                      Chi tiết
                    </Link>
                    <Link to="/lien-he" className={styles.btnContact}>
                      Liên hệ
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Product;
