# AhaSend SMTP Setup Guide

## ✅ Implementation Complete

Your OTP system now uses **AhaSend SMTP** for sending emails!

## 📋 SMTP Credentials (From AhaSend Dashboard)

**Already configured as defaults in code:**
- **Username:** `WtooEmLG11`
- **Password:** `DVZIKGW0cZqU4PM9a3qhXTR1`
- **Server (Europe):** `send.ahasend.com`
- **Server (US):** `send-us.ahasend.com`
- **Port:** `587`
- **Authentication:** `PLAIN`
- **StartTLS:** Required ✅

## 🔧 Environment Variables (Optional Override)

You can override defaults by setting these in **Render Dashboard** → Environment:

| Variable | Default | Description |
|----------|---------|-------------|
| `AHASEND_SMTP_USERNAME` | `WtooEmLG11` | SMTP username |
| `AHASEND_SMTP_PASSWORD` | `DVZIKGW0cZqU4PM9a3qhXTR1` | SMTP password |
| `AHASEND_SMTP_HOST` | `send.ahasend.com` | SMTP server (use `send-us.ahasend.com` for US) |
| `AHASEND_SMTP_PORT` | `587` | SMTP port |
| `AHASEND_FROM_EMAIL` | `[email protected]` | Sender email address |
| `AHASEND_FROM_NAME` | `Campus Event Hub` | Sender display name |

## 🚀 How It Works

1. **OTP Request:** User requests OTP via signup/password reset
2. **SMTP Connection:** Backend connects to AhaSend SMTP server
3. **Email Sent:** Professional HTML email with OTP code
4. **User Receives:** OTP code in email inbox

## 📧 Email Format

Users receive:
- **Subject:** "Your OTP for Campus Event Hub"
- **HTML Email:** Professional design with large OTP code
- **Text Fallback:** Plain text version for compatibility
- **Validity:** "Valid for 5 minutes" clearly stated

## ✅ Installation

The code is already updated! You just need to:

1. **Install nodemailer** (if not already installed):
   ```bash
   npm install nodemailer
   ```

2. **Deploy to Render:**
   - Render will automatically install dependencies
   - Or run `npm install` in your Render build command

3. **Optional - Set Environment Variables:**
   - Only if you want to override the defaults
   - Go to Render Dashboard → Environment
   - Add variables listed above

4. **Test OTP:**
   - Request OTP via signup or password reset
   - Check email inbox for OTP code

## 🔍 Features

- ✅ **SMTP Authentication:** Using AhaSend credentials
- ✅ **StartTLS:** Enabled (required by AhaSend)
- ✅ **HTML Email:** Professional styled template
- ✅ **Error Handling:** Comprehensive error logging
- ✅ **Fallback:** Console logging if email fails

## 🆘 Troubleshooting

### Email not sending?

1. **Check Render Logs:**
   - Look for "✅ OTP Email sent successfully"
   - Or "❌ Error sending email via AhaSend SMTP"
   - Copy error details

2. **Check SMTP Credentials:**
   - Verify username and password are correct
   - Check if credentials are still active in AhaSend dashboard

3. **Check Server:**
   - Default: `send.ahasend.com` (Europe)
   - For US: Use `send-us.ahasend.com`
   - Set via `AHASEND_SMTP_HOST` environment variable

4. **Check Port:**
   - Default: `587` (correct for AhaSend)
   - Make sure firewall allows outbound port 587

### Common Errors:

- **EAUTH:** Invalid username or password
- **ETIMEDOUT:** Connection timeout (check server/host)
- **ECONNREFUSED:** Server not reachable
- **StartTLS Error:** TLS configuration issue

## 📝 Notes

- **Credentials are already in code:** Defaults are set, so it works immediately
- **Override if needed:** Set environment variables to change defaults
- **Production mode:** Using Production mode credentials
- **No DNS setup needed:** SMTP works without DKIM (but DKIM improves deliverability)

## ✅ Verification Checklist

- [x] SMTP credentials configured in code
- [x] Nodemailer added to package.json
- [x] SMTP transporter configured with StartTLS
- [ ] Test OTP sending (after deployment)
- [ ] Verify email delivery
- [ ] Check spam folder if email not received

## 🎯 Next Steps

1. **Deploy to Render:**
   - Code is ready
   - Render will install nodemailer automatically

2. **Test OTP:**
   - Request OTP via signup/password reset
   - Check email inbox
   - Verify OTP code works

3. **Optional - Update FROM Email:**
   - Set `AHASEND_FROM_EMAIL` to your verified email
   - Improves email deliverability

## 🔗 Resources

- **AhaSend Dashboard:** https://ahasend.com/
- **AhaSend SMTP Docs:** Check AhaSend helpdesk
- **Nodemailer Docs:** https://nodemailer.com/

