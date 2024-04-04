"use client";
import Image from "next/image";
import logo from "@/img/shared/logo.svg";
import Link from "next/link";
import "./estilos.css";
import "animate.css";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "DESTINATION", href: "/destination", current: false },
  { name: "CREW", href: "/crew", current: false },
  { name: "TECHNOLOGY", href: "/technology", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  const [isActive, setIsActive] = React.useState(false);
  const pathname = usePathname();
  const nombre = pathname.split("/")[1];

  useEffect(() => {
    const styles = {
      home: "home",
      destination: "destination",
      crew: "crew",
      technology: "technology",
    };
    // Elimina todas las clases de cuerpo excepto la clase correspondiente a la página actual
    const classNamesToRemove = Object.values(styles).filter(
      (className) => className !== styles[nombre]
    );
    //console.log(classNamesToRemove);
    document.body.classList.remove(...classNamesToRemove);

    // Agrega la clase correspondiente a la página actual
    document.body.classList.add(styles[nombre] || "home");

    // Limpia las clases al desmontar el componente
    return () => {
      document.body.classList.remove(...Object.values(styles));
    };
  }, [nombre]);

  return (
    <nav className="w-full py-4 px-8 sm:p-8 md:p-12 lg:p-0 lg:mt-10 absolute ">
      <div className="flex justify-between items-center relative z-20">
        <div className="lg:flex lg:items-center lg:w-full">
          <div className=" border rounded-full relative  lg:ml-14">
            <Image
              src={logo}
              alt="Logo"
              width={75}
              height={75}
              priority
              className="w-8  sm:w-12 md:w-12"
            />
          </div>

          <hr className="w-3/12 lg:w-1/3 xl:w-5/12  absolute ml-44 hidden lg:block" />

          <div className=" w-full flex flex-col items-center gap-6 lg:m-0 lg:items-end lg:h-24">
            <div className="hidden lg:flex lg:h-full  w-4/6 xl:w-7/12   items-center bg-gray-800 justify-evenly">
              <div className="flex gap-14 h-full">
                {navigation.map((item, index) => (
                  <div key={index} className="h-full">
                    <Link
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={clsx(
                        "   px-12 py-8 border-b-4  text-sm text-white border-gray-800  lg:p-0 flex h-full items-center  hover:border-b-white",
                        {
                          " border-b-white": pathname === item.href,
                        }
                      )}
                    >
                      <strong className="mr-1">0{index}</strong> {item.name}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="block lg:hidden">
          <input type="checkbox" id="checkbox" />

          <label
            htmlFor="checkbox"
            className="toggle"
            onClick={() => setIsActive(!isActive)}
          >
            <div className="bars" id="bar1"></div>
            <div className="bars" id="bar2"></div>
            <div className="bars" id="bar3"></div>
          </label>
        </div>
      </div>
      <div
        className={classNames(
          isActive ? "block" : "hidden",
          "bg-slate-950 opacity-90 h-screen w-screen fixed top-0 left-0  lg:hidden z-10"
        )}
        id="menu"
      >
        <div
          className={classNames(
            isActive ? "animate__backInDown" : "animate__backOutUp",
            "w-full h-full justify-center flex flex-col items-center gap-6 animate__animated"
          )}
        >
          {navigation.map((item, index) => (
            <Link key={index} href={item.href} className="min-w-56 w-4/5">
              <div
                className={clsx(
                  " p-2 sm:p-6 md:p-10 md:text-2xl border border-white text-lg text-white bg-gray-800 ",
                  {
                    " border-s-8": pathname === item.href,
                  }
                )}
              >
                <strong className="mr-1">0{index}</strong>
                {item.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
