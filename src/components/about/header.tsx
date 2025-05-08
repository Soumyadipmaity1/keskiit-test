import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import { Crete_Round, Comic_Neue } from "next/font/google";

const crete_round = Crete_Round({ subsets: ["latin"], weight: "400" });
const comic_neue = Comic_Neue({ subsets: ["latin"], weight: "400" });

export default function Header() {
  return (
    <div
      className={`${style.background} flex justify-center px-10 gap-5 items-center  h-full flex-col text-white`}
    >
      <p>
        <Image src="/about/logo.jpg" alt="KES" width={200} height={200} />
      </p>
      <p
        className={`${crete_round.className} text-4xl text-center font-normal`}
      >
        KIIT ELECTRICAL SOCIETY
      </p>
      <p className={`${comic_neue.className} text-[#F4941E] font-bold`}>
        &quot;Build Small, Think Big&quot;
      </p>
      <p className={`${comic_neue.className} font-bold text-justify`}>
        Welcome to the KIIT Electrical Society (KES), your gateway to boundless
        innovation and intellectual curiosity. We&apos;re a dynamic community
        that embraces a wide range of technical domains, from robotics to AI,
        web development to cybersecurity. Join us as we “Build Small, Think Big”
        and transcend boundaries through our multifaceted endeavors. Dive into
        our world of technological prowess and be a part of our journey towards
        fostering innovation.
      </p>
    </div>
  );
}
