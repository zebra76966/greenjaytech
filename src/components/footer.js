import { motion } from "framer-motion";
import { FiInstagram, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";
import FluidBackground from "./home/animtion2";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer-section">
      {/* Topographic SVG background */}
      <div className="footer-bg">
        <FluidBackground />
      </div>

      <div className="footer-inner">
        {/* LEFT BRAND */}
        <div className="footer-brand">
          <div className="d-flex gap-3 align-items-center">
            <img src="/assets/thumbnail.png" alt="Greenjay" className="footer-logo" />

            <h2 className="footer-tagline">
              SECURITY
              <span>REDEFINED</span>
            </h2>
          </div>

          <p className="footer-desc">Mission-ready security architecture engineered for intelligence, resilience, and operational dominance.</p>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <div className="footer-col">
            <h4 className="fs-5">QUICK LINKS</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="fs-5">SERVICES</h4>
            <ul>
              <li>Security Consulting</li>
              <li>Video Surveillance</li>
              <li>Robotics & Autonomous Systems</li>
              <li>Tactical Training</li>
              <li>Implementation</li>
            </ul>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h4 className="fs-5">STAY INFORMED</h4>
          <p>Subscribe for intelligence briefs, security insights, and mission updates.</p>

          <div className="newsletter-input">
            <FiMail />
            <input type="email" placeholder="Your email address" />
            <button className="fs-6">SUBSCRIBE</button>
          </div>

          {/* SOCIALS */}
          <div className="footer-socials">
            <FiInstagram />
            <FiTwitter />
            <FiLinkedin />
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Greenjay Tech. All rights reserved.</span>
      </div>
    </footer>
  );
}
