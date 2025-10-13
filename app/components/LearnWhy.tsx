"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, ChevronDown, ChevronUp } from "lucide-react"
import Link from "next/link"

const sections = [
  {
    title: "During Installation: A Hassle-Free Process",
    description:
      "When you choose Valor Heating & Cooling, you can expect a professional, smooth, and stress-free installation process. We take care of everything so you don't have to.",
    subsections: [
      {
        title: "1. Pre-Installation Consultation & Planning",
        points: [
          "A Valor Heating & Cooling expert will visit your home or business to conduct a comprehensive assessment and discuss your specific needs.",
          "We perform an in-depth Manual J load calculation to determine the optimal heat pump size, ensuring maximum efficiency and comfort.",
          "If you're utilizing Mass Save® rebates and the 0% HEAT Loan, we assist you in navigating the application process to secure your financial incentives.",
        ],
      },
      {
        title: "2. Installation Day: Efficiency & Precision",
        points: [
          "Our certified and highly trained technicians arrive on time, ready to complete the job with professionalism and care.",
          "We take extra precautions to protect your home, using drop cloths and boot covers to keep the workspace clean.",
          "Correct placement of indoor and outdoor units for maximum performance.",
          "Proper refrigerant line installation to ensure efficiency.",
          "Thorough system testing and calibration for peak performance.",
          "Throughout the process, we provide clear communication so you know exactly what's happening every step of the way.",
        ],
      },
      {
        title: "3. Final Walkthrough & Customer Education",
        points: [
          "Once installation is complete, we test every component and confirm proper operation.",
          "Our team provides a detailed walkthrough, ensuring you understand how to operate your new heat pump system efficiently.",
          "We teach you how to use your thermostat or smart control app for convenience.",
          "Basic maintenance tips to keep your system running at peak performance.",
          "We make sure all your questions are answered before we leave.",
        ],
      },
    ],
  },
  {
    title: "After Installation: Ongoing Support & 24/7 Customer Service",
    description:
      "At Valor Heating & Cooling, we don't just install your system and walk away, we provide continuous support to ensure your comfort and peace of mind.",
    subsections: [
      {
        title: "1. 24/7 Customer Service & Emergency Support",
        points: [
          "We offer 24/7 customer support, so if you ever experience an issue, you can call us day or night. We are always here to help.",
          "Whether it's a minor concern, troubleshooting assistance, or an emergency repair, our team is just a phone call away.",
        ],
      },
      {
        title: "2. Warranty & Maintenance Assistance",
        points: [
          "We provide industry-leading warranties ranging from 10 to 12 years, depending on the manufacturer.",
          "Our team helps you register your warranty and understand what is covered.",
          "We offer scheduled maintenance services to keep your system running efficiently year-round.",
        ],
      },
      {
        title: "3. Seasonal Checkups & Optimization",
        points: [
          "Heat pumps work hard during summer and winter, and we offer seasonal tune-ups to ensure peak performance.",
          "We proactively check refrigerant levels, inspect components, and ensure everything is operating at maximum efficiency.",
        ],
      },
      {
        title: "4. Continued Energy Savings & Efficiency Checks",
        points: [
          "We monitor and optimize your system over time to ensure you are maximizing energy savings.",
          "If you ever want to explore additional efficiency upgrades, such as integrating solar panels or smart thermostats, we can provide expert guidance.",
        ],
      },
    ],
  },
  {
    title: "Why Valor Heating & Cooling Stands Out Against Other Contractors",
    description:
      "While many HVAC contractors simply install a system and move on, Valor Heating & Cooling is different. Here's why we stand out:",
    subsections: [
      {
        title: "1. Precision & Perfection in Every Install",
        points: [
          "Unlike some contractors who rush installations, we take the time to perform a Manual J load calculation on every install.",
          "Our attention to detail and commitment to perfection prevents efficiency issues, saving you money in the long run.",
        ],
      },
      {
        title: "2. Certified Mass Save Heat Pump Installer & Rebate Experts",
        points: [
          "We specialize in helping Massachusetts homeowners secure up to $16,000 in Mass Save rebates.",
          "We handle all the paperwork and ensure you get every dollar available in incentives.",
          "We also help homeowners access the 0% HEAT Loan, allowing them to install a high-efficiency system with zero out-of-pocket costs.",
        ],
      },
      {
        title: "3. Veteran-Owned, Local Small Business You Can Trust",
        points: [
          "We are a disabled veteran-owned and operated business, built on values of honor, service, and integrity.",
          "As a local small business, we take a personal approach to customer service - you're not just another job to us; you're part of the Valor family.",
          "Our reputation is built on honesty, transparency, and doing the job right the first time.",
        ],
      },
      {
        title: "4. 24/7 Customer Support, We Don't Disappear After Installation",
        points: [
          "Many contractors disappear once the job is done. Not us.",
          "We provide 24/7 customer service and emergency support, ensuring you always have peace of mind.",
          "Whether you need help with settings, troubleshooting, or repairs, our team is always available to assist you.",
        ],
      },
      {
        title: "5. Extended Equipment Warranties & Long-Term Support",
        points: [
          "Our installations include manufacturer warranties ranging from 10 to 12 years, depending on the system.",
          "We offer long-term maintenance plans to keep your system running at peak efficiency.",
          "If there's ever an issue, we respond quickly and professionally, ensuring minimal disruption to your home or business.",
        ],
      },
    ],
  },
]

function ExpandableSection({ section }: { section: (typeof sections)[0] }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="mb-6">
      <CardHeader className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <CardTitle className="flex justify-between items-center">
          {section.title}
          {isExpanded ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
        </CardTitle>
      </CardHeader>
      {isExpanded && (
        <CardContent>
          <p className="mb-6 text-gray-600 dark:text-gray-300">{section.description}</p>
          <div className="space-y-6">
            {section.subsections.map((subsection, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-3">{subsection.title}</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {subsection.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-600 dark:text-gray-300">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      )}
    </Card>
  )
}

export default function LearnWhy() {
  return (
    <section id="why-valor" className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-8">
          <CardContent className="p-6">
            <p className="text-lg text-gray-700 dark:text-gray-200">
              At Valor Heating & Cooling, we prioritize seamless installations, customer education, and long-term
              support to ensure our clients get the best possible experience. From the initial consultation to
              post-installation service, we go above and beyond to guarantee optimal system performance, energy
              efficiency, and extraordinary customer service. With a $0 Out of pocket cost for residential Heat Pumps!
            </p>
          </CardContent>
        </Card>

        {sections.map((section, index) => (
          <ExpandableSection key={index} section={section} />
        ))}

        <Card className="mt-8">
          <CardContent className="p-6">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">Ready to Make the Switch to Energy-Efficient Heating & Cooling?</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Contact Valor Heating & Cooling today and experience unmatched service and quality installation done
                right the first time.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="tel:+15087141327">
                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    (508) 714-1327
                  </Button>
                </Link>
                <Link href="mailto:adim@valorhvacma.com">
                  <Button variant="outline" className="w-full sm:w-auto flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Email Us
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

