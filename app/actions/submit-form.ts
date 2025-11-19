"use server"

export async function submitForm(formData: FormData) {
  try {
    const data = {
      to: "admin@valorhvacma.com",
      subject: "New Booking Request",
      text: `
        Name: ${formData.get("name")}
        Email: ${formData.get("email")}
        Phone: ${formData.get("phone")}
        Service: ${formData.get("service")}
        Date: ${formData.get("date")}
        Time: ${formData.get("time")}
        Notes: ${formData.get("notes")}
      `,
    }

    // Here you would typically use your email service provider's API
    // For example, using SendGrid, Postmark, or similar
    // This is a placeholder that logs the data
    console.log("Form submission:", data)

    return { success: true, message: "Booking request submitted successfully!" }
  } catch (error) {
    console.error("Form submission error:", error)
    return { success: false, message: "Failed to submit booking request. Please try again." }
  }
}

