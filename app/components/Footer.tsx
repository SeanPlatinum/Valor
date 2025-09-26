import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 dark:from-gray-900 dark:via-blue-800 dark:to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="relative w-56 h-20">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Valor-Heating-&-Cooling-dark-bg-2-czmLrRjGnr2pp2JxHO1w9X61mnwyar.png"
                alt="Valor Heating & Cooling"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-blue-200 text-lg leading-relaxed">
              Your trusted partner for energy-efficient heating and cooling solutions. 
              Disabled Veteran-owned with 40+ years of experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-blue-800/30 rounded-lg hover:bg-blue-800/50 transition-all duration-200">
                <div className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-blue-900" />
                </div>
                <div>
                  <p className="font-semibold text-white">Address</p>
                  <Link
                    href="https://www.google.com/maps/place/187+Main+St,+Cherry+Valley,+MA+01611"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-yellow-300 transition-colors"
                  >
                    187 Main Street Cherry Valley, MA 01611
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-blue-800/30 rounded-lg hover:bg-blue-800/50 transition-all duration-200">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                  <Phone className="h-5 w-5 text-blue-900" />
                </div>
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <Link
                    href="tel:+15087141327"
                    className="text-blue-200 hover:text-yellow-300 transition-colors text-lg font-mono"
                  >
                    (508) 714-1327
                  </Link>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-3 bg-blue-800/30 rounded-lg hover:bg-blue-800/50 transition-all duration-200">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Mail className="h-5 w-5 text-blue-900" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <Link
                    href="mailto:amdin@valorhvacma.com"
                    className="text-blue-200 hover:text-yellow-300 transition-colors break-all"
                  >
                    amdin@valorhvacma.com
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Our Services</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-blue-200 text-lg">Heat Pump Installation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-200 text-lg">Commercial HVAC</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-200 text-lg">Maintenance & Repair</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-200 text-lg">Mass Save® Rebates</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-blue-200 text-lg">Free Energy Assessments</span>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-lg border border-yellow-400/30">
              <h4 className="font-bold text-yellow-300 mb-2">24/7 Emergency Service</h4>
              <p className="text-blue-200 text-sm">Available around the clock for urgent HVAC needs</p>
            </div>
          </div>

          {/* Map */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6">Visit Our Location</h3>
            <div className="w-full h-80 rounded-xl overflow-hidden shadow-2xl border-2 border-blue-400/30">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2947.6727324721766!2d-71.9526492!3d42.2391283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e4068e4864bb71%3A0x3dd1e76d5b6695f3!2s187%20Main%20St%2C%20Cherry%20Valley%2C%20MA%2001611!5e0!3m2!1sen!2sus!4v1707089548973!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Valor HVAC Location"
                className="rounded-xl"
              ></iframe>
            </div>
            <div className="text-center">
              <p className="text-blue-200 text-sm">
                Located in Cherry Valley, MA<br />
                Serving all of Massachusetts
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-blue-400/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-200 text-center md:text-left">
              &copy; {new Date().getFullYear()} Valor HVAC. All rights reserved. | Disabled Veteran Owned & Operated
            </p>
            <div className="flex items-center gap-4 text-blue-200">
              <span className="text-sm">#1 Rated in Massachusetts</span>
              <span className="text-sm">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

