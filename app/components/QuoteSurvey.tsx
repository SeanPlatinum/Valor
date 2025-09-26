"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, Calculator, Home, Thermometer, Calendar } from "lucide-react"

interface SurveyData {
  currentHeatingSystem: string
  systemAge: string
  hasAC: string
  propertyType: string
  homeFloors: string
  homeSize: string
  annualEnergyBill: string
  challengingSeason: string
  improvementTimeline: string
  importantFactors: string[]
  householdIncome: string
}

const initialData: SurveyData = {
  currentHeatingSystem: "",
  systemAge: "",
  hasAC: "",
  propertyType: "",
  homeFloors: "",
  homeSize: "",
  annualEnergyBill: "",
  challengingSeason: "",
  improvementTimeline: "",
  importantFactors: [],
  householdIncome: ""
}

const questions = [
  {
    id: "currentHeatingSystem",
    title: "What is your current heating system?",
    type: "radio",
    options: [
      "Electric baseboards",
      "Natural gas",
      "Oil furnace", 
      "Propane"
    ],
    icon: <Thermometer className="w-5 h-5" />
  },
  {
    id: "systemAge",
    title: "How old is your current heating system?",
    type: "radio",
    options: [
      "Less than 5 years",
      "5-10 years",
      "10-15 years",
      "Over 15 years",
      "Not sure"
    ],
    icon: <Calendar className="w-5 h-5" />
  },
  {
    id: "hasAC",
    title: "Do you currently have air conditioning?",
    type: "radio",
    options: [
      "No AC",
      "Window units",
      "Ductless/wall units",
      "Central AC"
    ],
    icon: <Thermometer className="w-5 h-5" />
  },
  {
    id: "propertyType",
    title: "What type of property do you have?",
    type: "radio",
    options: [
      "Single family home",
      "Duplex",
      "Townhouse",
      "Condo",
      "Other"
    ],
    icon: <Home className="w-5 h-5" />
  },
  {
    id: "homeFloors",
    title: "How many floors does your home have?",
    type: "radio",
    options: [
      "Single story",
      "Two stories",
      "Three or more stories",
      "Split level"
    ],
    icon: <Home className="w-5 h-5" />
  },
  {
    id: "homeSize",
    title: "Approximately how large is your home?",
    type: "radio",
    options: [
      "Under 1000 sq/ft",
      "1000-2000 sq ft",
      "2000-3000 sq ft",
      "Over 3000 sq ft"
    ],
    icon: <Home className="w-5 h-5" />
  },
  {
    id: "annualEnergyBill",
    title: "What is your approximate annual energy bill?",
    type: "radio",
    options: [
      "Under $1500",
      "$1500-2500",
      "$2500-3500",
      "Over $3500"
    ],
    icon: <Calculator className="w-5 h-5" />
  },
  {
    id: "challengingSeason",
    title: "Which season is most challenging for your energy bills?",
    type: "radio",
    options: [
      "Not sure",
      "Winter heating",
      "Summer cooling",
      "Both equally"
    ],
    icon: <Thermometer className="w-5 h-5" />
  },
  {
    id: "improvementTimeline",
    title: "When are you planning to make improvements?",
    type: "radio",
    options: [
      "Within 3 months",
      "3-6 months",
      "6+ months",
      "Just researching"
    ],
    icon: <Calendar className="w-5 h-5" />
  },
  {
    id: "importantFactors",
    title: "What's most important to you in choosing a new system? (Select all that apply)",
    type: "checkbox",
    options: [
      "Upfront cost",
      "Monthly savings",
      "Comfort improvement",
      "Environmental impact"
    ],
    icon: <Calculator className="w-5 h-5" />
  },
  {
    id: "householdIncome",
    title: "What is your approximate household income?",
    type: "radio",
    options: [
      "Equal or below $94,608",
      "$94,609-$126,144",
      "Above $126,144"
    ],
    icon: <Calculator className="w-5 h-5" />
  }
]

