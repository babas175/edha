"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-[#04142b] via-[#061a35] to-[#020f24] text-white border-t-4 border-red-600">

      {/* CONTEÚDO PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* COLUNA 1 */}
        <div>
          <h3 className="text-lg font-semibold">
            EDHA <span className="text-yellow-400">ACADEMY</span>
          </h3>

          <p className="text-gray-400 text-sm mt-4 leading-relaxed">
            La plateforme nationale d'éducation numérique d'Haïti.
            Moderniser, démocratiser et transformer l'apprentissage
            pour chaque élève haïtien.
          </p>
        </div>

        {/* COLUNA 2 */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4 uppercase text-sm tracking-wide">
            Plateforme
          </h4>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Espace Élève</li>
            <li className="hover:text-white cursor-pointer">Espace Professeur</li>
            <li className="hover:text-white cursor-pointer">Espace Administrateur</li>
            <li className="hover:text-white cursor-pointer">Cours gratuits</li>
            <li className="hover:text-white cursor-pointer">Chercher une institution</li>
          </ul>
        </div>

        {/* COLUNA 3 */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4 uppercase text-sm tracking-wide">
            Ressources
          </h4>

          <ul className="space-y-3 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Impact</li>
            <li className="hover:text-white cursor-pointer">Blog</li>
            <li className="hover:text-white cursor-pointer">Mérite National</li>
            <li className="hover:text-white cursor-pointer">Partenariats</li>
            <li className="hover:text-white cursor-pointer">Sécurité</li>
          </ul>
        </div>

        {/* COLUNA 4 */}
        <div>
          <h4 className="text-yellow-400 font-semibold mb-4 uppercase text-sm tracking-wide">
            Contact
          </h4>

          <ul className="space-y-4 text-gray-400 text-sm">

            <li className="flex items-center gap-2">
              <Mail size={16} className="text-yellow-400" />
              info@edha-academy.ht
            </li>

            <li className="flex items-center gap-2">
              <Phone size={16} className="text-yellow-400" />
              +509 2813-XXXX
            </li>

            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-yellow-400" />
              Port-au-Prince, Haïti
            </li>

          </ul>
        </div>

      </div>

      {/* LINHA INFERIOR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-400 text-sm">
          © 2026 EDHA Academy – Tous droits réservés.
        </div>
      </div>

    </footer>
  )
}