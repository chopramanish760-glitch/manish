# 🚀 Render.com Deployment - Quick Guide

Simple step-by-step guide to deploy your Campus Event Hub backend to Render.com.

---

## ✅ What You Need Before Starting

- ✅ GitHub repository: `https://github.com/chopramanish760-glitch/manish.git` (already set up)
- ✅ Render.com account (sign up at https://render.com if needed)
- ✅ MongoDB credentials (already configured in code)
- ✅ Cloudinary credentials (already configured in code)

---

## 📝 STEP 1: Sign Up for Render.com

1. Go to **https://render.com**
2. Click **"Get Started for Free"**
3. Sign up with:
   - **GitHub** (Recommended - easiest)
   - Email
   - Google
4. Verify your email

---

## 📝 STEP 2: Create New Web Service

1. In Render dashboard, click **"New"** button (top right)
2. Select **"Web Service"**
3. If prompted, connect your GitHub account
4. Find and select your repository: **`manish`**
5. Click **"Connect"**

---

## 📝 STEP 3: Configure Your Service

Fill in these settings:

### Basic Configuration:

| Field | Value |
|-------|-------|
| **Name** | `campus-event-hub-backend` (or any name) |
| **Region** | Choose closest to your users (e.g., "Oregon (US West)") |
| **Branch** | `main` |
| **Root Directory** | *(leave blank)* |
| **Runtime** | `Node` (auto-detected) |
| **Build Command** | `npm install` |
| **Start Command** | `node backend.js` |

### Plan Selection:
- Choose **"Free"** for testing (or **"Starter"** for production - $7/month)

---

## 📝 STEP 4: Add Environment Variables

**This is IMPORTANT!** Click **"Advanced"** section and add:

### Required Environment Variables:

| Key | Value |
|-----|-------|
| **CLOUDINARY_URL** | `cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd` |

### Optional (Recommended for Security):

| Key | Value | Purpose |
|-----|-------|---------|
| **MONGODB_URI** | `mongodb+srv://p70242086_db_user:jG9ebjpdn8PQRLyw@cluster0.zpbbagj.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=Cluster0` | MongoDB connection (defaults to hardcoded value if not set) |
| **ADMIN_USER** | `Chopraa03` | Admin username (defaults to hardcoded value if not set) |
| **ADMIN_PASS** | `Manish@2000` | Admin password (defaults to hardcoded value if not set) |
| **RENDER** | `true` | Identifies service running on Render |

**How to add:**
1. Click **"Add Environment Variable"**
2. Enter **Key** and **Value**
3. Click **"Add"** or **"Save"**

---

## 📝 STEP 5: Deploy

1. Scroll to bottom of configuration page
2. Click **"Create Web Service"**
3. Wait 2-5 minutes for deployment
4. Watch the build logs as it deploys

---

## 📝 STEP 6: Verify Deployment

### Check Service Status:
- Status should show **🟢 "Live"** (green)

### Check Logs:
1. Click **"Logs"** tab
2. Look for these success messages:
   ```
   ✅ MongoDB connected
   ☁️ Cloudinary configured
   💓 Starting internal keep-alive mechanism...
   ✅ Backend running at http://localhost:PORT
   ```

### Test Your Service:
1. Go to **"Settings"** tab
2. Copy your **Service URL** (e.g., `https://campus-event-hub-backend.onrender.com`)
3. Test in browser:
   - `https://your-url.onrender.com/healthz` → Should show `{"ok":true}`
   - `https://your-url.onrender.com/keepalive` → Should show keep-alive status

---

## 📝 STEP 7: Update Frontend

1. Open `index.html` in your code editor
2. Find: `const API_BASE = ...` (around line 100-200)
3. Update to your Render URL:
   ```javascript
   const API_BASE = "https://your-service-name.onrender.com";
   ```
4. Save, commit, and push:
   ```bash
   git add index.html
   git commit -m "Update API URL for Render"
   git push origin main
   ```
5. Render will auto-redeploy (takes 2-5 minutes)

---

## 🎉 You're Done!

Your backend is now live on Render.com with:
- ✅ **Automatic keep-alive** - No external services needed!
- ✅ **MongoDB connected** - Data persists forever
- ✅ **Cloudinary configured** - Media storage working
- ✅ **Always online** - Service stays active

---

## 💡 Important Features Already Built-In

### ✅ Internal Keep-Alive (NEW!)
Your backend automatically pings itself every 2 minutes to stay awake. **No external setup needed!**

You'll see these logs:
```
💓 Starting internal keep-alive mechanism...
💓 Keep-alive will ping: http://localhost:PORT/keepalive
💓 Self keep-alive ping successful: ...
✅ Keep-alive mechanism active - pinging every 120 seconds
```

### ✅ MongoDB Connection
Already configured with your credentials:
- Username: `p70242086_db_user`
- Database: `campus_event_hub`
- Cluster: `cluster0.zpbbagj.mongodb.net`

### ✅ Cloudinary Integration
Media uploads and storage already configured.

---

## 🔧 Troubleshooting

### ❌ Service Won't Start

**Check:**
1. **Logs tab** - Look for error messages (usually red)
2. **Environment variables** - Make sure `CLOUDINARY_URL` is set
3. **Build command** - Should be `npm install`
4. **Start command** - Should be `node backend.js`

**Common errors:**
- `Cannot find module` → Dependencies not installed
- `Port already in use` → Already resolved (Render handles this)
- `Invalid API key` → Check `CLOUDINARY_URL` value

---

### ❌ Cloudinary Not Working

**Solution:**
1. Go to **Environment** tab
2. Verify `CLOUDINARY_URL` exists
3. Value should be exactly: `cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd`
4. No extra spaces before or after
5. Redeploy service

---

### ❌ MongoDB Connection Failed

**Solution:**
1. Check MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
2. Verify cluster is running
3. Check connection string in logs (credentials hidden for security)

---

### ❌ Service Keeps Sleeping (Free Tier)

**Solution:**
This shouldn't happen anymore! The internal keep-alive should prevent this.

**If it still happens:**
1. Check logs for keep-alive messages
2. Verify service is "Live" (not "Stopped")
3. First request after sleep takes ~30 seconds (normal for free tier)

---

## 📊 Service Monitoring

### View Logs:
- **Dashboard** → Your Service → **"Logs"** tab
- Real-time logs of all activity
- Keep-alive pings will show every 2 minutes

### View Metrics:
- **Dashboard** → Your Service → **"Metrics"** tab
- CPU usage
- Memory usage
- Network traffic
- Response times

---

## 🔄 Updating Your Service

### Automatic Deploys:
- Push to GitHub → Render auto-deploys
- Takes 2-5 minutes
- Check "Events" tab for deploy status

### Manual Deploy:
1. Go to **"Events"** tab
2. Click **"Manual Deploy"**
3. Select **"Deploy latest commit"**

---

## 📝 Configuration Summary

Once deployed, your service has:

| Setting | Value |
|---------|-------|
| **Name** | campus-event-hub-backend |
| **Region** | (Your chosen region) |
| **Branch** | main |
| **Build** | npm install |
| **Start** | node backend.js |
| **Plan** | Free (or Starter) |

| Environment Variable | Value | Required |
|---------------------|-------|----------|
| **CLOUDINARY_URL** | cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd | ✅ Required |
| **MONGODB_URI** | mongodb+srv://p70242086_db_user:jG9ebjpdn8PQRLyw@cluster0.zpbbagj.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=Cluster0 | ⚠️ Optional (recommended) |
| **ADMIN_USER** | Chopraa03 | ⚠️ Optional (recommended) |
| **ADMIN_PASS** | Manish@2000 | ⚠️ Optional (recommended) |
| **RENDER** | true | ⚠️ Optional |

---

## ✅ Success Checklist

Your deployment is successful when:
- ✅ Service status = "Live" (green)
- ✅ `/healthz` returns `{"ok":true}`
- ✅ Logs show "MongoDB connected"
- ✅ Logs show "Cloudinary configured"
- ✅ Logs show "Keep-alive mechanism active"
- ✅ Frontend can connect to backend
- ✅ No error messages in logs

---

## 🎯 Quick Command Reference

### View Service:
```
Render Dashboard → Your Service Name
```

### View Logs:
```
Service Dashboard → Logs Tab
```

### View Settings:
```
Service Dashboard → Settings Tab
```

### Update Environment Variables:
```
Service Dashboard → Environment Tab → Add/Edit Variables
```

### Restart Service:
```
Service Dashboard → Settings → Restart Service
```

---

## 📞 Need Help?

1. **Check Logs First** - Most issues show error messages
2. **Verify Environment Variables** - Double-check all values
3. **Test Locally** - Make sure it works on your machine
4. **Render Status** - https://status.render.com
5. **Render Support** - Dashboard → Support

---

## 🎊 Congratulations!

Your backend is now deployed on Render.com with:
- ✅ Automatic keep-alive (no external setup needed!)
- ✅ MongoDB persistence
- ✅ Cloudinary media storage
- ✅ Always-on service

**You're all set! 🚀**

