"use client"

import { GraduationCap, BookOpen, Settings } from "lucide-react"

export default function QuickAccess() {
  const items = [
    {
      icon: <GraduationCap size={28} />,
      title: "Espace Élève",
      desc: "Accédez à vos cours, devoirs et notes en un clic.",
    },
    {
      icon: <BookOpen size={28} />,
      title: "Espace Professeur",
      desc: "Gérez vos classes, publiez des cours et suivez les performances.",
    },
    {
      icon: <Settings size={28} />,
      title: "Espace Administrateur",
      desc: "Pilotez votre établissement avec des outils de gestion complets.",
    },
  ]

  return (
    <section className="bg-[#f5f7fa] py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-3xl font-bold text-[#0b2c59]">
          Accès rapide
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-10 text-center"
            >
              <div className="w-14 h-14 mx-auto flex items-center justify-center bg-gray-100 text-[#0b2c59] rounded-xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold text-[#0b2c59]">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-4 text-sm leading-relaxed">
                {item.desc}
              </p>

              <button className="mt-6 text-amber-500 font-medium hover:underline">
                Accéder →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}