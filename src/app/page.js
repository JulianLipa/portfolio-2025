"use client";

import styles from "@/app/page.module.css";
import Link from "next/link";
import Image from "next/image";

import Header from "@/app/components/Header/Header";
import HorizontalBanner from "@/app/components/Main/HorizontalBanner/HorizontalBanner";
import MainBody from "@/app/components/Main/MainBody/MainBody";
import HeroAnimateOut from "@/app/components/Main/HeroAnimateOut/HeroAnimateOut";
import HeroAnimateButton from "./components/Main/HeroAnimateButton/HeroAnimateButton";

export default function Home() {
  return (
    <main className={`${styles.mainSection} mainSection w-screen h-svh flex justify-center items-center relative`}>
      <h1 className="bolder text-9xl heroTitleWeb absolute">Vuelva pronto</h1>
      <Image
        src="/transit.gif"
        alt="material"
        width={750}
        height={750}
        className="img-gif absolute"
      />
    </main>
  );
}
