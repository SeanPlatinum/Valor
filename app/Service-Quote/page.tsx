"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, ArrowRight, Check, MapPin, Home as HomeIcon } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import AddressAutocomplete from "../components/AddressAutocomplete"

interface SurveyData {
  // Address
  address: string
  city: string
  state: string
  zipCode: string
  lat: number
  lng: number
  
  // Contact
  firstName: string
  lastName: string
  email: string
  phone: string
  
  // Home Details
  propertyType: string
  yearBuilt: string
  squareFootage: string
  floorsAboveGround: string
  bedrooms: string
  bathrooms: string
  hasAttic: string
  basementType: string
  additionalNotes: string
  
  // Additional Info
  ownership: string
  heatingSource: string
  installationTimeline: string
  
  // Utility Providers
  electricityProvider: string
  naturalGasProvider: string
}

const initialData: SurveyData = {
  address: "",
  city: "",
  state: "",
  zipCode: "",
  lat: 0,
  lng: 0,
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  propertyType: "",
  yearBuilt: "",
  squareFootage: "",
  floorsAboveGround: "",
  bedrooms: "",
  bathrooms: "",
  hasAttic: "",
  basementType: "",
  additionalNotes: "",
  ownership: "",
  heatingSource: "",
  installationTimeline: "",
  electricityProvider: "",
  naturalGasProvider: ""
}

type Step = "address" | "contact" | "loading" | "homeDetails" | "additionalInfo" | "loadingRebates" | "utilities" | "results"

