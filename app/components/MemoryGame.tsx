"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const cryptoIcons = ["₿", "Ξ", "Ł", "Ð", "Ż", "Ӿ"]

interface Tile {
  id: number
  icon: string
  flipped: boolean
  matched: boolean
}

export default function MemoryGame() {
  const [tiles, setTiles] = useState<Tile[]>([])
  const [flippedTiles, setFlippedTiles] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState<number>(0)

  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    const shuffledIcons = [...cryptoIcons, ...cryptoIcons].sort(() => Math.random() - 0.5)
    const newTiles = shuffledIcons.map((icon, index) => ({
      id: index,
      icon,
      flipped: false,
      matched: false,
    }))
    setTiles(newTiles)
    setFlippedTiles([])
    setMatchedPairs(0)
  }

  const handleTileClick = (id: number) => {
    if (flippedTiles.length === 2 || tiles[id].flipped || tiles[id].matched) return

    const newTiles = [...tiles]
    newTiles[id].flipped = true
    setTiles(newTiles)

    const newFlippedTiles = [...flippedTiles, id]
    setFlippedTiles(newFlippedTiles)

    if (newFlippedTiles.length === 2) {
      const [firstId, secondId] = newFlippedTiles
      if (tiles[firstId].icon === tiles[secondId].icon) {
        newTiles[firstId].matched = true
        newTiles[secondId].matched = true
        setTiles(newTiles)
        setMatchedPairs(matchedPairs + 1)
        setFlippedTiles([])
      } else {
        setTimeout(() => {
          newTiles[firstId].flipped = false
          newTiles[secondId].flipped = false
          setTiles(newTiles)
          setFlippedTiles([])
        }, 1000)
      }
    }
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center cyberpunk-text-glow">Crypto Memory Game</h2>
      <div className="grid grid-cols-4 gap-4">
        {tiles.map((tile) => (
          <motion.div
            key={tile.id}
            className={`aspect-square bg-gray-800 rounded-lg shadow-lg flex items-center justify-center cursor-pointer text-4xl font-bold ${
              tile.flipped || tile.matched ? "bg-gray-700" : ""
            } cyberpunk-glow`}
            onClick={() => handleTileClick(tile.id)}
            animate={{ rotateY: tile.flipped || tile.matched ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {(tile.flipped || tile.matched) && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="cyberpunk-text-glow gradient-text"
              >
                {tile.icon}
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>
      {matchedPairs === cryptoIcons.length && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mt-8 text-center">
          <p className="text-2xl font-bold mb-4 cyberpunk-text-glow">Congratulations! You won!</p>
          <button
            onClick={initializeGame}
            className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-2 px-4 rounded-full hover:from-pink-600 hover:to-blue-600 transition-all duration-300 cyberpunk-glow"
          >
            Play Again
          </button>
        </motion.div>
      )}
    </div>
  )
}

