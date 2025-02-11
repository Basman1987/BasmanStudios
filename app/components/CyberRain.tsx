"use client"

import type React from "react"
import { useEffect, useRef } from "react"

const CyberRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const fontSize = 14
    const columns = canvas.width / fontSize

    const drops: number[] = []
    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize

        const gradient = ctx.createLinearGradient(x, y, x, y + fontSize)
        gradient.addColorStop(0, "#ff00ff") // Pink
        gradient.addColorStop(1, "#00ff00") // Green

        ctx.fillStyle = gradient
        ctx.font = `${fontSize}px monospace`
        ctx.fillText(text, x, y)

        if (y > canvas.height && Math.random() > 0.99) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const interval = setInterval(draw, 33) // Approximately 30 FPS

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 hidden md:block"
      style={{ opacity: 0.1 }}
    />
  )
}

export default CyberRain

