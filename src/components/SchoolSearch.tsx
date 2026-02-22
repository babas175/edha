"use client"

import { Search, MapPin, Star } from "lucide-react"

export default function SchoolSearch() {
  const schools = [
    {
      name: "Lycée National de Port-au-Prince",
      location: "Port-au-Prince, Ouest",
      rating: 4.5,
      students: 1200,
    },
    {
      name: "Institution Saint-Louis de Gonzague",
      location: "Delmas, Ouest",
      rating: 4.8,
      students: 800,
    },
    {
      name: "Collège Canado-Haïtien",
      location: "Pétion-Ville, Ouest",
      rating: 4.6,
      students: 650,
    },
    {
      name: "Lycée du Cap-Haïtien",
      location: "Cap-Haïtien, Nord",
      rating: 4.3,
      students: 950,
    },
    {
      name: "École Nationale des Cayes",
      location: "Les Cayes, Sud",
      rating: 4.1,
      students: 700,
    },
    {
      name: "Collège Mixte La Salle",
      location: "Jacmel, Sud-Est",
      rating: 4.4,
      students: 500,
    },
  ]

  return (
    <section className="w-full bg-gray-100 py-24 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Título */}
        <h2 className="text-3xl font-bold text-[#0b2c59]">
          Trouvez votre école
        </h2>

        <p className="text-gray-500 mt-4">
          Recherchez parmi des milliers d'écoles à travers Haïti
        </p>

        {/* Barra de busca */}
        <div className="mt-8 max-w-lg mx-auto relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Nom de l'école ou département..."
            className="w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none"
          />
        </div>

        {/* Grid de escolas */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 text-left">
          {schools.map((school, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6"
            >
              <h3 className="font-semibold text-[#0b2c59]">
                {school.name}
              </h3>

              <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                <MapPin size={14} />
                {school.location}
              </div>

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

      </div>
    </section>
  )
}