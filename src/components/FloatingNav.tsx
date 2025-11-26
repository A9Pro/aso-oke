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
      ${scrolled 
        ? "bg-white/90 backdrop-blur shadow-lg py-2 px-6" 
        : "bg-white/60 py-3 px-7"}
      rounded-full flex items-center justify-between gap-8`}
    >

      {/* Logo */}
      <Link 
        href="/" 
        className="text-xl md:text-2xl font-bold tracking-wide text-rose-600"
      >
        ASO<span className="text-yellow-600">-OKE</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
        <Link href="/" className="hover:text-rose-600 transition">Home</Link>
        <Link href="/products" className="hover:text-rose-600 transition">Products</Link>
        <Link href="/categories" className="hover:text-rose-600 transition">Categories</Link>
        <Link href="/contact" className="hover:text-rose-600 transition">Contact</Link>
      </div>

      {/* Cart Icon + Mobile Menu Button */}
      <div className="flex md:hidden items-center gap-4">
        <button className="text-xl">🛒</button>
        <button 
          onClick={() => setOpen(!open)} 
          className="text-3xl leading-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl p-5 flex flex-col gap-3 md:hidden w-[75vw] text-center text-sm font-medium">
          <Link href="/" className="hover:text-rose-600 transition">Home</Link>
          <Link href="/products" className="hover:text-rose-600 transition">Products</Link>
          <Link href="/categories" className="hover:text-rose-600 transition">Categories</Link>
          <Link href="/contact" className="hover:text-rose-600 transition">Contact</Link>
        </div>
      )}
    </nav>
  );
}
