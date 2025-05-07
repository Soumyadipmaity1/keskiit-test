import React from "react";
import { Card } from "../ui/card";
import { Krona_One } from "next/font/google";

const krona_one = Krona_One({ subsets: ["latin"], weight: "400" });

const detail = [
  {
    id: 1,
    title: "WINNER, KAIROS",
    tag: "KIIT FEST 7.0 || KIIT UNIVERSITY || FEBRUARY,2024",
    description:
      "Led by Shivansh Mishra, the team comprising Soumyadip Maity, Devaansh Saxena, and Arnav Sharma secured the top prize at the Kairos Industrial IoT Presentation during KIIT FEST 7.0.",
    image: "Phatooo",
  },
  {
    id: 2,
    title: "RUNNER UP,TECH TANK",
    tag: "SYNCHRONISE 2.0 || XIM UNIVERSITY || FEBRUARY &rsquo;24",
    description:
      "KES team with leader Dev Dashora and members Shyam Barua, Sweta kumari secured the runner&rsquo;s-up position at the Tech Tank event, which was held during XIM University's annual event, Synchronize 2.0.",
    image: "Phatooo",
  },
  {
    id: 3,
    title: "2nd Runner-Up, Game Fest",
    tag: "KSHITIJ || IIT KGP || JANUARY 2024",
    description:
      "We participated in the Gamefest at IIT Kharagpur Kshitij 2024, competing with players from various colleges over three exhilarating days. Despite securing the 2nd runner-up position, the event was unforgettable.",
    image: "Phatooo",
  },
];

export default function DetailCard() {
  return (
    <div className="lg:mt-48 flex gap-10 flex-col  w-full">
      {detail.map((item) => (
        <Card
          key={item.id}
          className={`flex flex-col-reverse md:flex-row gap-20 text-white p-10 m-5 ${
            item.id % 2 == 0
              ? "bg-[#11272d] md:flex-row-reverse flex-col-reverse"
              : "bg-[#08151a]"
          }`}
        >
          <div
            className={`flex flex-col gap-10  md:w-1/2  ${krona_one.className}`}
          >
            <p
              className={`rounded-full bg-[#010B15] border border-[#5ED1CA] capitalize w-fit p-3`}
            >
              {item.title}
            </p>
            <p className="border-b-2 w-fit border-[#417D74]">{item.tag}</p>
            <p className="text-justify max-w-[600px]">{item.description}</p>
          </div>
          <div className="flex justify-center items-center md:w-1/2">
            <div className="bg-[#10201FFA] w-full h-full flex justify-center items-center rounded-4xl">
              {item.image}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
