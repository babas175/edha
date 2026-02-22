"use client"

import { Search, GraduationCap, BookOpen, Users } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Search size={20} />,
      title: "Recherche d'Écoles",
      desc: "Trouvez les meilleures écoles dans chaque département d'Haïti.",
    },
    {
      icon: <GraduationCap size={20} />,
      title: "Suivi des Élèves",
      desc: "Tableau de bord personnalisé pour suivre les progrès académiques.",
    },
    {
      icon: <BookOpen size={20} />,
      title: "Outils Enseignants",
      desc: "Gérez vos classes, devoirs et évaluations en un seul endroit.",
    },
    {
      icon: <Users size={20} />,
      title: "Administration",
      desc: "Vue d'ensemble complète du système éducatif national.",
    },
  ]

  return (
    <section className="bg-[#f5f7fa] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#0b2c59]">
          Une plateforme complète
        </h2>

        <p className="text-gray-500 mt-4">
          Tout ce dont le système éducatif haïtien a besoin, réuni en un seul endroit.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-8 text-left"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-red-100 text-red-600 rounded-lg mb-6">
                {feature.icon}
              </div>

              <h3 className="font-semibold text-[#0b2c59]">
                {feature.title}
              </h3>

              <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}