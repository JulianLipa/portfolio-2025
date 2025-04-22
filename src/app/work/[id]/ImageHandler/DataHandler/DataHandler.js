import React from "react";
import Image from "next/image";
import Link from "next/link";

const DataHandler = ({ data }) => {
  return (
    <div>
      <div className="w-vh flex flex-col justify-center items-center">
        <div className="w-vh flex justify-center items-center z-100 mb-20 mt-20">
          <div className="w-1/2">
            <h1
              className={`z-100 text-8xl font-black float-right heroTitleWeb`}
            >
              {data === "rocio-alonso" ? "Rocio Alonso" : ""}
              {data === "tik-tok-tv" ? "Tik Tok TV" : ""}
              {data === "220!-podcast" ? "220! Podcast" : ""}
            </h1>
          </div>

          <div className="w-1/2">
            {data === "rocio-alonso" ? (
              <p className="w-1/2">
                Diseño y Programación del sitio. Rocio es una artista
                multifacética actualmente viviendo en Barcelona. Ella me
                contactó para llevar a cabo su página web con el objetivo de
                mostrar sus obras y además promocionar su taller de arte.
              </p>
            ) : (
              ""
            )}

            {data === "tik-tok-tv" ? (
              <p className="w-1/2">
                Trabajo realizado para la materia Diseño Aplicado dicatada porf
                la diseñadora María Ines Camps en el 2024. La consigna buscaba
                desarrollar un proyecto que envuelva la plataforma Tik Tok a un
                ámbito digital y de stream. Desarrollar la imagen de marca y
                todas las aplicaciones para llevar a cabo el proyecto de Stream
                Online de Tik Tok TV. Los integrantes del proyecto fueron{" "}
                <Link className="buttonTag" href={""}>
                  @karenSchnaider
                </Link>{" "}
                y{" "}
                <Link className="buttonTag" href={""}>
                  @augustoLupo
                </Link>
                .
              </p>
            ) : (
              ""
            )}

            {data === "220! Podcast" ? <p className="w-1/2"></p> : ""}
          </div>
        </div>

        <div className="w-vh flex justify-center items-center z-100">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <p className="w-1/2 mt-10 mb-5">Herramientas utilizadas</p>

            <div className="flex">
              <Image
                src={"/img/icons/figma.png"}
                alt="figma icon"
                width={25}
                height={25}
                className="p-1 bg-white rounded-sm w-10 h-10 object-contain"
              />
              <Image
                src={"/img/icons/nextjs.svg"}
                alt="figma icon"
                width={25}
                height={25}
                className="p-1 bg-white rounded-sm w-10 h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataHandler;
