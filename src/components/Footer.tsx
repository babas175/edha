"use client"

import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full bg-[#142e57] text-white">

      {/* Parte principal */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-12">

        {/* Logo + descrição */}
        <div>
          <div className="flex items-center gap-2 font-semibold text-lg mb-4">
            <GraduationCap size={20} />
            EduHaïti
          </div>

          <p className="text-gray-300 text-sm leading-relaxed">
            Plateforme nationale d'éducation numérique visant à connecter
            élèves, enseignants et administrations à travers toute la République d'Haïti.
          </p>
        </div>

        {/* Liens rapides */}
        <div>
          <h3 className="font-semibold mb-4">Liens rapides</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-white cursor-pointer">Accueil</li>
            <li className="hover:text-white cursor-pointer">Recherche d'écoles</li>
            <li className="hover:text-white cursor-pointer">Espace Élève</li>
            <li className="hover:text-white cursor-pointer">Espace Enseignant</li>
            <li className="hover:text-white cursor-pointer">Administration</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-gray-300 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              Port-au-Prince, Haïti
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              +509 22 00 00 00
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} />
              contact@edu.ht
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="font-semibold mb-4">Suivez-nous</h3>

          <div className="flex gap-4">
            <div className="bg-white/10 p-3 rounded-lg hover:bg-white/20 cursor-pointer">
              <Facebook size={18} />
            </div>

            <div className="bg-white/10 p-3 rounded-lg hover:bg-white/20 cursor-pointer">
              <Twitter size={18} />
            </div>

            <div className="bg-white/10 p-3 rounded-lg hover:bg-white/20 cursor-pointer">
              <Linkedin size={18} />
            </div>
          </div>
        </div>

      </div>

      {/* Linha inferior */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>
            © 2026 EDHA. Tous droits réservés.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-white cursor-pointer">
              Politique de confidentialité
            </span>
            <span className="hover:text-white cursor-pointer">
              Conditions d'utilisation
            </span>
          </div>
        </div>
      </div>

    </footer>
  )
}