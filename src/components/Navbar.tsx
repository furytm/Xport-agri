"use client"

import { useState } from "react"
import { Leaf, Menu, X } from "lucide-react"
import Link from "next/link"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="bg-agri-green text-white px-4 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <Leaf className="h-8 w-8" />
          <span className="text-xl font-bold">AgriExport Global</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          <Link href="/about" className="hover:text-agri-orange transition-colors">
            About
          </Link>
          <Link href="/products" className="hover:text-agri-orange transition-colors">
            Products
          </Link>
          <Link href="/process" className="hover:text-agri-orange transition-colors">
            Process
          </Link>
          <Link href="/sustainability" className="hover:text-agri-orange transition-colors">
            Sustainability
          </Link>
          <Link href="/certifications" className="hover:text-agri-orange transition-colors">
            Certifications
          </Link>
          <Link href="/contact" className="hover:text-agri-orange transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {open && (
        <div className="md:hidden flex flex-col space-y-2 mt-3 px-2 text-sm">
          <Link href="/about" className="hover:text-agri-orange transition-colors">
            About
          </Link>
          <Link href="/products" className="hover:text-agri-orange transition-colors">
            Products
          </Link>
          <Link href="/process" className="hover:text-agri-orange transition-colors">
            Process
          </Link>
          <Link href="/sustainability" className="hover:text-agri-orange transition-colors">
            Sustainability
          </Link>
          <Link href="/certifications" className="hover:text-agri-orange transition-colors">
            Certifications
          </Link>
          <Link href="/contact" className="hover:text-agri-orange transition-colors">
            Contact
          </Link>
        </div>
      )}
    </nav>
  )
}
