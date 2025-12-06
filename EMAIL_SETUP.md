# Email Setup for Quote Submissions

## Overview

When users complete a quote on your website, the system automatically sends the quote data to `admin@valorhvacma.com`. 

## Current Setup

The email functionality is integrated and will:
1. **Pre-populate fields** from property information (like Year Built)
2. **Send quote emails** automatically when users complete the quote form
3. **Include all property information** from the Massachusetts Property Information database

## Email Service Configuration

The system uses **Resend** for reliable email delivery.

### Setup Instructions

1. **Sign up for Resend**: Go to https://resend.com and create a free account
2. **Get your API key**: 
   - Navigate to API Keys in your Resend dashboard
   - Click "Create API Key"
   - Copy the API key (starts with `re_`)
3. **Add to environment variables**: Create or update your `.env.local` file:

```bash
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=onboarding@resend.dev
```

**Note**: 
- For development, you can use `onboarding@resend.dev` as the from address
- For production, you'll need to verify your domain (`valorhvacma.com`) in Resend to send from `@valorhvacma.com` addresses
- After domain verification, you can use: `RESEND_FROM_EMAIL=quotes@valorhvacma.com`

### Domain Verification (For Production)

1. Go to Domains in your Resend dashboard
2. Add your domain `valorhvacma.com`
3. Add the DNS records Resend provides to your domain's DNS settings
4. Wait for verification (usually takes a few minutes)
5. Update `RESEND_FROM_EMAIL` to use your verified domain

### Development Mode (Logging Only)

If you don't configure `RESEND_API_KEY`, the quotes will be logged to the console. This is useful for development and testing.

## What Gets Emailed

Each quote email includes:

- **Contact Information**: Name, email, phone
- **Address**: Full installation address
- **Property Information**: 
  - Year Built (auto-filled)
  - Total Assessed Value
  - Lot Size
  - Assessment Year
  - Last Sale Price/Date
  - Owner Information
- **Home Details**: Property type, square footage, bedrooms, bathrooms, etc.
- **Additional Info**: Ownership, heating source, installation timeline
- **Utility Providers**: Electricity and natural gas providers
- **Quote Summary**: Total price and estimated savings

## Testing

To test the email functionality:

1. Complete a quote form on your website
2. Check your email inbox (if Resend is configured)
3. Or check your server logs (if Resend is not configured)

## Troubleshooting

- **Emails not sending**: Check that `RESEND_API_KEY` is set in your environment variables
- **Domain verification**: Make sure your sending domain is verified in Resend
- **Check logs**: Look at your server console for email-related errors

