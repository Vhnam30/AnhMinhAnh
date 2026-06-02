import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Hero from "../../components/Hero";

import Services from "../../components/Services";
import Feature from "../../components/Feature";
import Certificates from "../../components/Certificates";
import About from "../../components/About";

function Home() {
  const location = useLocation();

  useEffect(() => {
    // Xử lý scroll khi chuyển từ trang khác về (Dịch vụ hoặc Về chúng tôi)
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const target = document.getElementById(sectionId);

      if (target) {
        // Đợi một chút để trang render xong rồi mới scroll
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 200);
      }
    }
  }, [location.state]);

  return (
    <>
      <Hero />

      <Services />
      <Feature />
      <Certificates />
      <About />
    </>
  );
}

export default Home;
