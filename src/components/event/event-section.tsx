"use client";

import React, { useRef, useState, useEffect } from "react";
import { Events } from "@/components/constants";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

interface Event {
  title: string;
  school: string;
  date: string;
  address: string;
  amount: string;
  organisersname: string;
  contact: string;
}

export default function EventsSection() {
  return (
    <div className="mt-10">
      <div>
        <h1 className="text-xl text-white px-4 md:pl-28 font-bold tracking-wider">
          Ongoing Events
        </h1>
        <Container />
      </div>
      <div>
        <h1 className="text-xl text-white px-4 md:pl-28 font-bold tracking-wider">
          Upcoming Events
        </h1>
        <Container />
      </div>
      <div>
        <h1 className="text-xl text-white px-4 md:pl-28 font-bold tracking-wider">
          Past Events
        </h1>
        <Container />
      </div>
    </div>
  );
}


const EventCard = ({ event, index }: { event: Event; index: number }) => {
  return (
    <Link href={`/event/${index + 1}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        whileHover={{
          y: -10,
          boxShadow:
            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        }}
        className="bg-gradient-to-br from-[#10201F] to-[#237A75] overflow-hidden flex flex-col items-center flex-shrink-0 cursor-pointer rounded-xl w-[280px] h-[380px] p-4"
      >
        <div className="bg-white h-[160px] w-full rounded-xl flex justify-center items-center mb-4">
          <span className="text-black font-medium">PHOTO</span>
        </div>
        <div className="text-left w-full text-white">
          <div className="space-y-3">
            <div>
              <h3 className="text-2xl font-bold">{event.title}</h3>
              <p className="text-white/60 text-sm">{event.school}</p>
            </div>

            <div className="space-y-1">
              <p>{event.date}</p>
              <p>{event.address}</p>
            </div>

            <p className="font-semibold">Rs. {event.amount}</p>

            <div>
              <p className="font-medium">Group</p>
              <p className="text-white/60 text-sm">
                Contact: {event.organisersname} {event.contact}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

const Container = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  const scrollByAmount = (amount: number) => {
    const container = containerRef.current;
    if (container) {
      container.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      handleScroll();

      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);
  return (
    <div className="w-full">
      <motion.div
        className="relative flex flex-col justify-center items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex justify-center items-center w-full relative">
          {canScrollLeft && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute left-4 z-10 text-white p-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm"
              onClick={() => scrollByAmount(-300)}
            >
              <ArrowLeft className="w-5 h-5" />
            </motion.button>
          )}

          {canScrollRight && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-4 z-10 text-white p-3 rounded-full border border-white/20 bg-black/50 backdrop-blur-sm"
              onClick={() => scrollByAmount(300)}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          )}

          <div
            className="flex flex-row justify-start p-4 px-10 md:pl-28 md:p-8 gap-6 overflow-x-scroll scrollbar-hide max-w-full"
            ref={containerRef}
          >
            {Events.map((event, index) => (
              <div key={index} style={{ scrollSnapAlign: "start" }}>
                <EventCard event={event} index={index} />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
