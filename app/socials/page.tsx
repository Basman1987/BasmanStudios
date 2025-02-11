"use client"

import { motion } from "framer-motion"
import { FaTwitter, FaDiscord } from "react-icons/fa"
import { useState } from "react"

const socialLinks = [
  { name: "X", icon: FaTwitter, url: "https://x.com/Basman90777419" },
  { name: "Discord", icon: FaDiscord, url: "https://discord.com/invite/uq4ZRyhjj2" },
]

export default function Socials() {
  const [clickedIndex, setClickedIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 pt-16 pb-20 flex flex-col items-center justify-center relative overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 relative z-10 cyberpunk-text-glow gradient-text"
      >
        Connect with Us
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-8 bg-gray-900/80 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-gray-800/80 group relative overflow-hidden cyberpunk-glow"
            onClick={() => setClickedIndex(index)}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
              animate={clickedIndex === index ? { scale: [1, 1.5, 1], opacity: [0, 1, 0] } : {}}
              transition={{ duration: 0.5 }}
            />
            <link.icon className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 cyberpunk-text-glow" />
            <span className="text-xl font-semibold cyberpunk-text-glow">{link.name}</span>
          </motion.a>
        ))}
      </div>
    </div>
  )
}

