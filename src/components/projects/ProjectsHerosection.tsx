"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export default function ProjectsHeroSection() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkIfMobile()
    window.addEventListener("resize", checkIfMobile)

    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-tr  from-[#001428] via-[#002a4e] to-[#004d5d] py-12 sm:py-16 md:py-24">
      {/* Abstract shapes for modern feel */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 md:w-40 md:h-40 rounded-full bg-teal-500 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 md:w-40 md:h-40 rounded-full bg-blue-500 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 pt-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-24">
          <div className="text-center md:text-left max-w-xs sm:max-w-sm md:max-w-md">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              <span className="text-white">OUR</span>
              <br />
              <span className="text-gray-300 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-300">
                PROJECTS
              </span>
            </h2>
            <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 shadow-lg transition-all duration-300 hover:bg-white/15">
              <p className="text-teal-200 text-sm md:text-base font-medium">"Build Small. Think Big"</p>
            </div>
          </div>

          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md transition-all duration-700 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
            <Image
              src="/project-hero.png"
              alt="Project illustration with character on gears"
              width={500}
              height={400}
              className="object-contain w-full h-auto rotate-0 transform transition-transform duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  )
}

