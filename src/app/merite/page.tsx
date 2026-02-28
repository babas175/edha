"use client"

export default function Merite() {
  return (
    <main className="bg-[#f5f6f8]">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#04142b] via-[#061a35] to-[#020f24] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <div className="flex justify-center mb-6 text-yellow-400 text-3xl">
            🏅
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Mérite National EDHA
          </h1>

          <p className="mt-6 text-gray-300">
            Célébrer l'excellence académique à l'échelle nationale.
            Un programme de reconnaissance pour les élèves, enseignants
            et institutions qui transforment l’éducation haïtienne.
          </p>

        </div>
      </section>

      {/* ================= CATÉGORIES ================= */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-xl font-semibold text-[#0c2d5a] mb-12">
            Catégories de reconnaissance
          </h2>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                title: "Élève National du Mois",
                desc: "Récompense l'excellence académique et le leadership étudiant.",
              },
              {
                title: "Professeur National du Mois",
                desc: "Honore l'innovation pédagogique et l'engagement enseignant.",
              },
              {
                title: "École Partenaire Distinguée",
                desc: "Célèbre les institutions modèles dans la transformation numérique.",
              },
              {
                title: "Innovation Pédagogique du Mois",
                desc: "Met en lumière les pratiques d'enseignement novatrices.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[#f5f6f8] border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
              >
                <div className="w-12 h-12 mx-auto mb-5 bg-[#efe6d6] rounded-lg flex items-center justify-center text-yellow-600 text-lg">
                  ⭐
                </div>

                <h3 className="font-semibold text-[#0c2d5a] text-sm">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= LAURÉAT DU MOIS ================= */}
      <section className="py-20 bg-[#eef1f5]">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-xl font-semibold text-[#0c2d5a] mb-10">
            Lauréat du mois
          </h2>

          <div className="bg-white border border-yellow-300 shadow-md rounded-2xl p-8 flex items-center gap-6">

            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              className="w-24 h-24 rounded-xl object-cover"
            />

            <div className="text-left">

              <span className="inline-block bg-yellow-100 text-yellow-700 text-xs px-3 py-1 rounded-full font-medium mb-3">
                Certifié par EDHA Academy
              </span>

              <h3 className="font-semibold text-[#0c2d5a] text-lg">
                Marie-Ange Desrosiers
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                Lycée National de Port-au-Prince
              </p>

              <p className="text-sm text-gray-500 mt-4 leading-relaxed">
                Excellence académique exceptionnelle en sciences et mathématiques.
                Leadership communautaire remarquable à travers des initiatives de tutorat.
              </p>

            </div>
          </div>

        </div>
      </section>

      {/* ================= HALL D’EXCELLENCE ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-xl font-semibold text-[#0c2d5a]">
            Hall d'Excellence
          </h2>

          <p className="text-sm text-gray-500 mt-2 mb-12">
            Nos lauréats passés et présents.
          </p>

          <div className="grid md:grid-cols-4 gap-8">

            {[
              {
                role: "Élève",
                name: "Marie-Ange Desrosiers",
                place: "Lycée National de Port-au-Prince",
                date: "Février 2026"
              },
              {
                role: "Professeur",
                name: "Jean-Michel Beauvais",
                place: "Collège Saint-Pierre",
                date: "Février 2026"
              },
              {
                role: "Élève",
                name: "Sophie Laurent",
                place: "École Nationale de Jacmel",
                date: "Janvier 2026"
              },
              {
                role: "Professeur",
                name: "Pierre Duval",
                place: "Institution Mixte des Cayes",
                date: "Janvier 2026"
              },
            ].map((item) => (
              <div
                key={item.name}
                className="bg-[#f5f6f8] border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition text-left"
              >
                <span className="text-xs text-yellow-600 font-medium">
                  {item.role}
                </span>

                <h3 className="font-semibold text-[#0c2d5a] mt-2">
                  {item.name}
                </h3>

                <p className="text-xs text-gray-500 mt-1">
                  {item.place}
                </p>

                <p className="text-xs text-gray-400 mt-2">
                  {item.date}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* ================= VÉRIFICATION CERTIFICAT ================= */}
      <section className="py-20 bg-gradient-to-r from-[#04142b] via-[#061a35] to-[#020f24] text-white text-center">
        <div className="max-w-xl mx-auto px-6">

          <h2 className="text-xl font-semibold mb-6">
            Vérification de certificat
          </h2>

          <div className="flex gap-3 justify-center">
            <input
              placeholder="Entrer l'identifiant du certificat"
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:outline-none text-white placeholder-gray-300"
            />
            <button className="bg-yellow-500 px-4 py-2 rounded-lg text-black font-semibold hover:bg-yellow-600 transition">
              Vérifier
            </button>
          </div>

        </div>
      </section>

      {/* ================= NOMINATION ================= */}
      {/* ================= NOMINATION ================= */}
    <section className="py-24 bg-white">
    <div className="max-w-lg mx-auto px-6">

        <h2 className="text-center text-2xl font-bold text-[#0c2d5a] mb-10">
        Nominer un candidat
        </h2>

        <div className="bg-[#f5f6f8] border border-gray-200 rounded-2xl shadow-sm p-8 space-y-5">

        {/* Linha 1 */}
        <div className="grid md:grid-cols-2 gap-4">
            <input
            placeholder="Nom du candidat"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none"
            />
            <input
            placeholder="Institution"
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none"
            />
        </div>

        {/* Select */}
        <select className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none">
            <option>Catégorie de nomination</option>
            <option>Élève</option>
            <option>Professeur</option>
            <option>Institution</option>
        </select>

        {/* Textarea */}
        <textarea
            placeholder="Justification et réalisations..."
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm h-28 resize-none focus:outline-none"
        />

        {/* Upload */}
        <div className="w-full bg-[#e9edf2] border border-gray-300 rounded-lg px-4 py-4 text-sm text-gray-600 flex items-center gap-2">
            ⬆️ Joindre un fichier (photo, document)
        </div>

        {/* Botão */}
        <button className="w-full bg-yellow-500 text-black font-medium py-3 rounded-lg hover:bg-yellow-600 transition">
            Soumettre la nomination
        </button>

        </div>

    </div>
    </section>

    </main>
  )
}