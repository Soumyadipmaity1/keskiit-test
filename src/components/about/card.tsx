import React from "react";
import { Card } from "../ui/card";
import { Crete_Round } from "next/font/google";
import Image from "next/image";

const crete_round = Crete_Round({ subsets: ["latin"], weight: "400" });

interface CardProps {
  card: {
    name: string;
    roll: number;
    img: string;
    branch: string;
    github: string;
    instagram: string;
    linkedin: string;
  }[];
}

export default function ModelCard({ card }: CardProps) {
  return (
    <div className="bg-linear-to-b from-[#0D3032] to-[#289298] rounded-4xl w-full flex flex-wrap justify-around items-center gap-4 py-6">
      {card.map((item, index: number) => (
        <Card
          key={index}
          className="bg-[#D9D9D9] backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg transition-all duration-300 "
        >
          <div className="w-[300px] h-[200px] flex justify-center items-center rounded-2xl overflow-hidden bg-[#999999]">
            Phaaatooooooooooooo
          </div>
          <div className={`flex flex-col gap-1 ${crete_round.className}`}>
            <p className="text-sm font-bold">NAME: {item.name}</p>
            <p className="text-sm font-bold">ROLLNO: {item.roll}</p>
            <p className="text-sm font-bold">BRANCH: {item.branch}</p>
            <div className="flex flex-row justify-around items-center ">
              <Image
                src="/about/github-fill.svg"
                width={40}
                height={40}
                alt="github"
              />{" "}
              <Image
                src="/about/instagram-fill.svg"
                width={40}
                height={40}
                alt="instgram"
              />{" "}
              <Image
                src="/about/linkedin-box-fill.svg"
                width={40}
                height={40}
                alt="linkedin"
              />
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
