"use client"

import { motion } from "framer-motion"
import { FaTwitter, FaDiscord } from "react-icons/fa"

export default function Contact() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 pt-16 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 cyberpunk-text-glow gradient-text"
      >
        Contact Us
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg cyberpunk-glow"
      >
        <p className="text-xl text-center mb-8 cyberpunk-text-glow">
          Get in touch with us through our social media channels:
        </p>
        <div className="flex flex-col space-y-6">
          <a
            href="https://x.com/Basman90777419"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 cyberpunk-glow"
          >
            <FaTwitter className="text-2xl text-blue-400" />
            <span className="text-lg">DM us on X</span>
          </a>
          <a
            href="https://discord.com/invite/uq4ZRyhjj2"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-3 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 cyberpunk-glow"
          >
            <FaDiscord className="text-2xl text-indigo-400" />
            <span className="text-lg">Open a ticket in Crazzzy Monsters Discord and tag BASMAN</span>
          </a>
        </div>
        <p className="text-center mt-8 text-gray-400">We're excited to hear from you and discuss your project!</p>
      </motion.div>
    </div>
  )
}

