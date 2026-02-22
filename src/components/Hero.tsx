export default function Hero() {
    return (
      <section className="relative h-[calc(100vh-72px)] flex items-center">
        
        {/* Background */}
        <img
          src="/image98.jpg"
          alt="Education"
          className="absolute inset-0 w-full h-full object-cover"
        />
  
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0b2c59]/80" />
  
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-6xl font-bold leading-tight">
            L'éducation pour tous en <br />
            <span className="text-yellow-400">Haïti</span>
          </h1>
  
          <p className="mt-6 text-lg max-w-2xl text-gray-200">
            Plateforme nationale d'éducation numérique — connectant élèves,
            enseignants et administrateurs à travers tout le pays.
          </p>
  
          <div className="mt-8 flex gap-5">
            <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold">
              🔍 Chercher une école
            </button>
  
            <button className="flex items-center gap-2 bg-yellow-400 text-black hover:bg-yellow-500 px-6 py-3 rounded-lg font-semibold">
              🎓 Espace Élève
            </button>
          </div>
        </div>
      </section>
    )
  }