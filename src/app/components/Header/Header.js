"use client"

import { useState, useEffect } from "react";

const Header = () => {
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
      console.log(scrollProgress)
    };
  }, [scrollProgress]);

};

export default Header;
