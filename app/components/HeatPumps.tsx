"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import CustomComfort from "./manufacturers/CustomComfort"
import LearnWhy from "./LearnWhy"

export default function HeatPumps() {
  const [activeTab, setActiveTab] = useState<"why" | "manufacturers">("why")
  const [activeManufacturer, setActiveManufacturer] = useState<string>("custom-comfort")

  return (
    <section id="heat-pumps" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-sky-100 dark:from-gray-900 dark:via-blue-900 dark:to-slate-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg mb-6">
              <span className="font-bold text-lg">Heat Pump Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Advanced <span className="text-blue-600">Heat Pump Technology</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Discover why heat pumps are the future of home comfort - efficient, eco-friendly, and cost-effective heating and cooling solutions.
            </p>
          </div>

          <Tabs defaultValue="why" onValueChange={(value) => setActiveTab(value as "why" | "manufacturers")}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border-0">
                <TabsTrigger 
                  value="why" 
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white px-8 py-3 text-lg font-semibold"
                >
                  Why Heat Pumps?
                </TabsTrigger>
                <TabsTrigger 
                  value="manufacturers"
                  className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-blue-700 data-[state=active]:text-white px-8 py-3 text-lg font-semibold"
                >
                  Our Partners
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="why" className="mt-8">
              <LearnWhy />
            </TabsContent>

            <TabsContent value="manufacturers" className="mt-8">
              <Card className="mb-8 shadow-2xl border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      Trusted by Industry Leaders
                    </h3>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      At Valor Heating & Cooling, we partner with industry-leading manufacturers to provide you with the
                      best heat pump solutions for your home or business. Explore our selection of high-quality heat pump
                      systems below.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="custom-comfort" onValueChange={setActiveManufacturer}>
                <div className="flex justify-center mb-8">
                  <TabsList className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-lg border-0">
                    <TabsTrigger 
                      value="custom-comfort"
                      className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-600 data-[state=active]:to-green-700 data-[state=active]:text-white px-6 py-3 font-semibold"
                    >
                      Custom Comfort
                    </TabsTrigger>
                    <TabsTrigger 
                      value="future-brand" 
                      disabled
                      className="px-6 py-3 font-semibold opacity-50"
                    >
                      Mitsubishi
                    </TabsTrigger>
                    <TabsTrigger 
                      value="future-brand-2" 
                      disabled
                      className="px-6 py-3 font-semibold opacity-50"
                    >
                      Fujitsu
                    </TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="custom-comfort">
                  <CustomComfort />
                </TabsContent>
              </Tabs>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
