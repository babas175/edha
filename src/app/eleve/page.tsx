"use client"

import {
  BookOpen,
  TrendingUp,
  Trophy,
  CheckCircle,
  Clock,
  Calendar,
} from "lucide-react"

export default function ElevePage() {
  const courses = [
    { name: "Mathématiques", teacher: "M. Jean-Baptiste", grade: "B+", progress: 72, next: "Prochain: Lun 08:00" },
    { name: "Sciences Physiques", teacher: "Mme. Désir", grade: "A-", progress: 85, next: "Prochain: Mar 10:00" },
    { name: "Français", teacher: "M. Pierre", grade: "B", progress: 60, next: "Prochain: Mer 09:00" },
    { name: "Histoire d'Haïti", teacher: "Mme. Charles", grade: "A", progress: 90, next: "Prochain: Jeu 14:00" },
    { name: "Créole Haïtien", teacher: "M. Augustin", grade: "B+", progress: 78, next: "Prochain: Ven 11:00" },
  ]

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <section className="bg-[#142e57] text-white py-6">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-2xl font-bold">
            Bonjour, Marie 👋
          </h1>
          <p className="text-gray-200 mt-1 text-sm">
            Lycée National de Port-au-Prince — Classe de Rhéto
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-10">

        {/* METRICS */}
        <div className="grid md:grid-cols-4 gap-6 mb-10">
          <Metric icon={<BookOpen size={18} />} value="5" label="Cours actifs" />
          <Metric icon={<TrendingUp size={18} />} value="B+" label="Moyenne" />
          <Metric icon={<Trophy size={18} />} value="12/45" label="Classement" />
          <Metric icon={<CheckCircle size={18} />} value="18/20" label="Devoirs rendus" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* GAUCHE */}
          <div className="md:col-span-2 space-y-6">

            <h2 className="font-semibold text-[#142e57] text-lg">
              Mes Cours
            </h2>

            {courses.map((course, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">

                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {course.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {course.teacher}
                    </p>
                  </div>

                  <span className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                    {course.grade}
                  </span>
                </div>

                <div className="mt-4">
                  <div className="w-full bg-gray-200 h-[6px] rounded-full">
                    <div
                      className="bg-[#142e57] h-[6px] rounded-full"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>

                  <div className="flex justify-between mt-2 text-sm text-gray-700">
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {course.next}
                    </span>
                    <span>{course.progress}%</span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* DROITE */}
          <div className="space-y-6">

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-[#142e57] font-semibold">
                <Calendar size={16} />
                Emploi du temps — Aujourd'hui
              </div>

              <ScheduleItem time="08:00" subject="Mathématiques" location="Salle 201" />
              <ScheduleItem time="10:00" subject="Sciences Physiques" location="Labo 3" />
              <ScheduleItem time="13:00" subject="Français" location="Salle 105" />
              <ScheduleItem time="15:00" subject="Éducation Physique" location="Terrain" />
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="font-semibold mb-4 text-[#142e57]">
                Annonces
              </h3>

              <Announcement title="Examen de mi-session" date="25 Fév 2026" />
              <Announcement title="Journée portes ouvertes" date="5 Mars 2026" />
              <Announcement title="Inscription activités parascolaires" date="10 Mars 2026" />
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

/* COMPONENTS */

function Metric({ icon, value, label }: any) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 flex items-center gap-4 shadow-sm">
      <div className="bg-red-100 text-red-600 p-3 rounded-lg">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-lg text-gray-800">{value}</p>
        <p className="text-sm text-gray-600">{label}</p>
      </div>
    </div>
  )
}

function ScheduleItem({ time, subject, location }: any) {
  return (
    <div className="flex gap-4 mb-4 text-sm">
      <span className="text-gray-700 w-12 font-medium">{time}</span>
      <div>
        <p className="font-medium text-gray-800">{subject}</p>
        <p className="text-xs text-gray-600">{location}</p>
      </div>
    </div>
  )
}

function Announcement({ title, date }: any) {
  return (
    <div className="mb-4 text-sm">
      <p className="font-medium text-gray-800">{title}</p>
      <p className="text-xs text-gray-600">{date}</p>
    </div>
  )
}