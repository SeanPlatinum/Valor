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
    <section id="heat-pumps" className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <Tabs defaultValue="why" onValueChange={(value) => setActiveTab(value as "why" | "manufacturers")}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="why">Why Choose Heat Pumps</TabsTrigger>
              <TabsTrigger value="manufacturers">Manufacturers</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="why">
            <LearnWhy />
          </TabsContent>

          <TabsContent value="manufacturers">
            <Card className="mb-8">
              <CardContent className="p-6">
                <p className="text-lg text-gray-700 dark:text-gray-200">
                  At Valor Heating & Cooling, we partner with industry-leading manufacturers to provide you with the
                  best heat pump solutions for your home or business. Explore our selection of high-quality heat pump
                  systems below.
                </p>
              </CardContent>
            </Card>

            <Tabs defaultValue="custom-comfort" onValueChange={setActiveManufacturer}>
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="custom-comfort">Custom Comfort</TabsTrigger>
                  {/* Add more manufacturers as needed */}
                  <TabsTrigger value="future-brand" disabled>
                    Mitsubishi
                  </TabsTrigger>
                  <TabsTrigger value="future-brand-2" disabled>
                    Fujitsu
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="custom-comfort">
                <CustomComfort />
              </TabsContent>

              {/* Add more TabsContent for other manufacturers */}
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
