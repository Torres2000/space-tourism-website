"use client";
import Navbar from "@/app/Components/Navbar";
import "animate.css";
import { TextGenerateEffect } from "../Components/ui/text-generate-effect";
function Principal() {
  const words =
    "Let’s face it; if you want to go to space, you might as well  genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!";
  return (
    <>
      <Navbar />

      <main className="pt-24 h-full  w-full bg-cover flex justify-center text-white animate__animated animate__fadeInDown">
        <section className="flex flex-col gap-2 justify-evenly  h-full items-center  md:gap-28 lg:flex-row sm:max-w-xl  md:max-w-3xl lg:max-w-5xl xl:max-w-6xl xl:justify-start ">
          <div className="text-center xl:w-7/12 xl:text-justify ">
            <h4 className="text-sm sm:text-lg md:text-2xl">
              SO, YOU WANT TO TRAVEL TO
            </h4>
            <h1 className="text-6xl my-8 sm:my-12 sm:text-7xl xl:text-9xl xl:my-8">
              SPACE
            </h1>
            <div className="text-base sm:text-xl  leading-relaxed	 sm:leading-relaxed font-thin xl:text-base">
              <TextGenerateEffect words={words} />
            </div>
          </div>
          <div className="flex justify-center  xl:w-full xl:items-end">
            <span className="text-xs sm:text-2xl w-40 h-40 sm:w-60 sm:h-60 flex justify-center items-center rounded-full bg-white text-black">
              EXPLORE
            </span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Principal;
