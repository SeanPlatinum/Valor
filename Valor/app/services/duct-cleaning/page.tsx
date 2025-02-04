import Image from 'next/image'

export default function DuctCleaning() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Duct Cleaning</h1>
      <Image
        src="/placeholder.svg?height=400&width=600"
        alt="Duct Cleaning"
        width={600}
        height={400}
        className="mb-4 rounded-lg"
      />
      <p className="mb-4">
        Valor offers thorough cleaning of your HVAC ductwork to improve indoor air quality and system efficiency. Our professional duct cleaning services remove dust, allergens, and other contaminants from your air ducts.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Benefits of Our Duct Cleaning Service:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Improved indoor air quality</li>
        <li>Reduced allergens and irritants</li>
        <li>Enhanced HVAC system efficiency</li>
        <li>Potential energy savings</li>
        <li>Extended lifespan of your HVAC equipment</li>
      </ul>
      <p>Breathe easier with clean ducts! Schedule your duct cleaning service with Valor today.</p>
    </div>
  )
}

