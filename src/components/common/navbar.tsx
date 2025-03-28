"use client"

import Link from "next/link"
import { navLinks } from "@/components/constants"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <motion.nav
        className="h-20 w-full z-30 fixed hidden md:flex"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`
            ${scrolled ? "bg-[#283954]/60" : "bg-[#283954]/40"} 
            backdrop-blur-xl text-white mt-5 rounded-full mx-auto w-[60%] max-w-7xl
            border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
            transition-all duration-300 ease-in-out
            before:content-[''] before:absolute before:inset-0 before:rounded-full
            before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-30
            before:pointer-events-none before:z-[-1]
            after:content-[''] after:absolute after:inset-0 after:rounded-full
            after:bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)]
            after:pointer-events-none after:z-[-1]
          `}
        >
          <div className="flex justify-center items-center px-6 md:px-10 h-full text-white lg:gap-20 md:gap-8 lg:pr-10 md:pr-5 text-sm tracking-widest relative z-10">
            {navLinks.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className="uppercase w-max font-bold tracking-wider text-lg relative group"
              >
                <span className="relative z-10 text-white/90 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                <span className="absolute inset-0 -bottom-2 scale-x-0 h-[2px] bg-gradient-to-r from-white/80 via-white to-white/80 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full blur-[1px]"></span>
                <span className="absolute inset-0 -bottom-2 scale-x-0 h-[1px] bg-gradient-to-r from-white/80 via-white to-white/80 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></span>
              </Link>
            ))}
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Navbar */}
      <motion.nav
        className="h-16 w-full z-30 fixed md:hidden flex"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div
          className={`
            ${scrolled ? "bg-[#283954]/60" : "bg-[#283954]/40"} 
            backdrop-blur-xl text-white mt-2 px-4 mx-auto w-[95%]
            border border-white/10 rounded-xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
            transition-all duration-300 ease-in-out
            before:content-[''] before:absolute before:inset-0 before:rounded-xl
            before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-30
            before:pointer-events-none before:z-[-1]
          `}
        >
          <div className="flex justify-between items-center h-full relative z-10">
            <Link href="/" className="font-bold text-xl">KES KIIT</Link>
            <MobileNav />
          </div>
        </div>
      </motion.nav>
    </>
  )
}

function MobileNav() {
  return (
    <div className="z-[999]">
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none">
          <Button
            variant="ghost"
            size="icon"
            className="h-10 w-10 rounded-full bg-[#283954]/60 backdrop-blur-xl cursor-pointer outline-none
            border border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]
            relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Menu className="h-6 w-6 text-white relative z-10" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border-0 bg-transparent p-0 mt-2 overflow-hidden">
          <div
            className="bg-[#0a0a14]/80 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] p-4
            relative overflow-hidden
            before:content-[''] before:absolute before:inset-0
            before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-50
            before:pointer-events-none"
          >
            <DropdownMenuLabel className="text-white text-lg pl-4 font-bold">Menu</DropdownMenuLabel>
            <DropdownMenuSeparator className="bg-white/20" />
            <nav className="flex flex-col">
              {navLinks.map((link, index) => (
                <Link href={link.href} key={index} className="cursor-pointer">
                  <DropdownMenuItem
                    className="text-white/90 hover:text-white text-lg duration-200 hover:bg-white/10 rounded-lg p-2 pl-4 w-full
                    relative group overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">{link.name}</span>
                  </DropdownMenuItem>
                </Link>
              ))}
            </nav>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

