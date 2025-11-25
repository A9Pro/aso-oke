"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
        ${scrolled ? "bg-white/90 backdrop-blur shadow-lg py-3 px-8" : "bg-white/60 py-5 px-10"}
        rounded-full flex items-center justify-center gap-12`}
    >
      {/* Logo */}
      <Link href="/" className="text-2xl md:text-3xl font-extrabold tracking-wide text-rose-600">
        ASO<span className="text-yellow-600">-OKE</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-8 font-medium text-gray-700">
        <Link href="/" className="hover:text-rose-600 transition">Home</Link>
        <Link href="/products" className="hover:text-rose-600 transition">Products</Link>
        <Link href="/categories" className="hover:text-rose-600 transition">Categories</Link>
        <Link href="/contact" className="hover:text-rose-600 transition">Contact</Link>
      </div>

      {/* Cart Icon & Hamburger */}
      <div className="flex md:hidden items-center gap-4">
        <button className="text-2xl">🛒</button>
        <button onClick={() => setOpen(!open)} className="text-3xl">
          &#9776;
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl p-6 flex flex-col gap-4 md:hidden w-[80vw] text-center">
          <Link href="/" className="hover:text-rose-600 transition">Home</Link>
          <Link href="/products" className="hover:text-rose-600 transition">Products</Link>
          <Link href="/categories" className="hover:text-rose-600 transition">Categories</Link>
          <Link href="/contact" className="hover:text-rose-600 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
