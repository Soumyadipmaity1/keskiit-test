"use client";

import Link from "next/link";
import { navLinks } from "@/components/constants";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <>
      <motion.nav
        className="h-20 w-full z-30 bg-transparent fixed hidden md:flex"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-[#283954]/40 backdrop-blur-sm text-white mt-5 rounded-full mx-20 p-4 w-full">
          <div className="flex justify-center items-center px-6 md:px-10 h-full text-white lg:gap-20 md:gap-8 lg:pr-10 md:pr-5 text-sm tracking-widest">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className="uppercase w-max font-bold tracking-wider text-lg"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>
      <div className="md:hidden flex justify-end items-center w-full bg-transparent fixed pr-5 pt-5 z-[999]">
        <MobileNav />
      </div>
    </>
  );
}

function MobileNav() {
  return (
    <div className="z-[999]">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-10 w-10 bg-white cursor-pointer outline-none"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-2 bg-[#0a0a14]/95 backdrop-blur-md border-gray-800 p-4">
          <DropdownMenuLabel className="text-white text-lg pl-4">
            Menu
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <nav className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link href={link.href} key={index} className="cursor-pointer">
                <DropdownMenuItem className="text-white text-lg duration-200 hover:bg-white/10 rounded-lg p-2 pl-4 w-full">
                  {link.name}
                </DropdownMenuItem>
              </Link>
            ))}
          </nav>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
