import { motion } from "framer-motion";
import { FiHome, FiSettings, FiHelpCircle, FiInfo, FiStar, FiMessageSquare } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Sidenav.css";
import { FaBuildingUser } from "react-icons/fa6";

const navItems = [
  { icon: <FiHome />, label: "HOME", to: "/" },
  { icon: <FaBuildingUser />, label: "FOUNDERS", to: "/founders" },
  { icon: <FiSettings />, label: "SERVICES", to: "/services" },
  { icon: <FiHelpCircle />, label: "WHY US?", to: "/#whyus" },
  { icon: <FiInfo />, label: "ABOUT", to: "/about" },
  { icon: <FiStar />, label: "REVIEWS", to: "/reviews" },
  { icon: <FiMessageSquare />, label: "FAQs", to: "/faqs" },
];

export default function SideNav({ setIsNavOpen }) {
  const [open, setOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1350);

  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 1350;
      setIsMobile(mobile);

      // On mobile, default closed
      if (mobile) {
        setOpen(false);
      } else if (window.innerWidth > 1500) {
        setOpen(true);
      } else {
        setOpen(false);
      }
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    setIsNavOpen(!isMobile && open);
  }, [open, isMobile, setIsNavOpen]);

  const desktopAnim = {
    width: open ? 200 : 80,
    x: 0,
  };

  const mobileAnim = {
    width: 200,
    x: open ? 0 : -200,
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {console.log("isMobile", isMobile)}
      {isMobile && (
        <div className="d-flex gap-1 position-fixed top-0 start-0" style={{ zIndex: 999 }}>
          <div className="logo">
            <img src="/assets/logo.png" alt="Greenjay" />
          </div>

          {/* On mobile always show menu icon */}
          {(isMobile || true) && (
            <button className="menu-btn" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 />
            </button>
          )}
        </div>
      )}

      {isMobile && open && <div className="nav-backdrop" onClick={() => setOpen(false)} />}

      <motion.aside className={`side-nav ${isMobile ? "mobile" : ""}`} animate={isMobile ? mobileAnim : desktopAnim} transition={{ duration: 0.35, ease: "easeInOut" }}>
        <div className="nav-top">
          <div className="logo">
            <img src="/assets/logo.png" alt="Greenjay" />
          </div>

          {/* On mobile always show menu icon */}
          {(isMobile || true) && (
            <button className="menu-btn" onClick={() => setOpen(!open)}>
              <HiOutlineMenuAlt1 />
            </button>
          )}
        </div>

        <nav className="nav-items">
          {navItems.map((item, i) => (
            <NavLink key={i} to={item.to} onClick={() => isMobile && setOpen(false)} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
              <motion.div whileHover={{ x: 4 }} className="nav-inner">
                <span className="icon">{item.icon}</span>

                {(!isMobile && open) || isMobile ? (
                  <motion.span className="label" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }}>
                    {item.label}
                  </motion.span>
                ) : null}
              </motion.div>
            </NavLink>
          ))}
        </nav>
      </motion.aside>
    </>
  );
}
