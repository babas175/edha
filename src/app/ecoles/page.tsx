"use client"

import { Search, MapPin, Users } from "lucide-react"
import { useState } from "react"

export default function Ecoles() {
  const [search, setSearch] = useState("")

  const schools = [
    { name: "Lycée National de Port-au-Prince", city: "Port-au-Prince", students: 1200 },
    { name: "Collège Saint-Pierre", city: "Cap-Haïtien", students: 850 },
    { name: "École Nationale de Jacmel", city: "Jacmel", students: 640 },
    { name: "Institution Mixte des Cayes", city: "Les Cayes", students: 520 },
    { name: "Collège Classique de Gonaïves", city: "Gonaïves", students: 780 },
    { name: "Lycée Technique de Pétion-Ville", city: "Pétion-Ville", students: 960 },
  ]

  const filteredSchools = schools.filter((school) =>
    school.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="bg-[#f3f4f6]">

      {/* ================= HERO ================= */}
      <section className="relative text-center py-24">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2000')",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold text-[#0c2d5a]">
            Nos Écoles Partenaires
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Trouvez votre établissement parmi nos institutions partenaires à
            travers tout Haïti.
          </p>

          {/* Recherche */}
          <div className="mt-8 flex justify-center gap-4">

            <div className="relative w-full max-w-lg">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Rechercher une école..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#0c2d5a]/20"
              />
            </div>

            <button className="bg-[#d4a62a] text-black px-6 py-3 rounded-xl font-semibold hover:bg-[#c9971f] transition">
              Chercher
            </button>

          </div>
        </div>
      </section>

      {/* ================= LISTA DE ESCOLAS ================= */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            {filteredSchools.map((school, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition"
              >
                <h3 className="font-semibold text-lg text-[#0c2d5a]">
                  {school.name}
                </h3>

                <div className="flex items-center gap-4 mt-4 text-gray-500 text-sm">

                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    {school.city}
                  </div>

                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    {school.students} élèves
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

    </main>
  )
}