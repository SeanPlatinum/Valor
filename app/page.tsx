"use client"

import Header from "./components/Header"
import AboutUs from "./components/AboutUs"
import Reviews from "./components/Reviews"
import HeatPumps from "./components/HeatPumps"
import OwnerBio from "./components/OwnerBio"
import Footer from "./components/Footer"
import ScrollButton from "./components/ScrollButton"
import FadeIn from "./components/FadeIn"
import { useNavigationStore } from "./stores/navigationStore"

export default function Home() {
  const { currentPage } = useNavigationStore()

  const renderContent = () => {
    switch (currentPage) {
      case "about":
        return (
          <FadeIn>
            <AboutUs />
          </FadeIn>
        )
      case "reviews":
        return (
          <FadeIn>
            <Reviews />
          </FadeIn>
        )
      case "heat-pumps":
        return (
          <FadeIn>
            <HeatPumps />
          </FadeIn>
        )
      case "commercial":
        return (
          <FadeIn>
            <div>Commercial Content</div>
          </FadeIn>
        )
      default:
        return (
          <FadeIn>
            <>
              <HeatPumps />
              <OwnerBio />
            </>
          </FadeIn>
        )
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        <div className="relative bg-gradient-to-r from-sky-100 to-sky-50 dark:from-gray-800 dark:to-gray-700">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              #1 Rated Disabled Veteran Owned Heat Pump Installers in Massachusetts!
            </h1>
            <ScrollButton targetId="why-valor" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              LEARN WHY
            </ScrollButton>
          </div>
        </div>
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}
