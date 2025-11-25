"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const products = [
  { name: "Gold Wedding Aso-Oke", price: "₦120,000", image: "/products/w1.jpg", href: "/products/wedding/gold" },
  { name: "Silver Engagement Set", price: "₦95,000", image: "/products/e1.jpg", href: "/products/engagement/silver" },
  { name: "Royal Agbada", price: "₦150,000", image: "/products/a1.jpg", href: "/products/agbada/royal" },
];

export default function SpotlightProducts() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6 md:px-12">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
        Spotlight Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((prod, index) => (
          <motion.div
            key={prod.name}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="rounded-lg overflow-hidden shadow-xl cursor-pointer group"
          >
            <Link href={prod.href}>
              <img
                src={prod.image}
                alt={prod.name}
                className="w-full h-64 object-cover group-hover:brightness-110 transition"
              />
              <div className="p-4 bg-white">
                <h3 className="font-bold text-gray-800">{prod.name}</h3>
                <p className="text-gray-600 font-semibold">{prod.price}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
