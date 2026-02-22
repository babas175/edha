"use client"

import { Search, MapPin, Star } from "lucide-react"

export default function RechercherPage() {
  const schools = [
    {
      name: "Lycée National de Port-au-Prince",
      location: "Port-au-Prince, Ouest",
      level: "Secondaire",
      rating: 4.5,
      students: 1200,
      type: "Public",
    },
    {
      name: "Institution Saint-Louis de Gonzague",
      location: "Delmas, Ouest",
      level: "Primaire & Secondaire",
      rating: 4.8,
      students: 800,
      type: "Privé",
    },
    {
      name: "Collège Canado-Haïtien",
      location: "Pétion-Ville, Ouest",
      level: "Secondaire",
      rating: 4.6,
      students: 650,
      type: "Privé",
    },
    {
      name: "Lycée du Cap-Haïtien",
      location: "Cap-Haïtien, Nord",
      level: "Secondaire",
      rating: 4.3,
      students: 950,
      type: "Public",
    },
    {
      name: "École Nationale des Cayes",
      location: "Les Cayes, Sud",
      level: "Primaire",
      rating: 4.1,
      students: 700,
      type: "Public",
    },
    {
      name: "Collège Mixte La Salle",
      location: "Jacmel, Sud-Est",
      level: "Primaire & Secondaire",
      rating: 4.4,
      students: 500,
      type: "Privé",
    },
    {
      name: "Lycée Philippe Guerrier",
      location: "Les Cayes, Sud",
      level: "Secondaire",
      rating: 4.0,
      students: 880,
      type: "Public",
    },
    {
      name: "École Notre-Dame du Perpétuel Secours",
      location: "Gonaïves, Artibonite",
      level: "Primaire",
      rating: 4.2,
      students: 420,
      type: "Privé",
    },
  ]

  const departments = [
    "Tous",
    "Ouest",
    "Nord",
    "Sud",
    "Artibonite",
    "Centre",
    "Nord-Est",
    "Nord-Ouest",
    "Sud-Est",
    "Grand'Anse",
    "Nippes",
  ]

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HERO */}
      <section className="bg-[#142e57] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl font-bold mb-4">
            Recherche d'Écoles
          </h1>

          <p className="text-gray-300 mb-8">
            Explorez les écoles à travers les 10 départements d'Haïti
          </p>

          <div className="relative max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
           <input
                type="text"
                placeholder="Rechercher par nom ou ville..."
                className="w-full pl-10 pr-4 py-3 bg-white text-gray-800 rounded-lg shadow-sm focus:outline-none"
            />
          </div>
        </div>
      </section>

      {/* FILTRES */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-3">
          {departments.map((dep, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg text-sm border ${
                i === 0
                  ? "bg-[#142e57] text-white border-[#142e57]"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-200"
              }`}
            >
              {dep}
            </button>
          ))}
        </div>

        <p className="text-sm text-gray-500 mt-6">
          {schools.length} école(s) trouvée(s)
        </p>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {schools.map((school, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-[#0b2c59]">
                  {school.name}
                </h3>

                <span
                  className={`text-xs px-3 py-1 rounded-full ${
                    school.type === "Public"
                      ? "bg-[#142e57] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {school.type}
                </span>
              </div>

              <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                <MapPin size={14} />
                {school.location}
              </div>

              <p className="text-sm text-gray-500 mt-1">
                {school.level}
              </p>

              <div className="flex justify-between items-center mt-4 text-sm">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={14} fill="currentColor" />
                  {school.rating}
                </div>

                <span className="text-gray-500">
                  {school.students} élèves
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}