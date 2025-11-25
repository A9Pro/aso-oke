import "./globals.css";
import FloatingNav from "@/components/FloatingNav";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "ASO-OKE | Premium Handwoven Fabrics",
  description:
    "Luxury Aso-Oke for weddings, engagements, and special events — Ojodu-Berger.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className + " bg-white text-gray-900"}>
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
