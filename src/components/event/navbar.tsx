"use client";

import Link from "next/link";
import { navLinks } from "@/components/constants";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      className="h-20 w-full bg-[#05080b]/90 backdrop-blur-sm fixed text-white z-30"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center px-6 md:px-10 h-full w-full">
        <Link href="/" className="font-bold text-2xl md:text-3xl">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            KIIT KES
          </motion.span>
        </Link>

        <div className="hidden md:flex text-white justify-end items-center h-full lg:gap-20 md:gap-8 lg:pr-10 md:pr-5 text-sm tracking-widest">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.id} className="uppercase w-max">
              {link.name}
            </Link>
          ))}
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </motion.nav>
  );
}

function MobileNav() {
  return (
    <div className="z-[999]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden h-10 w-10">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent
          side="right"
          className="bg-[#0a0a14]/95 backdrop-blur-md border-gray-800"
        >
          <nav className="flex flex-col mt-10">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
              >
                <Link href={link.href}>
                  <div className="text-white text-lg pl-5 p-4 duration-200 hover:bg-white/10 rounded-lg my-1">
                    {link.name}
                  </div>
                </Link>
              </motion.div>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
