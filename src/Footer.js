import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="footer-content"
      >
        <div className="footer-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        
        <div className="social-icons">
          <motion.a whileHover={{ y: -2 }} href="#">
            <i className="fab fa-github"></i>
          </motion.a>
          <motion.a whileHover={{ y: -2 }} href="#">
            <i className="fab fa-linkedin"></i>
          </motion.a>
        </div>

        <p>© {new Date().getFullYear()} Novanectar Service PVT. LTD. All rights reserved.</p>
      </motion.div>
    </footer>
  );
};

export default Footer;