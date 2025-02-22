"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

export default function AboutSummary() {
  const [isExpanded, setIsExpanded] = useState(false)

  const benefits = [
    "40+ Years of HVAC Industry Experience – Trusted expertise and proven results.",
    "Disabled Veteran-Owned & Operated – Built on values of integrity, service, and commitment to excellence.",
    "Certified Mass Save Heat Pump Installer – Ensuring homeowners maximize their rebates and financing options. With guidance",
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

  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="bg-white dark:bg-gray-800">
        <CardContent className="p-6">
          <div className="space-y-6">
            {/* Summary Text */}
            <p className="text-lg text-gray-700 dark:text-gray-200">
              At Valor Heating & Cooling, we are more than an HVAC company—we are a local small business and a trusted
              partner in energy efficiency, 24/7 customer service, and a proud supporter of our veterans. Whether you're
              a homeowner looking for a zero-cost heat pump installation with up to $16,000 in rebates or a business
              seeking commercial HVAC solutions with substantial rebates, we're here to help you make the switch to a
              cleaner, more efficient heating and cooling system with confidence and ease.
            </p>

            {/* Why Choose Us Section */}
            <div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                Why Choose Valor Heating & Cooling?
              </h2>

              <div
                className={`space-y-3 transition-all duration-500 ${isExpanded ? "max-h-[2000px]" : "max-h-[300px] overflow-hidden relative"}`}
              >
                <ul className="list-disc pl-6 space-y-3 text-gray-700 dark:text-gray-200">
                  {benefits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                  ))}
                </ul>
                {!isExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-gray-800 to-transparent" />
                )}
              </div>

              <Button
                variant="ghost"
                className="w-full mt-4 flex items-center justify-center gap-2"
                onClick={() => setIsExpanded(!isExpanded)}
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
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

