"use client";

import Navbar from "@/app/Components/Navbar";
import data from "@/app/data.json";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import "animate.css";
import douglas from "@/app/assets/crew/image-douglas-hurley.png";
import mark from "@/app/assets/crew/image-mark-shuttleworth.png";
import victor from "@/app/assets/crew/image-victor-glover.png";
import anousheh from "@/app/assets/crew/image-anousheh-ansari.png";
import Image from "next/image";

function Crew() {
  useEffect(() => {
    document.title = "Space Tourism - Crew";
  }, []);
  const [urlImg, setUrlImg] = useState(douglas);
  const urlImagen = useRef(douglas);
  const [value, setValue] = useState(0);
  const crew = data.crew;
  const { name, images, role, bio } = crew[value];
  // Establecer la imagen inicial solo una vez

  useEffect(() => {
    // Verifica si hay una imagen y si urlImg aún no está establecido
    if (images) {
      switch (name) {
        case "Douglas Hurley":
          urlImagen.current = douglas;

          break;
        case "Mark Shuttleworth":
          urlImagen.current = mark;
          break;
        case "Victor Glover":
          urlImagen.current = victor;
          break;
        case "Anousheh Ansari":
          urlImagen.current = anousheh;
          break;
        default:
          urlImagen.current = douglas;
      }

      return setUrlImg(urlImagen.current);
    }
  }, [images, name]); // Dependencias: images y urlImg

  return (
    <>
      <Navbar />
      <section className="pt-24 sm:pt-32 lg:pt-56 px-2 pb-8 sm:max-w-xl  md:max-w-3xl lg:max-w-5xl xl:max-w-6xl lg:px-8 animate__animated animate__fadeInDown">
        <h2 className="text-center flex justify-center  uppercase gap-2 font-extralight  md:justify-normal sm:text-2xl">
          <span className="text-stone-500 font-bold">02</span> meet your crew
        </h2>
        <div className="mt-4 md:flex flex-row-reverse justify-between">
          <div className="flex justify-center items-center h-96">
            <Image
              src={urlImg}
              width={514}
              height={700}
              className="w-auto h-full  "
              alt={name}
              priority
            />
          </div>
          <div className="my-8 relative py-8 flex items-center text-center flex-col md:m-0 md:w-7/12 md:items-start md:justify-center md:pb-0 md:gap-4">
            <h3 className="uppercase text-sm text-zinc-400 md:text-2xl ">
              {role}
            </h3>
            <h4 className="uppercase text-3xl my-4 md:m-0 md:text-5xl md:text-left">
              {name}
            </h4>
            <p className="text-sm md:text-left md:text-base">{bio}</p>

            <div className="flex gap-4 absolute top-0 w-full  justify-center sm:w-48 md:relative md:mt-12">
              {crew.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={clsx(
                    index == value ? "bg-white" : "bg-zinc-600",
                    "w-4 h-4  rounded-full"
                  )}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Crew;
