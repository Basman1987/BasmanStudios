"use client"

import { useEffect } from "react"

export default function FontLoader() {
  useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
    link.rel = "stylesheet"
    link.media = "print"
    link.onload = () => {
      link.media = "all"
    }
    document.head.appendChild(link)
  }, [])

  return null
}

