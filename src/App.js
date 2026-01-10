import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/home/main";
import ServicsMain from "./components/home/ServicesMain/ServicesMain";
import SideNav from "./components/SideNav";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/footer";
import IntroLoader from "./components/IntroLoader";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServiceDetailHero from "./components/home/ServicesMain/servicesOverview/ServiceDetailHero";
import ScrollToTop from "./components/scrolltotop";
import DoctrinesViewer from "./components/home/Doctrines/DoctrinesViewer";
import SignUp from "./components/auth/SignUp";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <IntroLoader show={loading} />

      <ScrollToTop />

      {!loading && (
        <div className="bg-color-dark">
          <SideNav setIsNavOpen={(e) => setIsNavOpen(e)} />

          <main className={`app-content bg-color-dark ${isNavOpen ? "shifted" : ""}`}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/services" element={<ServicsMain />} />
              <Route path="/service/:id" element={<ServiceDetailHero />} />
              <Route path="/doctrine/:id" element={<DoctrinesViewer />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>

            <Footer />
          </main>
        </div>
      )}
    </Router>
  );
}

export default App;
