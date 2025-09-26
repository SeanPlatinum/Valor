"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Medal, Award, Shield, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const features = [
  "40+ Years of HVAC Industry Experience – Trusted expertise and proven results.",
  "Disabled Veteran-Owned & Operated – Built on values of integrity, service, and commitment to excellence.",
  "Certified Mass Save Heat Pump Installer – Ensuring homeowners maximize their rebates and financing options.",
  "Local Small Business – Providing personalized service and treating every customer like family.",
  "$0 Out-of-Pocket Residential Installations – We make energy-efficient heating and cooling affordable with the Mass Save® 0% interest HEAT Loan.",
  "Up to $16,000 in Residential Rebates – Helping homeowners secure the highest possible savings.",
  "VRF System Specialists – Providing high-efficiency commercial heating and cooling solutions.",
  "Up to $825,000 in Commercial Rebates – Helping businesses secure maximum incentives for VRF installations.",
  "Expert Heat Pump Installation – We ensure perfect installation for optimal efficiency and performance.",
  "Manual J Load Calculations Included – Every residential installation is properly sized for maximum performance and energy savings.",
  "10-12 Year Equipment Warranties – Our installations come with long-term protection for our equipment, depending on the manufacturer.",
  "Mass Save® Specialists – We simplify the rebate process and help homeowners and businesses maximize savings.",
  "Veteran-Focused Giving – We are dedicated to supporting those who have served.",
  "Unparalleled Customer Service – From consultation to maintenance, we prioritize customer satisfaction.",
  "Sustainable Solutions – We help homeowners and businesses reduce their carbon footprint while enhancing comfort.",
]

export default function AboutUs() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 dark:from-gray-900 dark:via-blue-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg mb-6">
              <span className="font-bold text-lg">About Valor HVAC</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Your Trusted <span className="text-blue-600">HVAC Partner</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Disabled Veteran-owned and operated with 40+ years of experience in energy-efficient heating and cooling solutions.
            </p>
          </div>

          <div className="space-y-12">
            {/* Main Content Card */}
            <Card className="shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8 space-y-8">
                <div className="text-center">
                  <p className="text-xl text-gray-700 dark:text-gray-200 leading-relaxed">
                    At Valor Heating & Cooling, we are more than an HVAC company—we are a local small business and a trusted
                    partner in energy efficiency, 24/7 customer service, and a proud supporter of our veterans. Whether
                    you're a homeowner looking for a zero-cost heat pump installation with up to $16,000 in rebates or a
                    business seeking commercial HVAC solutions with substantial rebates, we're here to help you make the
                    switch to a cleaner, more efficient heating and cooling system with confidence and ease.
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white">Why Choose Valor Heating & Cooling?</h3>
                  <div
                    className={`space-y-4 transition-all duration-500 ${isExpanded ? "max-h-[2000px]" : "max-h-[400px] overflow-hidden relative"}`}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 rounded-xl border border-blue-200/50 dark:border-blue-700/50 hover:shadow-md transition-all duration-200">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mt-1">
                            <Medal className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-base font-medium text-gray-800 dark:text-gray-200">{feature}</span>
                        </div>
                      ))}
                    </div>
                    {!isExpanded && (
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-900 to-transparent pointer-events-none" />
                    )}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full mt-6 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white border-0 py-3 text-lg font-semibold shadow-lg"
                  >
                    {isExpanded ? (
                      <>
                        Show Less <ChevronUp className="h-5 w-5" />
                      </>
                    ) : (
                      <>
                        Show More Features <ChevronDown className="h-5 w-5" />
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="shadow-2xl border-0 bg-gradient-to-br from-blue-50 to-sky-50 dark:from-blue-900/20 dark:to-sky-900/20 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                    <Medal className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Veteran-Owned</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    Proudly disabled veteran-owned and operated, built on principles of integrity and service
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Mass Save® Certified</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    Up to $16,000 in rebates with $0 out-of-pocket costs through HEAT Loan
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-2xl border-0 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">40+ Years Experience</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    Decades of expertise in residential and commercial HVAC solutions
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}