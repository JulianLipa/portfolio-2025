"use client";

import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

import DynamicHeading from "@/app/components/Main/DynamicHeading/DynamicHeading";
import Link from "next/link";
import Image from "next/image";

const MainBody = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled) {
        setHasScrolled(true);
        document
          .getElementById("mainBody")
          ?.scrollIntoView({ behavior: "smooth" });

        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const [hoveredLink, setHoveredLink] = useState(null);

  const getImageSrc = () => {
    switch (hoveredLink) {
      case 1:
        return "/img/works/rocio-alonso/1.png";
      case 2:
        return "/img/works/tik-tok-tv/1.png";
      case 3:
        return "/img/works/220!-podcast/1.png";
      case 4:
        return "/img/works/umai-game-lab/1.gif";
      case 5:
        return "/img/works/bolero-fervor/1.gif";
      default:
        return null;
    }
  };

  return (
    <section className={`${styles.mainBody} pb-96`} id="mainBody">
      <div
        className={`w-vh flex justify-center items-center relative ${styles.videoDiv}`}
      >
        <DynamicHeading className="absolute" />

        <video
          src="/img/gopro.MP4"
          autoPlay
          loop
          muted
          playsInline
          className={`absolute z-100 ${styles.videoHero}`}
        />
      </div>

      <div className="w-vh flex justify-center items-center z-100 mb-20">
        <div className="w-1/2">
          <h1 className={`z-100 text-8xl font-black float-right heroTitleWeb`}>
            Sobre mí
          </h1>
        </div>

        <div className="w-1/2">
          <p className="w-1/2">
            Diseñador visual multimedia emergente, especializado en forjar
            identidades visuales digitales y experiencias UX/UI 💥 Estoy en la
            búsqueda de desafíos creativos, conectemos y contame tu proyecto
          </p>
        </div>
      </div>

      <div
        className="w-vh flex justify-center items-center z-100 align-top"
        id="trabajos"
      >
        <div className="w-1/2">
          <h1
            className={`z-100 text-8xl font-black float-right ${styles.titleWeb} sticky`}
          >
            Trabajos
          </h1>
        </div>

        <div className="flex flex-col w-1/2 z-100">
          <Link
            href={"/work/rocio-alonso"}
            onMouseEnter={() => setHoveredLink(1)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Rocío Alonso Website (2025)
          </Link>
          <Link
            href={"/work/tik-tok-tv"}
            onMouseEnter={() => setHoveredLink(2)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Tik Tok TV Streaming Stream Channel Branding (2024)
          </Link>
          <Link
            href={"/work/220!-podcast"}
            onMouseEnter={() => setHoveredLink(3)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            220! Podcast Branding (2024)
          </Link>
          <Link
            href={"/work/umai-game-lab"}
            onMouseEnter={() => setHoveredLink(4)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            UMAI Game Lab Slides Design (2023)
          </Link>

          <Link
            href={"/works/bolero-fervor"}
            onMouseEnter={() => setHoveredLink(5)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            Bolero + Fervor Website Concept and Design (2023)
          </Link>
        </div>

        {hoveredLink !== null && (
          <div className="absolute right-0">
            <Image
              src={getImageSrc()}
              alt="Exposition Image"
              width={500}
              height={500}
              className={styles.obraImg}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MainBody;
