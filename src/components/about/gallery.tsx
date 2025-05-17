"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({ subsets: ["vietnamese"] });

export default function Gallery() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  return (
    <div className="flex justify-center flex-col items-center px-10 md:px-28 lg:px-40">
      <div
        className={`${josefin_sans.className} text-center text-white border-b-2 border-[#4EA898] text-5xl my-10`}
      >
        PHOTO GALLERY
      </div>

      <div className="bg-gradient-to-b from-[#0D3032] to-[#289298] w-full p-4 sm:p-6 md:p-8 lg:p-10 h-[700px] rounded-3xl">
        {isMobile ? (
          <div className="grid grid-cols-2 gap-3 w-full h-full">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div
                key={num}
                className={`bg-white rounded-lg overflow-hidden ${
                  num === 3 ? "col-span-2" : ""
                }`}
              >
                <Image
                  src={`/hero-image.png`}
                  alt={`Gallery image ${num}`}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-6 grid-rows-5 gap-4 text-white  w-full h-full md:gap-4">
            <div className="bg-white rounded-xl ">
              <Image
                src="/hero-image.png"
                alt="Gallery image 1"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-white rounded-xl col-span-3">
              <Image
                src="/hero-image.png"
                alt="Gallery image 1"
                width={800}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-xl col-span-2 row-span-2 col-start-5">
              <Image
                src="/hero-image.png"
                alt="Gallery image 1"
                width={500}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-xl col-span-2 row-span-3 col-start-5 row-start-3">
              <Image
                src="/hero-image.png"
                alt="Gallery image 1"
                width={500}
                height={900}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-xl col-span-3 row-span-4 col-start-2 row-start-2">
              <Image
                src="/hero-image.png"
                alt="Gallery image 1"
                width={800}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-xl row-span-2 col-start-1 row-start-2">
              <Image
                src="/hero-image.png"
                alt="Gallery image 1"
                width={300}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-white rounded-xl row-span-2 row-start-4">
              <Image
                src="/hero-image.png"
                alt="Gallery image 1"
                width={300}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
