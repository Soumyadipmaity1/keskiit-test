// "use client"

// import { useState, useEffect } from "react"
// import Image from 'next/image'

// export default function KiitHero() {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: e.clientX / window.innerWidth,
//         y: e.clientY / window.innerHeight,
//       })
//     }

//     window.addEventListener("mousemove", handleMouseMove)

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove)
//     }
//   }, [])

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-black flex items-center">
//       {/* Gradient background that follows mouse movement */}
//       <div
//         className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
//         style={{
//           background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
//             rgba(20, 84, 84, 0.8) 0%, 
//             rgba(17, 24, 68, 0.6) 30%, 
//             rgba(0, 0, 0, 0.8) 70%)`,
//         }}
//       />

//       {/* Static gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 via-blue-900/40 to-black opacity-80" />

//       {/* Subtle grid pattern */}
//       <div className="absolute inset-0 bg-[url('/placeholder.svg?height=2&width=2')] bg-[length:40px_40px] opacity-[0.03]" />

//       {/* Light beams effect */}
//       <div className="absolute top-0 left-1/4 w-1 h-full bg-teal-500/10 blur-3xl transform rotate-[20deg]" />
//       <div className="absolute top-0 left-1/3 w-1 h-full bg-blue-500/10 blur-3xl transform rotate-[15deg]" />

//       {/* Content */}
//       <div className="container mx-auto px-8 relative z-10">
//         <div className="flex justify-between items-center w-full md:px-20">
//           <div>
//             <h1 className=" tracking-wider font-normal text-gray-200">
//               <div className="text-5xl md:text-6xl lg:text-7xl">KIIT ELECTRICAL</div>
//               <div className="text-5xl md:text-6xl lg:text-7xl">SOCIETY</div>

//             </h1>
//             <p className="text-xl md:text-2xl text-yellow-300 mt-8 font-light tracking-wide">&quot;Build Small, Think Big&quot;</p>
//           </div>
//             <Image src="/hero-image.png" alt="KIIT Electrical Society" width={500} height={500} className="object-contain" />
//           </div>
//         </div>
      
//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {Array.from({ length: 20 }).map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-white/5"
//             style={{
//               width: `${Math.random() * 4 + 1}px`,
//               height: `${Math.random() * 4 + 1}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `float ${Math.random() * 10 + 10}s linear infinite`,
//               opacity: Math.random() * 0.5 + 0.2,
//             }}
//           />
//         ))}
//       </div>

//       {/* Light glow in corner */}
//       <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-800/20 rounded-full blur-3xl" />
//     </div>
//   )
// }


import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import { ParticleTextEffect } from "../ui/paarticle-text-effect"
import { InfiniteSlider } from "../ui/infinite-slider"
import { ProgressiveBlur } from "../ui/progressive-blur"

export function HeroSection() {
  return (
    <section className="py-20 px-4 relative overflow-hidden min-h-screen flex flex-col justify-between">
      <div className="flex-1 flex items-start justify-center pt-20">
        <ParticleTextEffect words={["KIIT", "ELECTRICAL", "SOCIETY"]} />
      </div>

      <div className="container mx-auto text-center relative z-10 pb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-balance">
            Jab sb aapki le rahe ho to <span className="text-gray-300">aap bhi khuch lelo</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-white hover:bg-gray-200 text-black group">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 text-white hover:bg-gray-800 bg-transparent">
              Watch Demo
            </Button>
          </div>

          <div className="mt-16 mb-8">
            <div className="group relative m-auto max-w-6xl">
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:max-w-44 md:border-r md:border-gray-600 md:pr-6 mb-4 md:mb-0">
                  <p className="text-end text-sm text-gray-400">Powering the best teams</p>
                </div>
                <div className="relative py-6 md:w-[calc(100%-11rem)]">
                  <InfiniteSlider durationOnHover={20} duration={40} gap={112}>
                    <div className="flex">
                      <img
                        className="mx-auto h-5 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/nvidia-TAN2JNiFDeluYk9hlkv4qXwWtfx5Cy.svg"
                        alt="Nvidia Logo"
                        height="20"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-4 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/column-qYeLfzzj1ni9E7PhooLL6Mzip5Zeb4.svg"
                        alt="Column Logo"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-4 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/github-twQNbc5nAy2jUs7yh5xic8hsEfBYpQ.svg"
                        alt="GitHub Logo"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-5 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/nike-H0OCso4JdUtllUTdAverMAjJmcKVXU.svg"
                        alt="Nike Logo"
                        height="20"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-5 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/lemonsqueezy-ZL7mmIzqR10hWcodoO19ajha8AS9VK.svg"
                        alt="Lemon Squeezy Logo"
                        height="20"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-4 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/laravel-sDCMR3A82V8F6ycZymrDlmiFpxyUd4.svg"
                        alt="Laravel Logo"
                        height="16"
                        width="auto"
                      />
                    </div>
                    <div className="flex">
                      <img
                        className="mx-auto h-7 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/lilly-Jhslk9VPUVAVK2SCJmCGTEbqKMef5v.svg"
                        alt="Lilly Logo"
                        height="28"
                        width="auto"
                      />
                    </div>

                    <div className="flex">
                      <img
                        className="mx-auto h-6 w-fit invert opacity-60 hover:opacity-100 transition-opacity"
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/openai-5TPubXl1hnLxeIs4ygVSLjJcUoBOCB.svg"
                        alt="OpenAI Logo"
                        height="24"
                        width="auto"
                      />
                    </div>
                  </InfiniteSlider>

                  <ProgressiveBlur
                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                    direction="left"
                    blurIntensity={1}
                  />
                  <ProgressiveBlur
                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                    direction="right"
                    blurIntensity={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
