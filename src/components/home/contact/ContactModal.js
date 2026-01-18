// components/ContactModal.jsx
import { Modal } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import ContactSection from "./ContactSection";

export default function ContactModal({ open, onClose }) {
  return (
    <Modal
      show={open}
      onHide={onClose}
      centered
      size="xl"
      backdrop="static"
      keyboard
      className="contact-modal"
      contentClassName="bg-color-dark border-0 w-100 "
      style={{ zIndex: 9999999, backdropFilter: "blur(10px)" }}
    >
      <AnimatePresence mode="wait">
        {open && (
          <motion.div
            key="contact"
            className="border-dark border-1 border"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <Modal.Body className="p-0">
              <ContactSection onClose={onClose} origin={"modal"} />
            </Modal.Body>
          </motion.div>
        )}
      </AnimatePresence>
    </Modal>
  );
}
