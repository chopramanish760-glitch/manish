# Cloudinary Configuration Guide

This guide explains how to configure Cloudinary for your Campus Event Hub project.

## Your Cloudinary Credentials

- **Cloud Name**: `dazcrwazd`
- **API Key**: `149519962886185`
- **API Secret**: `0lUh8GcUOrBQt-uOCBRGdoHIMUM`

---

## Configuration Methods

### Method 1: CLOUDINARY_URL (Recommended for Cloud Platforms)

This is the **easiest and most secure** method for cloud deployments.

**Format:**
```
cloudinary://api_key:api_secret@cloud_name
```

**Your CLOUDINARY_URL:**
```
cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd
```

#### For Render.com:
1. Go to your Render.com dashboard
2. Select your service (backend)
3. Go to **Environment** tab
4. Click **Add Environment Variable**
5. Add:
   - **Key**: `CLOUDINARY_URL`
   - **Value**: `cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd`
6. Click **Save Changes**
7. Redeploy your service

#### For Local Development (Windows PowerShell):
```powershell
$env:CLOUDINARY_URL="cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd"
```

#### For Local Development (Windows CMD):
```cmd
set CLOUDINARY_URL=cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd
```

#### For Local Development (Linux/Mac):
```bash
export CLOUDINARY_URL="cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd"
```

#### Create `.env` file (Alternative for Local):
Create a `.env` file in your project root:
```
CLOUDINARY_URL=cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd
```

Then install `dotenv` package:
```bash
npm install dotenv
```

And add to the top of `backend.js`:
```javascript
require('dotenv').config();
```

---

### Method 2: Individual Environment Variables

Use this if you prefer to set variables separately or if your platform doesn't support CLOUDINARY_URL.

#### For Render.com:
Add these three environment variables:

1. **Key**: `CLOUDINARY_CLOUD_NAME`  
   **Value**: `dazcrwazd`

2. **Key**: `CLOUDINARY_API_KEY`  
   **Value**: `149519962886185`

3. **Key**: `CLOUDINARY_API_SECRET`  
   **Value**: `0lUh8GcUOrBQt-uOCBRGdoHIMUM`

#### For Local Development (Windows PowerShell):
```powershell
$env:CLOUDINARY_CLOUD_NAME="dazcrwazd"
$env:CLOUDINARY_API_KEY="149519962886185"
$env:CLOUDINARY_API_SECRET="0lUh8GcUOrBQt-uOCBRGdoHIMUM"
```

#### For Local Development (Linux/Mac):
```bash
export CLOUDINARY_CLOUD_NAME="dazcrwazd"
export CLOUDINARY_API_KEY="149519962886185"
export CLOUDINARY_API_SECRET="0lUh8GcUOrBQt-uOCBRGdoHIMUM"
```

---

### Method 3: Default Values (Not Recommended for Production)

The code already has your credentials as defaults, so **it will work without any configuration**. However, this is **NOT recommended** because:
- ❌ Credentials are in source code
- ❌ Not secure for production
- ❌ Hard to change without code updates

**Only use this for quick testing or if you're okay with credentials in your code.**

---

## Which Method Should You Use?

### ✅ **For Production (Render.com):**
**Use Method 1 (CLOUDINARY_URL)** - It's the cleanest and most secure option.

### ✅ **For Local Development:**
**Use Method 2 (Individual Variables)** or create a `.env` file with Method 1.

### ⚠️ **Never Commit Credentials to Git:**
If you create a `.env` file, make sure to add it to `.gitignore`:
```
.env
.env.local
```

---

## Verification

After setting up the configuration, start your server and check the console output. You should see:

```
☁️ Cloudinary configured from CLOUDINARY_URL
```

OR

```
☁️ Cloudinary configured: {
  cloud_name: 'dazcrwazd',
  api_key: '149519962886185',
  api_secret: '***IMUM'
}
```

---

## Quick Setup for Render.com (Step-by-Step)

1. **Login to Render.com** → Go to your dashboard
2. **Select your service** (your backend service)
3. **Click "Environment"** in the left sidebar
4. **Click "Add Environment Variable"** button
5. **Add CLOUDINARY_URL:**
   - Key: `CLOUDINARY_URL`
   - Value: `cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd`
   - Click **Save Changes**
6. **Go to "Events"** tab → Click **Manual Deploy** → **Deploy latest commit**
7. Wait for deployment to complete
8. Test by uploading media to an event

---

## Troubleshooting

### ❌ "Invalid API key or secret"
- Check that your credentials are correct
- Make sure there are no extra spaces in the environment variable values
- Verify the CLOUDINARY_URL format is exactly: `cloudinary://key:secret@cloud_name`

### ❌ "Cloud name not found"
- Verify your cloud name is `dazcrwazd`
- Check Cloudinary dashboard to confirm your cloud name

### ❌ Environment variable not working
- Restart your server after setting environment variables
- For Render.com, redeploy after adding environment variables
- Check for typos in variable names (case-sensitive)

---

## Security Best Practices

1. ✅ **Never commit** `.env` files or credentials to Git
2. ✅ **Use environment variables** in production
3. ✅ **Rotate API keys** if they're ever exposed
4. ✅ **Use CLOUDINARY_URL** format for easier management
5. ✅ **Keep secrets secret** - don't share credentials publicly

---

## Need Help?

If Cloudinary still doesn't work after following this guide:
1. Check the server logs for Cloudinary configuration messages
2. Verify credentials in your Cloudinary dashboard
3. Test with a simple upload to confirm the setup

