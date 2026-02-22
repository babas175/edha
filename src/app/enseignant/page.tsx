"use client"

import { useState } from "react"
import {
  Users,
  BookOpen,
  ClipboardList,
  FileText,
  Plus,
  Clock,
  TrendingUp,
  Trophy,
  CheckCircle,
  Calendar,
} from "lucide-react"

export default function EnseignantPage() {
  const [activeTab, setActiveTab] = useState("classes")

  const classes = [
    {
      name: "Rhéto A",
      subject: "Mathématiques",
      students: 38,
      schedule: "Lun 08:00",
      average: "B",
    },
    {
      name: "Seconde B",
      subject: "Mathématiques",
      students: 42,
      schedule: "Mar 10:00",
      average: "B-",
    },
    {
      name: "Philo C",
      subject: "Mathématiques",
      students: 35,
      schedule: "Mer 14:00",
      average: "B+",
    },
  ]

  const devoirs = [
    {
      title: "Devoir #4 — Algèbre linéaire",
      class: "Rhéto A",
      deadline: "28 Fév 2026",
      progress: "30/38",
      status: "En cours",
    },
    {
      title: "Quiz — Trigonométrie",
      class: "Seconde B",
      deadline: "25 Fév 2026",
      progress: "42/42",
      status: "Terminé",
    },
    {
      title: "Projet — Statistiques",
      class: "Philo C",
      deadline: "10 Mars 2026",
      progress: "5/35",
      status: "En cours",
    },
  ]

  const eleveCourses = [
    {
      name: "Mathématiques",
      teacher: "M. Jean-Baptiste",
      progress: 72,
      grade: "B+",
    },
    {
      name: "Sciences Physiques",
      teacher: "Mme. Désir",
      progress: 85,
      grade: "A-",
    },
  ]

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <section className="bg-[#142e57] text-white py-6">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold">
              Panneau Enseignant
            </h1>
            <p className="text-sm text-gray-200 mt-1">
              M. Jean-Baptiste — Mathématiques
            </p>
          </div>

          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 text-sm shadow-md">
            <Plus size={16} />
            Nouveau devoir
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* METRICS */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Metric icon={<Users size={18} />} value="115" label="Total élèves" />
          <Metric icon={<BookOpen size={18} />} value="3" label="Classes" />
          <Metric icon={<ClipboardList size={18} />} value="2" label="Devoirs actifs" />
          <Metric icon={<FileText size={18} />} value="35" label="À corriger" />
        </div>

        {/* TABS */}
        <div className="flex gap-3 mb-6">
          {["classes", "devoirs", "eleves"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-sm ${
                activeTab === tab
                  ? "bg-[#142e57] text-white"
                  : "bg-white border border-gray-300"
              }`}
            >
              {tab === "classes" && "Mes Classes"}
              {tab === "devoirs" && "Devoirs"}
              {tab === "eleves" && "Élèves"}
            </button>
          ))}
        </div>

        {/* CLASSES */}
        {activeTab === "classes" && (
          <div className="grid md:grid-cols-3 gap-6">
            {classes.map((classe, i) => (
              <CardClasse key={i} classe={classe} />
            ))}
          </div>
        )}

        {/* DEVOIRS */}
        {activeTab === "devoirs" && (
          <div className="space-y-4">
            {devoirs.map((devoir, i) => (
              <CardDevoir key={i} devoir={devoir} />
            ))}
          </div>
        )}

        {activeTab === "eleves" && (
        <div className="bg-white border border-gray-300 rounded-xl shadow-md">
            {[
            { name: "Jean Pierre", classe: "Rhéto A", grade: "A-", trend: "up" },
            { name: "Marie Claude", classe: "Rhéto A", grade: "B+", trend: "up" },
            { name: "Paul Antoine", classe: "Seconde B", grade: "C+", trend: "down" },
            { name: "Sophie Lafleur", classe: "Philo C", grade: "A", trend: "up" },
            ].map((eleve, index, arr) => (
            <div key={index}>
                <div className="flex justify-between items-center px-6 py-5">
                
                {/* LEFT SIDE */}
                <div>
                    <p className="font-semibold text-[#142e57]">
                    {eleve.name}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                    {eleve.classe}
                    </p>
                </div>

                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3">
                    <span className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
                    {eleve.grade}
                    </span>

                    {eleve.trend === "up" ? (
                    <span className="text-green-500 text-sm">↗</span>
                    ) : (
                    <span className="text-red-500 text-sm">↘</span>
                    )}
                </div>
                </div>

                {/* DIVIDER */}
                {index !== arr.length - 1 && (
                <div className="border-t border-gray-200 mx-6"></div>
                )}
            </div>
            ))}
        </div>
)}
      </section>
    </div>
  )
}

/* COMPONENTS */

function Metric({ icon, value, label }: any) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-6 flex items-center gap-4 shadow-md">
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

function CardClasse({ classe }: any) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-6 shadow-md">
      <h3 className="font-semibold text-[#142e57]">{classe.name}</h3>
      <p className="text-sm text-gray-700">{classe.subject}</p>
    </div>
  )
}

function CardDevoir({ devoir }: any) {
  return (
    <div className="bg-white border border-gray-300 rounded-xl p-5 shadow-md flex justify-between">
      <div>
        <h3 className="font-semibold text-[#142e57]">{devoir.title}</h3>
        <p className="text-sm text-gray-700">
          {devoir.class} · Échéance: {devoir.deadline}
        </p>
      </div>
      <span className="text-sm font-semibold text-[#142e57]">
        {devoir.progress}
      </span>
    </div>
  )
}