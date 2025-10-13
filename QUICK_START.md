# Quick Start - Address Autocomplete

## 🚀 Setup (5 minutes)

### 1. Get Google Maps API Key

```bash
# Visit: https://console.cloud.google.com/google/maps-apis
# 1. Create new project
# 2. Enable "Places API (New)" - NOT the legacy version!
# 3. Create API credentials
# 4. Copy your API key
```

**Important:** Make sure to enable **"Places API (New)"** not the legacy "Places API"!

### 2. Add API Key to Environment

Create a `.env.local` file in the project root:

```bash
GOOGLE_MAPS_API_KEY=your_api_key_here
```

### 3. Restart Development Server

```bash
npm run dev
```

### 4. Test It Out

1. Go to `http://localhost:3000`
2. Click "Get a Quote"
3. Start typing an address
4. See Google's autocomplete suggestions! ✨

## ✅ What's Implemented

### Address Autocomplete Component
- **File**: `app/components/AddressAutocomplete.tsx`
- **Features**:
  - Google Places Autocomplete integration
  - Automatic address parsing (street, city, state, zip)
  - Coordinates (lat/lng) capture
  - US address restrictions
  - Responsive and accessible

### Survey Integration
- **Files**: 
  - `app/Service-Quote/page.tsx`
  - `app/components/QuoteSurvey.tsx`
- **Features**:
  - No pre-populated addresses
  - Clean "Start typing your address..." placeholder
  - Address data stored with full components
  - Ready for property data API integration

## 🔧 How It Works

```typescript
// When user selects an address from autocomplete:
{
  address: "123 Main St",      // Street address
  city: "Boston",              // City
  state: "MA",                 // State abbreviation
  zipCode: "02101",            // ZIP code
  lat: 42.3601,               // Latitude
  lng: -71.0589               // Longitude
}
```

## 📊 Property Data APIs (Optional Enhancement)

The address autocomplete is working, but if you want to auto-populate property details:

### Option 1: Attom Data API (Recommended)
- **URL**: https://api.attomdata.com/
- **Cost**: $29+/month
- **Data**: Property details, square footage, year built, etc.

### Option 2: Realty Mole
- **URL**: https://www.realtymole.com/api
- **Cost**: Pay-per-call
- **Data**: Property data, owner info

### Option 3: Manual Collection (Current)
- Collect all data through survey questions
- No additional API costs
- User provides all details

## 🔐 Important Security Notes

1. **Never commit `.env.local`** - it's already in `.gitignore`
2. **Restrict your API key** in Google Cloud Console:
   - Add HTTP referrer restrictions
   - Limit to Places API only
3. **Monitor usage** to avoid surprise charges

## 💰 Cost Expectations

Google Maps Platform includes **$200 free credit per month**, which covers:
- ~70,000 Places Autocomplete requests
- Typical usage: 100-500 requests/day = **FREE**
- Set up billing alerts just in case

## 🐛 Troubleshooting

### Address autocomplete not showing?

**Check these:**
1. Is `.env.local` created with your API key?
2. Did you restart the dev server after adding the key?
3. Is Places API enabled in Google Cloud Console?
4. Check browser console for errors

### "Google Maps API key not configured" error?

```bash
# Make sure your .env.local has:
GOOGLE_MAPS_API_KEY=AIza...your-actual-key

# And restart:
npm run dev
```

### "RefererNotAllowedMapError"?

In Google Cloud Console → Credentials:
1. Click your API key
2. Application restrictions → HTTP referrers
3. Add: `http://localhost:3000/*`
4. Save

## 📚 Documentation

- **Full Setup Guide**: See `SETUP_GOOGLE_MAPS.md`
- **Google Maps Docs**: https://developers.google.com/maps/documentation/javascript/places-autocomplete
- **Places API Pricing**: https://mapsplatform.google.com/pricing/

## 🎯 Next Steps

1. ✅ Get Google Maps API key
2. ✅ Test address autocomplete
3. 🔄 (Optional) Integrate property data API
4. 🔄 (Optional) Add map visualization on results page
5. 🔄 (Optional) Calculate service area based on coordinates

Happy coding! 🚀

