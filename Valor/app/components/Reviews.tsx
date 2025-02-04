'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Star } from 'lucide-react'

// Mock data for reviews
const reviews = [
  {
    id: 1,
    name: "John Doe",
    review: "Valor HVAC provided excellent service! They were prompt, professional, and solved our heating issues quickly.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "I'm very impressed with the quality of work from Valor HVAC. They installed a new AC system and it works perfectly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mike Johnson",
    review: "The team at Valor HVAC is knowledgeable and courteous. They explained everything clearly and did a great job with our HVAC maintenance.",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Brown",
    review: "I highly recommend Valor HVAC. They were able to diagnose and fix our heating problem quickly, even during a holiday weekend.",
    rating: 5,
  },
]

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % reviews.length)
    }, 5000) // Change review every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">What Our Customers Say</h2>
        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={review.id}>
                <Card className="dark:bg-gray-700">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-center mb-4 italic text-gray-600 dark:text-gray-300">"{review.review}"</p>
                    <p className="font-semibold text-gray-900 dark:text-white">{review.name}</p>
                  </CardContent>
                </Card>
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

