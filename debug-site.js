/**
 * Debug script to inspect the Massachusetts Property Information site structure
 * Run with: node debug-site.js
 */

const cheerio = require('cheerio');

async function debugSite() {
  const baseUrl = 'https://arcgisserver.digital.mass.gov/ParcelAccessibility2/MassPropertyInfo.aspx'
  
  console.log('Fetching initial page...\n')
  
  const response = await fetch(baseUrl, {
    method: 'GET',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    },
  })
  
  const html = await response.text()
  const $ = cheerio.load(html)
  
  console.log('=== FORM STRUCTURE ===')
  console.log('Form action:', $('form').attr('action'))
  console.log('Form method:', $('form').attr('method'))
  
  console.log('\n=== HIDDEN FIELDS ===')
  $('input[type="hidden"]').each((_, el) => {
    const name = $(el).attr('name')
    const value = $(el).attr('value')
    console.log(`${name}: ${value ? value.substring(0, 50) + '...' : '(empty)'}`)
  })
  
  console.log('\n=== SELECT ELEMENTS ===')
  $('select').each((_, el) => {
    const id = $(el).attr('id')
    const name = $(el).attr('name')
    const optionCount = $(el).find('option').length
    console.log(`ID: ${id}, Name: ${name}, Options: ${optionCount}`)
    
    // Show first few options
    $(el).find('option').slice(0, 5).each((_, opt) => {
      console.log(`  - "${$(opt).text().trim()}" (value: "${$(opt).attr('value')}")`)
    })
    if (optionCount > 5) {
      console.log(`  ... and ${optionCount - 5} more`)
    }
  })
  
  console.log('\n=== SUBMIT BUTTONS ===')
  $('input[type="submit"], button[type="submit"]').each((_, el) => {
    console.log(`Name: ${$(el).attr('name')}, Value: ${$(el).attr('value')}, ID: ${$(el).attr('id')}`)
  })
  
  console.log('\n=== PAGE TITLE ===')
  console.log($('title').text())
}

debugSite().catch(console.error)

