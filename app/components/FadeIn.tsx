"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function FadeIn({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    return () => setIsVisible(false)
  }, [])

  return (
    <div className={cn("transition-opacity duration-500", isVisible ? "opacity-100" : "opacity-0")}>{children}</div>
  )
}