export default function QuoteSurvey() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [surveyData, setSurveyData] = useState<SurveyData>(initialData)
  const [showResults, setShowResults] = useState(false)

  const progress = ((currentQuestion + 1) / questions.length) * 100

  const handleRadioChange = (value: string) => {
    const questionId = questions[currentQuestion].id as keyof SurveyData
    setSurveyData(prev => ({
      ...prev,
      [questionId]: value
    }))
  }

  const handleCheckboxChange = (value: string, checked: boolean) => {
    setSurveyData(prev => ({
      ...prev,
      importantFactors: checked 
        ? [...prev.importantFactors, value]
        : prev.importantFactors.filter(factor => factor !== value)
    }))
  }

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const canProceed = () => {
    const question = questions[currentQuestion]
    if (question.type === "radio") {
      return surveyData[question.id as keyof SurveyData] !== ""
    } else {
      return (surveyData[question.id as keyof SurveyData] as string[]).length > 0
    }
  }

  const calculateQuote = () => {
    let basePrice = 8000 // Base price for heat pump system
    
    // Adjust based on home size
    const sizeMultiplier = {
      "Under 1000 sq/ft": 0.7,
      "1000-2000 sq ft": 1.0,
      "2000-3000 sq ft": 1.3,
      "Over 3000 sq ft": 1.6
    }[surveyData.homeSize] || 1.0

    // Adjust based on property type
    const propertyMultiplier = {
      "Single family home": 1.0,
      "Duplex": 1.2,
      "Townhouse": 0.9,
      "Condo": 0.8,
      "Other": 1.0
    }[surveyData.propertyType] || 1.0

    // Adjust based on floors
    const floorMultiplier = {
      "Single story": 0.9,
      "Two stories": 1.0,
      "Three or more stories": 1.2,
      "Split level": 1.1
    }[surveyData.homeFloors] || 1.0

    // Estimate rebates based on income
    let rebateAmount = 0
    if (surveyData.householdIncome === "Equal or below $94,608") {
      rebateAmount = 16000 // Maximum rebate for lower income
    } else if (surveyData.householdIncome === "$94,609-$126,144") {
      rebateAmount = 12000 // Medium rebate
    } else {
      rebateAmount = 8000 // Standard rebate
    }

    const totalPrice = Math.round(basePrice * sizeMultiplier * propertyMultiplier * floorMultiplier)
    const finalPrice = Math.max(0, totalPrice - rebateAmount)

    return {
      basePrice,
      totalPrice,
      rebateAmount,
      finalPrice,
      estimatedSavings: Math.round(totalPrice * 0.3), // 30% energy savings estimate
      paybackPeriod: Math.round(finalPrice / (totalPrice * 0.3 / 12)) // months
    }
  }

  if (showResults) {
    const quote = calculateQuote()
    
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="shadow-lg">
          <CardHeader className="text-center bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-t-lg">
            <CardTitle className="text-2xl flex items-center justify-center gap-2">
              <Calculator className="w-6 h-6" />
              Your Personalized HVAC Quote
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Estimated Total Cost</h3>
                  <div className="text-3xl font-bold text-green-600">
                    ${quote.totalPrice.toLocaleString()}
                  </div>
                  <p className="text-sm text-green-700 mt-1">Before rebates and incentives</p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Mass Save® Rebates</h3>
                  <div className="text-2xl font-bold text-blue-600">
                    -${quote.rebateAmount.toLocaleString()}
                  </div>
                  <p className="text-sm text-blue-700 mt-1">Based on your income level</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">Your Out-of-Pocket Cost</h3>
                  <div className="text-3xl font-bold text-yellow-600">
                    ${quote.finalPrice.toLocaleString()}
                  </div>
                  <p className="text-sm text-yellow-700 mt-1">With Mass Save® 0% financing available</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Expected Benefits</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Annual Energy Savings:</span>
                      <span className="font-semibold">~${quote.estimatedSavings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Payback Period:</span>
                      <span className="font-semibold">~{quote.paybackPeriod} months</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Equipment Warranty:</span>
                      <span className="font-semibold">10-12 years</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Next Steps</h3>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Schedule a free home energy assessment</li>
                    <li>• Receive detailed Manual J load calculations</li>
                    <li>• Get exact pricing for your specific home</li>
                    <li>• Learn about available financing options</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button 
                onClick={() => window.location.href = "tel:+1234567890"}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg mr-4"
              >
                Call Now for Free Assessment
              </Button>
              <Button 
                onClick={() => {
                  setShowResults(false)
                  setCurrentQuestion(0)
                  setSurveyData(initialData)
                }}
                variant="outline"
                className="px-8 py-3 text-lg"
              >
                Start New Quote
              </Button>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800 text-center">
                <strong>Disclaimer:</strong> This is an estimate based on your survey responses. 
                Actual pricing may vary based on specific home conditions, equipment selection, 
                and current rebate programs. Contact Valor HVAC for a detailed, personalized quote.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentQ = questions[currentQuestion]

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold text-blue-900 dark:text-blue-100">
            Get Your HVAC Quote
          </h1>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Question {currentQuestion + 1} of {questions.length}
          </span>
        </div>
        <Progress value={progress} className="h-2" />
      </div>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            {currentQ.icon}
            {currentQ.title}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {currentQ.type === "radio" ? (
            <RadioGroup
              value={surveyData[currentQ.id as keyof SurveyData] as string}
              onValueChange={handleRadioChange}
              className="space-y-4"
            >
              {currentQ.options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="text-base cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          ) : (
            <div className="space-y-4">
              {currentQ.options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <Checkbox
                    id={option}
                    checked={(surveyData[currentQ.id as keyof SurveyData] as string[]).includes(option)}
                    onCheckedChange={(checked) => handleCheckboxChange(option, checked as boolean)}
                  />
                  <Label htmlFor={option} className="text-base cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-between pt-6">
            <Button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
            
            <Button
              onClick={nextQuestion}
              disabled={!canProceed()}
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
            >
              {currentQuestion === questions.length - 1 ? (
                <>
                  <Calculator className="w-4 h-4" />
                  Get Quote
                </>
              ) : (
                <>
                  Next
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>Your information is secure and will only be used to provide you with an accurate quote.</p>
      </div>
    </div>
  )
}
