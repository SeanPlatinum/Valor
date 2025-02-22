import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutUs() {
  return (
    <section id="about" className="container mx-auto px-4 py-16">
      <div className="space-y-12">
        <div className="max-w-4xl mx-auto">
          <Card className="mb-8">
            <CardContent className="p-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                At Valor Heating & Cooling, we are more than an HVAC company—we are a local small business and a trusted
                partner in energy efficiency, 24/7 customer service, and a proud supporter of our veterans. Whether
                you're a homeowner looking for a zero-cost heat pump installation with up to $16,000 in rebates or a
                business seeking commercial HVAC solutions with substantial rebates, we're here to help you make the
                switch to a cleaner, more efficient heating and cooling system with confidence and ease.
              </p>
            </CardContent>
          </Card>

          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose Valor Heating & Cooling?</h2>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="experience">
              <AccordionTrigger>Experience & Expertise</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>40+ Years of HVAC Industry Experience – Trusted expertise and proven results.</li>
                  <li>
                    Disabled Veteran-Owned & Operated – Built on values of integrity, service, and commitment to
                    excellence.
                  </li>
                  <li>
                    Certified Mass Save Heat Pump Installer – Ensuring homeowners maximize their rebates and financing
                    options.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="financial">
              <AccordionTrigger>Financial Benefits</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    $0 Out-of-Pocket Residential Installations – We make energy-efficient heating and cooling affordable
                    with the Mass Save® 0% interest HEAT Loan.
                  </li>
                  <li>
                    Up to $16,000 in Residential Rebates – Helping homeowners secure the highest possible savings.
                  </li>
                  <li>
                    Up to $825,000 in Commercial Rebates – Helping businesses secure maximum incentives for VRF
                    installations.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="technical">
              <AccordionTrigger>Technical Excellence</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Expert Heat Pump Installation – We ensure perfect installation for optimal efficiency and
                    performance.
                  </li>
                  <li>
                    Manual J Load Calculations Included – Every residential installation is properly sized for maximum
                    performance and energy savings.
                  </li>
                  <li>VRF System Specialists – Providing high-efficiency commercial heating and cooling solutions.</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="service">
              <AccordionTrigger>Service & Support</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    10-12 Year Equipment Warranties – Our installations come with long-term protection for our
                    equipment, depending on the manufacturer.
                  </li>
                  <li>
                    Mass Save® Specialists – We simplify the rebate process and help homeowners and businesses maximize
                    savings.
                  </li>
                  <li>
                    Unparalleled Customer Service – From consultation to maintenance, we prioritize customer
                    satisfaction.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="community">
              <AccordionTrigger>Community & Sustainability</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Local Small Business – Providing personalized service and treating every customer like family.
                  </li>
                  <li>Veteran-Focused Giving – We are dedicated to supporting those who have served.</li>
                  <li>
                    Sustainable Solutions – We help homeowners and businesses reduce their carbon footprint while
                    enhancing comfort.
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="mt-8 flex justify-center gap-4">
            <Link href="#installation">
              <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn About Our Installation Process
              </Button>
            </Link>
            <Link href="tel:+15087141327">
              <Button variant="outline">Call (508) 714-1327</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

