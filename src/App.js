import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import Main from "./components/home/main";
import SideNav from "./components/SideNav";
import Lenis from "@studio-freight/lenis";
import Footer from "./components/footer";
import IntroLoader from "./components/IntroLoader";

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  useEffect(() => {
    // if (!isLoading && location.pathname !== "/create-blog") {
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
  // }
  // }, [isLoading, location.pathname]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <IntroLoader show={loading} />

      {!loading && (
        <div className="bg-color-dark ">
          <SideNav setIsNavOpen={(e) => setIsNavOpen(e)} />

          <main className={`app-content  bg-color-dark ${isNavOpen ? "shifted" : ""}`}>
            <Main />
            <Footer />
          </main>
        </div>
      )}
    </>
  );
}

export default App;
