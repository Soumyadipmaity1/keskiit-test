"use client";

import React, { useState } from "react";
import { Josefin_Sans } from "next/font/google";
import { Comic_Neue } from "next/font/google";
import ModelCard from "./card";
import { Crete_Round } from "next/font/google";

const crete_round = Crete_Round({ subsets: ["latin"], weight: "400" });
const comic_neue = Comic_Neue({ subsets: ["latin"], weight: "400" });
const josefin_sans = Josefin_Sans({ subsets: ["vietnamese"] });

const info = [
  {
    name: "Anirban Sadhukhan",
    roll: 22052732,
    img: "/team/anirban.jpg",
    branch: "CSE",
    github: "https://github.com/anirban1903",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/anirban-sadhukhan-1903/",
  },
  {
    name: "Anirban Sadhukhan",
    roll: 22052732,
    img: "/team/anirban.jpg",
    branch: "CSE",
    github: "https://github.com/anirban1903",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/anirban-sadhukhan-1903/",
  },
  {
    name: "Anirban Sadhukhan",
    roll: 22052732,
    img: "/team/anirban.jpg",
    branch: "CSE",
    github: "https://github.com/anirban1903",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/anirban-sadhukhan-1903/",
  },
];

export default function Team() {
  const [isActive, setIsActive] = useState("corrdinator");

  const hanldeClick = (category: string) => {
    setIsActive(category);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center text-white ${josefin_sans.className}`}
    >
      <div className="uppercase text-5xl text-center font-bold tracking-wider">
        <p className="bg-gradient-to-b from-[#FFFFFF] to-[#999999] bg-clip-text text-transparent">
          meet
        </p>
        <p className="bg-gradient-to-b from-[#5CC4B2] to-[#356F65] bg-clip-text text-transparent">
          our team
        </p>
      </div>

      <div className="w-full flex flex-col justify-center items-center">
        <div className="px-10 tracking-widest text-3xl w-full">Categories</div>

        <hr className="w-full my-5" />

        <div
          className={`${comic_neue.className} w-full flex flex-wrap gap-10  px-10 mb-5`}
        >
          <button
            onClick={() => hanldeClick("corrdinator")}
            className={`rounded-xl p-2 font-bold ${
              isActive === "corrdinator"
                ? "bg-[#4EA898] text-white"
                : "bg-white text-black "
            }`}
          >
            Corrdinator
          </button>
          <button
            onClick={() => hanldeClick("ass-coordinator")}
            className={`rounded-xl p-2 font-bold ${
              isActive === "ass-coordinator"
                ? "bg-[#4EA898] text-white"
                : "bg-white text-black "
            }`}
          >
            Ass. Coordinator
          </button>
          <button
            onClick={() => hanldeClick("leads")}
            className={`rounded-xl p-2 font-bold ${
              isActive === "leads"
                ? "bg-[#4EA898] text-white"
                : "bg-white text-black "
            }`}
          >
            Leads
          </button>
        </div>

        <div className="px-10 w-full">
          <ModelCard
            card={
              isActive === "corrdinator"
                ? info
                : isActive === "ass-coordinator"
                ? info
                : info
            }
          />
        </div>

        <div
          className={`px-10 tracking-widest text-5xl border-b-2 w-fit text-center  ${crete_round.className} my-10`}
        >
          CREDITS
        </div>

        <div className="px-10 w-full">
          <ModelCard card={info} />
        </div>
      </div>
    </div>
  );
}
