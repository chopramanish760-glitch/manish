# 🔐 Environment Variables Guide

Complete guide for all environment variables used in the Campus Event Hub backend.

---

## 📋 Overview

Environment variables allow you to configure your backend without hardcoding sensitive information. This is **more secure** and makes it easier to deploy across different environments.

---

## ✅ Required Environment Variables

### **CLOUDINARY_URL** (Required)
**Purpose:** Cloudinary cloud storage configuration

**Value:**
```
cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd
```

**Format:** `cloudinary://api_key:api_secret@cloud_name`

**Where to set:**
- Render.com: Service → Environment tab
- Local: `.env` file or system environment variables

**Fallback:** None - This is required for media uploads

---

## ⚠️ Optional Environment Variables (Recommended for Security)

### **MONGODB_URI** (Optional but Recommended)
**Purpose:** MongoDB Atlas connection string

**Value:**
```
mongodb+srv://p70242086_db_user:jG9ebjpdn8PQRLyw@cluster0.zpbbagj.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=Cluster0
```

**Format:** `mongodb+srv://username:password@cluster.mongodb.net/database?options`

**Where to set:**
- Render.com: Service → Environment tab
- Local: `.env` file or system environment variables

**Fallback:** Uses hardcoded connection string if not set
- ⚠️ **Security Note:** Setting this via environment variable is more secure than hardcoding

**Example:**
```bash
# In Render.com or .env file
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority&appName=Cluster0
```

---

### **ADMIN_USER** (Optional but Recommended)
**Purpose:** Admin panel username

**Value:**
```
Chopraa03
```

**Where to set:**
- Render.com: Service → Environment tab
- Local: `.env` file or system environment variables

**Fallback:** Uses `"Chopraa03"` if not set

**Example:**
```bash
ADMIN_USER=Chopraa03
```

---

### **ADMIN_PASS** (Optional but Recommended)
**Purpose:** Admin panel password

**Value:**
```
Manish@2000
```

**Where to set:**
- Render.com: Service → Environment tab
- Local: `.env` file or system environment variables

**Fallback:** Uses `"Manish@2000"` if not set

**Example:**
```bash
ADMIN_PASS=Manish@2000
```

**⚠️ Security Note:** 
- Use a strong password in production
- Never commit passwords to Git
- Consider changing default password

---

### **RENDER** (Optional)
**Purpose:** Identifies that service is running on Render.com

**Value:**
```
true
```

**Where to set:**
- Render.com: Service → Environment tab (optional)

**Fallback:** Auto-detected by Render, or `false` locally

**Example:**
```bash
RENDER=true
```

---

### **MONGODB_DB_NAME** (Optional)
**Purpose:** MongoDB database name

**Value:**
```
campus_event_hub
```

**Fallback:** Uses `"campus_event_hub"` if not set

**When to use:** Only if you want to use a different database name

---

### **MONGODB_COLLECTION** (Optional)
**Purpose:** MongoDB collection name

**Value:**
```
app_data
```

**Fallback:** Uses `"app_data"` if not set

**When to use:** Only if you want to use a different collection name

---

## 🚀 Setting Environment Variables

### Method 1: Render.com Dashboard

1. Go to your service dashboard
2. Click **"Environment"** tab
3. Click **"Add Environment Variable"**
4. Enter **Key** and **Value**
5. Click **"Save Changes"**
6. Service will automatically restart

### Method 2: Local Development (.env file)

1. Create `.env` file in project root:
```bash
CLOUDINARY_URL=cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd
MONGODB_URI=mongodb+srv://p70242086_db_user:jG9ebjpdn8PQRLyw@cluster0.zpbbagj.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=Cluster0
ADMIN_USER=Chopraa03
ADMIN_PASS=Manish@2000
RENDER=true
```

2. Install dotenv (if not already installed):
```bash
npm install dotenv
```

3. Add to top of `backend.js`:
```javascript
require('dotenv').config();
```

4. Add `.env` to `.gitignore`:
```
.env
.env.local
```

### Method 3: System Environment Variables

**Windows PowerShell:**
```powershell
$env:CLOUDINARY_URL="cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd"
$env:MONGODB_URI="mongodb+srv://p70242086_db_user:jG9ebjpdn8PQRLyw@cluster0.zpbbagj.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=Cluster0"
$env:ADMIN_USER="Chopraa03"
$env:ADMIN_PASS="Manish@2000"
```

