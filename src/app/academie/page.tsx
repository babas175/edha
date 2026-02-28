"use client"

import { BookOpen } from "lucide-react"

export default function Academie() {
  const categories = [
    { title: "Mathématiques", count: 24 },
    { title: "Français", count: 18 },
    { title: "Sciences", count: 15 },
    { title: "Informatique", count: 12 },
    { title: "Éducation civique", count: 8 },
    { title: "Leadership numérique", count: 6 },
    { title: "Anglais", count: 10 },
    { title: "Histoire & Géographie", count: 9 },
  ]

  return (
    <main className="bg-[#f3f4f6] min-h-screen">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#04142b] via-[#061a35] to-[#020f24] text-white pt-24 pb-28 text-center border-b border-white/10">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Académie <span className="text-yellow-400">EDHA</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Explorez notre catalogue de cours gratuits, conçus par des
            éducateurs haïtiens pour des apprenants haïtiens.
          </p>

        </div>
      </section>

      {/* ================= CATÉGORIES ================= */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-2xl font-semibold text-[#0c2d5a] mb-12">
            Catégories de cours
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {categories.map((category, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition"
              >
                {/* Ícone */}
                <div className="w-12 h-12 flex items-center justify-center bg-[#f5efe3] text-[#d4a62a] rounded-xl mb-6">
                  <BookOpen size={20} />
                </div>

                {/* Título */}
                <h3 className="font-semibold text-lg text-[#0c2d5a]">
                  {category.title}
                </h3>

                {/* Quantidade */}
                <p className="text-gray-500 text-sm mt-2">
                  {category.count} cours disponibles
                </p>

                {/* Link */}
                <p className="mt-6 text-[#d4a62a] font-medium text-sm hover:underline cursor-pointer">
                  Explorer →
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}