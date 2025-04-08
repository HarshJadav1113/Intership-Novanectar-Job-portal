import { motion } from "framer-motion";
import "../styles/Skillbar.css";

const SkillBar = ({ name, level, color = "#3498db", showPercentage = true }) => {
  return (
    <div className="skill-container">
      <div className="skill-info">
        <span>{name}</span>
        {showPercentage && <span>{level}%</span>}
      </div>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ 
          duration: 1.2,
          delay: 0.2,
          type: "spring",
          damping: 10
        }}
        className="skill-bar"
        style={{ 
          backgroundColor: color,
          boxShadow: `0 0 8px ${color}`
        }}
      />
    </div>
  );
};
export default SkillBar;