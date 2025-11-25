"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"
      />

      {/* Animated Gradient Overlay */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/30 to-rose-900/20"
        animate={{
          background: [
            "linear-gradient(to bottom, rgba(88, 28, 135, 0.2), rgba(0, 0, 0, 0.3), rgba(159, 18, 57, 0.2))",
            "linear-gradient(to bottom, rgba(159, 18, 57, 0.2), rgba(0, 0, 0, 0.3), rgba(88, 28, 135, 0.2))",
            "linear-gradient(to bottom, rgba(88, 28, 135, 0.2), rgba(0, 0, 0, 0.3), rgba(159, 18, 57, 0.2))",
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating Glow Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 right-1/4 w-96 h-96 bg-rose-500 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2],
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 text-center px-6 md:px-12 max-w-5xl mx-auto"
      >
        {/* Glowing Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative inline-flex items-center gap-2 px-5 py-2 mb-8 bg-gradient-to-r from-purple-500/20 to-rose-500/20 backdrop-blur-md rounded-full shadow-lg border border-white/20 group"
        >
          {/* Glow Effect */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-rose-500/40 rounded-full blur-md"
          />
          <span className="relative text-sm text-white font-medium">
            New Spring Collection Available
          </span>
        </motion.div>

        {/* Main Heading with Neon Glow */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight tracking-tight text-white"
        >
          <span className="relative inline-block">
            <motion.span
              animate={{
                textShadow: [
                  "0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)",
                  "0 0 30px rgba(236, 72, 153, 0.8), 0 0 60px rgba(236, 72, 153, 0.5)",
                  "0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)",
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="drop-shadow-lg"
            >
              Luxury with ease.
            </motion.span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          Timeless handwoven Aso-Oke that speaks elegance.
          <br />
          So you can celebrate in style.
        </motion.p>

        {/* CTA Buttons with Neon Hover */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
        >
          {/* Primary Button with Neon Effect */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold text-base rounded-full shadow-lg overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-rose-500 via-purple-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative z-10 group-hover:text-white transition-colors duration-300">
              Get Started
            </span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="relative z-10 group-hover:text-white transition-colors duration-300"
            >
              →
            </motion.span>
            {/* Glow on Hover */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "0 0 30px rgba(236, 72, 153, 0.8), 0 0 60px rgba(168, 85, 247, 0.5)",
              }}
            />
          </motion.button>

          {/* Secondary Button with Neon Border */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold text-base rounded-full transition-all duration-300 border-2 border-white/40 overflow-hidden group"
          >
            {/* Animated Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                boxShadow: "inset 0 0 20px rgba(168, 85, 247, 0.6), 0 0 30px rgba(236, 72, 153, 0.6)",
              }}
            />
            {/* Gradient Background on Hover */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-rose-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            <span className="relative z-10">View Collections</span>
          </motion.button>
        </motion.div>

        {/* Floating Particles */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut",
            }}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              bottom: "20%",
              filter: "blur(1px)",
            }}
          />
        ))}
      </motion.div>

      {/* Scroll Indicator with Glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        style={{ opacity }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{
            boxShadow: [
              "0 0 10px rgba(168, 85, 247, 0.3)",
              "0 0 20px rgba(236, 72, 153, 0.6)",
              "0 0 10px rgba(168, 85, 247, 0.3)",
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
        >
          <span className="text-xs text-white tracking-widest uppercase">Scroll</span>
        </motion.div>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg className="w-5 h-5 text-white drop-shadow-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}