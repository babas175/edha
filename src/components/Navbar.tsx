"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import {
  Home,
  Search,
  GraduationCap,
  BookOpen,
  BarChart3,
  Menu,
  X
} from "lucide-react"

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const linkClass = (path: string) =>
    `flex items-center gap-2 px-4 py-2 rounded-full transition ${
      pathname === path
        ? "bg-[#142e57] text-white"
        : "text-gray-600 hover:text-[#142e57]"
    }`

  const mobileLinkClass = (path: string) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
      pathname === path
        ? "bg-[#142e57] text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`

  return (
    <header className="w-full bg-white border-b border-gray-200 relative z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-3 text-[#142e57] font-semibold text-lg">
          <div className="bg-[#142e57] p-2 rounded-lg text-white">
            <GraduationCap size={18} />
          </div>
          EduHaïti
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/" className={linkClass("/")}>
            <Home size={16} />
            Accueil
          </Link>

          <Link href="/rechercher" className={linkClass("/rechercher")}>
            <Search size={16} />
            Rechercher
          </Link>

          <Link href="/eleve" className={linkClass("/eleve")}>
            <GraduationCap size={16} />
            Élève
          </Link>

          <Link href="/enseignant" className={linkClass("/enseignant")}>
            <BookOpen size={16} />
            Enseignant
          </Link>

          <Link href="/login" className={linkClass("/login")}>
            <BarChart3 size={16} />
            Admin
          </Link>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-[#142e57]"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6 pb-6 space-y-2 shadow-lg">
            
            <Link
            href="/"
            className={mobileLinkClass("/")}
            onClick={() => setOpen(false)}
            >
            <Home size={18} />
            Accueil
            </Link>

            <Link
            href="/rechercher"
            className={mobileLinkClass("/rechercher")}
            onClick={() => setOpen(false)}
            >
            <Search size={18} />
            Rechercher
            </Link>

            <Link
            href="/eleve"
            className={mobileLinkClass("/eleve")}
            onClick={() => setOpen(false)}
            >
            <GraduationCap size={18} />
            Élève
            </Link>

            <Link
            href="/enseignant"
            className={mobileLinkClass("/enseignant")}
            onClick={() => setOpen(false)}
            >
            <BookOpen size={18} />
            Enseignant
            </Link>

            <Link
            href="/login"
            className={mobileLinkClass("/login")}
            onClick={() => setOpen(false)}
            >
            <BarChart3 size={18} />
            Admin
            </Link>

        </div>
        )}
    </header>
  )
}