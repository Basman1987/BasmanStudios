import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import CyberRain from "./components/CyberRain"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "BASMAN STUDIOS",
  description: "Crypto-related art services specializing in logos, banners, and marketing posters",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <div className="flex-grow relative overflow-hidden">
          <div className="neon-background"></div>
          <CyberRain />
          <Navigation />
          <main className="relative z-10 pt-16">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}



import './globals.css'