export default function ServiceQuote() {
  const [currentStep, setCurrentStep] = useState<Step>("address")
  const [surveyData, setSurveyData] = useState<SurveyData>(initialData)

  const updateData = (field: keyof SurveyData, value: string | number) => {
    setSurveyData(prev => ({ ...prev, [field]: value }))
  }

  const handleAddressChange = (address: string, components?: any) => {
    if (components) {
    setSurveyData(prev => ({
      ...prev,
        address: components.address,
        city: components.city,
        state: components.state,
        zipCode: components.zipCode,
        lat: components.lat,
        lng: components.lng
      }))
    } else {
      updateData("address", address)
    }
  }

  const handleAddressSubmit = async () => {
    // Simulate loading while we "look up" the address
    setCurrentStep("loading")
    
    // Here you can make API calls to:
    // 1. Zillow API for property data (note: Zillow API is limited, alternatives: Attom Data, CoreLogic)
    // 2. Google Maps Geocoding API for additional location data
    // 3. Any other property data services
    
    setTimeout(() => {
      // In production, you would populate property data from APIs here
      // For now, we just proceed to contact step
      setCurrentStep("contact")
    }, 2000)
  }

  const handleContactSubmit = () => {
    setCurrentStep("homeDetails")
  }

  const handleHomeDetailsSubmit = () => {
    setCurrentStep("additionalInfo")
  }

  const handleAdditionalInfoSubmit = () => {
    setCurrentStep("loadingRebates")
    setTimeout(() => {
      setCurrentStep("utilities")
    }, 2000)
  }

  const handleUtilitiesSubmit = () => {
    setCurrentStep("results")
  }

  const calculateQuote = () => {
    let basePrice = 12000
    const sqFt = parseInt(surveyData.squareFootage) || 2000
    
    // Adjust based on square footage
    if (sqFt < 1000) basePrice = 8000
    else if (sqFt < 2000) basePrice = 10000
    else if (sqFt < 3000) basePrice = 12000
    else basePrice = 15000

    // Adjust based on property type
    const propertyMultiplier = {
      "Fully Detached": 1.0,
      "Semi-Detached": 0.95,
      "Townhouse": 0.9,
      "Apartment/Condo": 0.85
    }[surveyData.propertyType] || 1.0

    const totalPrice = Math.round(basePrice * propertyMultiplier)

    return {
      totalPrice,
      estimatedSavings: Math.round(totalPrice * 0.3)
    }
  }

  // Address Step
  if (currentStep === "address") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-100 to-blue-50 dark:from-gray-900 dark:via-blue-900 dark:to-slate-800 py-12 px-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%233b82f6' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}>
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8">
            <Link href="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
            {/* Left Side - Title with Decal */}
            <div className="flex gap-4 items-center">
              {/* Decal - Progress Indicator */}
              <div className="flex flex-col gap-4 flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-white border-4 border-blue-500 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-blue-500"></div>
                </div>
                <div className="w-0.5 h-12 bg-gray-300 ml-6"></div>
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div className="w-0.5 h-12 bg-gray-300 ml-6"></div>
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div className="w-0.5 h-12 bg-gray-300 ml-6"></div>
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
                <div className="w-0.5 h-12 bg-gray-300 ml-6"></div>
                <div className="w-12 h-12 rounded-full bg-gray-200"></div>
              </div>
              
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                  Get Started
                </h1>
                <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                  Start by entering your home address and we will craft the ideal system for you to modernize your home heating and cooling. It's that easy!
                </p>
              </div>
            </div>

            {/* Right Side - Form */}
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-blue-500" />
                      <span>Find your rebates and incentives</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-blue-500" />
                      <span>See a system tailored for your home</span>
                  </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <Check className="w-5 h-5 text-blue-500" />
                      <span>Get your free, upfront price</span>
                    </div>
                  </div>

                  <div className="space-y-4 pt-6">
                    <div className="relative">
                      <AddressAutocomplete
                        value={surveyData.address}
                        onChange={handleAddressChange}
                        placeholder="Start typing your address..."
                        className="pr-16 h-14 text-lg"
                      />
                      <Button
                        onClick={handleAddressSubmit}
                        disabled={!surveyData.address}
                        className="absolute right-2 top-2 bg-blue-600 hover:bg-blue-700 text-white h-10 w-10 p-0"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Powered by Google Maps
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Contact Step
  if (currentStep === "contact") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-12 px-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Contact</h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                We'll need your contact details to generate your personalized price and make signing up easier if you decide to move forward.
              </p>
                </div>

            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <Input
                      placeholder="First Name *"
                      value={surveyData.firstName}
                      onChange={(e) => updateData("firstName", e.target.value)}
                      className="h-12"
                    />
                    <Input
                      placeholder="Last Name *"
                      value={surveyData.lastName}
                      onChange={(e) => updateData("lastName", e.target.value)}
                      className="h-12"
                    />
                  </div>
                  
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={surveyData.email}
                    onChange={(e) => updateData("email", e.target.value)}
                    className="h-12"
                  />
                  
                  <Input
                    type="tel"
                    placeholder="Phone Number (+1 (555) 555-5555) *"
                    value={surveyData.phone}
                    onChange={(e) => updateData("phone", e.target.value)}
                    className="h-12"
                  />
                  
                  <Button
                    onClick={handleContactSubmit}
                    disabled={!surveyData.firstName || !surveyData.lastName || !surveyData.email || !surveyData.phone}
                    className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg flex items-center justify-between px-6"
                  >
                    Next
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
                      </div>
                      </div>
    )
  }

  // Loading Screen
  if (currentStep === "loading" || currentStep === "loadingRebates") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-12 px-4 flex items-center justify-center"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {currentStep === "loading" ? "Remote Home Analysis" : "Extra Savings"}
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                {currentStep === "loading" 
                  ? "Let's make sure we have the right info for you. We'll use these details to ensure you get an accurate price and better estimate how much you will save."
                  : "Don't worry about applying for rebates or researching loopholes—we'll automatically search your area to see what rebates or incentives you qualify for."
                }
              </p>
                      </div>

            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col items-center justify-center space-y-6">
                  <div className="relative w-96 h-48 animate-pulse">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Valor-Heating-&-Cooling-light-bg-2-AsxljysyXM4LLJlhztJqGcSj1XWyH5.png"
                      alt="Valor Heating & Cooling"
                      fill
                      className="object-contain"
                    />
                    </div>
                  <p className="text-lg font-semibold text-gray-700">
                    {currentStep === "loading" ? "Looking up your home..." : "Crunching some numbers..."}
                  </p>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: "60%" }}></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Home Details Step
  if (currentStep === "homeDetails") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-12 px-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}>
        <div className="container mx-auto max-w-4xl">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Your Home</CardTitle>
          </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div>
                <p className="text-gray-600 mb-4">We've found the following results for your address</p>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                  <div className="w-24 h-24 bg-gray-300 rounded"></div>
                  <div>
                    <p className="font-semibold text-lg">{surveyData.address}</p>
                    <p className="text-gray-600">{surveyData.city} {surveyData.state}</p>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">You live in a... *</Label>
                <div className="grid grid-cols-2 gap-4">
                  {["Fully Detached", "Semi-Detached", "Townhouse", "Apartment/Condo"].map((type) => (
                    <Button
                      key={type}
                      variant={surveyData.propertyType === type ? "default" : "outline"}
                      onClick={() => updateData("propertyType", type)}
                      className={`h-12 ${surveyData.propertyType === type ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="yearBuilt" className="text-base font-semibold mb-2 block">What year was your home built? *</Label>
                <Input
                  id="yearBuilt"
                  type="number"
                  placeholder="e.g., 1995"
                  value={surveyData.yearBuilt}
                  onChange={(e) => updateData("yearBuilt", e.target.value)}
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="squareFootage" className="text-base font-semibold mb-2 block">What is the square footage of your home? *</Label>
                <Input
                  id="squareFootage"
                  type="number"
                  placeholder="e.g., 2000"
                  value={surveyData.squareFootage}
                  onChange={(e) => updateData("squareFootage", e.target.value)}
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="floors" className="text-base font-semibold mb-2 block">How many floors above ground? *</Label>
                <Input
                  id="floors"
                  type="number"
                  placeholder="e.g., 2"
                  value={surveyData.floorsAboveGround}
                  onChange={(e) => updateData("floorsAboveGround", e.target.value)}
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="bedrooms" className="text-base font-semibold mb-2 block">How many bedrooms?</Label>
                <Input
                  id="bedrooms"
                  type="number"
                  placeholder="e.g., 3"
                  value={surveyData.bedrooms}
                  onChange={(e) => updateData("bedrooms", e.target.value)}
                  className="h-12"
                />
              </div>

              <div>
                <Label htmlFor="bathrooms" className="text-base font-semibold mb-2 block">How many bathrooms?</Label>
                <Input
                  id="bathrooms"
                  type="number"
                  placeholder="e.g., 2"
                  value={surveyData.bathrooms}
                  onChange={(e) => updateData("bathrooms", e.target.value)}
                  className="h-12"
                />
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Do you have an attic?</Label>
                <div className="grid grid-cols-2 gap-4">
                  {["Yes", "No"].map((option) => (
                <Button 
                      key={option}
                      variant={surveyData.hasAttic === option ? "default" : "outline"}
                      onClick={() => updateData("hasAttic", option)}
                      className={`h-12 ${surveyData.hasAttic === option ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    >
                      {option}
                </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Do you have a basement or crawlspace? *</Label>
                <div className="grid grid-cols-2 gap-4">
                  {["None", "Unfinished Basement", "Finished Basement", "Crawlspace"].map((type) => (
                <Button 
                      key={type}
                      variant={surveyData.basementType === type ? "default" : "outline"}
                      onClick={() => updateData("basementType", type)}
                      className={`h-12 ${surveyData.basementType === type ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                    >
                      {type}
                </Button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="notes" className="text-base font-semibold mb-2 block">
                  Is there anything else we should know about your current home heating and cooling?
                </Label>
                <Textarea
                  id="notes"
                  placeholder="Add additional details"
                  value={surveyData.additionalNotes}
                  onChange={(e) => updateData("additionalNotes", e.target.value)}
                  rows={4}
                  className="resize-none"
                />
              </div>

              <Button
                onClick={handleHomeDetailsSubmit}
                disabled={!surveyData.propertyType || !surveyData.yearBuilt || !surveyData.squareFootage || !surveyData.floorsAboveGround || !surveyData.basementType}
                className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg flex items-center justify-between px-6"
              >
                Next
                <ArrowRight className="w-5 h-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  // Additional Home Info Step
  if (currentStep === "additionalInfo") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-12 px-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Additional Home Info</h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Let's make sure we have the right info for you. We'll use these details to ensure you get an accurate price and better estimate how much you will save.
              </p>
            </div>

            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div>
                  <Label className="text-base font-semibold mb-3 block">Do you own your home? *</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {["Own", "Rent"].map((option) => (
                      <Button
                        key={option}
                        variant={surveyData.ownership === option ? "default" : "outline"}
                        onClick={() => updateData("ownership", option)}
                        className={`h-12 ${surveyData.ownership === option ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">What is your primary heating source? *</Label>
                  <div className="space-y-3">
                    {[
                      "Gas Furnace with Forced Air",
                      "Electric Furnace with Forced Air",
                      "Heating Oil Furnace with Forced Air",
                      "Electric Baseboard",
                      "Heat Pump",
                      "Radiant In-Floor",
                      "Other"
                    ].map((source) => (
                      <Button
                        key={source}
                        variant={surveyData.heatingSource === source ? "default" : "outline"}
                        onClick={() => updateData("heatingSource", source)}
                        className={`w-full h-12 ${surveyData.heatingSource === source ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      >
                        {source}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">When would you like your installation completed? *</Label>
                  <div className="grid grid-cols-2 gap-4">
                    {["ASAP / Urgent", "This month", "This year", "Just curious"].map((timeline) => (
                      <Button
                        key={timeline}
                        variant={surveyData.installationTimeline === timeline ? "default" : "outline"}
                        onClick={() => updateData("installationTimeline", timeline)}
                        className={`h-12 ${surveyData.installationTimeline === timeline ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      >
                        {timeline}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleAdditionalInfoSubmit}
                  disabled={!surveyData.ownership || !surveyData.heatingSource || !surveyData.installationTimeline}
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg flex items-center justify-between px-6"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Utilities Step
  if (currentStep === "utilities") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-12 px-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Extra Savings</h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Don't worry about applying for rebates or researching loopholes—we'll automatically search your area to see what rebates or incentives you qualify for.
              </p>
            </div>

            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 space-y-6">
                <div>
                  <Label className="text-base font-semibold mb-3 block">Which company provides your electricity? *</Label>
                  <div className="space-y-3">
                    {[
                      "Cape Light Compact",
                      "Eversource",
                      "National Grid",
                      "Unitil",
                      "Other",
                      "I generate my own electricity"
                    ].map((provider) => (
                      <Button
                        key={provider}
                        variant={surveyData.electricityProvider === provider ? "default" : "outline"}
                        onClick={() => updateData("electricityProvider", provider)}
                        className={`w-full h-12 ${surveyData.electricityProvider === provider ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      >
                        {provider}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold mb-3 block">Which company provides your natural gas? *</Label>
                  <div className="space-y-3">
                    {[
                      "Berkshire Gas",
                      "Eversource",
                      "Liberty Utilities",
                      "National Grid",
                      "Unitil",
                      "Other",
                      "I don't have natural gas"
                    ].map((provider) => (
                      <Button
                        key={provider}
                        variant={surveyData.naturalGasProvider === provider ? "default" : "outline"}
                        onClick={() => updateData("naturalGasProvider", provider)}
                        className={`w-full h-12 ${surveyData.naturalGasProvider === provider ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                      >
                        {provider}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleUtilitiesSubmit}
                  disabled={!surveyData.electricityProvider || !surveyData.naturalGasProvider}
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg flex items-center justify-between px-6"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  // Results Page
  if (currentStep === "results") {
    const quote = calculateQuote()

  return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-12 px-4"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}>
        <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Your Quote</h1>
            <p className="text-xl text-gray-700">
              This is your personalized price that includes available rebates for even greater savings.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Profile Card */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl">Your Profile</CardTitle>
                <HomeIcon className="w-6 h-6 text-gray-600" />
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="font-bold text-lg">{surveyData.firstName} {surveyData.lastName}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Email</p>
                  <p className="text-gray-900">{surveyData.email}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="text-gray-900">{surveyData.phone}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg flex items-start gap-4">
                  <div className="w-20 h-20 bg-gray-300 rounded flex-shrink-0"></div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Installation Address</p>
                    <p className="font-semibold flex items-center gap-2">
                      <HomeIcon className="w-4 h-4" />
                      {surveyData.address}
                    </p>
                    <p className="text-gray-600">{surveyData.city}, {surveyData.state} {surveyData.zipCode}</p>
                  </div>
        </div>
              </CardContent>
            </Card>

            {/* Expert Card */}
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl">Your Valor Expert</CardTitle>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <Check className="w-5 h-5 text-white" />
              </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  You've been assigned a Valor expert who will guide you through the process.
                </p>
                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-sky-100 rounded-lg">
                  <div className="w-20 h-20 bg-gray-400 rounded-full flex-shrink-0"></div>
              <div>
                    <p className="font-bold text-lg">Valor Team</p>
                    <p className="text-gray-600">HVAC Specialist</p>
                    <p className="text-sm text-blue-600">adim@valorhvacma.com</p>
              </div>
            </div>
                <div className="mt-4 px-4 py-2 bg-yellow-50 border border-yellow-200 rounded-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-yellow-800 font-medium">Waiting for Photo Submission</span>
            </div>
              </CardContent>
            </Card>
          </div>

          {/* Price Card */}
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Total Price</h2>
                  <p className="text-gray-600">Professional installation included</p>
        </div>
                <p className="text-5xl font-bold text-blue-600">${quote.totalPrice.toLocaleString()}</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">Estimated Annual Savings</span>
                  <span className="font-semibold text-blue-600">${quote.estimatedSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">Property Type</span>
                  <span className="font-semibold">{surveyData.propertyType}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">Square Footage</span>
                  <span className="font-semibold">{surveyData.squareFootage} sq ft</span>
                  </div>
                <div className="flex justify-between items-center py-3 border-b">
                  <span className="text-gray-700">Current Heating</span>
                  <span className="font-semibold">{surveyData.heatingSource}</span>
                  </div>
              </div>

              <Button
                onClick={() => window.location.hash = "submit-photos"}
                className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold flex items-center justify-center gap-3"
              >
                Submit Photos for Final Price
                <ArrowRight className="w-6 h-6" />
              </Button>
              
              <p className="text-sm text-gray-500 text-center mt-6">
                <strong>Note:</strong> This is an estimate based on your survey responses. 
                Actual pricing may vary based on specific home conditions and equipment selection. 
                Contact Valor HVAC for a detailed, personalized quote.
              </p>
            </CardContent>
          </Card>

          {/* What Happens Next */}
          <div id="submit-photos" className="mt-8">
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">What Happens Next</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-5 rounded-lg border bg-blue-50/50">
                    <h4 className="font-semibold text-gray-900 mb-2">1) Submit Photos</h4>
                    <p className="text-gray-700 text-sm">Upload a few clear photos of your existing equipment (indoor unit/air handler, outdoor condenser/heat pump, electrical panel and thermostat). This lets us finalize your price.</p>
                  </div>
                  <div className="p-5 rounded-lg border bg-blue-50/50">
                    <h4 className="font-semibold text-gray-900 mb-2">2) Expert Review</h4>
                    <p className="text-gray-700 text-sm">A Valor technician reviews your photos and confirms sizing, scope and installation details. If anything is unclear, we’ll reach out.</p>
                  </div>
                  <div className="p-5 rounded-lg border bg-blue-50/50">
                    <h4 className="font-semibold text-gray-900 mb-2">3) Final Price & Schedule</h4>
                    <p className="text-gray-700 text-sm">We send your final, guaranteed price and lock in your installation date. Most installs are completed in a single day.</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Button
                    onClick={() => window.open(`mailto:adim@valorhvacma.com?subject=Photos for Final Price&body=${encodeURIComponent(`Please attach photos of your current system (indoor unit, outdoor unit, electrical panel, thermostat).

Quote Summary:
Name: ${surveyData.firstName} ${surveyData.lastName}
Email: ${surveyData.email}
Phone: ${surveyData.phone}
Address: ${surveyData.address}, ${surveyData.city}, ${surveyData.state} ${surveyData.zipCode}
Property Type: ${surveyData.propertyType}
Square Footage: ${surveyData.squareFootage}
Floors: ${surveyData.floorsAboveGround}
Heating Source: ${surveyData.heatingSource}
Notes: ${surveyData.additionalNotes}`)}`, '_blank')}
                    className="h-12 bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    Email Photos
                  </Button>
              <Button
                    onClick={() => window.location.href = 'tel:+15087141327'}
                    variant="outline"
                    className="h-12"
                  >
                    Prefer to Text Photos? Call Us
              </Button>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </div>
  )
  }

  return null
}
