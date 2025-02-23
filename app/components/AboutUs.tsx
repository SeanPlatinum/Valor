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
    <section id="about" className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Main Content Card */}
        <Card>
          <CardContent className="p-6 space-y-6">
            <div>
              <p className="text-lg text-gray-700 dark:text-gray-200">
                At Valor Heating & Cooling, we are more than an HVAC company—we are a local small business and a trusted
                partner in energy efficiency, 24/7 customer service, and a proud supporter of our veterans. Whether
                you're a homeowner looking for a zero-cost heat pump installation with up to $16,000 in rebates or a
                business seeking commercial HVAC solutions with substantial rebates, we're here to help you make the
                switch to a cleaner, more efficient heating and cooling system with confidence and ease.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Why Choose Valor Heating & Cooling?</h2>
              <div
                className={`space-y-2 transition-all duration-500 ${isExpanded ? "max-h-[2000px]" : "max-h-[300px] overflow-hidden relative"}`}
              >
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-200">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-800 to-transparent" />
                )}
              </div>
              <Button
                variant="ghost"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full mt-4 flex items-center justify-center gap-2"
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    Show More <ChevronDown className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Feature Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Medal className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Veteran-Owned</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Proudly disabled veteran-owned and operated, built on principles of integrity and service
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Award className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">Mass Save® Certified</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Up to $16,000 in rebates with $0 out-of-pocket costs through HEAT Loan
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
              <Shield className="h-12 w-12 text-blue-600" />
              <h3 className="text-xl font-semibold">40+ Years Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Decades of expertise in residential and commercial HVAC solutions
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

