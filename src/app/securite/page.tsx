"use client"

export default function Securite() {
  return (
    <main className="bg-[#f5f6f8]">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#04142b] via-[#061a35] to-[#020f24] text-white py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <div className="text-yellow-400 text-3xl mb-6">
            🛡️
          </div>

          <h1 className="text-4xl md:text-5xl font-bold">
            Sécurité & Données
          </h1>

          <p className="mt-6 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            La sécurité de vos données est notre priorité absolue.
            EDHA Academy s'engage à protéger les informations de chaque élève,
            enseignant et institution.
          </p>

        </div>
      </section>

      {/* ================= SECURITY CARDS ================= */}
      <section className="py-24 bg-[#eef1f5]">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <div className="w-14 h-14 bg-[#e9edf2] rounded-xl flex items-center justify-center text-xl mb-6">
                🔐
              </div>
              <h3 className="font-semibold text-[#0c2d5a] text-lg mb-3">
                Chiffrement des données
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Toutes les données sont chiffrées en transit et au repos avec des protocoles de sécurité industriels (TLS 1.3, AES-256).
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <div className="w-14 h-14 bg-[#e9edf2] rounded-xl flex items-center justify-center text-xl mb-6">
                🛡️
              </div>
              <h3 className="font-semibold text-[#0c2d5a] text-lg mb-3">
                Authentification sécurisée
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Connexion sécurisée avec protection contre les attaques par force brute et gestion avancée des sessions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <div className="w-14 h-14 bg-[#e9edf2] rounded-xl flex items-center justify-center text-xl mb-6">
                👁️
              </div>
              <h3 className="font-semibold text-[#0c2d5a] text-lg mb-3">
                Protection de la vie privée
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Conformité aux standards internationaux de protection des données personnelles. Aucune donnée vendue à des tiers.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8">
              <div className="w-14 h-14 bg-[#e9edf2] rounded-xl flex items-center justify-center text-xl mb-6">
                🗄️
              </div>
              <h3 className="font-semibold text-[#0c2d5a] text-lg mb-3">
                Gouvernance responsable
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Infrastructure hébergée de manière sécurisée avec des sauvegardes régulières et un plan de continuité d'activité.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  )
}