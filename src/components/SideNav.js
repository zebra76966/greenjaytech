import { motion } from "framer-motion";
import { FiHome, FiSettings, FiHelpCircle, FiInfo, FiStar, FiMessageSquare, FiMenu } from "react-icons/fi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

import "./Sidenav.css";
import { useEffect, useState } from "react";

const navItems = [
  { icon: <FiHome />, label: "HOME" },
  { icon: <FiSettings />, label: "SERVICES" },
  { icon: <FiHelpCircle />, label: "WHY US?" },
  { icon: <FiInfo />, label: "ABOUT" },
  { icon: <FiStar />, label: "REVIEWS" },
  { icon: <FiMessageSquare />, label: "FAQs" },
];

export default function SideNav({ setIsNavOpen }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setIsNavOpen(open);
  }, [open, setIsNavOpen]);

  return (
    <motion.aside className="side-nav" animate={{ width: open ? 260 : 80 }} transition={{ duration: 0.4, ease: "easeInOut" }}>
      {/* TOP */}
      <div className={`nav-top `}>
        <div className="logo">
          <img src="/assets/logo.png" alt="Greenjay" />
        </div>

        <button className={`menu-btn `} onClick={() => setOpen(!open)}>
          <HiOutlineMenuAlt1 />
        </button>
      </div>

      {/* NAV ITEMS */}
      <nav className="nav-items ">
        {navItems.map((item, i) => (
          <motion.div key={i} className={`nav-item ${i === 0 ? "active" : ""}`} whileHover={{ x: 4 }}>
            <span className="icon">{item.icon}</span>

            {open && (
              <motion.span className="label" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }}>
                {item.label}
              </motion.span>
            )}
          </motion.div>
        ))}
      </nav>
    </motion.aside>
  );
}
