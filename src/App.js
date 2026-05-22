import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Product from "./components/Product";
import Services from "./components/Services";
import Features from "./components/Feature";
import Certificates from "./components/Certificates";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Product />
      <Services />
      <Features />
      <Certificates />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
