"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Mail, Lock } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (email === "admin@edu.ht" && password === "123456") {
      router.push("/admin")
    } else {
      setError("Identifiants invalides")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#142e57] via-[#1c3d75] to-[#0f2445] px-4">
      
      <div className="bg-white w-full max-w-md p-10 rounded-2xl shadow-2xl">

        {/* LOGO */}
        <div className="flex flex-col items-center mb-8">
          <div className="bg-[#142e57] text-white p-3 rounded-xl mb-3">
            🎓
          </div>
          <h1 className="text-2xl font-bold text-[#142e57]">
            EduHaïti
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Accès administrateur
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-5">

          {/* EMAIL */}
          <div>
            <label className="text-sm text-gray-700 font-medium">
              Email
            </label>

            <div className="relative mt-2">
              <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl 
                text-gray-800 
                placeholder:text-gray-400 
                placeholder:opacity-100
                focus:outline-none focus:ring-2 focus:ring-[#142e57] transition-all"
                placeholder="admin@edu.ht"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </div>
          </div>

          {/* PASSWORD */}
          <div>
            <label className="text-sm text-gray-700 font-medium">
              Mot de passe
            </label>

            <div className="relative mt-2">
              <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl
                text-gray-800
                placeholder:text-gray-400
                placeholder:opacity-100
                focus:outline-none focus:ring-2 focus:ring-[#142e57] transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
            </div>
          </div>

          {/* ERROR */}
          {error && (
            <p className="text-sm text-red-500 text-center">
              {error}
            </p>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#142e57] text-white py-3 rounded-xl hover:bg-[#0f2445] transition-all shadow-lg hover:shadow-xl font-medium"
          >
            Se connecter
          </button>

        </form>

        {/* FOOTER */}
        <p className="text-xs text-gray-400 text-center mt-6">
          © 2026 EDHA
        </p>

      </div>
    </div>
  )
}