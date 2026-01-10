import { motion } from "framer-motion";
import { FiHome, FiSettings, FiHelpCircle, FiInfo, FiStar, FiMessageSquare } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { NavLink } from "react-router-dom";

import "./Sidenav.css";
import { useEffect, useState } from "react";

const navItems = [
  { icon: <FiHome />, label: "HOME", to: "/" },
  { icon: <FiSettings />, label: "SERVICES", to: "/services" },
  { icon: <FiHelpCircle />, label: "WHY US?", to: "/why-us" },
  { icon: <FiInfo />, label: "ABOUT", to: "/about" },
  { icon: <FiStar />, label: "REVIEWS", to: "/reviews" },
  { icon: <FiMessageSquare />, label: "FAQs", to: "/faqs" },
];

export default function SideNav({ setIsNavOpen }) {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setIsNavOpen(open);
  }, [open, setIsNavOpen]);

  return (
    <motion.aside className="side-nav" animate={{ width: open ? 260 : 80 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
      {/* TOP */}
      <div className="nav-top">
        <div className="logo">
          <img src="/assets/logo.png" alt="Greenjay" />
        </div>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          <HiOutlineMenuAlt1 />
        </button>
      </div>

      {/* NAV ITEMS */}
      <nav className="nav-items">
        {navItems.map((item, i) => (
          <NavLink key={i} to={item.to} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}>
            <motion.div whileHover={{ x: 4 }} className="nav-inner">
              <span className="icon">{item.icon}</span>

              {open && (
                <motion.span className="label" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                  {item.label}
                </motion.span>
              )}
            </motion.div>
          </NavLink>
        ))}
      </nav>
    </motion.aside>
  );
}
