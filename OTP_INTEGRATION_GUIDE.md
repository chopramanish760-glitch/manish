# OTP Integration Guide

## Current Implementation

**What's Working:**
- ✅ OTP generation (6-digit random codes)
- ✅ OTP storage (in-memory, expires in 5 minutes)
- ✅ OTP verification logic
- ✅ Masked phone number display (xxxxxx6005)
- ✅ Frontend OTP request/verify UI

**What's NOT Working (Testing Mode):**
- ❌ OTPs are NOT actually sent via SMS/Email
- ❌ OTPs only logged to backend console for testing

## For Production - Choose One Option:

### Option 1: Twilio SMS (Recommended - Easy Setup)

**What you need:**
1. Twilio account (sign up at https://www.twilio.com)
2. Twilio Account SID
3. Twilio Auth Token
4. Twilio Phone Number (or trial number)

**Setup Steps:**
1. Install Twilio: `npm install twilio`
2. Get credentials from Twilio dashboard
3. Add environment variables to Render:
   - `TWILIO_ACCOUNT_SID`
   - `TWILIO_AUTH_TOKEN`
   - `TWILIO_PHONE_NUMBER`

**Cost:** ~$0.0075 per SMS (very cheap)

---

### Option 2: Email OTP (Free Option)

**What you need:**
1. Email service (Gmail, SendGrid, AWS SES)
2. SMTP credentials

**Setup Steps:**
1. Install nodemailer: `npm install nodemailer`
2. Configure SMTP in backend
3. OTPs sent via email instead of SMS

**Cost:** Usually free (Gmail) or very cheap

---

### Option 3: MSG91 (India-Focused, Cheaper for Indian Numbers)

**What you need:**
1. MSG91 account
2. MSG91 API key
3. Sender ID

**Cost:** Very cheap for Indian numbers

---

## Current Status

Right now, OTPs are **only logged to console**. Users need to:
1. Request OTP
2. Check backend console logs to see the code
3. Enter the code in frontend

**This is fine for testing**, but for production you'll need one of the above services.

---

## Quick Test

To test current implementation:
1. Signup → Request OTP
2. Check Render.com logs (or local console)
3. You'll see: `📱 OTP sent to xxxxxx6005: 123456`
4. Enter that code in frontend

