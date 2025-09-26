"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Moon, Sun, Menu } from "lucide-react"
import { useDarkMode } from "../hooks/useDarkMode"
import { useState } from "react"
import BookingPage from "./BookingPage"
import { useNavigationStore } from "../stores/navigationStore"

export default function Header() {
  const [darkMode, setDarkMode] = useDarkMode()
  const [showBooking, setShowBooking] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { setCurrentPage } = useNavigationStore()

  const handleNavClick = (page: "home" | "about" | "reviews" | "heat-pumps" | "commercial" | "quote") => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="bg-white dark:bg-gray-900 transition-colors duration-200">
        {/* Top Bar */}
        <div className="container mx-auto px-2 sm:px-4 py-2 sm:py-3 flex justify-between items-center">
          <Button
            variant="default"
            className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2"
          >
            <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
            <span className="hidden sm:inline">TALK TO US:</span>
            <span>(508) 714-1327</span>
          </Button>
          <div className="flex items-center gap-4">
            <Button
              variant="default"
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm px-2 py-1 sm:px-4 sm:py-2"
              onClick={() => setShowBooking(true)}
            >
              BOOK
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle dark mode"
              className="p-1 sm:p-2"
            >
              {darkMode ? <Sun className="h-4 w-4 sm:h-5 sm:w-5" /> : <Moon className="h-4 w-4 sm:h-5 sm:w-5" />}
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden p-1 sm:p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>

        {/* Logo Section */}
        <div className="container mx-auto px-4 py-4 sm:py-6 flex flex-col items-center">
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-16 sm:h-20 md:h-24 lg:h-32">
            <Image
              src={
                darkMode
                  ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Valor-Heating-&-Cooling-dark-bg-2-ighNeMK4DjwSa84MOjTnm7uZCuZaHc.png"
                  : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Valor-Heating-&-Cooling-light-bg-2-AsxljysyXM4LLJlhztJqGcSj1XWyH5.png"
              }
              alt="Valor Heating & Cooling"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`bg-sky-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200 ${mobileMenuOpen ? "block" : "hidden md:block"}`}
        >
          <div className="container mx-auto px-4">
            <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 py-4">
              <li>
                <button
                  onClick={() => handleNavClick("home")}
                  className="block text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100 font-medium"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("heat-pumps")}
                  className="block text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100 font-medium"
                >
                  Heat Pumps
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("quote")}
                  className="block text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100 font-medium"
                >
                  Get Quote
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("commercial")}
                  className="block text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100 font-medium"
                >
                  Commercial
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="block text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100 font-medium"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("reviews")}
                  className="block text-blue-900 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-100 font-medium"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {showBooking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
          <div className="min-h-screen flex items-center justify-center p-4">
            <div className="relative w-full max-w-5xl bg-white dark:bg-gray-900 rounded-lg shadow-xl">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2"
                onClick={() => setShowBooking(false)}
              >
                ×
              </Button>
              <BookingPage />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

