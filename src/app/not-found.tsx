import Link from "next/link";
import Navbar from "./Components/Navbar";
import moon from "@/img/moon.png";
import astronauta from "@/img/astronauta.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex flex-col-reverse md:flex-row justify-center items-center gap-16 ">
        <div className="flex flex-col">
          <div className="flex">
            <span className="text-9xl text-pop-up-right">4</span>
            <Image
              src={moon}
              width={500}
              height={500}
              alt="Moon"
              priority
              className="w-32 rotate-center"
            />
            <span className="text-9xl text-pop-up-left">4</span>
          </div>
          <div className="flex flex-col items-center gap-4 my-8">
            <h2 className="text-4xl font-bold"> OPPS!</h2>
            <p className="text-4xl font-bold">PAGE NOT FOUND</p>

            <Link
              href="/"
              className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              Return Home
            </Link>
          </div>
        </div>
        <div>
          <Image
            src={astronauta}
            width={512}
            height={512}
            alt="Astronauta"
            priority
            className="w-40 md:w-96 "
          />
        </div>
      </div>
    </>
  );
}
