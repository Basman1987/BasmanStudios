import "./globals.css"
import { Inter } from "next/font/google"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import CyberRain from "./components/CyberRain"
import type React from "react"
import Script from "next/script"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata = {
  title: "BASMAN STUDIOS",
  description: "Crypto-related art services specializing in logos, banners, and marketing posters",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          media="print"
          onLoad={(event) => {
            ;(event.target as HTMLLinkElement).media = "all"
          }}
        />
      </head>
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <div className="flex-grow relative overflow-hidden">
          <div className="neon-background"></div>
          <CyberRain />
          <Navigation />
          <main className="relative z-10 pt-16">{children}</main>
        </div>
        <Footer />
        <Script id="register-service-worker" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/service-worker.js').then(
                  function(registration) {
                    console.log('Service Worker registration successful with scope: ', registration.scope);
                  },
                  function(err) {
                    console.log('Service Worker registration failed: ', err);
                  }
                );
              });
            }
          `}
        </Script>
      </body>
    </html>
  )
}

