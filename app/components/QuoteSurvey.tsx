"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Check, Home as HomeIcon } from "lucide-react"
import AddressAutocomplete from "./AddressAutocomplete"

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

export default function QuoteSurvey() {
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
    setCurrentStep("loading")
    setTimeout(() => {
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
    
    if (sqFt < 1000) basePrice = 8000
    else if (sqFt < 2000) basePrice = 10000
    else if (sqFt < 3000) basePrice = 12000
    else basePrice = 15000
    
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
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Started</h2>
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
                <AddressAutocomplete
                  value={surveyData.address}
                  onChange={handleAddressChange}
                  placeholder="Start typing your address..."
                  className="h-14 text-lg"
                />
                <Button
                  onClick={handleAddressSubmit}
                  disabled={!surveyData.address}
                  className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white text-lg"
                >
                  Continue
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Contact Step
  if (currentStep === "contact") {
    return (
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl">Contact Information</CardTitle>
          </CardHeader>
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
                placeholder="Phone Number *"
                value={surveyData.phone}
                onChange={(e) => updateData("phone", e.target.value)}
                className="h-12"
              />
              
              <Button
                onClick={handleContactSubmit}
                disabled={!surveyData.firstName || !surveyData.lastName || !surveyData.email || !surveyData.phone}
                className="w-full h-14 bg-green-500 hover:bg-green-600 text-white text-lg"
              >
                Next
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Loading Screen
  if (currentStep === "loading" || currentStep === "loadingRebates") {
    return (
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardContent className="p-12">
            <div className="flex flex-col items-center justify-center space-y-6">
              <HomeIcon className="w-24 h-24 text-blue-500 animate-pulse" />
              <p className="text-2xl font-semibold text-gray-700 text-center">
                {currentStep === "loading" ? "Looking up your home..." : "Crunching some numbers..."}
              </p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full animate-pulse" style={{ width: "60%" }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Home Details Step
  if (currentStep === "homeDetails") {
    return (
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
            <CardTitle className="text-2xl">Your Home</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
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
              <Label htmlFor="yearBuilt" className="text-base font-semibold mb-2 block">Year built *</Label>
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
              <Label htmlFor="squareFootage" className="text-base font-semibold mb-2 block">Square footage *</Label>
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
              <Label htmlFor="floors" className="text-base font-semibold mb-2 block">Floors above ground *</Label>
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
              <Label htmlFor="bedrooms" className="text-base font-semibold mb-2 block">Bedrooms</Label>
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
              <Label htmlFor="bathrooms" className="text-base font-semibold mb-2 block">Bathrooms</Label>
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
              <Label className="text-base font-semibold mb-3 block">Attic?</Label>
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
              <Label className="text-base font-semibold mb-3 block">Basement or crawlspace? *</Label>
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
              <Label htmlFor="notes" className="text-base font-semibold mb-2 block">Additional notes</Label>
              <Textarea
                id="notes"
                placeholder="Add additional details"
                value={surveyData.additionalNotes}
                onChange={(e) => updateData("additionalNotes", e.target.value)}
                rows={4}
              />
            </div>

            <Button
              onClick={handleHomeDetailsSubmit}
              disabled={!surveyData.propertyType || !surveyData.yearBuilt || !surveyData.squareFootage || !surveyData.floorsAboveGround || !surveyData.basementType}
              className="w-full h-14 bg-green-500 hover:bg-green-600 text-white text-lg"
            >
              Next
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Additional Home Info Step
  if (currentStep === "additionalInfo") {
    return (
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl">Additional Home Info</CardTitle>
          </CardHeader>
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
              <Label className="text-base font-semibold mb-3 block">Primary heating source? *</Label>
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
              <Label className="text-base font-semibold mb-3 block">Installation timeline? *</Label>
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
              className="w-full h-14 bg-green-500 hover:bg-green-600 text-white text-lg"
            >
              Next
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Utilities Step
  if (currentStep === "utilities") {
    return (
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-3xl">Utility Providers</CardTitle>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            <div>
              <Label className="text-base font-semibold mb-3 block">Electricity provider? *</Label>
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
              <Label className="text-base font-semibold mb-3 block">Natural gas provider? *</Label>
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
              className="w-full h-14 bg-green-500 hover:bg-green-600 text-white text-lg"
            >
              See My Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Results Page
  if (currentStep === "results") {
    const quote = calculateQuote()
    
    return (
      <div className="container mx-auto max-w-6xl py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Your Quote</h1>
          <p className="text-xl text-gray-700">
            This is your personalized price for a complete heat pump installation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Profile Card */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Your Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-bold text-lg">{surveyData.firstName} {surveyData.lastName}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p>{surveyData.email}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p>{surveyData.phone}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Installation Address</p>
                <p className="font-semibold">{surveyData.address}</p>
              </div>
            </CardContent>
          </Card>

          {/* Expert Card */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Your Valor Expert</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6">
                You've been assigned a Valor expert who will guide you through the process.
              </p>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-sky-100 rounded-lg">
                <p className="font-bold text-lg">Valor Team</p>
                <p className="text-gray-600">HVAC Specialist</p>
                <p className="text-sm text-blue-600">adim@valorhvacma.com</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Price Card */}
        <Card className="shadow-2xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Total Price</h2>
                <p className="text-gray-600">Professional installation included</p>
              </div>
              <p className="text-5xl font-bold text-green-600">${quote.totalPrice.toLocaleString()}</p>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between py-3 border-b">
                <span>Estimated Annual Savings</span>
                <span className="font-semibold text-blue-600">${quote.estimatedSavings.toLocaleString()}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span>Property Type</span>
                <span className="font-semibold">{surveyData.propertyType}</span>
              </div>
              <div className="flex justify-between py-3 border-b">
                <span>Square Footage</span>
                <span className="font-semibold">{surveyData.squareFootage} sq ft</span>
              </div>
            </div>

            <Button
              onClick={() => window.location.hash = "submit-photos"}
              className="w-full h-16 bg-blue-600 hover:bg-blue-700 text-white text-xl"
            >
              Submit Photos for Final Price
            </Button>
          </CardContent>
        </Card>

        {/* What Happens Next */}
        <div id="submit-photos" className="mt-8">
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>What Happens Next</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-5 rounded-lg border bg-blue-50/50">
                  <h4 className="font-semibold text-gray-900 mb-2">1) Submit Photos</h4>
                  <p className="text-gray-700 text-sm">Upload photos of your existing indoor unit, outdoor unit, electrical panel, and thermostat so we can finalize your price.</p>
                </div>
                <div className="p-5 rounded-lg border bg-blue-50/50">
                  <h4 className="font-semibold text-gray-900 mb-2">2) Expert Review</h4>
                  <p className="text-gray-700 text-sm">Our team reviews to confirm scope, sizing, and installation details. We’ll reach out if anything else is needed.</p>
                </div>
                <div className="p-5 rounded-lg border bg-blue-50/50">
                  <h4 className="font-semibold text-gray-900 mb-2">3) Final Price & Schedule</h4>
                  <p className="text-gray-700 text-sm">You’ll receive your final, guaranteed price and we’ll schedule your installation—typically completed in one day.</p>
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
    )
  }

  return null
}
