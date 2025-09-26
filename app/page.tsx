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
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 dark:from-gray-900 dark:via-blue-900 dark:to-slate-800 transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        {currentPage === "home" && (
          <div className="relative overflow-hidden">
            {/* Hero Section with HVAC Theme */}
            <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              <div className="container mx-auto px-4 py-20 relative z-10">
                <div className="max-w-6xl mx-auto">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                      <div className="space-y-4">
                        <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/30">
                          <span className="text-blue-200 text-sm font-medium">#1 Rated Disabled Veteran Owned Heat Pump Installers in Massachusetts!</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                          <span className="text-white">#1 Rated Disabled Veteran Owned</span>
                          <br />
                          <span className="text-blue-200">Heat Pump Installers</span>
                          <br />
                          <span className="text-yellow-300">in Massachusetts!</span>
                        </h1>
                        <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                          Disabled Veteran-owned heat pump specialists delivering $0 out-of-pocket installations 
                          with up to $16,000 in Mass Save® rebates.
                        </p>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <ScrollButton 
                          targetId="why-valor" 
                          className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-blue-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200"
                        >
                          LEARN WHY
                        </ScrollButton>
                        <button 
                          onClick={() => window.location.href = "tel:+15087141327"}
                          className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200"
                        >
                          Call Now
                        </button>
                      </div>
                    </div>
                    
                    {/* Right Content - HVAC Visual */}
                    <div className="relative">
                      <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/30 rounded-2xl p-8 backdrop-blur-sm border border-blue-400/20">
                        <div className="grid grid-cols-2 gap-6">
                          <div className="bg-white/10 rounded-xl p-6 text-center">
                            <h3 className="font-bold text-white mb-2">Cooling</h3>
                            <p className="text-blue-200 text-sm">Energy-efficient AC solutions</p>
                          </div>
                          <div className="bg-white/10 rounded-xl p-6 text-center">
                            <h3 className="font-bold text-white mb-2">Heating</h3>
                            <p className="text-blue-200 text-sm">Advanced heat pump systems</p>
                          </div>
                          <div className="bg-white/10 rounded-xl p-6 text-center">
                            <h3 className="font-bold text-white mb-2">Savings</h3>
                            <p className="text-blue-200 text-sm">Up to $16K in rebates</p>
                          </div>
                          <div className="bg-white/10 rounded-xl p-6 text-center">
                            <h3 className="font-bold text-white mb-2">Warranty</h3>
                            <p className="text-blue-200 text-sm">10-12 year protection</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        )}
        
        {renderContent()}
      </main>
      <Footer />
    </div>
  )
}