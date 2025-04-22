"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroAnimateButton = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollPosition / windowHeight) * 100;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={scrollProgress < 20 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="absolute bottom-0 w-screen flex justify-center pb-10 items-center gap-10"
    >
      {children}
    </motion.div>
  );
};

export default HeroAnimateButton;
