"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-sm border-b border-gray-700 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition">
          Szymon Wyrozumski
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          <Link href="/" className="text-gray-300 hover:text-white transition">
            Home
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white transition">
            Projects
          </Link>
          <Link href="/cv" className="text-gray-300 hover:text-white transition">
            CV
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-white transition">
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}