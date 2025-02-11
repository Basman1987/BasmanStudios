"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 pt-16 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-6xl font-bold text-center mb-8 cyberpunk-text-glow gradient-text"
      >
        Welcome to BASMAN Studios
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative w-full max-w-2xl aspect-video mb-12"
      >
        <Image
          src="Basman_Studios2.gif?height=720&width=1280"
          alt="Animated example of BASMAN STUDIO'S work"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-2xl cyberpunk-glow"
        />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-xl text-center mb-12 max-w-2xl cyberpunk-text-glow"
      >
        Elevate your crypto project with our cutting-edge designs. From meme coin logos to X profile banners and
        marketing posters, we bring your vision to life.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          href="/portfolio"
          className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:from-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl cyberpunk-glow"
        >
          Get Started
        </Link>
      </motion.div>
    </div>
  )
}

