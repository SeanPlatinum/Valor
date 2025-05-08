import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function OwnerBio() {
  return (
    <section className="container mx-auto px-4 py-16">
      <Card className="overflow-hidden">
        <CardHeader className="bg-blue-600 text-white p-6">
          <CardTitle className="text-2xl md:text-3xl font-bold">Meet Our Owner</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-64 h-80 overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/unnamed%20%281%29.jpg-N6zSCGSKdzAqmOVkv0qIQVqe2GMZmP.jpeg"
                  alt="Jeffrey Tedford in military uniform"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 300px"
                />
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-4">Jeffrey Tedford</h3>
              <h4 className="text-lg text-gray-600 dark:text-gray-300 mb-4">President, Valor Heating & Cooling</h4>
              <div className="space-y-4 text-gray-700 dark:text-gray-200">
                <p>
                  Hi, I'm Jeffrey Tedford, and I serve as the President of Valor Heating & Cooling. My career has been
                  dedicated to service, first in the military and now in the HVAC industry. I spent 11 years in the U.S.
                  Army as a Military Police Officer, with deployments to Afghanistan and Iraq. These experiences
                  instilled in me a strong sense of discipline, leadership, and commitment that I bring to every aspect
                  of my work.
                </p>
                <p>
                  At Valor Heating & Cooling, I lead our team with a focus on delivering innovative, energy-efficient
                  HVAC solutions to our community across Massachusetts. My military background and passion for service
                  drive me to support not only our customers but also fellow veterans through our initiatives as a
                  service-disabled veteran-owned small business (SDVOSB).
                </p>
                <p>
                  On the personal side, I am happily married and a proud father of three. My family is my foundation,
                  and their support inspires me to continuously strive for excellence in both my professional and
                  personal life.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
