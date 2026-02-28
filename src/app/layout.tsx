import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { MessageCircle } from "lucide-react"

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
      <body className="min-h-screen bg-gray-100 flex flex-col relative">

        {/* Navbar fixa */}
        <Navbar />

        {/* Compensação da navbar fixed */}
        <main className="flex-1 pt-16">
          {children}
        </main>

        <Footer />

        {/* ================= WhatsApp Button ================= */}
       {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/50928130000"
          target="_blank"
          rel="noopener noreferrer"
          className="
            fixed 
            bottom-6 
            right-6 
            w-16 
            h-16 
            rounded-full 
            bg-[#25D366] 
            flex 
            items-center 
            justify-center 
            shadow-[0_8px_25px_rgba(0,0,0,0.25)] 
            hover:scale-105 
            transition 
            z-50
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-8 h-8 fill-white"
          >
            <path d="M19.11 17.27c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.35-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.41.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.64 1.1 2.82.14.18 1.89 2.89 4.58 4.05.64.28 1.14.45 1.53.58.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.12-.25-.18-.52-.32z"/>
            <path d="M16 3C9.37 3 4 8.37 4 15c0 2.29.64 4.43 1.76 6.26L4 29l7.94-1.73A11.94 11.94 0 0 0 16 27c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22c-1.92 0-3.71-.56-5.21-1.52l-.37-.22-4.71 1.02 1-4.59-.24-.38A9.94 9.94 0 0 1 6 15c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10z"/>
          </svg>
        </a>

      </body>
    </html>
  )
}