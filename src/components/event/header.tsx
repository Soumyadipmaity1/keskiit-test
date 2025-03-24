"use client";
import style from "./style.module.css";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <>
      <div className="md:hidden ">
        <div className={`${style.background} flex justify-center items-center`}>
          <motion.div
            className="uppercase text-white font-bold text-5xl sm:text-7xl px-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Upcoming
            </motion.span>
            <motion.span
              className="block mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Events
            </motion.span>
          </motion.div>
        </div>
      </div>

      <div className="relative hidden md:flex justify-start items-center min-h-screen w-full text-white pl-10 lg:pl-20">
        <div
          className="absolute inset-0 z-0 bg-no-repeat bg-center bg-cover w-full lg:w-[800px] xl:w-[1200px] h-[400px] mx-auto my-auto"
          style={{
            background: `linear-gradient(180deg, rgba(0, 0, 0, 0.3) 70%, rgb(0, 0, 0, 0.3) 100%), url("/bgevent.png")`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        ></div>

          <motion.div
          className="relative z-10 uppercase font-bold text-5xl lg:text-7xl text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Upcoming
          </motion.span>
          <motion.span
            className="block mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Events
          </motion.span>
        </motion.div>
      </div>
    </>
  );
}
