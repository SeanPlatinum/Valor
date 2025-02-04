"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import useEmblaCarousel from "embla-carousel-react"

const images = [
  {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHZhYyUyMG1haW50ZW5hbmNlfGVufDB8fDB8fHww",
    alt: "HVAC Maintenance",
  },
  {
    src: "https://images.unsplash.com/photo-1621189687241-8f350ab4f4e3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhdGluZyUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
    alt: "Heating System",
  },
  {
    src: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwY29uZGl0aW9uZXJ8ZW58MHx8MHx8fDA%3D",
    alt: "Air Conditioning",
  },
  {
    src: "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVjdCUyMGNsZWFuaW5nfGVufDB8fDB8fHww",
    alt: "Duct Cleaning",
  },
]

export default function ImageSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const autoPlayInterval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(autoPlayInterval)
  }, [emblaApi])

  return (
    <div className="container mx-auto px-4 py-8 hidden md:block">
      <Carousel className="w-full max-w-4xl mx-auto">
        <CarouselContent ref={emblaRef}>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-0">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={800}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious onClick={scrollPrev} />
        <CarouselNext onClick={scrollNext} />
      </Carousel>
    </div>
  )
}

