"use client"

import { Target, Eye, Shield, Heart } from "lucide-react"

export default function Apropos() {
  return (
    <main className="bg-[#f2f4f8]">

      {/* ================= HERO ================= */}
      <section className="relative h-[420px] flex items-center justify-center text-center overflow-hidden">

        {/* Background */}
        <img
          src="/images20.jpg"
          alt="Éducation en Haïti"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0c2d5a]/75" />

        {/* Conteúdo */}
        <div className="relative z-10 max-w-3xl px-6 text-white">
          <h1 className="text-4xl md:text-5xl font-bold">
            À propos d'EDHA Academy
          </h1>

          <p className="mt-6 text-lg text-gray-200 leading-relaxed">
            EDHA Academy est l'initiative nationale de transformation numérique
            de l'éducation en Haïti, conçue pour offrir un accès équitable
            à un apprentissage de qualité à travers tout le pays.
          </p>
        </div>
      </section>

      {/* ================= MISSÃO / VALORES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-4 gap-8">

            {/* Mission */}
            <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition text-center">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-[#eef2f8]">
                <Target className="text-[#0c2d5a]" size={24} />
              </div>

              <h3 className="font-semibold text-lg text-[#0c2d5a]">
                Mission
              </h3>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                Démocratiser l'accès à une éducation numérique de qualité
                pour chaque élève haïtien.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition text-center">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-[#eef2f8]">
                <Eye className="text-[#0c2d5a]" size={24} />
              </div>

              <h3 className="font-semibold text-lg text-[#0c2d5a]">
                Vision
              </h3>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                Faire d'Haïti un modèle de transformation éducative numérique
                dans la Caraïbe.
              </p>
            </div>

            {/* Valeurs */}
            <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition text-center">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-[#eef2f8]">
                <Shield className="text-[#0c2d5a]" size={24} />
              </div>

              <h3 className="font-semibold text-lg text-[#0c2d5a]">
                Valeurs
              </h3>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                Excellence, inclusion, innovation, intégrité et engagement
                communautaire.
              </p>
            </div>

            {/* Engagement */}
            <div className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl transition text-center">
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-xl bg-[#eef2f8]">
                <Heart className="text-[#0c2d5a]" size={24} />
              </div>

              <h3 className="font-semibold text-lg text-[#0c2d5a]">
                Engagement
              </h3>

              <p className="text-gray-600 text-sm mt-4 leading-relaxed">
                Soutenir les enseignants, les élèves et les institutions
                dans leur parcours numérique.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}