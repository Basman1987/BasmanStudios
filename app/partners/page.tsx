"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    id: 1,
    name: "CryptoProject 1",
    logo: "/placeholder.svg?height=100&width=100",
    testimonial: "BASMAN Studios delivered an amazing logo that perfectly captured our project's essence.",
  },
  {
    id: 2,
    name: "MemeToken 2",
    logo: "/placeholder.svg?height=100&width=100",
    testimonial: "The marketing materials created by BASMAN Studios helped us go viral!",
  },
  {
    id: 3,
    name: "NFT Collection 3",
    logo: "/placeholder.svg?height=100&width=100",
    testimonial: "Our collection stood out thanks to the incredible artwork from BASMAN Studios.",
  },
  {
    id: 4,
    name: "DeFi Platform 4",
    logo: "/placeholder.svg?height=100&width=100",
    testimonial: "BASMAN Studios understood our vision and translated it into a stunning visual identity.",
  },
]

export default function Partners() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 pt-16 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 cyberpunk-text-glow gradient-text"
      >
        Our Partners
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-300 cyberpunk-glow"
          >
            <div className="flex items-center mb-4">
              <Image
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                width={50}
                height={50}
                className="rounded-full mr-4"
              />
              <h2 className="text-2xl font-semibold cyberpunk-text-glow">{partner.name}</h2>
            </div>
            <p className="text-gray-400 italic cyberpunk-text-glow">&ldquo;{partner.testimonial}&rdquo;</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

