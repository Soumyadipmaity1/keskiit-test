"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: string
  name: string
  role?: string
  content: string
}

export default function TestimonialSection() {
  const testimonials: Testimonial[] = [
    {
      id: "1903052",
      name: "Anirban Sadhukhan",
      content:
        "My journey with KES started from 13th November 2020. I have given the very hard test for KES, even during exams if I have done anything wrong, I'll be disqualified. After the first and hard interview, they have selected 5 members, and then the online KES began. After 3 years of journey throughout these 3.5 years, KES gives me everything knowledge, leadership skills, team management, most importantly very precious juniors. KES has their legacy to do something different, innovate something different, always fly high. We are always with you!",
    },
    {
      id: "2105023",
      name: "Sarah Johnson",
      role: "Product Designer",
      content:
        "Working with this team has transformed our business approach completely. Their innovative solutions and dedicated support have helped us achieve results we never thought possible. I highly recommend their services to anyone looking to make a significant impact in their industry.",
    },
    {
      id: "1804017",
      name: "Michael Chen",
      role: "CTO at TechForward",
      content:
        "The level of expertise and commitment demonstrated by this team is unparalleled. They don't just deliver solutions; they become partners in your success journey. Their strategic insights have been invaluable to our growth over the past two years.",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 8000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <section className="relative w-full overflow-hidden  py-20 md:py-28">
      {/* Enhanced animated gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Primary gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-[#0d1a3e] to-black "></div>

        {/* Animated gradient overlays */}
        <div className="absolute inset-0">
        </div>
        <div className="absolute inset-0">
          <div className="absolute -inset-[100%] animate-[spin_70s_linear_infinite_reverse] bg-gradient-to-br from-teal-900 via-[#0d1a3e] to-black  blur-3xl"></div>
        </div>

        {/* Radial gradients for depth */}
        <div className="absolute inset-0">
          {/* <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(167,139,250,0.4),transparent_35%)]"></div> */}
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(79,209,197,0.4),transparent_35%)]"></div>
        </div>

        {/* Floating shapes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Floating decorative elements */}
        {/* <div className="absolute top-10 left-10 w-20 h-20 rounded-full border border-white/10 backdrop-blur-sm animate-float"></div> */}
        <div
          className="absolute bottom-10 right-10 w-16 h-16 rounded-full border border-white/10 backdrop-blur-sm animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-12 h-12 rounded-full border border-white/10 backdrop-blur-sm animate-float"
          style={{ animationDelay: "3s" }}
        ></div>

        <h2 className="text-5xl md:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-4 tracking-tight">
          Testimonials
        </h2>
        <p className="text-center text-teal-200/80 max-w-2xl mx-auto mb-16 text-lg">
          Discover what our clients have to say about their experiences
        </p>

        <div className="relative max-w-4xl mx-auto">
          {/* Enhanced glass morphism testimonial card */}
          <div
            className={cn(
              "relative backdrop-blur-xl bg-white/5 rounded-2xl p-8 md:p-10 shadow-[0_8px_32px_rgba(0,0,0,0.1)] border border-teal-900/30 transition-all duration-500",
              "before:absolute before:inset-0 before:rounded-2xl before:p-[1px] before:bg-gradient-to-b before:from-teal-500/30 before:to-transparent before:-z-10",
              "after:absolute after:inset-0 after:rounded-2xl after:p-[1px] after:bg-gradient-to-t after:from-blue-500/5 after:to-transparent after:-z-10",
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100",
            )}
            style={{
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.3), 0 0 20px -5px rgba(45, 212, 191, 0.2) inset",
            }}
          >
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-blue-600 flex items-center justify-center shadow-lg">
              <Quote className="h-5 w-5 text-white" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg transform rotate-3">
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-1">{testimonials[currentIndex].name}</h3>
                {testimonials[currentIndex].role && (
                  <p className="text-teal-300 font-medium">{testimonials[currentIndex].role}</p>
                )}
                <p className="text-teal-200/60 text-sm">{testimonials[currentIndex].id}</p>
              </div>
            </div>

            <blockquote className="relative">
              <p className="text-gray-100 leading-relaxed text-lg md:text-xl font-light">
                {testimonials[currentIndex].content}
              </p>
            </blockquote>

            {/* Decorative elements */}
            <div className="absolute bottom-6 right-6 opacity-20">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.748-1.179z"
                  fill="white"
                />
                <path
                  d="M16.084 17.321C15.053 16.227 14.5 15 14.5 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5 3.871 3.871 0 01-2.747-1.179z"
                  fill="white"
                />
              </svg>
            </div>
          </div>

          {/* Enhanced navigation buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white/5 backdrop-blur-md text-white p-3 rounded-full border border-teal-900/30 hover:bg-teal-900/20 transition-all duration-300 shadow-lg group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white/5 backdrop-blur-md text-white p-3 rounded-full border border-teal-900/30 hover:bg-teal-900/20 transition-all duration-300 shadow-lg group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 group-hover:scale-110 transition-transform" />
          </button>

          {/* Enhanced indicators */}
          <div className="flex justify-center mt-12 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (isAnimating) return
                  setIsAnimating(true)
                  setCurrentIndex(index)
                  setTimeout(() => setIsAnimating(false), 500)
                }}
                className={cn(
                  "h-2.5 rounded-full transition-all duration-500 shadow-md",
                  index === currentIndex
                    ? "bg-gradient-to-r from-teal-400 to-blue-500 w-10"
                    : "bg-white/30 hover:bg-white/50 w-2.5",
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

