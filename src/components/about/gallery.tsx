import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({ subsets: ["vietnamese"] });

export default function Gallery() {
  return (
    <div className="flex justify-center flex-col items-center px-40">
      <div
        className={`${josefin_sans.className} text-center text-white border-b-2 border-[#4EA898] text-5xl mt-10`}
      >
        PHOTO GALLERY
      </div>

      <div className="bg-linear-to-b from-[#0D3032] to-[#289298] w-full p-10 h-96">
        <div className="grid grid-cols-6 grid-rows-5 gap-4 text-white border-2 border-red-500 w-full h-full">
          <div className="norder-2 bg-white rounded-xl ">1</div>
          <div className="norder-2 bg-white rounded-xl col-span-3">2</div>
          <div className="norder-2 bg-white rounded-xl col-span-2 row-span-2 col-start-5">3</div>
          <div className="norder-2 bg-white rounded-xl col-span-2 row-span-3 col-start-5 row-start-3">4</div>
          <div className="norder-2 bg-white rounded-xl col-span-3 row-span-4 col-start-2 row-start-2">5</div>
          <div className="norder-2 bg-white rounded-xl row-span-2 col-start-1 row-start-2">6</div>
          <div className="norder-2 bg-white rounded-xl row-span-2 row-start-4">7</div>
        </div>
      </div>
    </div>
  );
}
