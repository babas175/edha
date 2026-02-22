"use client"

import { useState } from "react"
import {
  School,
  GraduationCap,
  Users,
  TrendingUp,
  AlertTriangle,
  Plus
} from "lucide-react"

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("departements")

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <section className="bg-[#142e57] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">
              Tableau de Bord Administratif
            </h1>
            <p className="text-sm text-gray-200 mt-1">
              Ministère de l'Éducation Nationale d'Haïti
            </p>
          </div>

          <button className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow-md">
            <Plus size={16} />
            Ajouter école
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10 space-y-8">

        {/* METRICS */}
        <div className="grid md:grid-cols-4 gap-6">
          <Metric icon={<School size={18} />} value="3,247" label="Total Écoles" />
          <Metric icon={<GraduationCap size={18} />} value="1.2M" label="Élèves Inscrits" />
          <Metric icon={<Users size={18} />} value="45,200" label="Enseignants" />
          <Metric icon={<TrendingUp size={18} />} value="73%" label="Taux de Réussite" />
        </div>

        {/* ALERTS */}
        <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle size={18} className="text-yellow-500" />
            <h2 className="font-semibold text-[#142e57]">
              Alertes & Notifications
            </h2>
          </div>

          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
              15 écoles du Sud n'ont pas soumis leurs rapports mensuels
            </li>

            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Taux d'abandon en hausse dans l'Artibonite (+3%)
            </li>

            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Nouvelle allocation budgétaire approuvée pour le Nord
            </li>
          </ul>
        </div>

        {/* TABS */}
        <div className="flex gap-3">
            <button
                onClick={() => setActiveTab("departements")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "departements"
                    ? "bg-[#142e57] text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
            >
                Par Département
            </button>

            <button
                onClick={() => setActiveTab("ecoles")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === "ecoles"
                    ? "bg-[#142e57] text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
                }`}
            >
                Écoles Récentes
            </button>
        </div>

        {/* DEPARTEMENTS */}
        {activeTab === "departements" && (
          <div className="grid md:grid-cols-3 gap-6">
            <DepartmentCard name="Ouest" schools="850 écoles" students="320K" teachers="12.0K" rate="92%" />
            <DepartmentCard name="Nord" schools="420 écoles" students="180K" teachers="6.5K" rate="78%" />
            <DepartmentCard name="Sud" schools="310 écoles" students="125K" teachers="4.8K" rate="71%" />
            <DepartmentCard name="Artibonite" schools="380 écoles" students="155K" teachers="5.6K" rate="68%" />
            <DepartmentCard name="Centre" schools="220 écoles" students="85K" teachers="3.2K" rate="65%" />
            <DepartmentCard name="Sud-Est" schools="180 écoles" students="72K" teachers="2.7K" rate="70%" />
          </div>
        )}

        {/* ECOLES RECENTES */}
        {activeTab === "ecoles" && (
          <div className="space-y-4">
            <SchoolRow
              name="École Nationale de Jérémie"
              location="Grand'Anse"
              students="380 élèves"
              status="Actif"
            />

            <SchoolRow
              name="Lycée de Miragoâne"
              location="Nippes"
              students="520 élèves"
              status="En attente"
            />

            <SchoolRow
              name="Collège Immaculée de Fort-Liberté"
              location="Nord-Est"
              students="290 élèves"
              status="Actif"
            />
          </div>
        )}

      </section>
    </div>
  )
}

function Metric({ icon, value, label }: any) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-6 flex items-center gap-4 shadow-sm">
      <div className="bg-red-100 text-red-600 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="font-bold text-lg text-[#142e57]">{value}</p>
        <p className="text-sm text-gray-700">{label}</p>
      </div>
    </div>
  )
}

function DepartmentCard({ name, schools, students, teachers, rate }: any) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-[#142e57]">{name}</h3>
        <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
          {schools}
        </span>
      </div>

      <div className="space-y-2 text-sm text-gray-800">
        <div className="flex justify-between">
          <span>Élèves</span>
          <span className="font-medium">{students}</span>
        </div>

        <div className="flex justify-between">
          <span>Enseignants</span>
          <span className="font-medium">{teachers}</span>
        </div>

        <div className="flex justify-between">
          <span>Taux d'inscription</span>
          <span className="font-medium">{rate}</span>
        </div>
      </div>

      <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-2 bg-[#142e57] rounded-full" style={{ width: rate }} />
      </div>
    </div>
  )
}

function SchoolRow({ name, location, students, status }: any) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-5 shadow-sm flex justify-between items-center">
      <div>
        <h3 className="font-semibold text-[#142e57]">{name}</h3>
        <p className="text-sm text-gray-600 mt-1">
          {location} · {students}
        </p>
      </div>

      <span
        className={`text-xs px-3 py-1 rounded-full font-medium ${
          status === "Actif"
            ? "bg-[#142e57] text-white"
            : "bg-gray-200 text-gray-700"
        }`}
      >
        {status}
      </span>
    </div>
  )
}