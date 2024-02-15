import { motion } from "framer-motion";
import React from "react";
import "../styles/Presentation.css";
export const Presentation = () => {
  return (
    <motion.section
      className="presentation-cnt"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    ></motion.section>
  );
};
