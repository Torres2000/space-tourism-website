"use client";
import Image from "next/image";
import Navbar from "@/app/Components/Navbar";

import vehicleAnc from "../assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePor from "../assets/technology/image-launch-vehicle-portrait.jpg";
import capsuleAnc from "../assets/technology/image-space-capsule-landscape.jpg";
import capsulePor from "../assets/technology/image-space-capsule-portrait.jpg";
import spaceportAnc from "../assets/technology/image-spaceport-landscape.jpg";
import spaceportPor from "../assets/technology/image-spaceport-portrait.jpg";
import "animate.css";
import data from "@/app/data.json";
import { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Button } from "../Components/ui/moving-border";
import { CardContainer, CardItem } from "../Components/ui/3d-card";

function Tecnology() {
  useEffect(() => {
    document.title = "Space Tourism - Technology";
  }, []);
  const [urlImgAnc, setUrlImgAnc] = useState(vehicleAnc);
  const [urlImgPor, setUrlImgPor] = useState(vehiclePor);
  const ImagenAnc = useRef(vehicleAnc);
  const ImagenPor = useRef(vehiclePor);
  const [value, setValue] = useState(0);
  const technology = data.technology;
  const { name, images, description } = technology[value];

  // Establecer la imagen inicial solo una vez

  useEffect(() => {
    // Verifica si hay una imagen y si urlImg aún no está establecido
    if (images) {
      switch (name) {
        case "Launch vehicle":
          ImagenAnc.current = vehicleAnc;
          ImagenPor.current = vehiclePor;

          break;
        case "Spaceport":
          ImagenAnc.current = spaceportAnc;
          ImagenPor.current = spaceportPor;
          break;
        case "Space capsule":
          ImagenAnc.current = capsuleAnc;
          ImagenPor.current = capsulePor;
          break;

        default:
          ImagenAnc.current = vehicleAnc;
          ImagenPor.current = vehiclePor;
      }
      setUrlImgAnc(ImagenAnc.current);
      setUrlImgPor(ImagenPor.current);
    }
  }, [images, name]); // Dependencias: images y urlImg

  return (
    <>
      <Navbar />
      <section className="pt-24 sm:pt-32 lg:pt-56 px-2 pb-8 sm:max-w-xl  md:max-w-3xl lg:max-w-5xl xl:max-w-6xl lg:px-8 relative">
        <h2 className="text-center flex justify-center gap-2 font-extralight  md:justify-normal sm:text-2xl uppercase animate__animated animate__fadeInDown">
          <span className="text-stone-500 font-bold">03</span> space launch 1001
        </h2>
        <div className="flex flex-col-reverse mt-12 items-center md:grid grid-cols-2 md:gap-4 relative">
          <div className="md:flex md:gap-8  animate__animated animate__fadeInDown">
            <div className="flex w-full justify-center gap-4 my-8 md:m-0 md:flex-col md:items-center lg:justify-between md:w-auto lg:h-80  xl:h-72">
              {technology.map((item, index) => (
                <Button
                  key={index}
                  onClick={() => setValue(index)}
                  className={clsx(
                    index == value
                      ? "bg-white text-black"
                      : "text-white  dark:bg-slate-900  dark:text-white border-neutral-200 dark:border-slate-800",
                    "h-8 w-8 border  rounded-full  md:h-16 md:w-16 md:text-2xl "
                  )}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
            <div className="flex flex-col items-center md:items-start md:gap-4 md:justify-between">
              <h3 className="uppercase text-zinc-400 ">the terminology...</h3>
              <h4 className="uppercase text-2xl my-4 md:text-5xl">{name}</h4>
              <p className="text-center md:text-left md:text-base">
                {description}
              </p>
            </div>
          </div>
          <div className="md:w-full animate__animated animate__fadeInDown ">
            <CardContainer className="inter-var">
              <CardItem
                translateZ="100"
                rotateX={5}
                rotateZ={-5}
                className="w-full mt-4"
              >
                <Image
                  src={urlImgAnc}
                  width={768}
                  height={310}
                  alt="Ejemplo"
                  className="block md:hidden object-cover rounded-xl group-hover/card:shadow-xl "
                  priority
                />
                <Image
                  src={urlImgPor}
                  width={515}
                  height={527}
                  alt="Ejemplo"
                  className="hidden md:block object-cover rounded-xl group-hover/card:shadow-xl"
                  priority
                />
              </CardItem>
            </CardContainer>
          </div>
        </div>
      </section>
    </>
  );
}

export default Tecnology;
