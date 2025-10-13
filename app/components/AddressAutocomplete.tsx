"use client"

import { useEffect, useRef, useState } from "react"
import { Input } from "@/components/ui/input"

interface AddressComponents {
  address: string
  city: string
  state: string
  zipCode: string
  lat: number
  lng: number
}

interface AddressAutocompleteProps {
  value: string
  onChange: (address: string, components?: AddressComponents) => void
  placeholder?: string
  className?: string
  disabled?: boolean
}

export default function AddressAutocomplete({
  value,
  onChange,
  placeholder = "Enter your address",
  className = "",
  disabled = false
}: AddressAutocompleteProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [autocompleteWidget, setAutocompleteWidget] = useState<any>(null)

  useEffect(() => {
    const loadLegacyPlacesLibrary = () => {
      if (typeof window === "undefined") return

      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
      if (!apiKey) {
        console.error("Google Maps API key is not configured")
        setIsLoaded(false)
        return
      }

      const existingScript = document.querySelector<HTMLScriptElement>("script[data-google-maps]")
      if (existingScript) {
        if ((window as any).google?.maps?.places) {
          setIsLoaded(true)
        }
        return
      }

      const script = document.createElement("script")
      // Legacy Places library per Google docs: add libraries=places
      // https://developers.google.com/maps/documentation/javascript/legacy/place-autocomplete
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
      script.async = true
      script.defer = true
      script.setAttribute("data-google-maps", "true")
      script.onload = () => {
        if ((window as any).google?.maps?.places) {
          setIsLoaded(true)
        } else {
          console.error("Google Maps Places library failed to initialize")
        }
      }
      script.onerror = () => {
        console.error("Failed to load Google Maps script")
        setIsLoaded(false)
      }
      document.head.appendChild(script)
    }

    loadLegacyPlacesLibrary()
  }, [])

  useEffect(() => {
    if (isLoaded && inputRef.current && !autocompleteWidget) {
      try {
        // Use new Places Autocomplete API (constructor available after importLibrary)
        const autocomplete = new (window as any).google.maps.places.Autocomplete(inputRef.current, {
          componentRestrictions: { country: "us" },
          fields: ["address_components", "formatted_address", "geometry"],
          types: ["address"]
        })
        console.debug("Autocomplete initialized")

        // Add place changed listener
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace()
          console.debug("Place changed", place)
          
          if (place && place.address_components) {
            const components: AddressComponents = {
              address: "",
              city: "",
              state: "",
              zipCode: "",
              lat: place.geometry?.location?.lat() || 0,
              lng: place.geometry?.location?.lng() || 0
            }

            // Extract address components
            let streetNumber = ""
            let route = ""

            place.address_components.forEach((component: any) => {
              const types = component.types
              
              if (types.includes("street_number")) {
                streetNumber = component.long_name
              }
              if (types.includes("route")) {
                route = component.long_name
              }
              if (types.includes("locality")) {
                components.city = component.long_name
              }
              if (types.includes("administrative_area_level_1")) {
                components.state = component.short_name
              }
              if (types.includes("postal_code")) {
                components.zipCode = component.long_name
              }
            })

            components.address = `${streetNumber} ${route}`.trim()

            // Call onChange with both formatted address and components
            onChange(place.formatted_address || "", components)
          }
        })

        setAutocompleteWidget(autocomplete)
      } catch (error) {
        console.error("Error initializing autocomplete:", error)
      }
    }
  }, [isLoaded, autocompleteWidget, onChange])

  return (
    <Input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      autoComplete="off"
    />
  )
}

