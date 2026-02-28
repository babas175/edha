"use client"

import { Search } from "lucide-react"
import { useState } from "react"

export default function Home() {
  const [department, setDepartment] = useState("")
  const [commune, setCommune] = useState("")
  const [schoolName, setSchoolName] = useState("")

  const courses = [
    {
      level: "Secondaire",
      title: "Mathématiques",
      description: "Algèbre, géométrie et statistiques pour tous les niveaux.",
    },
    {
      level: "Fondamental",
      title: "Français",
      description: "Grammaire, rédaction et compréhension de texte.",
    },
    {
      level: "Tous niveaux",
      title: "Informatique",
      description: "Initiation au code, bureautique et culture numérique.",
    },
    {
      level: "Secondaire",
      title: "Éducation civique",
      description: "Citoyenneté, droits humains et responsabilité sociale.",
    },
    {
      level: "Avancé",
      title: "Leadership numérique",
      description:
        "Entrepreneuriat, innovation et compétences du 21e siècle.",
    },
  ]

  return (
    <main className="bg-[#f2f4f8] min-h-screen">

      {/* ================= TROUVER ÉTABLISSEMENT ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0c2d5a]">
            Trouver votre établissement par département
          </h2>

          <p className="text-gray-600 mt-4 text-base max-w-xl mx-auto">
            Sélectionnez votre département afin de localiser votre école partenaire EDHA Academy.
          </p>

          <div className="mt-10 w-full bg-white rounded-2xl border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden grid md:grid-cols-2">

            {/* LADO ESQUERDO */}
            <div className="p-10 text-left">

              <label className="block text-sm font-semibold text-[#0c2d5a] mb-2">
                Département
              </label>
              <select
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                className="w-full bg-[#f7f9fc] text-[#0c2d5a] border border-gray-300 rounded-lg px-4 py-3 text-sm"
              >
                <option value="">— Choisir un département —</option>
                <option value="ouest">Ouest</option>
                <option value="nord">Nord</option>
                <option value="sud">Sud</option>
              </select>

              <label className="block text-sm font-semibold text-[#0c2d5a] mt-6 mb-2">
                Commune
              </label>
              <select
                value={commune}
                onChange={(e) => setCommune(e.target.value)}
                className="w-full bg-[#f7f9fc] text-[#0c2d5a] border border-gray-300 rounded-lg px-4 py-3 text-sm"
              >
                <option value="">— Choisir une commune —</option>
              </select>

              <label className="block text-sm font-semibold text-[#0c2d5a] mt-6 mb-2">
                Nom de l'établissement
              </label>

              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  value={schoolName}
                  onChange={(e) => setSchoolName(e.target.value)}
                  placeholder="Rechercher par nom..."
                  className="w-full bg-[#f7f9fc] border border-gray-300 rounded-lg pl-10 pr-4 py-3 text-sm"
                />
              </div>

              <button className="w-full mt-8 bg-gradient-to-r from-[#d4a62a] to-[#c9971f] text-black text-base font-semibold py-3 rounded-lg hover:opacity-90 transition">
                Rechercher
              </button>

              <p className="text-xs text-gray-600 mt-6">
                Si votre établissement ne figure pas dans la liste,{" "}
                <span className="text-[#d4a62a] font-medium cursor-pointer hover:underline">
                  contactez-nous
                </span>{" "}
                pour rejoindre le réseau EDHA Academy.
              </p>
            </div>

            {/* LADO DIREITO */}
            <div className="bg-[#eef2f8] flex flex-col items-center justify-center p-10 border-l border-gray-100">

              <div className="w-64 md:w-72 transition-all duration-300 hover:scale-105">

                <svg
                  viewBox="0 0 512 512"
                  className="w-full h-auto fill-[#cfd6e4] hover:fill-[#d4a62a] transition-colors duration-300"
                >
                  <path d="M476.1 224.2c-8.6-9.5-22.5-13.3-34.7-9.3l-44.3 14.6-30.9-24.7c-7.9-6.3-18.5-8.2-28.2-5l-44.7 14.7-43.3-34.6c-7.9-6.3-18.5-8.2-28.2-5l-57.4 18.9c-9.7 3.2-16.9 11.5-18.8 21.5l-8.9 47.2-48.8 16.1c-9.7 3.2-16.9 11.5-18.8 21.5l-11.3 60.1c-2.3 12.3 3.2 24.7 14 31.7l47.7 31-6.6 34.9c-2.3 12.3 3.2 24.7 14 31.7 10.8 7 24.6 7.8 36.2 2.2l60.8-29.2 50.8 25.4c11.5 5.8 25.4 4.9 36.2-2.2 10.8-7 16.3-19.4 14-31.7l-9.5-50.3 45.3-27.4c10.8-6.5 16.5-18.7 14.6-31.3l-7.7-50.8 44.5-27c11.2-6.8 17-19.5 14.7-32.4l-9.2-50.8c-1.9-10.5-8.7-19.4-18.2-23.9z"/>
                </svg>

              </div>

              <p className="text-sm text-gray-600 mt-6">
                Sélectionnez un département
              </p>

              </div>
          </div>
        </div>
      </section>


      {/* ================= COURS GRATUITS ================= */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#0c2d5a]">
            Cours gratuits en ligne
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Accédez à des ressources éducatives de qualité, gratuitement et sans inscription requise.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {courses.map((course, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition"
              >
                <div className="h-3 bg-[#0c1f3f]" />

                <div className="p-8 text-left">
                  <span className="inline-block bg-[#f4e3b3] text-[#a87400] text-xs font-medium px-3 py-1 rounded-full">
                    {course.level}
                  </span>

                  <h3 className="mt-4 text-lg font-semibold text-[#0c2d5a]">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    {course.description}
                  </p>

                  <button className="mt-6 bg-[#0c1f3f] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#132a54] transition">
                    Commencer →
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