"use client";
import { useState, useEffect } from "react";

import styles from "@/app/page.module.css";

const ScrollWorkSection = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State for toggling menu visibility

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollPosition / windowHeight) * 100;
    setScrollProgress(scrolled);

    if (scrollPosition > 150) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log(scrollProgress);
    };
  }, [scrollProgress]);

  return (
    <div className="w-vh flex justify-center items-center z-100">
      <div className="w-1/2">
        <h1 className={`z-100 text-8xl font-black float-right ${styles.titleWeb} sticky`}>
          Trabajos
        </h1>
      </div>

      <div className="flex flex-wrap w-1/2 z-100">
        <p className="w-full">Rocío Alonso Website</p>
        <p className="w-full">Rocío Alonso Website</p>
        <p className="w-full">Rocío Alonso Website</p>
      </div>
    </div>
  );
};

export default ScrollWorkSection;
