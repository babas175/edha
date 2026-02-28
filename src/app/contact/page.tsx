"use client"

export default function Contact() {
  return (
    <main className="bg-[#f3f4f6]">

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-r from-[#04142b] via-[#061a35] to-[#020f24] text-white py-28 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contactez-nous
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Une question, un partenariat ou une suggestion ?
            Notre équipe est à votre disposition.
          </p>

        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          {/* ================= INFOS ================= */}
          <div className="space-y-10">

            {[
              { icon: "📍", title: "Adresse", text: "Rue Capois, Port-au-Prince, Haïti" },
              { icon: "✉️", title: "Email", text: "info@edha-academy.ht" },
              { icon: "📞", title: "Téléphone", text: "+509 2813-XXXX" },
              { icon: "⏰", title: "Horaires", text: "Lun – Ven : 8h00 – 17h00" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#efe6d6] rounded-lg flex items-center justify-center text-yellow-600">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#0c2d5a]">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}

          </div>

          {/* ================= FORM ================= */}
          <div className="bg-[#f7f8fa] border border-gray-200 rounded-2xl shadow-sm p-10">

            <h2 className="text-xl font-semibold text-[#0c2d5a] mb-8">
              Envoyez-nous un message
            </h2>

            <div className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  placeholder="Nom"
                  className="w-full bg-[#eef1f5] border border-gray-300 rounded-lg px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none"
                />
                <input
                  placeholder="Email"
                  className="w-full bg-[#eef1f5] border border-gray-300 rounded-lg px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <input
                  placeholder="Organisation"
                  className="w-full bg-[#eef1f5] border border-gray-300 rounded-lg px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none"
                />
                <input
                  placeholder="Sujet"
                  className="w-full bg-[#eef1f5] border border-gray-300 rounded-lg px-4 py-3 text-sm placeholder:text-gray-500 focus:outline-none"
                />
              </div>

              <textarea
                placeholder="Votre message..."
                className="w-full bg-[#eef1f5] border border-gray-300 rounded-lg px-4 py-3 text-sm h-36 resize-none placeholder:text-gray-500 focus:outline-none"
              />

              <button className="bg-yellow-500 hover:bg-yellow-600 transition text-black font-medium px-6 py-3 rounded-xl shadow-sm flex items-center gap-2 w-fit">
                ✈️ Envoyer le message
              </button>

            </div>

          </div>

        </div>
      </section>

    </main>
  )
}