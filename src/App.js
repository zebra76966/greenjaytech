import { useRef, useState, useEffect } from "react";
import "./App.css";
import Main from "./components/home/main";
import ServicsMain from "./components/home/ServicesMain/ServicesMain";
import SideNav from "./components/SideNav";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/footer";
import IntroLoader from "./components/IntroLoader";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ServiceDetailHero from "./components/home/ServicesMain/servicesOverview/ServiceDetailHero";
import ScrollToTop from "./components/scrolltotop";
import DoctrinesViewer from "./components/home/Doctrines/DoctrinesViewer";
import SignUp from "./components/auth/SignUp";
import LeadershipPage from "./components/home/founders/foundersMain";

function AppInner() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const lenisRef = useRef(null);
  const location = useLocation();

  // Init Lenis once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis; // optional global access

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Loader
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  // Re-sync Lenis on every route change (fix for heavy pages like ServiceDoctrine)
  useEffect(() => {
    const lenis = lenisRef.current;
    if (!lenis) return;

    // Jump to top immediately
    lenis.scrollTo(0, { immediate: true });

    // Let DOM/images settle, then recompute scroll bounds
    const t = setTimeout(() => {
      lenis.resize();
    }, 120);

    return () => clearTimeout(t);
  }, [location.pathname]);

  return (
    <>
      <IntroLoader show={loading} />
      <ScrollToTop />

      {!loading && (
        <div className="bg-color-dark">
          <SideNav setIsNavOpen={(e) => setIsNavOpen(e)} />

          <main className={`app-content bg-color-dark ${isNavOpen ? "shifted" : ""}`}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/founders" element={<LeadershipPage />} />
              <Route path="/services" element={<ServicsMain />} />
              <Route path="/service/:id" element={<ServiceDetailHero />} />
              <Route path="/doctrine/:id" element={<DoctrinesViewer />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>

            <Footer />
          </main>
        </div>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}
