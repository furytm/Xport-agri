"use client"

import { useState } from "react"
import { Leaf, Menu, X } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Process", href: "/process" },
    { name: "Sustainability", href: "/sustainability" },
    { name: "Certifications", href: "/certifications" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="bg-agri-green text-white px-4 py-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo with motion */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <img
              src="/log.jpg"
              alt="logo"
              className="h-12 "
            />
            <span className="text-sm font-bold">
              Sustaining quality <br /> Delivering trust
            </span>
          </Link>
        </motion.div>

        {/* Desktop links with staggered motion */}
        <div className="hidden md:flex items-center space-x-8 text-sm">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={item.href} className="hover:text-agri-orange transition-colors">
                {item.name}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile toggle button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu with motion */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden flex flex-col space-y-2 mt-3 px-2 text-sm"
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-agri-orange transition-colors"
              onClick={() => setOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  )
}
