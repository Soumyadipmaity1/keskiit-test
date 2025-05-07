import Image from "next/image";
import React from "react";
import { Josefin_Sans } from "next/font/google";

const josefin_sans = Josefin_Sans({ subsets: ["vietnamese"] });

const detail = [
  {
    id: 1,
    img: "/achievement/trophy.png",
    content: "won Rs 20,000+ in cash prize over 4 years",
  },
  {
    id: 2,
    img: "/achievement/star.png",
    content: "Participated in various events",
  },
  {
    id: 3,
    img: "/achievement/log.png",
    content: "100+ members participated",
  },
  {
    id: 4,
    img: "/achievement/tick.png",
    content:
      "Completed 30+ individual and group projects under KES supervision",
  },
];

export default function Card() {
  return (
    <div
      className={`lg:absolute lg:-bottom-40 mt-10 lg:mt-0 flex flex-wrap lg:flex-nowrap gap-10 text-white justify-around items-center w-full  ${josefin_sans.className}`}
    >
      {detail.map((item) => (
        <div
          key={item.id}
          className={`flex w-[220px] h-[250px] flex-col rounded-3xl gap-5 justify-center items-center p-2 ${
            item.id % 2 === 0 ? "bg-[#3C546C]" : "bg-[#092254]"
          }`}
        >
          <Image src={item.img} width={100} height={100} alt="Achievement" />
          <p className="text-xl text-center">{item.content}</p>
        </div>
      ))}
    </div>
  );
}
