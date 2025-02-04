import Link from "next/link"
import Image from "next/image"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "AC Installation",
    description: "Expert installation of new air conditioning systems.",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlyJTIwY29uZGl0aW9uZXJ8ZW58MHx8MHx8fDA%3D",
    link: "/services/ac-installation",
  },
  {
    title: "Heating Repair",
    description: "Quick and reliable heating system repairs.",
    image:
      "https://images.unsplash.com/photo-1621189687241-8f350ab4f4e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhdGluZyUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
    link: "/services/heating-repair",
  },
  {
    title: "Duct Cleaning",
    description: "Thorough cleaning of your HVAC ductwork.",
    image:
      "https://images.unsplash.com/photo-1635424710928-0544e8512eae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZHVjdCUyMGNsZWFuaW5nfGVufDB8fDB8fHww",
    link: "/services/duct-cleaning",
  },
  {
    title: "Maintenance",
    description: "Regular maintenance to keep your HVAC system running efficiently.",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHZhYyUyMG1haW50ZW5hbmNlfGVufDB8fDB8fHww",
    link: "/services/maintenance",
  },
]

export default function Services() {
  return (
    <section id="services" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Link href={service.link} key={index}>
            <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800">
              <CardHeader className="p-0">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="mb-2 text-gray-900 dark:text-white">{service.title}</CardTitle>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

