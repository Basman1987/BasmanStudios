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
          src="/Basman_Studios2.gif"
          alt="Animated example of BASMAN STUDIOS work"
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-2xl cyberpunk-glow"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority
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
        className="flex flex-col items-center"
      >
        <Link
          href="/portfolio"
          className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:from-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl cyberpunk-glow mb-8"
        >
          Get Started
        </Link>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="max-w-2xl text-sm text-gray-400 text-center cyberpunk-text-glow"
        >
          <p className="mb-4">
            At <strong>Basman Studios</strong>, I create art, websites, and designs for various projects. However, I am{" "}
            <strong>not accountable</strong> for the actions, intentions, or outcomes of these projects. Always{" "}
            <strong>Do Your Own Research (DYOR)</strong> before engaging with any project. Nothing on this site should
            be considered <strong>financial advice</strong>.
          </p>
          <p className="mb-4">
            When a client hires me for a paid job, I do my best to review the project, but I{" "}
            <strong>cannot be held responsible</strong> if they use the artwork, website, or designs for malicious or
            unethical purposes.
          </p>
          <p className="font-bold">Stay safe—Web3 is wild.</p>
        </motion.div>
      </motion.div>
    </div>
  )
}

