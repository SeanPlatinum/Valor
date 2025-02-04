import Image from 'next/image'

export default function ACInstallation() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">AC Installation</h1>
      <Image
        src="/placeholder.svg?height=400&width=600"
        alt="AC Installation"
        width={600}
        height={400}
        className="mb-4 rounded-lg"
      />
      <p className="mb-4">
        At Valor, we specialize in expert installation of new air conditioning systems. Our team of certified technicians ensures that your new AC unit is installed correctly and efficiently, maximizing its performance and lifespan.
      </p>
      <h2 className="text-2xl font-semibold mb-2">Our AC Installation Process:</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Free in-home consultation and system sizing</li>
        <li>Removal of old AC unit (if applicable)</li>
        <li>Professional installation of new AC system</li>
        <li>Testing and calibration for optimal performance</li>
        <li>Detailed walkthrough of new system features</li>
      </ul>
      <p>Contact us today to schedule your AC installation consultation!</p>
    </div>
  )
}

