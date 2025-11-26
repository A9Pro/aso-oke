"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Aso Oke Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-4 max-w-3xl mx-auto"
      >
        {/* Small badge */}
        <div className="inline-flex items-center px-3 py-1.5 mb-5
          bg-white/20 border border-white/30
          backdrop-blur-md rounded-full
          text-xs text-white tracking-wide">
          2025 Premium Aso-Oke Collection
        </div>

        {/* Smaller heading */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-3 leading-tight">
          Luxury Aso-Oke, Redefined for Elegance.
        </h1>

        {/* Smaller subtext */}
        <p className="text-xs md:text-sm text-white/90 max-w-md mx-auto leading-relaxed">
          Hand-woven fabrics crafted for weddings, engagements, and timeless celebrations.
        </p>

        {/* Small, classy buttons */}
        <div className="mt-6 flex justify-center gap-3">
          <button
            className="px-5 py-2 bg-white text-black text-xs md:text-sm rounded-full shadow
            hover:bg-black hover:text-white transition-all duration-200"
          >
            Shop Now
          </button>

          <button
            className="px-5 py-2 border border-white/40 text-white text-xs md:text-sm rounded-full
            hover:bg-white/10 transition-all duration-200"
          >
            Explore Collection
          </button>
        </div>
      </motion.div>
    </section>
  );
}
