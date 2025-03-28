"use client"

import { useRef } from "react"
import { Card } from "@/components/ui/card"
import { motion, useInView } from 'framer-motion';
import { Users, Trophy, BarChart3, Calendar } from "lucide-react"

export default function StatisticsComponent() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })
  
  const statistics = [
    {
      icon: <Users className="w-8 h-8 stroke-teal-400" />,
      value: "400+",
      label: "Students",
    },
    {
      icon: <Trophy className="w-8 h-8 stroke-blue-400" />,
      value: "50+",
      label: "Awards",
    },
    {
      icon: <BarChart3 className="w-8 h-8 stroke-teal-400" />,
      value: "10+",
      label: "Programs",
    },
    {
      icon: <Calendar className="w-8 h-8 stroke-blue-400" />,
      value: "700+",
      label: "Events",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  }

  return (
    <div className="w-full bg-gradient-to-br from-teal-900 via-[#0d1a3e] to-black py-16 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 rounded-full bg-teal-500 blur-3xl -top-20 -left-20"></div>
        <div className="absolute w-96 h-96 rounded-full bg-blue-800 blur-3xl -bottom-20 -right-20"></div>
      </div>
      
      <div ref={ref} className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
            The Numbers Speak
          </h2>
          <p className="text-gray-200 max-w-2xl mx-auto text-lg">
            Our impact throughout the years in the tech community
          </p>
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              <Card className="h-full backdrop-blur-sm bg-white/5 border border-teal-900/30 rounded-xl shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:translate-y-[-5px] overflow-hidden">
                <div className="p-6 md:p-8 text-center relative z-10">
                  <div className="mb-4 flex justify-center">
                    <div className="p-3 rounded-full bg-white/5 group-hover:bg-teal-900/20 transition-all duration-300 transform group-hover:scale-110">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="flex flex-col items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                    >
                      <span className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
                        {stat.value}
                      </span>
                    </motion.div>
                    <p className="text-gray-200 font-medium mt-2 text-lg">{stat.label}</p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

