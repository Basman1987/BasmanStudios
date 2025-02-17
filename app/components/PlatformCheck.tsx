"use client"

import { useEffect, useState } from "react"

export function useIOSVersion() {
  const [iOSVersion, setIOSVersion] = useState<number | null>(null)

  useEffect(() => {
    const userAgent = window.navigator.userAgent.toLowerCase()
    const isIOS = /iphone|ipad|ipod/.test(userAgent)
    if (isIOS) {
      const match = userAgent.match(/os (\d+)_/)
      if (match && match[1]) {
        setIOSVersion(Number.parseInt(match[1], 10))
      }
    }
  }, [])

  return iOSVersion
}

export function useIsIOS() {
  const iOSVersion = useIOSVersion()
  return iOSVersion !== null
}

