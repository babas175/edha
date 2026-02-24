export default function Hero() {
    return (
      <section className="relative h-[calc(100vh-80px)] flex items-center overflow-hidden">
  
        {/* BACKGROUND */}
        <img
          src="/images20.jpg"
          alt="Éducation en Haïti"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* OVERLAY */}
        <div className="absolute inset-0 bg-[#0b2c59]/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071c3a]/55 via-[#071c3a]/55 to-transparent" />
  
        {/* BOTÃO SUPERIOR */}
        <div className="absolute top-8 right-8 z-20">
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold shadow-lg hover:bg-yellow-500 transition">
            ⭐ Mon École
          </button>
        </div>
  
        {/* CONTEÚDO */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
  
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight">
            La plateforme <br />
            numérique qui <br />
            transforme{" "}
            <span className="text-yellow-400">
              l'éducation haïtienne.
            </span>
          </h1>
  
          <p className="mt-5 text-base md:text-lg max-w-xl text-gray-200 leading-relaxed">
            EDHA Academy modernise et démocratise l'accès à une éducation de
            qualité en Haïti grâce à une infrastructure numérique nationale,
            inclusive et sécurisée.
          </p>
  
          <div className="mt-6 flex flex-wrap gap-4">
  
            <button className="bg-white text-[#071c3a] px-5 py-2.5 rounded-full font-semibold shadow-lg hover:bg-gray-200 transition">
              Cours gratuits
            </button>
  
            <button className="border border-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold hover:bg-white hover:text-[#071c3a] transition">
              Chercher une institution
            </button>
  
            <button className="border border-white/40 backdrop-blur-sm px-5 py-2.5 rounded-full font-semibold hover:bg-white hover:text-[#071c3a] transition">
              Se connecter
            </button>
  
          </div>
        </div>
      </section>
    )
  }