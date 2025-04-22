"use client";
import { useState, useEffect } from "react";

export default function DynamicHeading() {
  const texts = [
    "Julián Lipari",
    "Diseñador",
    "Creativo",
    "Dinámico",
    "Innovador",
    "Multimedio",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <h2 className={`z-200 text-9xl font-black heroTitleWeb`}>{texts[index]}</h2>
  );
}
