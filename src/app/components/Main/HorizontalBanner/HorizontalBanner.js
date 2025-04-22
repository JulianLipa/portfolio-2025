import styles from "@/app/page.module.css";

import Image from "next/image";
import AnimateEntrance from "@/app/components/AnimateEntrance/AnimateEntrance";

const HorizontalBanner = () => {
  return (
    <AnimateEntrance>
      <div className="w-vh h-svh flex justify-center items-center z-100">
        <h1 className={`z-100 text-8xl font-black ${styles.titleWeb}`}>
          Julián Lipari
        </h1>

        <Image
          src={"/branding/3d-logo-censored.gif"}
          alt="profile photo Julian Lipari"
          width={300}
          height={200}
          className="z-100"
          unoptimized
        />

        <h1 className={`z-100 text-8xl font-black ${styles.titleWeb}`}>
          Julián Lipari
        </h1>

        <Image
          src={"/branding/logo-julian-lipari.png"}
          alt="profile photo Julian Lipari"
          width={250}
          height={200}
          className="z-100"
        />

        <h1 className={`z-100 text-8xl font-black ${styles.titleWeb}`}>
          Julián Lipari
        </h1>

        <Image
          src={"/branding/logo-animated.gif"}
          alt="profile photo Julian Lipari"
          width={250}
          height={200}
          className="z-100"
          unoptimized
        />
      </div>
    </AnimateEntrance>
  );
};

export default HorizontalBanner;
