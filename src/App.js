import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Product from "./components/Product/index.js";
import Contact from "./components/Contact/index.js"; // Đổi tên để dễ phân biệt
import Jpd300pa from "./pages/Details/Jpd300pa";
import CtgLukComeL8pm from "./pages/Details/CtgLukComeL8pm";
import CtgLukComeL8d from "./pages/Details/CtgLuckComeL8d/index.js";
import ServicesPage from "./pages/ServicesPage/index.js";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/san-pham" element={<Product />} />
        <Route path="/lien-he" element={<Contact />} />
        <Route path="/san-pham/jumper-jpd-300pa" element={<Jpd300pa />} />
        <Route path="/san-pham/ctg-lukcome-l8pm" element={<CtgLukComeL8pm />} />
        <Route path="/san-pham/ctg-lukcome-l8d" element={<CtgLukComeL8d />} />
        <Route path="/dich-vu" element={<ServicesPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
