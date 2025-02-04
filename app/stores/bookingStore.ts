import { create } from "zustand"

type TimeSlot = {
  time: string
  available: boolean
}

type Service = {
  id: string
  name: string
  duration: number
  description: string
}

type BookingStore = {
  selectedDate: Date | undefined
  selectedTime: string | undefined
  selectedService: string | undefined
  availableTimeSlots: TimeSlot[]
  setSelectedDate: (date: Date | undefined) => void
  setSelectedTime: (time: string | undefined) => void
  setSelectedService: (serviceId: string | undefined) => void
}

// Mock available time slots
const generateTimeSlots = () => {
  const slots: TimeSlot[] = []
  for (let hour = 8; hour < 18; hour++) {
    const time = `${hour.toString().padStart(2, "0")}:00`
    slots.push({ time, available: Math.random() > 0.3 })
    slots.push({ time: `${hour.toString().padStart(2, "0")}:30`, available: Math.random() > 0.3 })
  }
  return slots
}

export const services: Service[] = [
  {
    id: "ac-installation",
    name: "AC Installation",
    duration: 240,
    description: "Professional installation of new air conditioning systems",
  },
  {
    id: "heating-repair",
    name: "Heating Repair",
    duration: 120,
    description: "Expert heating system repair service",
  },
  {
    id: "maintenance",
    name: "Regular Maintenance",
    duration: 60,
    description: "Routine HVAC system maintenance and inspection",
  },
  {
    id: "duct-cleaning",
    name: "Duct Cleaning",
    duration: 180,
    description: "Professional air duct cleaning service",
  },
  {
    id: "general-inquiry",
    name: "General Inquiry",
    duration: 30,
    description: "General consultation about HVAC services",
  },
]

export const useBookingStore = create<BookingStore>((set) => ({
  selectedDate: undefined,
  selectedTime: undefined,
  selectedService: undefined,
  availableTimeSlots: generateTimeSlots(),
  setSelectedDate: (date) => set({ selectedDate: date, selectedTime: undefined }),
  setSelectedTime: (time) => set({ selectedTime: time }),
  setSelectedService: (serviceId) => set({ selectedService: serviceId }),
}))

