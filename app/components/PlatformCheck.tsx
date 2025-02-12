"use client"

import { useEffect, useState } from "react"

export function useIsIOS() {
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    setIsIOS(/iphone|ipad|ipod/.test(userAgent))
  }, [])

  return isIOS
}

