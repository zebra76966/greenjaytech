import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./doctrinesViewer.css";
import doctrines from "./docrtinesDat.json";
import FluidBackground from "../animtion2";
import { FiChevronUp, FiChevronDown, FiArrowRight, FiArrowLeft } from "react-icons/fi";

import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useNavigate, useParams } from "react-router-dom";
import FluidBackgroundZoom from "../animtion3";
import { IoMdCloseCircle } from "react-icons/io";
import { MdCloseFullscreen, MdFullscreen } from "react-icons/md";
import DoctrinesOverview from "./doctrineOverviewMain";
import ContactMain from "../contact/contactMain";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function DoctrinesViewer() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const id = params.id;

  const [activeIndex, setActiveIndex] = useState(2);
  const listRef = useRef(null);
  const itemRefs = useRef([]);
  const [numPages, setNumPages] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const BASE_HEIGHT = 180;
  const ACTIVE_HEIGHT = 200;
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
  useEffect(() => {
    const idx = Number(id);

    if (!Number.isNaN(idx)) {
      setActiveIndex(Math.min(Math.max(idx, 0), doctrines.length - 1));
    }
  }, [id]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -30, scale: 0.98 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="position-relative"
        style={{ overflow: "hidden" }}
      >
        <motion.section className="doctrines-wrapper d-xl-grid d-block">
          {/* LEFT */}

          <div className="doctrines-main doctrines-detail-left">
            <div className="d-flex justify-content-between">
              <motion.button
                className="btn-enquire-advanced"
                initial={{ opacity: 0, x: -20, scale: 0.8, originX: 0 }}
                animate={{ opacity: 1, x: 0, scale: 0.8, originX: 0, originY: 0 }}
                onClick={() => navigate(-1)}
              >
                <span className="btn-text">GO BACK</span>
                <span className="arrow-wrapper" style={{ scale: 0.7 }}>
                  <span className="ripple delay-1" />
                  <span className="ripple delay-2" />

                  <FiArrowLeft size={30} />
                </span>
              </motion.button>
              <h6 className="services-eyebrow  text-end pFont fs-6  py-4 bg-none w-50" style={{ zIndex: "999", letterSpacing: "0.4em" }}>
                {doctrines[activeIndex].title}.
              </h6>
            </div>
            {/* <div className="doctrine-counter">
          {String(activeIndex + 1).padStart(2, "0")}
          <span>/ {doctrines.length}</span>
        </div> */}

            <div className="doctrine-counter mb-0 fw-bold">
              {String(currentPage).padStart(2, "0")}
              <span>/ {numPages ?? "--"}</span>
            </div>

            <div className="doctrine-content-box mt-0">
              <AnimatePresence mode="wait">
                <motion.div key={doctrines[activeIndex].pdf} className="pdf-wrapper" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
                  <div className="pdfWrapperMain" data-lenis-prevent>
                    <button className="pdf-enlarge-btn p-2 d-flex align-items-center justify-content-center" onClick={() => setIsFullscreen(true)}>
                      <MdFullscreen size={25} />
                    </button>
                    <Document file={doctrines[activeIndex].pdf} onLoadSuccess={({ numPages }) => setNumPages(numPages)} onLoadError={(err) => console.error("PDF load error:", err)}>
                      <Page pageNumber={currentPage} width={800} renderTextLayer={false} renderAnnotationLayer={false} />
                    </Document>
                  </div>

                  {/* PDF NAVIGATION */}
                  <div className="pdf-nav d-flex  gap-0 justify-content-end align-items-center mb-5 mt-3 ">
                    <button className="btn-enquire-advanced" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
                      <span className="arrow-wrapper">
                        <span className="ripple delay-1" />
                        <span className="ripple delay-2" />

                        <FiArrowLeft size={35} />
                      </span>
                    </button>

                    {/* <span className="pdf-page-indicator d-none">
                  {String(currentPage).padStart(2, "0")} / {numPages}
                </span> */}

                    <button className="btn-enquire-advanced" onClick={() => setCurrentPage((p) => Math.min(p + 1, numPages))} disabled={currentPage === numPages}>
                      <span className="arrow-wrapper">
                        <span className="ripple delay-1" />
                        <span className="ripple delay-2" />

                        <FiArrowRight size={35} />
                      </span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="d-flex justify-conten-between btmContent pt-3">
              <p className="doctrine-para text-secondary-color pe-4 pt-4">{doctrines[activeIndex].description}</p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="doctrines-sidebar d-xl-flex d-none">
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
                    className={`doctrine-card pe-3 pb-0 ${isActive ? "active" : ""}   `}
                    onClick={() => setActiveIndex(index)}
                    animate={{ scale: isActive ? 1.2 : 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  >
                    {isActive && (
                      <div className="doctrine-bg">
                        <FluidBackground />
                      </div>
                    )}

                    <span className="doctrine-number fw-bold">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>

                    <div className="text-end ">
                      <span className="doctrine-title hFont fs-5">{doc.title}</span>
                      <p className="doctrine-text text-secondary-color ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <button className="nav-btn bottom" onClick={goDown}>
              <FiChevronDown />
            </button>
          </div>
        </motion.section>

        <div className="ripple-layer servicesRipple opacity-100">
          <FluidBackgroundZoom />
        </div>

        <AnimatePresence>
          {isFullscreen && (
            <motion.div className="pdf-fullscreen-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
              <motion.div className="pdf-fullscreen-modal" initial={{ scale: 0.9, y: 40 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 40 }}>
                <button className="pdf-enlarge-btn d-flex align-items-center justify-content-center p-2" onClick={() => setIsFullscreen(false)}>
                  <MdCloseFullscreen size={25} />
                </button>

                <div className="pdfWrapperMain" data-lenis-prevent>
                  <div className="w-100">
                    <div className="w-100 h-100 pdfInner">
                      <Document file={doctrines[activeIndex].pdf}>
                        <Page pageNumber={currentPage} width={1000} renderTextLayer={false} renderAnnotationLayer={false} />
                      </Document>
                    </div>

                    <div className="pdf-nav d-flex  gap-0 justify-content-end align-items-center mb-5 mt-3 ">
                      <button className="btn-enquire-advanced" onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))} disabled={currentPage === 1}>
                        <span className="arrow-wrapper">
                          <span className="ripple delay-1" />
                          <span className="ripple delay-2" />

                          <FiArrowLeft size={35} />
                        </span>
                      </button>

                      {/* <span className="pdf-page-indicator d-none">
                  {String(currentPage).padStart(2, "0")} / {numPages}
                </span> */}

                      <button className="btn-enquire-advanced" onClick={() => setCurrentPage((p) => Math.min(p + 1, numPages))} disabled={currentPage === numPages}>
                        <span className="arrow-wrapper">
                          <span className="ripple delay-1" />
                          <span className="ripple delay-2" />

                          <FiArrowRight size={35} />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <DoctrinesOverview headertxt={"OTHER DOCTRINES."} />

      <ContactMain />
    </>
  );
}
