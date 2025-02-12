"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { FaTwitter, FaGlobe } from "react-icons/fa"

const portfolioItems = [
  {
    id: 1,
    title: "Crazzzy Monsters",
    image: "/Portfolio_1200x1200_cm.webp",
    projectLogo: "/Logo_CM.svg?height=50&width=50",
    socialLink: "https://x.com/CrazzzyMonsters",
    socialType: "twitter",
  },
  {
    id: 2,
    title: "X Banner 1",
    image: "/placeholder.svg?height=300&width=600",
    projectLogo: "/Frog_500.svg?height=50&width=50",
    socialLink: "https://x.com/FriendlyFrog100",
    socialType: "twitter", 
  },
  {
    id: 3,
    title: "Marketing Poster 1",
    image: "/placeholder.svg",
    projectLogo: "/placeholder.svg",
    socialLink: "https://twitter.com/example2",
    socialType: "twitter",
  },
  {
    id: 4,
    title: "Memecoin Logo 2",
    image: "/placeholder.svg",
    projectLogo: "/placeholder.svg",
    socialLink: "https://example2.com",
    socialType: "website",
  },
  {
    id: 5,
    title: "X Banner 2",
    image: "/placeholder.svg",
    projectLogo: "/placeholder.svg",
    socialLink: "https://twitter.com/example3",
    socialType: "twitter",
  },
  {
    id: 6,
    title: "Marketing Poster 2",
    image: "/placeholder.svg",
    projectLogo: "/placeholder.svg",
    socialLink: "https://example3.com",
    socialType: "website",
  },
]

export default function Portfolio() {
  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 pt-16 pb-20">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 cyberpunk-text-glow gradient-text"
      >
        Our Portfolio
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cyberpunk-glow"
          >
            <div className="relative aspect-square">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-4 cyberpunk-text-glow">{item.title}</h3>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800">
                    <Image
                      src={item.projectLogo || "/placeholder.svg"}
                      alt={`${item.title} logo`}
                      width={32}
                      height={32}
                      loading="lazy"
                    />
                  </div>
                  <a
                    href={item.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-3 py-2 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors duration-300"
                  >
                    {item.socialType === "twitter" ? (
                      <FaTwitter className="text-blue-400" />
                    ) : (
                      <FaGlobe className="text-green-400" />
                    )}
                    <span className="text-sm">{item.socialType === "twitter" ? "Twitter" : "Website"}</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

