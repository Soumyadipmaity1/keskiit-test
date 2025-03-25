"use client";

import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  MessageCircle,
  Phone,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#020319] w-full pt-16 pb-6">
      <div className="container mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold border-b-2 border-yellow-500 pb-2 mb-6 inline-block">
              KIIT Electrical Society
            </h3>
            <div className="space-y-4 mt-6">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <p className="text-sm">Campus 3, KIIT University, Odisha</p>
              </div>
              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <p className="text-sm break-all">
                  kiitelectricalsociety@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                <p className="text-sm">10am to 8pm</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold border-b-2 border-yellow-500 pb-2 mb-6 inline-block">
              Quick Links
            </h3>
            <div className="space-y-3 mt-6">
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                KIIT
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                KSAC
              </Link>
              <Link
                href="#"
                className="block text-gray-400 hover:text-white transition-colors"
              >
                KIIT review
              </Link>
            </div>

            <div className="flex space-x-6 mt-10">
              <motion.a
                href="#"
                whileHover={{ y: -5, color: "#4267B2" }}
                className="text-gray-400"
              >
                <Facebook className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, color: "#E1306C" }}
                className="text-gray-400"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, color: "#0077B5" }}
                className="text-gray-400"
              >
                <Linkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, color: "#FF0000" }}
                className="text-gray-400"
              >
                <Youtube className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, color: "#0088CC" }}
                className="text-gray-400"
              >
                <MessageCircle className="h-6 w-6" />
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 md:col-span-2 lg:col-start-3"
          >
            <h3 className="text-xl font-bold border-b-2 border-yellow-500 pb-2 mb-6 inline-block">
              Location
            </h3>
            <div className="mt-6 bg-gray-800 h-60 rounded-lg overflow-hidden relative">
              <div className="absolute top-2 left-2 bg-white text-black text-xs p-1 rounded z-10">
                KIIT School Of Electrical...
              </div>
              <div className="absolute top-2 right-2 flex flex-col z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white h-8 w-8 mb-1 hover:bg-gray-200"
                >
                  <span className="text-black">+</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-white h-8 w-8 hover:bg-gray-200"
                >
                  <span className="text-black">-</span>
                </Button>
              </div>
              <Image
                src="/placeholder.svg?height=240&width=400"
                alt="Map location"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="container mx-auto px-4 mt-16 text-center text-sm text-gray-500"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        © 2024 KIIT Electrical Society™ All Rights Reserved.
      </motion.div>
    </footer>
  );
}
