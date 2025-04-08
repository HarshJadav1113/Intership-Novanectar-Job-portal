import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/contact");
  };

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="home-container"
    >
      <section className="hero-section">
        <h1>Welcome to Novanectar Job Portal</h1>
        <p>Find your dream job or showcase your skills</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
          onClick={handleExploreClick}
        >
          Explore Opportunities with us!
        </motion.button>
      </section>
    </motion.main>
  );
};

export default Home;
