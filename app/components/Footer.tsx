import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black bg-opacity-50 backdrop-blur-md py-4 mt-auto">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800">
            <Image src="/Basman_Logo_500.webp" alt="Basman logo" width={32} height={32} loading="lazy" />
          </div>
          <p className="text-sm text-gray-400">© 2025 Basman Studios | Made by Basman</p>
        </div>
      </div>
    </footer>
  )
}

