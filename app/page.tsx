import Header from "./components/Header"
import ImageSlider from "./components/ImageSlider"
import Services from "./components/Services"
import Reviews from "./components/Reviews"
import OwnerBio from "./components/OwnerBio"
import Footer from "./components/Footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
      <Header />
      <main className="flex-grow">
        <div className="relative bg-gradient-to-r from-sky-100 to-sky-50 dark:from-gray-800 dark:to-gray-700">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Year-round comfort system care
            </h1>
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
              LEARN MORE
            </Button>
          </div>
        </div>
        <ImageSlider />
        <Services />
        <Reviews />
        <OwnerBio />
      </main>
      <Footer />
    </div>
  )
}
