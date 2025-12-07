# Testing Massachusetts Property Information Integration

## Method 1: Test via UI (Recommended)

1. **Start your development server:**
   ```bash
   cd Valor
   npm run dev
   ```

2. **Navigate to the quote page:**
   - Go to `http://localhost:3000` (or wherever your quote form is)
   - Or navigate to `/Service-Quote` if that's your route

3. **Enter a Massachusetts address:**
   - Use Google Maps autocomplete to enter an address
   - Example addresses to test:
     - `10 Margaret St, Boston, MA 02125`
     - `879 Westminster Hill Rd, Fitchburg, MA 01420`
     - Any valid Massachusetts address

4. **Click Continue/Submit:**
   - The form should show a loading state
   - After 2 seconds, it should proceed to the contact step
   - Check the browser console (F12) for any errors

5. **Check if data was auto-filled:**
   - Navigate to the "Home Details" step
   - Look at the "Year Built" field
   - If property info was found, you should see:
     - Placeholder showing "Found: [YEAR]"
     - Green text below saying "✓ Auto-filled from property records"

## Method 2: Test API Directly with cURL

1. **Make sure your dev server is running:**
   ```bash
   npm run dev
   ```

2. **Test with cURL:**
   ```bash
   curl -X POST http://localhost:3000/api/property-info \
     -H "Content-Type: application/json" \
     -d '{
       "city": "BOSTON",
       "streetName": "MARGARET ST",
       "addressNumber": "10"
     }'
   ```

3. **Expected response:**
   ```json
   {
     "success": true,
     "data": {
       "owner": "...",
       "buildingValue": "$...",
       "landValue": "$...",
       "totalValue": "$...",
       "yearBuilt": "1900",
       "lotSize": "...",
       ...
     }
   }
   ```

## Method 3: Test with Node.js Script

1. **Run the test script:**
   ```bash
   cd Valor
   node test-property-info.js
   ```

2. **Make sure your dev server is running first!**

## Method 4: Test in Browser Console

1. **Open your browser console (F12)**
2. **Run this JavaScript:**
   ```javascript
   fetch('/api/property-info', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       city: 'BOSTON',
       streetName: 'MARGARET ST',
       addressNumber: '10'
     })
   })
   .then(res => res.json())
   .then(data => console.log(data))
   .catch(err => console.error(err))
   ```

## Troubleshooting

### If the API returns an error:

1. **Check the server logs** - Look for errors in your terminal where `npm run dev` is running

2. **Common issues:**
   - **CORS errors**: The Massachusetts site might block requests. Check if you need to handle CORS differently
   - **Form structure changed**: The site's HTML structure might be different than expected
   - **Rate limiting**: The site might be rate-limiting requests

3. **Debug the API route:**
   - Add `console.log` statements in `app/api/property-info/route.ts`
   - Check what HTML is being returned
   - Verify the form field names match

### If property info isn't auto-filling:

1. **Check browser console** for JavaScript errors
2. **Verify the address is in Massachusetts** (state === "MA")
3. **Check that address parsing worked** - the street number and name need to be extracted correctly
4. **Verify the API call succeeded** - check Network tab in browser DevTools

## Test Addresses

Here are some test addresses you can use:

- `10 Margaret St, Boston, MA 02125`
- `879 Westminster Hill Rd, Fitchburg, MA 01420`
- `123 Main St, Worcester, MA 01608`
- `456 Park Ave, Springfield, MA 01103`

Make sure to use Google Maps autocomplete to get the proper address format!


