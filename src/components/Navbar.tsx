"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/apropos" },
    { name: "Académie", href: "/academie" },
    { name: "Écoles", href: "/ecoles" },
    { name: "Impact", href: "/impact" },
    { name: "Blog", href: "/blog" },
    { name: "Mérite National", href: "/merite" },
    { name: "Partenariats", href: "/partenariats" },
    { name: "Sécurité", href: "/securite" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full h-[70px] bg-gradient-to-r from-[#04142b] via-[#061a35] to-[#020f24] text-white shadow-sm z-50">

      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-9">

        <div className="text-lg font-bold tracking-wide">
          EDHA <span className="text-yellow-400">ACADEMY</span>
        </div>

        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-yellow-400 ${
                pathname === link.href
                  ? "text-yellow-400"
                  : "text-gray-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button onClick={() => setOpen(!open)} className="lg:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-[#0b2a55] px-6 pb-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2 transition ${
                pathname === link.href
                  ? "text-yellow-400 font-semibold"
                  : "text-gray-200 hover:text-yellow-400"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  )
}