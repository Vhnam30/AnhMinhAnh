import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./CtgLukComeL8d.module.scss";

// Import từng hình ảnh riêng lẻ (dễ thêm sau)
import { l8d } from "../../../assets/img/l8d/index.js";

// Dữ liệu sản phẩm L8D
const PRODUCT = {
  id: "ctg-lukcome-l8d",
  tag: "Sản phẩm cao cấp",
  name: "MÁY CTG LUCKCOME L8D",
  brand: "LUCKCOME",
  description:
    "Máy theo dõi sản khoa L8D với màn hình TFT 7 inch, hỗ trợ theo dõi đồng thời FHR, TOCO, FM. Tích hợp máy in nhiệt, pin Lithium và kết nối Wi-Fi/Ethernet, thiết kế nhỏ gọn phù hợp cho phòng khám và bệnh viện.",

  specs: [
    "Màn hình TFT 7 inch, độ phân giải 800x480",
    "Theo dõi nhịp tim thai (FHR): 50~210 bpm (Doppler xung)",
    <>
      <span className={styles.highlight}>
        Chức năng điện toán phân tích chỉ số STV (Short-Term Variation - Dao
        động ngắn hạn) là một trong những công cụ lâm sàng tiên tiến và có giá
        trị nhất trong đo biểu đồ tim thai và cơn gò tử cung (CTG).
      </span>{" "}
    </>,
    "Theo dõi cơn co tử cung (TOCO): 0~100 đơn vị",
    "Theo dõi cử động thai (FM): Thủ công & Tự động",
    "Hỗ trợ theo dõi thai đôi (FHR2)",
    "Tích hợp máy in nhiệt in biểu đồ thời gian thực",
    "Pin Lithium 14.8V 2200mAh, hoạt động liên tục 5 giờ",
    "Kết nối Wi-Fi / Ethernet với Central Station",
    "Kích thước: 295 × 240 × 73 mm - Trọng lượng: 1.75kg",
    "Nguồn điện: AC 100-240V, 50/60Hz",
  ],

  certifications: ["CE", "ISO 13485", "Bộ Y Tế VN"],
  price: "Liên hệ để nhận báo giá",
};

function CtgLukComeL8d() {
  const [activeTab, setActiveTab] = useState("specs");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/lien-he");
  };

  // Slider controls
  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? PRODUCT_IMAGES.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === PRODUCT_IMAGES.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setCurrentImageIndex(index);
  };

  // Danh sách hình ảnh slider - Dễ thêm/bớt ở đây
  const PRODUCT_IMAGES = [
    l8d[0],
    l8d[1] || l8d[0],
    l8d[2] || l8d[0],
    
  ];

  return (
    <section className={styles.section} id="product">
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* Cột trái: Image Slider */}
          <div className={styles.imageCol}>
            <div className={styles.imageBox}>
              <img
                src={PRODUCT_IMAGES[currentImageIndex]}
                alt={`${PRODUCT.name} - Hình ${currentImageIndex + 1}`}
                className={styles.productImage}
              />

              {/* Navigation arrows */}
              <button
                className={styles.sliderArrow}
                onClick={goToPrev}
                aria-label="Previous image"
              >
                ←
              </button>
              <button
                className={styles.sliderArrow}
                onClick={goToNext}
                aria-label="Next image"
                style={{ right: "20px", left: "auto" }}
              >
                →
              </button>

              {/* Dots indicator */}
              <div className={styles.sliderDots}>
                {PRODUCT_IMAGES.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.dot} ${index === currentImageIndex ? styles.dotActive : ""}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>

              <div className={styles.certBadge}>✅ Màn hình 7 inch</div>
            </div>
          </div>

          {/* Cột phải: Thông tin */}
          <div className={styles.infoCol}>
            <span className={styles.sectionTag}>{PRODUCT.tag}</span>
            <div className={styles.brand}>{PRODUCT.brand}</div>
            <h2 className={styles.productName}>{PRODUCT.name}</h2>
            <p className={styles.description}>{PRODUCT.description}</p>

            {/* Tabs */}
            <div className={styles.tabRow} role="tablist">
              {["specs", "advantages"].map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "specs" ? "📋 Thông số kỹ thuật" : "🌟 Ưu điểm nổi bật"}
                </button>
              ))}
            </div>

            {/* Nội dung tab */}
            <div role="tabpanel">
              {activeTab === "specs" ? (
                <ul className={styles.specsList}>
                  {PRODUCT.specs.map((spec, i) => (
                    <li key={i} className={styles.specItem}>
                      <span className={styles.checkIcon}>✓</span>
                      {spec}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className={styles.advantages}>
                  <p>
                    <strong>
                      Thiết bị theo dõi sản khoa đáng tin cậy cho phòng khám và bệnh viện
                    </strong>
                  </p>
                  <ul className={styles.specsList}>
                    <li className={styles.specItem}>• Màn hình TFT 7 inch hiển thị rõ ràng</li>
                    <li className={styles.specItem}>• Hỗ trợ theo dõi thai đôi và in biểu đồ nhiệt</li>
                    <li className={styles.specItem}>• Pin Lithium dung lượng cao, hoạt động khi mất điện</li>
                    <li className={styles.specItem}>• Kết nối mạng Wi-Fi/Ethernet với hệ thống bệnh viện</li>
                    <li className={styles.specItem}>• Thiết kế nhỏ gọn, dễ sử dụng và di chuyển</li>
                  </ul>
                </div>
              )}
            </div>

            {/* Giá & CTA */}
            <div className={styles.priceBlock}>
              <div className={styles.price}>{PRODUCT.price}</div>
            </div>

            <div className={styles.btnRow}>
              <button className={styles.btnGreen} onClick={goToContact}>
                🛒 Đặt hàng ngay
              </button>
              <button className={styles.btnGold} onClick={goToContact}>
                📞 Tư vấn miễn phí
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtgLukComeL8d;