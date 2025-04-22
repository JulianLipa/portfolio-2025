import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed z-200 w-fit">
      <Image
        src={"/branding/3d-logo-censored.gif"}
        alt="figma icon"
        width={200}
        height={200}
        className="p-1 bg-white rounded-sm object-contain"
      />
      <Link href={"/"} className="text-2xl float-right p-5">
        Inicio
      </Link>
    </div>
  );
};

export default Header;
