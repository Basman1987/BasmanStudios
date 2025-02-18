"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaSpinner, FaCopy } from "react-icons/fa"
import dynamic from "next/dynamic"
import { useIsIOS } from "../components/PlatformCheck"

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
  const isIOS = useIsIOS()

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const generateNickname = useCallback(() => {
    setIsGenerating(true)
    setNickname("")
    setCopied(false)

    // Use requestAnimationFrame for smoother animation on iOS
    requestAnimationFrame(() => {
      const randomNickname = nicknames[Math.floor(Math.random() * nicknames.length)]
      setNickname(randomNickname)
      setIsGenerating(false)
    })
  }, [])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(nickname).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }, [nickname])

  const memoizedNicknameDisplay = useMemo(
    () => (
      <AnimatePresence mode="wait">
        {nickname && (
          <motion.div
            key={nickname}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-900 p-6 rounded-lg shadow-lg cyberpunk-glow text-center w-full"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 cyberpunk-text-glow break-words">{nickname}</h2>
            <button
              onClick={copyToClipboard}
              className={`flex items-center justify-center space-x-2 bg-gray-800 text-white py-2 px-4 rounded-full hover:bg-gray-700 transition-colors duration-300 w-full ${
                isIOS ? "active:opacity-75" : ""
              }`}
            >
              <FaCopy />
              <span>{copied ? "Copied!" : "Copy to Clipboard"}</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    ),
    [nickname, copyToClipboard, copied, isIOS],
  )

  return (
    <div
      className={`min-h-screen py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center ${
        isIOS ? "ios-specific-class" : ""
      }`}
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 cyberpunk-text-glow gradient-text"
      >
        Crypto Fun Zone
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-8 w-full max-w-xs"
      >
        <select
          value={selectedGame}
          onChange={(e) => setSelectedGame(e.target.value)}
          className="w-full bg-gray-800 text-white py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500 cyberpunk-glow"
        >
          <option value="nickname">Nickname Generator</option>
          {!isMobile && <option value="memory">Memory Game</option>}
        </select>
      </motion.div>
      {selectedGame === "nickname" ? (
        <div className="flex flex-col items-center w-full max-w-md">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-center mb-6 cyberpunk-text-glow"
          >
            Generate your unique crazy crypto-related nickname. Let's see who you really are!
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            onClick={generateNickname}
            disabled={isGenerating}
            className={`w-full sm:w-auto bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-3 px-6 rounded-full text-lg hover:from-pink-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl cyberpunk-glow mb-6 ${
              isIOS ? "active:opacity-75" : ""
            }`}
          >
            {isGenerating ? <FaSpinner className="animate-spin text-2xl mx-auto" /> : "Generate Nickname"}
          </motion.button>
          {memoizedNicknameDisplay}
        </div>
      ) : (
        !isMobile && <MemoryGame />
      )}
    </div>
  )
}

