"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { useCallback } from "react"

interface ScrollButtonProps {
  targetId: string
  children: React.ReactNode
  className?: string
}

export default function ScrollButton({ targetId, children, className }: ScrollButtonProps) {
  const scrollToSection = useCallback(() => {
    const element = document.getElementById(targetId)
    if (element) {
      const headerOffset = 80 // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }, [targetId])

  return (
    <Button variant="default" className={className} onClick={scrollToSection}>
      {children}
    </Button>
  )
}

