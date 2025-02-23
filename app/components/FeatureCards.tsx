"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { cn } from "@/lib/utils"

const features = [
  {
    title: "During Installation: A Hassle-Free Process",
    description:
      "When you choose Valor Heating & Cooling, you can expect a professional, smooth, and stress-free installation process.",
    details: [
      {
        subtitle: "1. Pre-Installation Consultation & Planning",
        points: [
          "Comprehensive home assessment",
          "Manual J load calculation for perfect sizing",
          "Mass Save® rebates and 0% HEAT Loan assistance",
        ],
      },
      {
        subtitle: "2. Installation Day: Efficiency & Precision",
        points: [
          "Professional, on-time technicians",
          "Protected workspace with drop cloths",
          "Precise unit placement and testing",
        ],
      },
      {
        subtitle: "3. Final Walkthrough & Education",
        points: ["Complete system testing", "Detailed operation training", "Maintenance tips and guidance"],
      },
    ],
  },
  {
    title: "After Installation: 24/7 Support",
    description:
      "We don't just install and walk away - we provide continuous support to ensure your comfort and peace of mind.",
    details: [
      {
        subtitle: "1. 24/7 Customer Service",
        points: [
          "Round-the-clock emergency support",
          "Immediate troubleshooting assistance",
          "Quick response to any concerns",
        ],
      },
      {
        subtitle: "2. Warranty & Maintenance",
        points: ["10-12 year equipment warranties", "Scheduled maintenance services", "Regular system optimization"],
      },
      {
        subtitle: "3. Ongoing Care",
        points: ["Seasonal performance checks", "Energy efficiency monitoring", "System upgrade consultation"],
      },
    ],
  },
  {
    title: "Why Valor Stands Out",
    description: "Unlike other contractors, we go above and beyond to ensure your complete satisfaction.",
    details: [
      {
        subtitle: "1. Expert Installation",
        points: ["Manual J calculations standard", "Precision installation process", "Quality assurance checks"],
      },
      {
        subtitle: "2. Financial Benefits",
        points: [
          "Up to $16,000 in Mass Save rebates",
          "$0 out-of-pocket with HEAT Loan",
          "Commercial rebates up to $825,000",
        ],
      },
      {
        subtitle: "3. Trust & Reliability",
        points: ["Veteran-owned and operated", "Local business commitment", "24/7 customer support"],
      },
    ],
  },
]

function FeatureCard({
  feature,
  isExpanded,
  onToggle,
}: {
  feature: (typeof features)[0]
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <Card className="relative h-[500px] transition-all duration-500">
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">{feature.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>

        <div
          className={cn("transition-all duration-500", isExpanded ? "opacity-100" : "opacity-0 h-0 overflow-hidden")}
        >
          <div
            className="space-y-6 overflow-y-auto pr-2"
            style={{
              maxHeight: "280px",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(155, 155, 155, 0.5) transparent",
            }}
          >
            {feature.details.map((detail, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-2">{detail.subtitle}</h3>
                <ul className="list-disc pl-6 space-y-1">
                  {detail.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-600 dark:text-gray-300">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="ghost"
          onClick={onToggle}
          className="absolute bottom-4 left-4 right-4 flex items-center justify-center gap-2"
        >
          {isExpanded ? (
            <>
              Show Less <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              Learn More <ChevronDown className="h-4 w-4" />
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  )
}

export default function FeatureCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="why-valor" className="scroll-mt-header container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg text-gray-700 dark:text-gray-200">
              At Valor Heating & Cooling, we prioritize seamless installations, customer education, and long-term
              support to ensure our clients get the best possible experience. With $0 out-of-pocket cost for residential
              Heat Pumps!
            </p>
          </CardContent>
        </Card>

        <Carousel className="w-full">
          <CarouselContent>
            {features.map((feature, index) => (
              <CarouselItem key={index}>
                <FeatureCard
                  feature={feature}
                  isExpanded={expandedIndex === index}
                  onToggle={() => setExpandedIndex(expandedIndex === index ? null : index)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  )
}

