import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-100 dark:bg-gray-800 mt-16 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <div className="relative w-48 h-16 mb-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Valor-Heating-&-Cooling-dark-bg-2-czmLrRjGnr2pp2JxHO1w9X61mnwyar.png"
                alt="Valor Heating & Cooling"
                fill
                className="object-contain"
              />
            </div>
            <div className="space-y-2">
              <Link
                href="https://www.google.com/maps/place/187+Main+St,+Cherry+Valley,+MA+01611"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <MapPin className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                <span className="break-words">187 Main Street Cherry Valley</span>
              </Link>
              <Link
                href="tel:+15087141327"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Phone className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                <span>(508) 714-1327</span>
              </Link>
              <Link
                href="mailto:amdin@valorhvacma.com"
                className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0" />
                <span className="break-all">amdin@valorhvacma.com</span>
              </Link>
            </div>
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Hours</h4>
              <p className="text-gray-600 dark:text-gray-300">Available 24/7</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Location</h3>
            <div className="w-full h-[300px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.6727324721766!2d-71.9526492!3d42.2391283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4068e4864bb71%3A0x3dd1e76d5b6695f3!2s187%20Main%20St%2C%20Cherry%20Valley%2C%20MA%2001611!5e0!3m2!1sen!2sus!4v1707089548973!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Valor HVAC Location"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            &copy; {new Date().getFullYear()} Valor HVAC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

