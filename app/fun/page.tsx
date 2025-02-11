"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaSpinner, FaCopy } from "react-icons/fa"
import dynamic from "next/dynamic"

const MemoryGame = dynamic(() => import("../components/MemoryGame"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const nicknames = [
  "RugPull Ricky",
  "MoonBoi Max",
  "DiamondHands Danny",
  "GasFee Greg",
  "HODL Hulk",
  "PumpNDump Patty",
  "Satoshi's Sidekick",
  "Ledger Lad",
  "CryptoKong Kevin",
  "WenLambo Larry",
  "Whale Whisperer",
  "DeFi Degen",
  "Airdrop Andy",
  "ShillMaster Steve",
  "Blockchainer Bob",
  "Staking Stan",
  "Altcoin Alchemist",
  "FOMO Freddy",
  "Metaverse Marty",
  "Yield Farmer Yogi",
]

export default function Fun() {
  const [nickname, setNickname] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [copied, setCopied] = useState(false)
  const [selectedGame, setSelectedGame] = useState("nickname")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const generateNickname = () => {
    setIsGenerating(true)
    setNickname("")
    setCopied(false)

    setTimeout(() => {
      const randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)]
      setNickname(randomNickname)
      setIsGenerating(false)
    }, 1000)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(nickname).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  useEffect(() => {
    setCopied(false)
  }, [])

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 pt-16 pb-20 flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-12 cyberpunk-text-glow gradient-text"
      >
        Crypto Fun Zone
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8"
      >
        <select
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
          className="bg-gray-800 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 cyberpunk-glow"
        >
          <option value="nickname">Nickname Generator</option>
          {!isMobile && <option value="memory">Memory Game</option>}
        </select>
      </motion.div>
      {selectedGame === "nickname" ? (
        <div className="flex flex-col items-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-center mb-8 cyberpunk-text-glow"
          >
            Generate your unique crazy crypto-related nickname. Let's see who you really are!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={generateNickname}
            disabled={isGenerating}
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:from-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl cyberpunk-glow mb-8"
          >
            {isGenerating ? <FaSpinner className="animate-spin text-2xl mx-auto" /> : "Generate Nickname"}
          </motion.button>
          {nickname && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 p-6 rounded-lg shadow-lg cyberpunk-glow text-center"
            >
              <h2 className="text-2xl font-bold mb-4 cyberpunk-text-glow">{nickname}</h2>
              <button
                onClick={copyToClipboard}
                className="flex items-center justify-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition-colors duration-300"
              >
                <FaCopy />
                <span>{copied ? "Copied!" : "Copy to Clipboard"}</span>
              </button>
            </motion.div>
          )}
        </div>
      ) : (
        !isMobile && <MemoryGame />
      )}
    </div>
  )
}

