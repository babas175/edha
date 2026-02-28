"use client"

import { School, Users, BookOpen, TrendingUp } from "lucide-react"

export default function Impact() {
  return (
    <main className="bg-[#f3f4f6]">

      {/* ================= HERO ================= */}
      <section className="relative text-center py-24">

        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2000')",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0c2d5a]">
            Notre Impact
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Des résultats mesurables pour l'éducation haïtienne.
          </p>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="bg-gradient-to-r from-[#04142b] via-[#061a35] to-[#020f24] text-white py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">

          <div>
            <div className="bg-white/10 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6">
              <School className="text-yellow-400" size={28} />
            </div>
            <h3 className="text-3xl font-bold">350+</h3>
            <p className="text-gray-300 mt-2">Écoles actives</p>
          </div>

          <div>
            <div className="bg-white/10 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6">
              <Users className="text-yellow-400" size={28} />
            </div>
            <h3 className="text-3xl font-bold">45,000+</h3>
            <p className="text-gray-300 mt-2">Élèves inscrits</p>
          </div>

          <div>
            <div className="bg-white/10 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="text-yellow-400" size={28} />
            </div>
            <h3 className="text-3xl font-bold">120+</h3>
            <p className="text-gray-300 mt-2">Cours disponibles</p>
          </div>

          <div>
            <div className="bg-white/10 w-16 h-16 mx-auto rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="text-yellow-400" size={28} />
            </div>
            <h3 className="text-3xl font-bold">78%</h3>
            <p className="text-gray-300 mt-2">Taux de complétion</p>
          </div>

        </div>
      </section>

      {/* ================= TÉMOIGNAGES ================= */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-[#0c2d5a] mb-16">
            Témoignages
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-gray-600 italic leading-relaxed">
                “EDHA m'a permis de continuer mes études même quand mon école
                était fermée. Les cours en ligne sont clairs et accessibles.”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-[#0c2d5a]">
                  Marie-Claire Joseph
                </p>
                <p className="text-sm text-gray-500">
                  Élève, Lycée National
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-gray-600 italic leading-relaxed">
                “La plateforme me donne des outils modernes pour enseigner.
                Mes élèves sont plus engagés que jamais.”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-[#0c2d5a]">
                  Jean-Baptiste Pierre
                </p>
                <p className="text-sm text-gray-500">
                  Professeur, Collège Saint-Pierre
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <p className="text-gray-600 italic leading-relaxed">
                “EDHA a transformé la gestion de notre école. Les rapports
                académiques sont automatisés et précis.”
              </p>

              <div className="mt-6">
                <p className="font-semibold text-[#0c2d5a]">
                  Dr. Sylvie Renard
                </p>
                <p className="text-sm text-gray-500">
                  Directrice, Institution Mixte des Cayes
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

    </main>
  )
}