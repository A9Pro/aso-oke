"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-12 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-wider text-rose-600">
          ASO<span className="text-yellow-600">-OKE</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-rose-600 transition">Home</Link>
          <Link href="/products" className="hover:text-rose-600 transition">Products</Link>
          <Link href="/categories" className="hover:text-rose-600 transition">Categories</Link>
          <Link href="/contact" className="hover:text-rose-600 transition">Contact</Link>
        </div>

        {/* Cart & Hamburger */}
        <div className="flex items-center space-x-4">
          <button className="text-2xl">🛒</button>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            <span className="text-3xl">&#9776;</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 space-y-2 bg-white p-4 shadow-md rounded-lg">
          <Link href="/" className="block hover:text-rose-600 transition">Home</Link>
          <Link href="/products" className="block hover:text-rose-600 transition">Products</Link>
          <Link href="/categories" className="block hover:text-rose-600 transition">Categories</Link>
          <Link href="/contact" className="block hover:text-rose-600 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
