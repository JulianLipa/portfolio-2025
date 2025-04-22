"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimateEntrance = ({ children }) => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1, ease: "easeInOut" }} 
    >
      {children}
    </motion.div>
  );
};

export default AnimateEntrance;