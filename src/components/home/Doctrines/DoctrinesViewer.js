import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./doctrinesViewer.css";
import doctrines from "./doctrines.json";
import FluidBackground from "../animtion2";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.mjs", import.meta.url).toString();

export default function DoctrinesViewer() {
  const [activeIndex, setActiveIndex] = useState(2);
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const BASE_HEIGHT = 150;
  const ACTIVE_HEIGHT = 180;
  const GAP = 14;

  const scrollToActive = () => {
    if (!listRef.current) return;

    const container = listRef.current;

    const beforeActive = activeIndex * (BASE_HEIGHT + GAP);

    const offsetToCenter = beforeActive - 2 * (BASE_HEIGHT + GAP) + (ACTIVE_HEIGHT - BASE_HEIGHT) / 2;

    container.scrollTo({
      top: offsetToCenter,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToActive();
  }, [activeIndex]);

  const goUp = () => {
    setActiveIndex((i) => Math.max(i - 1, 0));
  };

  const goDown = () => {
    setActiveIndex((i) => Math.min(i + 1, doctrines.length - 1));
  };

  useEffect(() => {
    setCurrentPage(1);
    setNumPages(null);
  }, [activeIndex]);

  return (
    <section className="doctrines-wrapper">
      {/* LEFT */}
      <div className="doctrines-main">
        <h6 className="services-eyebrow  text-start pFont fs-5  py-4" style={{ zIndex: "999" }}>
          OUR SERVICES.
        </h6>
        {/* <div className="doctrine-counter">
          {String(activeIndex + 1).padStart(2, "0")}
          <span>/ {doctrines.length}</span>
        </div> */}

        <div className="doctrine-counter mb-0 ">
          {String(currentPage).padStart(2, "0")}
          <span>/ {numPages ?? "--"}</span>
        </div>

        <div className="doctrine-content-box mt-0">
          {/* <h3 className="doctrine-heading">
            {doctrines[activeIndex].title}
            <span className="pdf-page-counter">
              {String(currentPage).padStart(2, "0")} / {numPages ?? "--"}
            </span>
          </h3> */}

          <AnimatePresence mode="wait">
            <motion.div key={doctrines[activeIndex].pdf} className="pdf-wrapper" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
              <div className="pdfWrapperMain">
                <Document file={doctrines[activeIndex].pdf} onLoadSuccess={({ numPages }) => setNumPages(numPages)} onLoadError={(err) => console.error("PDF load error:", err)}>
                  <Page pageNumber={currentPage} width={800} renderTextLayer={false} renderAnnotationLayer={false} />
                </Document>
              </div>

              {/* PDF NAVIGATION */}
              <div className="pdf-nav">
                <button onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
                  ←
                </button>

                <span className="pdf-page-indicator">
                  {String(currentPage).padStart(2, "0")} / {numPages}
                </span>

                <button onClick={() => setCurrentPage((p) => Math.min(p + 1, numPages))} disabled={currentPage === numPages}>
                  →
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT */}
      <div className="doctrines-sidebar">
        <button className="nav-btn top" onClick={goUp}>
          <FiChevronUp />
        </button>

        <div className="doctrine-list" ref={listRef}>
          {doctrines.map((doc, index) => {
            const isActive = index === activeIndex;

            return (
              <motion.div
                key={doc.id}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`doctrine-card ${isActive ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
                animate={{ scale: isActive ? 1.2 : 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                {isActive && (
                  <div className="doctrine-bg">
                    <FluidBackground />
                  </div>
                )}

                <span className="doctrine-number">{doc.label}</span>
                <span className="doctrine-title">{doc.title}</span>
              </motion.div>
            );
          })}
        </div>

        <button className="nav-btn bottom" onClick={goDown}>
          <FiChevronDown />
        </button>
      </div>
    </section>
  );
}
