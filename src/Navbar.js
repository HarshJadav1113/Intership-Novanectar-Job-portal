import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../styles/Navbar.css";
import logo from '../assets/1.png';
const Navbar = () => {
  return (
    <nav className="navbar">
      <motion.div whileHover={{ scale: 1.1 }} className="logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </motion.div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
