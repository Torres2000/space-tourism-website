"use client";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar";
import Moon from "@/img/destination/image-moon.png";
import Mars from "@/img/destination/image-mars.png";
import Europa from "@/img/destination/image-europa.png";
import Titan from "@/img/destination/image-titan.png";
import data from "@/app/data.json";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import "animate.css";
function Destination() {
  useEffect(() => {
    document.title = "Space Tourism - Detinations";
  }, []);
  const [urlImg, setUrlImg] = useState(Moon);
  let urlImagen;
  const [value, setValue] = useState(0);
  const destinations = data.destinations;
  const { name, images, description, distance, travel } = destinations[value];

  const urlImagenRef = useRef(Moon);

  // Establecer la imagen inicial solo una vez
  useEffect(() => {
    // Verifica si hay una imagen y si urlImg aún no está establecido
    if (images) {
      switch (name) {
        case "Moon":
          urlImagenRef.current = Moon;
          break;
        case "Mars":
          urlImagenRef.current = Mars;
          break;
        case "Europa":
          urlImagenRef.current = Europa;
          break;
        case "Titan":
          urlImagenRef.current = Titan;
          break;
        default:
          urlImagenRef.current = Moon;
      }

      return setUrlImg(urlImagenRef.current);
    }
  }, [images, name]); // Dependencias: images y urlImg
  return (
    <>
      <Navbar />
      <section className="pt-24 sm:pt-32 lg:pt-56 px-2 pb-8 sm:max-w-xl  md:max-w-3xl lg:max-w-5xl xl:max-w-6xl lg:px-8 animate__animated animate__fadeInDown">
        <h2 className="text-center flex justify-center gap-2 font-extralight  md:justify-normal sm:text-2xl">
          <span className="text-stone-500 font-bold">01</span> PICK YOUR
          DESTINATION
        </h2>
        <div className="relative mt-4 sm:grid md:grid-cols-2 md:gap-8 md:items-end md:mt-12 lg:gap-20 xl:gap-32 ">
          <div className="pt-12 pb-8 flex justify-center md:p-0">
            <Image
              src={urlImg}
              alt={name}
              width={450}
              height={450}
              className="w-56 md:w-full "
            />
          </div>
          <div className="flex flex-col items-center sm:h-full sm:justify-between sm:items-start sm:gap-4">
            <div className="absolute top-0 flex justify-evenly w-full h-8 gap-3 md:relative md:justify-start md:gap-8">
              {destinations.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setValue(index)}
                  className={clsx(
                    index == value
                      ? "border-b-white border-b-2 animate__animated  animate__fadeIn"
                      : "",
                    "uppercase hover:border-b-white hover:border-b-2"
                  )}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <h2 className="text-5xl sm:text-7xl lg:text-8xl uppercase ">
              {name}
            </h2>
            <p className="lg:text-base ">{description}</p>
            <hr className="w-full my-4 lg:m-0" />
            <div className="flex w-full justify-between gap-4">
              <div className="flex flex-col items-center sm:items-start">
                <span>AVG DISTANCE</span>
                <span className="lg:text-2xl xl:text-4xl">{distance}</span>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <span>EST. TRAVEL TIME</span>
                <span className="lg:text-2xl xl:text-4xl">{travel}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Destination;
