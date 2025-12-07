/**
 * Test script for Massachusetts Property Information API
 * Run with: node test-property-info.js
 */

async function testPropertyInfo() {
  const testCases = [
    {
      city: "BOSTON",
      streetName: "MARGARET ST",
      addressNumber: "10"
    },
    {
      city: "FITCHBURG",
      streetName: "WESTMINSTER HILL RD",
      addressNumber: "879"
    }
  ]

  console.log("Testing Massachusetts Property Information API...\n")

  for (const testCase of testCases) {
    console.log(`Testing: ${testCase.addressNumber} ${testCase.streetName}, ${testCase.city}`)
    console.log("-".repeat(60))

    try {
      const response = await fetch('http://localhost:3000/api/property-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testCase),
      })

      const result = await response.json()

      if (result.success) {
        console.log("✓ Success!")
        console.log("Property Info:", JSON.stringify(result.data, null, 2))
      } else {
        console.log("✗ Failed:", result.error)
      }
    } catch (error) {
      console.log("✗ Error:", error.message)
    }

    console.log("\n")
  }
}

// Run the test
testPropertyInfo().catch(console.error)


