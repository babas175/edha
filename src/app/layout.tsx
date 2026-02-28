import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata = {
  title: "EduHaïti",
  description: "Plateforme nationale d'éducation numérique",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gray-100 flex flex-col">

        {/* Navbar fixa */}
        <Navbar />

        {/* Compensação da navbar fixed */}
        <main className="flex-1 pt-15">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}