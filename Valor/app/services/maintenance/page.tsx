import Image from 'next/image'

export default function Maintenance() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">HVAC Maintenance</h1>
      <Image
        src="/placeholder.svg?height=400&width=600"
        alt="HVAC Maintenance"
        width={600}
        height={400}
        className="mb-4 rounded-lg"
      />
      <p className="mb-4">
        Valor provides regular maintenance services to keep your HVAC system running efficiently. Our comprehensive maintenance plans help prevent breakdowns, extend equipment life, and ensure optimal performance year-round.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our Maintenance Services Include:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Seasonal tune-ups for heating and cooling systems</li>
        <li>Filter replacement and cleaning</li>
        <li>Lubrication of moving parts</li>
        <li>Electrical connection tightening</li>
        <li>Thermostat calibration</li>
        <li>Safety and performance testing</li>
      </ul>
      <p>Invest in the longevity of your HVAC system with Valor's professional maintenance services!</p>
    </div>
  )
}

