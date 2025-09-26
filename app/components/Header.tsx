"use client"
import Image from "next/image"
import Link from "next/link"
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

  const handleNavClick = (page: "home" | "about" | "reviews" | "heat-pumps" | "commercial") => {
    setCurrentPage(page)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-blue-800 dark:to-gray-900 shadow-2xl relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Top Bar */}
        <div className="relative z-10 bg-gradient-to-r from-blue-800/50 to-blue-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Button
                variant="default"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold flex items-center gap-2 text-sm px-4 py-2 shadow-lg"
              >
                <Phone className="h-4 w-4" />
                <span className="hidden sm:inline">TALK TO US:</span>
                <span className="font-mono">(508) 714-1327</span>
              </Button>
              <div className="hidden sm:flex items-center gap-2 text-blue-200 text-sm">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>Available 24/7</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button
                variant="default"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-sm px-4 py-2 shadow-lg"
                onClick={() => setShowBooking(true)}
              >
                BOOK SERVICE
              </Button>
            
              <Button
                variant="outline"
                size="icon"
                className="md:hidden border-blue-300 text-blue-200 hover:bg-blue-800/50"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="relative z-10 container mx-auto px-4 py-6 flex flex-col items-center">
          <div className="relative w-full max-w-md lg:max-w-lg h-20 lg:h-24">
            <Image
              src={
                darkMode
                  ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Valor-Heating-&-Cooling-dark-bg-2-ighNeMK4DjwSa84MOjTnm7uZCuZaHc.png"
                  : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Valor-Heating-&-Cooling-light-bg-2-AsxljysyXM4LLJlhztJqGcSj1XWyH5.png"
              }
              alt="Valor Heating & Cooling"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </div>
          <div className="mt-2 text-center">
            <p className="text-blue-200 text-sm font-medium">🏆 #1 Rated HVAC in Massachusetts</p>
            <p className="text-blue-300 text-xs">Disabled Veteran Owned & Operated</p>
          </div>
        </div>

        {/* Navigation */}
        <nav
          className={`relative z-10 bg-gradient-to-r from-blue-800/80 to-blue-900/80 backdrop-blur-sm border-t border-blue-400/30 ${mobileMenuOpen ? "block" : "hidden md:block"}`}
        >
          <div className="container mx-auto px-4">
            <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-1 py-4">
              <li>
                <button
                  onClick={() => handleNavClick("home")}
                  className="block text-white hover:text-yellow-300 font-semibold px-4 py-2 rounded-lg hover:bg-blue-700/50 transition-all duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("heat-pumps")}
                  className="block text-white hover:text-yellow-300 font-semibold px-4 py-2 rounded-lg hover:bg-blue-700/50 transition-all duration-200"
                >
                  Heat Pumps
                </button>
              </li>
              <li>
                <Link
                  href="/Service-Quote"
                  className="block text-white hover:text-yellow-300 font-semibold px-4 py-2 rounded-lg hover:bg-blue-700/50 transition-all duration-200 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-400/30"
                >
                  Get Quote
                </Link>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("commercial")}
                  className="block text-white hover:text-yellow-300 font-semibold px-4 py-2 rounded-lg hover:bg-blue-700/50 transition-all duration-200"
                >
                  Commercial
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("about")}
                  className="block text-white hover:text-yellow-300 font-semibold px-4 py-2 rounded-lg hover:bg-blue-700/50 transition-all duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick("reviews")}
                  className="block text-white hover:text-yellow-300 font-semibold px-4 py-2 rounded-lg hover:bg-blue-700/50 transition-all duration-200"
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

