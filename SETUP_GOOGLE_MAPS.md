# Google Maps API Setup Guide

## Step 1: Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Name your project (e.g., "Valor HVAC")
4. Click "Create"

## Step 2: Enable Required APIs

1. In the Google Cloud Console, go to **APIs & Services** → **Library**
2. Search for and enable the following APIs:
   - **Places API (New)** (for address autocomplete) - Make sure it says "(New)"!
   - **Maps JavaScript API** (for map display)
   - **Geocoding API** (for coordinate conversion - optional)

**⚠️ Important:** Enable **"Places API (New)"** NOT the legacy "Places API". The new API is the modern version.

## Step 3: Create API Key

1. Go to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** → **API key**
3. Copy your new API key

## Step 4: Restrict API Key (Important for Security)

1. Click on your API key to edit it
2. Under **Application restrictions**:
   - Select "HTTP referrers (web sites)"
   - Add your domains:
     - `http://localhost:3000/*` (for development)
     - `https://yourdomain.com/*` (for production)
3. Under **API restrictions**:
   - Select "Restrict key"
   - Check only:
     - Places API
     - Maps JavaScript API
     - Geocoding API
4. Click **Save**

## Step 5: Set Up Environment Variable

1. Create a `.env.local` file in your project root:
   ```bash
   cp .env.example .env.local
   ```

2. Add your API key to `.env.local`:
   ```
   GOOGLE_MAPS_API_KEY=your_actual_api_key_here
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

## Step 6: Test the Integration

1. Navigate to your quote page
2. Start typing an address in the address field
3. You should see Google's autocomplete suggestions

## Important Notes

- **Never commit `.env.local` to version control** - it's already in `.gitignore`
- **The `NEXT_PUBLIC_` prefix** makes the variable available in the browser
- **API key restrictions are crucial** to prevent unauthorized usage and charges
- Google Maps Platform has a **$200 monthly free credit**, which covers most small to medium applications

## Billing Setup

1. Go to **Billing** in Google Cloud Console
2. Link a billing account (required even for free tier)
3. Set up billing alerts to notify you if charges exceed your free credit

## Monitoring Usage

1. Go to **APIs & Services** → **Dashboard**
2. Select your API to see usage statistics
3. Monitor daily requests to stay within free tier

## Troubleshooting

### "This page can't load Google Maps correctly"
- Check that your API key is correct in `.env.local`
- Verify the Maps JavaScript API is enabled
- Check browser console for specific error messages
- Ensure API key restrictions allow your domain

### Address autocomplete not working
- Verify Places API is enabled
- Check that API key has Places API permission
- Look for errors in browser console
- Ensure internet connection is working

### "RefererNotAllowedMapError"
- Add your domain to API key restrictions
- Include both `http://` and `https://` versions
- Add wildcard path `/*` after domain

## Cost Estimates (After Free Tier)

- Places API Autocomplete: $2.83 per 1,000 requests
- Geocoding API: $5.00 per 1,000 requests
- Maps JavaScript API: $7.00 per 1,000 loads

Most small businesses stay well within the $200/month free credit.

## Property Data API Alternatives (Optional)

Since Zillow closed their public API, consider these alternatives for property data:

### 1. **Attom Data Solutions**
- Website: https://api.attomdata.com/
- Pricing: Starts at $29/month
- Features: Property details, valuations, sales history

### 2. **Realty Mole Property API**
- Website: https://www.realtymole.com/api
- Pricing: Pay-per-call model
- Features: Property data, owner info, market values

### 3. **CoreLogic**
- Website: https://www.corelogic.com/
- Pricing: Enterprise (contact sales)
- Features: Comprehensive property data

### 4. **Zilpie (Zillow scraping service)**
- Website: https://www.zilpie.com/
- Pricing: Pay-per-request
- Features: Zillow data via web scraping

For the MVP, the Google Places API provides sufficient address validation. Property details can be collected via the survey questions until you implement a property data API.

