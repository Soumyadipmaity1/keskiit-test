"use client"

import { useState, useEffect } from "react"
import Image from 'next/image'

export default function KiitHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black flex items-center">
      {/* Gradient background that follows mouse movement */}
      <div
        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            rgba(20, 84, 84, 0.8) 0%, 
            rgba(17, 24, 68, 0.6) 30%, 
            rgba(0, 0, 0, 0.8) 70%)`,
        }}
      />

      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 via-blue-900/40 to-black opacity-80" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=2&width=2')] bg-[length:40px_40px] opacity-[0.03]" />

      {/* Light beams effect */}
      <div className="absolute top-0 left-1/4 w-1 h-full bg-teal-500/10 blur-3xl transform rotate-[20deg]" />
      <div className="absolute top-0 left-1/3 w-1 h-full bg-blue-500/10 blur-3xl transform rotate-[15deg]" />

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10">
        <div className="flex justify-between items-center w-full md:px-20">
          <div>
            <h1 className=" tracking-wider font-normal text-gray-200">
              <div className="text-5xl md:text-6xl lg:text-7xl">KIIT ELECTRICAL</div>
              <div className="text-5xl md:text-6xl lg:text-7xl">SOCIETY</div>

            </h1>
            <p className="text-xl md:text-2xl text-yellow-300 mt-8 font-light tracking-wide">"Build Small, Think Big"</p>
          </div>
            <Image src="/hero-image.png" alt="KIIT Electrical Society" width={500} height={500} className="object-contain" />
          </div>
        </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
          />
        ))}
      </div>

      {/* Light glow in corner */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-800/20 rounded-full blur-3xl" />
    </div>
  )
}

