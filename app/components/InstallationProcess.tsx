import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import Link from "next/link"

export default function InstallationProcess() {
  return (
    <section id="why-valor" className="scroll-mt-header container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction */}
        <Card>
          <CardContent className="p-6">
            <p className="text-lg text-gray-700 dark:text-gray-200">
              At Valor Heating & Cooling, we prioritize seamless installations, customer education, and long-term
              support to ensure our clients get the best possible experience. From the initial consultation to
              post-installation service, we go above and beyond to guarantee optimal system performance, energy
              efficiency, and extraordinary customer service. With a $0 Out of pocket cost for residential Heat Pumps!
            </p>
          </CardContent>
        </Card>

        {/* Installation Process */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">During Installation: A Hassle-Free Process</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <p className="text-gray-700 dark:text-gray-200">
              When you choose Valor Heating & Cooling, you can expect a professional, smooth, and stress-free
              installation process. We take care of everything so you don't have to.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Pre-Installation Consultation & Planning</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>
                    A Valor Heating & Cooling expert will visit your home or business to conduct a comprehensive
                    assessment and discuss your specific needs.
                  </li>
                  <li>
                    We perform an in-depth Manual J load calculation to determine the optimal heat pump size, ensuring
                    maximum efficiency and comfort.
                  </li>
                  <li>
                    If you're utilizing Mass Save® rebates and the 0% HEAT Loan, we assist you in navigating the
                    application process to secure your financial incentives.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Installation Day: Efficiency & Precision</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>
                    Our certified and highly trained technicians arrive on time, ready to complete the job with
                    professionalism and care.
                  </li>
                  <li>
                    We take extra precautions to protect your home, using drop cloths and boot covers to keep the
                    workspace clean.
                  </li>
                  <li>
                    The installation includes:
                    <ul className="list-disc pl-6 mt-2">
                      <li>Correct placement of indoor and outdoor units for maximum performance.</li>
                      <li>Proper refrigerant line installation to ensure efficiency.</li>
                      <li>Thorough system testing and calibration for peak performance.</li>
                    </ul>
                  </li>
                  <li>
                    Throughout the process, we provide clear communication so you know exactly what's happening every
                    step of the way.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Final Walkthrough & Customer Education</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>Once installation is complete, we test every component and confirm proper operation.</li>
                  <li>
                    Our team provides a detailed walkthrough, ensuring you understand:
                    <ul className="list-disc pl-6 mt-2">
                      <li>How to operate your new heat pump system efficiently.</li>
                      <li>How to use your thermostat or smart control app for convenience.</li>
                      <li>Basic maintenance tips to keep your system running at peak performance.</li>
                    </ul>
                  </li>
                  <li>We make sure all your questions are answered before we leave.</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* After Installation Support */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">After Installation: Ongoing Support & 24/7 Customer Service</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <p className="text-gray-700 dark:text-gray-200">
              At Valor Heating & Cooling, we don't just install your system and walk away, we provide continuous support
              to ensure your comfort and peace of mind.
            </p>

            <div className="space-y-6">
              {/* Support sections */}
              <div>
                <h3 className="text-xl font-semibold mb-3">1. 24/7 Customer Service & Emergency Support</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>
                    We offer 24/7 customer support, so if you ever experience an issue, you can call us day or night. We
                    are always here to help.
                  </li>
                  <li>
                    Whether it's a minor concern, troubleshooting assistance, or an emergency repair, our team is just a
                    phone call away.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">2. Warranty & Maintenance Assistance</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>
                    We provide industry-leading warranties ranging from 10 to 12 years, depending on the manufacturer.
                  </li>
                  <li>Our team helps you register your warranty and understand what is covered.</li>
                  <li>We offer scheduled maintenance services to keep your system running efficiently year-round.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Seasonal Checkups & Optimization</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>
                    Heat pumps work hard during summer and winter, and we offer seasonal tune-ups to ensure peak
                    performance.
                  </li>
                  <li>
                    We proactively check refrigerant levels, inspect components, and ensure everything is operating at
                    maximum efficiency.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">4. Continued Energy Savings & Efficiency Checks</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>We monitor and optimize your system over time to ensure you are maximizing energy savings.</li>
                  <li>
                    If you ever want to explore additional efficiency upgrades, such as integrating solar panels or
                    smart thermostats, we can provide expert guidance.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Why We Stand Out */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Why Valor Heating & Cooling Stands Out Against Other Contractors</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-8">
            <p className="text-gray-700 dark:text-gray-200">
              While many HVAC contractors simply install a system and move on, Valor Heating & Cooling is different.
              Here's why we stand out:
            </p>

            <div className="space-y-6">
              {/* Stand out sections */}
              <div>
                <h3 className="text-xl font-semibold mb-3">1. Precision & Perfection in Every Install</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>
                    Unlike some contractors who rush installations, we take the time to perform a Manual J load
                    calculation on every install, ensuring your system is perfectly sized for your home.
                  </li>
                  <li>
                    Our attention to detail and commitment to perfection prevents efficiency issues, saving you money in
                    the long run.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  2. Certified Mass Save Heat Pump Installer & Rebate Experts
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>We specialize in helping Massachusetts homeowners secure up to $16,000 in Mass Save rebates.</li>
                  <li>We handle all the paperwork and ensure you get every dollar available in incentives.</li>
                  <li>
                    We also help homeowners access the 0% HEAT Loan, allowing them to install a high-efficiency system
                    with zero out-of-pocket costs.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">3. Veteran-Owned, Local Small Business You Can Trust</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>
                    We are a disabled veteran-owned and operated business, built on values of honor, service, and
                    integrity.
                  </li>
                  <li>
                    As a local small business, we take a personal approach to customer service - you're not just another
                    job to us; you're part of the Valor family.
                  </li>
                  <li>Our reputation is built on honesty, transparency, and doing the job right the first time.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">
                  4. 24/7 Customer Support, We Don't Disappear After Installation
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>Many contractors disappear once the job is done. Not us.</li>
                  <li>
                    We provide 24/7 customer service and emergency support, ensuring you always have peace of mind.
                  </li>
                  <li>
                    Whether you need help with settings, troubleshooting, or repairs, our team is always available to
                    assist you.
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">5. Extended Equipment Warranties & Long-Term Support</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-200">
                  <li>
                    Our installations include manufacturer warranties ranging from 10 to 12 years, depending on the
                    system.
                  </li>
                  <li>We offer long-term maintenance plans to keep your system running at peak efficiency.</li>
                  <li>
                    If there's ever an issue, we respond quickly and professionally, ensuring minimal disruption to your
                    home or business.
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center space-y-6">
              <h2 className="text-2xl font-bold">Ready to Make the Switch to Energy-Efficient Heating & Cooling?</h2>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="tel:+15087141327">
                  <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Call (508) 714-1327
                  </Button>
                </Link>
                <Link href="mailto:admin@valorhvacma.com">
                  <Button variant="outline" className="w-full sm:w-auto">
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

