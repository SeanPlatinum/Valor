import Image from 'next/image'

export default function HeatingRepair() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Heating Repair</h1>
      <Image
        src="/placeholder.svg?height=400&width=600"
        alt="Heating Repair"
        width={600}
        height={400}
        className="mb-4 rounded-lg"
      />
      <p className="mb-4">
        Valor provides quick and reliable heating system repairs to keep your home warm and comfortable. Our experienced technicians are equipped to handle all types of heating systems, ensuring fast and effective repairs.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Heating Repair Services:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>24/7 emergency repair service</li>
        <li>Diagnosis and repair of all heating system issues</li>
        <li>Furnace and heat pump repairs</li>
        <li>Thermostat troubleshooting and replacement</li>
        <li>Honest, upfront pricing with no hidden fees</li>
      </ul>
      <p>Don't suffer in the cold! Contact Valor for prompt and professional heating repair services.</p>
    </div>
  )
}

