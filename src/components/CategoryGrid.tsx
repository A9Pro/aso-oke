"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  { name: "Wedding Aso-Oke", image: "/categories/wedding.jpg", href: "/products/wedding" },
  { name: "Engagement Fabrics", image: "/categories/engagement.jpg", href: "/products/engagement" },
  { name: "Agbada Sets", image: "/categories/agbada.jpg", href: "/products/agbada" },
  { name: "Groom Collections", image: "/categories/groom.jpg", href: "/products/groom" },
  { name: "Bridal Collections", image: "/categories/bridal.jpg", href: "/products/bridal" },
  { name: "Special Editions", image: "/categories/special.jpg", href: "/products/special" },
];

export default function CategoryGrid() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Explore Our Collections
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categories.map((cat, index) => (
          <motion.div
            key={cat.name}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer group"
          >
            <Link href={cat.href}>
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-64 object-cover group-hover:brightness-110 transition"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <span className="text-white font-bold text-lg">{cat.name}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
