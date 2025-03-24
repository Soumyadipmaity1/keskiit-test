"use client";

import { useEffect, useState, use } from "react";
import { Events } from "@/components/constants";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface Event {
  id: number;
  title: string;
  school: string;
  date: string;
  address: string;
  amount: number;
  group: string;
  organisersname: string;
  contact: string;
}

export default function EventDetailPage({
  params: paramsPromise,
}: {
  params: Promise<{ id: string }>;
}) {
  const params = use(paramsPromise);
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const eventId = Number.parseInt(params.id);
    if (isNaN(eventId) || eventId < 1 || eventId > Events.length) {
      notFound();
    }
    const foundEvent = Events.find((e) => e.id === eventId);
    if (!foundEvent) {
      notFound();
    }
    setEvent({
      ...foundEvent,
      amount: Number(foundEvent.amount),
    });
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0A0E14] to-[#0D1A30] flex items-center justify-center">
        <div className="animate-pulse text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0E14] to-[#0D1A30] pt-28 pb-16">
      <motion.div
        className="container mx-auto px-6 mb-8"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/event">
          <motion.button
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Events</span>
          </motion.button>
        </Link>
      </motion.div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 mb-16">
          <motion.div
            className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt={event?.title || "Event image"}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {event?.title}
            </motion.h1>

            <motion.p
              className="text-white/70 text-lg mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {event?.school}
            </motion.p>

            <div className="space-y-6">
              <motion.div
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-white/60 text-sm">Date</p>
                  <p className="font-medium">{event?.date}</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-white/60 text-sm">Location</p>
                  <p className="font-medium">{event?.address}</p>
                </div>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <p className="text-white/60 text-sm">Prize Pool</p>
                <p className="font-medium text-xl">Rs. {event?.amount}</p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <p className="text-white/60 text-sm">Participation</p>
                <p className="font-medium">{event?.group}</p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm px-4 py-3 rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <p className="text-white/60 text-sm">Contact</p>
                <p className="font-medium">
                  {event?.organisersname}{" "}
                  <span className="text-white/80">{event?.contact}</span>
                </p>
              </motion.div>
            </div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <motion.button
                className="bg-gradient-to-r from-[#237A75] to-[#10201F] text-white px-8 py-3 rounded-lg font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            About the Event
          </h2>
          <div className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-xl text-white/80 leading-relaxed">
            <p>
              Join us for an exciting {event?.title} event organized by the
              School of Electrical Engineering at KIIT University. This event
              brings together talented students to showcase their skills and
              innovation in electrical engineering.
            </p>
            <p className="mt-4">
              Participants will have the opportunity to compete for prizes worth
              Rs. {event?.amount}, network with industry professionals, and gain
              valuable experience in their field of study.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Event Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                className="h-[200px] rounded-xl overflow-hidden relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Gallery+Image+${
                    index + 1
                  }`}
                  alt={`Gallery image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
