
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.scss";

// Dữ liệu liên hệ
const CONTACT_INFO = [
  // {
  //   icon: "📍",
  //   label: "Địa chỉ",
  //   value: "123 Nguyễn Thị Minh Khai, Phường 6, Quận 3, TP. Hồ Chí Minh",
  // },
  {
    icon: "📞",
    label: "Hotline",
    value: "0369 270 210 – 0379 880 210",
    href: "tel:0369 270 210",
  },
  {
    icon: "📧",
    label: "Email",
    value: "tbytamanh2025@gmail.com",
    href: "mailto:tbytamanh2025@gmail.com",
  },
  // {
  //   icon: "⏰",
  //   label: "Giờ làm việc",
  //   value: "Thứ 2 – Thứ 6: 8:00 – 17:30  |  Thứ 7: 8:00 – 12:00",
  // },
];

// Trạng thái ban đầu của form
const INITIAL_FORM = {
  name: "",
  phone: "",
  email: "",
  device: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");

  // Cập nhật giá trị form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (sendError) setSendError("");
  };

  // Validate form
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Vui lòng nhập họ và tên";
    if (!form.phone.trim()) newErrors.phone = "Vui lòng nhập số điện thoại";
    else if (!/^[0-9]{9,11}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ (9-11 số)";
    }
    return newErrors;
  };

  // Xử lý submit form với EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    setSendError("");

    const templateParams = {
      from_name: form.name,
      phone: form.phone,
      email: form.email || "Không cung cấp",
      device: form.device || "Không chọn",
      message: form.message || "Không có nội dung chi tiết",
      to_email: "info@anhminhanhmedical.vn", // Có thể bỏ nếu template đã cấu hình
    };

    emailjs
      .send(
        "service_bipnpcj", // ← Thay bằng Service ID của bạn
        "template_195gnwu", // ← Thay bằng Template ID của bạn
        templateParams,
        "nkBGhwWozcQd9kbub", // ← Thay bằng Public Key của bạn
      )
      .then(() => {
        setSubmitted(true);
        setForm(INITIAL_FORM);
        setTimeout(() => setSubmitted(false), 6000);
      })

      .catch((error) => {
        console.error("EmailJS Error Details:", error); // ← Quan trọng
        console.error("Status:", error.status);
        console.error("Text:", error.text);

        setSendError(
          "Gửi thất bại. Vui lòng kiểm tra console để xem chi tiết lỗi.",
        );
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        {/* Header */}
        <span className={styles.tag}>Liên hệ với chúng tôi</span>
        <h2 className={styles.title}>Nhận Tư Vấn Miễn Phí</h2>
        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.grid}>
          {/* Cột trái: Thông tin */}
          <div className={styles.infoCol}>
            <h3 className={styles.infoHeading}>Thông tin liên hệ</h3>

            {CONTACT_INFO.map((item) => (
              <div key={item.label} className={styles.infoItem}>
                <div className={styles.infoIcon} aria-hidden="true">
                  {item.icon}
                </div>
                <div className={styles.infoText}>
                  <strong className={styles.infoLabel}>{item.label}</strong>
                  {item.href ? (
                    <a href={item.href} className={styles.infoValue}>
                      {item.value}
                    </a>
                  ) : (
                    <span className={styles.infoValue}>{item.value}</span>
                  )}
                </div>
              </div>
            ))}

            <div className={styles.emergency}>
              <p className={styles.emergencyTitle}>
                🎯 Hỗ trợ kỹ thuật khẩn cấp 24/7
              </p>
              {/* <p className={styles.emergencyNum}>Hotline: 0908 888 999</p> */}
            </div>
          </div>

          {/* Cột phải: Form */}
          <div className={styles.formBox}>
            <h3 className={styles.formHeading}>Gửi yêu cầu tư vấn</h3>

            {submitted && (
              <div className={styles.successMsg} role="alert">
                ✅ Cảm ơn bạn! Chuyên viên sẽ liên hệ trong vòng 30 phút.
              </div>
            )}

            {sendError && (
              <div className={styles.errorMsg} role="alert">
                {sendError}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Row: Họ tên + SĐT */}
              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="name" className={styles.label}>
                    Họ và tên <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Nguyễn Văn A"
                    className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                  />
                  {errors.name && (
                    <span className={styles.error}>{errors.name}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone" className={styles.label}>
                    Số điện thoại <span aria-hidden="true">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="0901 234 567"
                    className={`${styles.input} ${errors.phone ? styles.inputError : ""}`}
                  />
                  {errors.phone && (
                    <span className={styles.error}>{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className={styles.input}
                />
              </div>

              {/* Thiết bị quan tâm */}
              <div className={styles.formGroup}>
                <label htmlFor="device" className={styles.label}>
                  Thiết bị quan tâm
                </label>
                <select
                  id="device"
                  name="device"
                  value={form.device}
                  onChange={handleChange}
                  className={styles.select}
                >
                  <option value="">-- Chọn loại thiết bị --</option>
                  <option value="sieu-am">MÁY CTG JUMPER JPD-300Pa</option>
                  {/* <option value="x-quang">Máy X-quang</option>
                  <option value="ct-scan">Máy CT Scan</option>
                  <option value="noi-soi">Máy nội soi</option>
                  <option value="phong-mo">Thiết bị phòng mổ</option>
                  <option value="xet-nghiem">Thiết bị xét nghiệm</option> */}
                  <option value="khac">Khác</option>
                </select>
              </div>

              {/* Nội dung */}
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>
                  Nội dung tư vấn
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Mô tả nhu cầu, số lượng thiết bị cần mua hoặc câu hỏi của bạn..."
                  className={styles.textarea}
                />
              </div>

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={loading}
              >
                {loading ? "⏳ Đang gửi yêu cầu..." : "Gửi yêu cầu tư vấn →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
