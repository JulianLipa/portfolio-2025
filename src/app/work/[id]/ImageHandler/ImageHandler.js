"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import style from "@/app/work/[id]/page.module.css";
import VideoEmbed from "@/app/work/[id]/ImageHandler/VideoEmbed/VideoEmbed";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DataHandler from "./DataHandler/DataHandler";

const ImageHandler = (data) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const dataFetched = data.data;

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    const fetchImages = async () => {
      let imagesByFolder = [];
      try {
        setLoading(true);

        const res = await fetch(`/api/getImages?folder_name=${dataFetched}`);
        const imageResponses = await res.json();

        console.log(imageResponses);
        setImages(imageResponses);
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [dataFetched]);

  const containerRef = useRef(null);

  const handleVerticalScroll = () => {
    if (containerRef.current) {
      const scrollPosition = containerRef.current.scrollTop;
      containerRef.current.scrollLeft = scrollPosition;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleVerticalScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleVerticalScroll);
      }
    };
  }, []);

  return (
    <section className={`${style.horizontalGalleryOuter}`}>
      {dataFetched === "rocio-alonso" && <DataHandler data="rocio-alonso"/>}
      {dataFetched === "tik-tok-tv" && <DataHandler data="tik-tok-tv"/>}
      {dataFetched === "220!-podcast" && <DataHandler data="220!-podcast"/>}

      <div ref={triggerRef}>
        <div
          ref={sectionRef}
          className={`gap-10 ${style.horizontalGalleryInner}`}
        >
          {images.map((img, index) => (
            <div key={index} className="scroll-container" ref={containerRef}>
              <Image
                src={img}
                alt="material"
                width={1400}
                height={700}
                className="w-screen"
              />
            </div>
          ))}
        </div>
      </div>
      {dataFetched === "rocio-alonso" && <VideoEmbed videoId="1071439277" />}
    </section>
  );
};

export default ImageHandler;