**Linux/Mac:**
```bash
export CLOUDINARY_URL="cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd"
export MONGODB_URI="mongodb+srv://p70242086_db_user:jG9ebjpdn8PQRLyw@cluster0.zpbbagj.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=Cluster0"
export ADMIN_USER="Chopraa03"
export ADMIN_PASS="Manish@2000"
```

---

## 🔒 Security Best Practices

### ✅ DO:
- ✅ Use environment variables for sensitive data
- ✅ Set strong admin passwords
- ✅ Use different credentials for production vs development
- ✅ Keep `.env` files in `.gitignore`
- ✅ Rotate credentials periodically
- ✅ Use environment variables in cloud platforms (Render, etc.)

### ❌ DON'T:
- ❌ Commit `.env` files to Git
- ❌ Hardcode passwords in source code (for production)
- ❌ Share credentials publicly
- ❌ Use default passwords in production
- ❌ Store credentials in client-side code

---

## 📊 Complete Environment Variables List

| Variable | Required | Default | Purpose |
|----------|----------|---------|---------|
| **CLOUDINARY_URL** | ✅ Yes | None | Cloudinary storage configuration |
| **MONGODB_URI** | ⚠️ Optional | Hardcoded value | MongoDB connection string |
| **ADMIN_USER** | ⚠️ Optional | `Chopraa03` | Admin username |
| **ADMIN_PASS** | ⚠️ Optional | `Manish@2000` | Admin password |
| **RENDER** | ⚠️ Optional | Auto-detected | Identifies Render deployment |
| **MONGODB_DB_NAME** | ⚠️ Optional | `campus_event_hub` | Database name |
| **MONGODB_COLLECTION** | ⚠️ Optional | `app_data` | Collection name |

---

## 🎯 Recommended Setup for Render.com

### Minimum Setup (Required):
```
CLOUDINARY_URL = cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd
```

### Recommended Setup (More Secure):
```
CLOUDINARY_URL = cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd
MONGODB_URI = mongodb+srv://p70242086_db_user:jG9ebjpdn8PQRLyw@cluster0.zpbbagj.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=Cluster0
ADMIN_USER = Chopraa03
ADMIN_PASS = Manish@2000
RENDER = true
```

---

## 🔍 Verifying Environment Variables

### Check in Logs:
When your server starts, check the logs:

**MongoDB:**
```
🔗 Connecting to MongoDB Atlas...
📋 MongoDB URI: mongodb+srv://***:***@cluster0...
✅ MongoDB connected
```

**Cloudinary:**
```
☁️ Cloudinary configured from CLOUDINARY_URL
```
or
```
☁️ Cloudinary configured: { cloud_name: 'dazcrwazd', ... }
```

**Admin:**
```
🔧 Admin: Chopraa03
```

### Test Endpoints:
- **Health:** `GET /healthz` → `{"ok":true}`
- **Admin:** Try logging in with your admin credentials

---

## 🐛 Troubleshooting

### ❌ Environment Variable Not Working

**Symptoms:**
- Configuration uses default values
- Connection fails

**Solutions:**
1. Verify variable name is correct (case-sensitive)
2. Check for extra spaces in values
3. Restart service after adding variables
4. Check logs for configuration messages
5. For Render: Redeploy after adding variables

### ❌ MongoDB Connection Fails

**Check:**
1. Verify `MONGODB_URI` is set correctly
2. Check MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
3. Verify username and password are correct
4. Check cluster is running

### ❌ Admin Login Fails

**Check:**
1. Verify `ADMIN_USER` and `ADMIN_PASS` match
2. Check case sensitivity (username is case-insensitive, password is case-sensitive)
3. Try default credentials: `Chopraa03` / `Manish@2000`

---

## 📝 Quick Reference

### Render.com Setup:
```
Required:
✅ CLOUDINARY_URL

Recommended:
⚠️ MONGODB_URI
⚠️ ADMIN_USER
⚠️ ADMIN_PASS
⚠️ RENDER
```

### Local Development:
```bash
# Create .env file:
CLOUDINARY_URL=cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd
MONGODB_URI=mongodb+srv://p70242086_db_user:jG9ebjpdn8PQRLyw@cluster0.zpbbagj.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=Cluster0
ADMIN_USER=Chopraa03
ADMIN_PASS=Manish@2000
```

---

**Your backend now supports environment variables for better security! 🔐**

