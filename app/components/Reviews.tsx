"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Star } from "lucide-react"

// Hardcoded reviews
const reviews = [
  {
    author_name: "Adriana Coello",
    rating: 5,
    text: "I recently had mini splits added to my third floor apartment and the whole process was super smooth. Huge shoutout to Ethan, he was awesome! Super friendly, knowledgeable, and made everything easy from start to finish. I'll definitely be using Valor Heating & Cooling again for my other units. Really appreciated how on top of everything he was. If you're thinking about HVAC work, definitely give him a call.",
    time: Date.now() / 1000 - 86400 * 7, // 1 week ago
    review_count: 1,
  },
  {
    author_name: "Mark M",
    rating: 5,
    text: "I recently had an exceptional experience with Valor, and I want to give a special shoutout to the big E! From the moment he arrived, he was professional and extremely knowledgeable. He quickly diagnosed the issue with my HVAC system and fixed it efficiently. What impressed me most was his clear communication throughout the process. Highly recommend Valor for their expertise and customer service!",
    time: Date.now() / 1000 - 86400 * 14, // 2 weeks ago
    review_count: 5,
  },
  {
    author_name: "Eamon Donovan",
    rating: 5,
    text: "Let me tell you these guys are 10/10 I gave them a call at 10:30 last night because I had no heat and I was afraid my pipes were going to freeze they were at my door steps within 30 minutes. These guys were very knowledgeable and knew exactly what they were doing. I highly recommend them to anyone looking for HVAC services!",
    time: Date.now() / 1000 - 86400 * 14, // 2 weeks ago
    review_count: 2,
  },
  {
    author_name: "Will Rosinski",
    rating: 5,
    text: "Great service and communication! My mini split wasn't working and another company said I needed to replace it. I reached out to Valor Heating & Cooling, they came out and resolved all of my issues within the hour. Highly recommended!",
    time: Date.now() / 1000 - 86400 * 14, // 2 weeks ago
    review_count: 5,
    owner_response:
      "Thank you for the 5-star review, Will! We really appreciate your kind words. We're glad we could get everything up and running without trying to push a new unit on you. At Valor, we believe in doing what's right for the customer, and sometimes that just means a good repair instead of a replacement. If you ever need anything, we've got your back!",
  },
  {
    author_name: "Sue Rice-meyers",
    rating: 5,
    text: "Very professional.very knowledgeable.very pleasant.told me what they were doing . explained everything to me on how to work with the controls. answered all my questions. I highly recommend them.",
    time: Date.now() / 1000 - 86400 * 7, // 1 week ago
    review_count: 1,
  },
  {
    author_name: "Edward R",
    rating: 5,
    text: "Straight shooters and exceptional work for installation of a new 48K heat pump HVAC system to replace the old system on my main floor. Timely, knowledgeable, and a very clean and well organized installation for a very fair, no surprises price. 5 stars and highly recommended.",
    time: Date.now() / 1000 - 86400 * 1, // 1 day ago
    review_count: 2,
  },
]

export default function Reviews() {
  // Format the timestamp to a readable date
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp * 1000)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-16 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">What Our Customers Say</h2>
        <Carousel className="w-full max-w-xl mx-auto">
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <Card className="dark:bg-gray-700">
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="flex items-center mb-4">
                      <div>
                        <div className="flex items-center">
                          <p className="font-semibold text-gray-900 dark:text-white">{review.author_name}</p>
                          {review.review_count > 0 && (
                            <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                              {review.review_count} {review.review_count === 1 ? "review" : "reviews"}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{formatDate(review.time)}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-center mb-4 italic text-gray-600 dark:text-gray-300">"{review.text}"</p>

                    {review.owner_response && (
                      <div className="mt-4 bg-gray-100 dark:bg-gray-600 p-4 rounded-lg w-full">
                        <p className="font-semibold text-sm text-gray-700 dark:text-gray-300">
                          Valor Heating & Cooling (Owner)
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{review.owner_response}</p>
                      </div>
                    )}
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
