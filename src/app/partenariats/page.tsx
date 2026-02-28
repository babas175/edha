"use client"

export default function Partenariats() {
  return (
    <main className="bg-[#f5f6f8]">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#04142b] via-[#061a35] to-[#020f24] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-yellow-400 text-3xl mb-6">🤝</div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Partenariats
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
            EDHA Academy invite les institutions, la diaspora, les ONG et le secteur privé à rejoindre l'effort national de transformation éducative numérique en Haïti.
          </p>

        </div>
      </section>

      {/* ================= TYPES DE PARTENAIRES ================= */}
<section className="py-24 bg-[#f5f6f8]">
  <div className="max-w-6xl mx-auto px-6">

    <div className="grid md:grid-cols-2 gap-10">

      {/* Card 1 */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="w-12 h-12 bg-[#efe6d6] rounded-lg flex items-center justify-center text-yellow-600 text-lg mb-6">
          🏛️
        </div>
        <h3 className="font-semibold text-[#0c2d5a] text-lg mb-3">
          Institutions publiques
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Collaboration avec le Ministère de l'Éducation Nationale et les collectivités locales pour une couverture nationale.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="w-12 h-12 bg-[#efe6d6] rounded-lg flex items-center justify-center text-yellow-600 text-lg mb-6">
          🌍
        </div>
        <h3 className="font-semibold text-[#0c2d5a] text-lg mb-3">
          Diaspora haïtienne
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Implication de la communauté haïtienne internationale dans le financement et le mentorat.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="w-12 h-12 bg-[#efe6d6] rounded-lg flex items-center justify-center text-yellow-600 text-lg mb-6">
          👥
        </div>
        <h3 className="font-semibold text-[#0c2d5a] text-lg mb-3">
          ONG & Organismes internationaux
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Partenariats stratégiques avec les organisations dédiées à l'éducation et au développement.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
        <div className="w-12 h-12 bg-[#efe6d6] rounded-lg flex items-center justify-center text-yellow-600 text-lg mb-6">
          💼
        </div>
        <h3 className="font-semibold text-[#0c2d5a] text-lg mb-3">
          Secteur privé
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          Engagement des entreprises dans la formation numérique et l'insertion professionnelle des jeunes.
        </p>
      </div>

    </div>
  </div>
</section>

{/* ================= CTA PARTENAIRE ================= */}
<section className="py-24 bg-[#e6ebf1] text-center">
  <div className="max-w-3xl mx-auto px-6">

    <h2 className="text-2xl font-bold text-[#0c2d5a] mb-6">
      Devenir partenaire
    </h2>

    <p className="text-gray-600 mb-10">
      Contactez-nous pour explorer les opportunités de collaboration et contribuer à l'avenir de l'éducation en Haïti.
    </p>

    <button className="bg-yellow-500 hover:bg-yellow-600 transition text-black font-medium px-8 py-3 rounded-xl shadow-sm">
      Nous contacter
    </button>

  </div>
</section>

    </main>
  )
}