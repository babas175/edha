"use client"

import { Search } from "lucide-react"
import { useState } from "react"

export default function Blog() {
  const [search, setSearch] = useState("")

  const articles = [
    {
      category: "Actualités EDHA",
      title: "EDHA Academy dépasse les 45 000 élèves inscrits",
      description:
        "Un cap symbolique franchi pour la plateforme nationale d’éducation numérique.",
      date: "15 Fév 2026",
    },
    {
      category: "Transformation numérique",
      title: "Comment le numérique transforme les salles de classe haïtiennes",
      description:
        "Des enseignants partagent leur expérience avec les outils EDHA.",
      date: "10 Fév 2026",
    },
    {
      category: "Leadership jeunesse",
      title: "5 compétences numériques essentielles pour les jeunes haïtiens",
      description:
        "Les compétences du 21e siècle accessibles à tous.",
      date: "5 Fév 2026",
    },
    {
      category: "Actualités EDHA",
      title: "Partenariat avec le Ministère de l'Éducation Nationale",
      description:
        "Un accord stratégique pour accélérer la digitalisation.",
      date: "1 Fév 2026",
    },
    {
      category: "Histoires de réussite",
      title: "Portrait : Marie-Ange, élève remarquable du mois",
      description:
        "Son parcours inspirant depuis les zones rurales d’Haïti.",
      date: "28 Jan 2026",
    },
    {
      category: "Transformation numérique",
      title: "L'intelligence artificielle au service de l’éducation haïtienne",
      description:
        "Explorer le potentiel de l’IA dans l’apprentissage personnalisé.",
      date: "22 Jan 2026",
    },
  ]

  return (
    <main className="bg-[#f5f6f8]">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#04142b] via-[#061a35] to-[#020f24] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold">
            Blog EDHA
          </h1>

          <p className="mt-6 text-gray-300">
            Actualités, innovations et histoires de réussite de l’éducation numérique en Haïti.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-lg">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ================= FILTRES ================= */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap gap-4 justify-center">
          {[
            "Actualités EDHA",
            "Transformation numérique",
            "Éducation en Haïti",
            "Histoires de réussite",
            "Leadership jeunesse",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 bg-[#f5f6f8] rounded-full border border-gray-200 text-sm text-[#0c2d5a] cursor-pointer hover:bg-[#0c2d5a] hover:text-white transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* ================= RECONNAISSANCES ================= */}
      <section className="py-16 bg-[#eef1f5]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-xl font-semibold text-[#0c2d5a] mb-10">
            🏅 Reconnaissances nationales
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            <div className="bg-white border border-yellow-200 shadow-sm rounded-2xl p-6 flex items-center gap-5 hover:shadow-md transition">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <span className="text-xs text-yellow-600 font-medium">
                  ⭐ Élève le plus remarquable du mois
                </span>
                <h3 className="mt-2 font-semibold text-[#0c2d5a]">
                  Marie-Ange Desrosiers
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Lycée National de Port-au-Prince – Excellence en sciences et leadership communautaire.
                </p>
              </div>
            </div>

            <div className="bg-white border border-yellow-200 shadow-sm rounded-2xl p-6 flex items-center gap-5 hover:shadow-md transition">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-20 h-20 rounded-xl object-cover"
              />
              <div>
                <span className="text-xs text-yellow-600 font-medium">
                  ⭐ Professeur du mois
                </span>
                <h3 className="mt-2 font-semibold text-[#0c2d5a]">
                  Jean-Michel Beauvais
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Collège Saint-Pierre – Innovation pédagogique en mathématiques numériques.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= ARTICLES ================= */}
      <section className="py-20 bg-[#f5f6f8]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {articles.map((article, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition overflow-hidden"
              >
                <div className="h-2 bg-[#0c2d5a]" />

                <div className="p-6">

                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full font-medium">
                      {article.category}
                    </span>
                    <span className="text-gray-400">
                      {article.date}
                    </span>
                  </div>

                  <h3 className="font-semibold text-[#0c2d5a]">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-sm text-gray-500">
                    {article.description}
                  </p>

                  <button className="mt-4 text-yellow-600 text-sm font-medium hover:underline">
                    Lire la suite →
                  </button>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  )
}