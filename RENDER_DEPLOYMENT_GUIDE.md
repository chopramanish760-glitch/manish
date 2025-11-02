# 🚀 Render.com Deployment Guide - Step by Step

Complete step-by-step guide to deploy your Campus Event Hub backend to Render.com.

---

## 📋 Prerequisites Checklist

Before starting, make sure you have:
- ✅ GitHub account (your code is already pushed to: `https://github.com/chopramanish760-glitch/manish.git`)
- ✅ Render.com account (sign up at https://render.com if you don't have one)
- ✅ MongoDB Atlas connection string (already configured in code)
- ✅ Cloudinary credentials (already configured in code)

---

## 📝 Step 1: Create Render.com Account

1. Go to **https://render.com**
2. Click **"Get Started for Free"** or **"Sign Up"**
3. Sign up using:
   - GitHub (Recommended - easiest)
   - Email
   - Google account
4. Verify your email if required
5. You'll be redirected to the Render dashboard

---

## 📝 Step 2: Connect Your GitHub Repository

1. In the Render dashboard, you'll see **"New"** button (top right)
2. Click **"New"** → Select **"Web Service"**
3. You'll see options to connect:
   - If using GitHub: Click **"Connect GitHub"** or **"Configure account"**
   - Authorize Render to access your GitHub repositories
   - Select the repository: **`manish`** (or `chopramanish760-glitch/manish`)
4. Once connected, you'll see your repository in the list
5. Click **"Connect"** next to your repository

---

## 📝 Step 3: Configure Your Web Service

Fill in the service configuration:

### Basic Settings:

**Name:**
```
campus-event-hub-backend
```
*(or any name you prefer)*

**Region:**
```
Choose closest to your users (e.g., "Oregon (US West)" or "Singapore (Asia Pacific)")
```

**Branch:**
```
main
```
*(or your default branch)*

**Root Directory:**
```
Leave blank (default - uses root)
```
*If your backend is in a subfolder, specify it here (e.g., `backend`)*

**Runtime:**
```
Node
```

**Build Command:**
```
npm install
```

**Start Command:**
```
node backend.js
```

---

## 📝 Step 4: Set Environment Variables

This is **CRITICAL** for your app to work. Click **"Advanced"** → **"Add Environment Variable"**

Add these environment variables one by one:

### 1. Cloudinary Configuration (Choose ONE method):

**Method A - CLOUDINARY_URL (Recommended):**
- **Key:** `CLOUDINARY_URL`
- **Value:** `cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd`

**OR Method B - Individual Variables:**
- **Key:** `CLOUDINARY_CLOUD_NAME`
- **Value:** `dazcrwazd`

- **Key:** `CLOUDINARY_API_KEY`
- **Value:** `149519962886185`

- **Key:** `CLOUDINARY_API_SECRET`
- **Value:** `0lUh8GcUOrBQt-uOCBRGdoHIMUM`

### 2. Port Configuration (Auto-set by Render):
- Render automatically sets `PORT` - **you don't need to add this**

### 3. MongoDB (Already in code, but you can override if needed):
- **Key:** `MONGODB_URI`
- **Value:** `mongodb+srv://chopramanish760_db_user:Xg8dNsvyQ0YSYIjt@campus.urvjcdt.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=campus`
*(Optional - already hardcoded in backend.js)*

### 4. Keep-Alive (Optional - for free tier):
- **Key:** `RENDER`
- **Value:** `true`
*(Helps with keep-alive mechanism)*

**After adding each variable, click "Add" or "Save"**

---

## 📝 Step 5: Configure Instance Type

### For Free Tier:
1. Scroll down to **"Plan"** section
2. Select **"Free"**
   - ⚠️ Free tier has limitations:
     - Service sleeps after 15 minutes of inactivity
     - 750 hours/month total
     - Slower cold starts

### For Paid Tier ($7/month):
1. Select **"Starter"** plan
   - Always-on service
   - No sleep
   - Better performance

**For now, select "Free" to test**

---

## 📝 Step 6: Deploy Your Service

1. Scroll to the bottom of the configuration page
2. Click **"Create Web Service"**
3. Render will now:
   - Clone your repository
   - Install dependencies (`npm install`)
   - Start your service (`node backend.js`)
4. You'll see a build log showing the deployment progress
5. **Wait for deployment to complete** (usually 2-5 minutes)

---

## 📝 Step 7: Verify Deployment

### Check Build Logs:

1. In the Render dashboard, click on your service
2. Go to **"Logs"** tab
3. Look for:
   - ✅ `☁️ Cloudinary configured` message
   - ✅ `✅ MongoDB connected`
   - ✅ `Server running on port...`
   - ✅ No error messages

### Test Your Service:

1. Go to **"Settings"** tab in your service
2. Find your service URL (e.g., `https://campus-event-hub-backend.onrender.com`)
3. Visit: `https://your-service-url.onrender.com/healthz`
4. You should see: `{"ok":true}`

---

## 📝 Step 8: Update Frontend API URL

1. Open your `index.html` file (frontend)
2. Find the `API_BASE` constant (usually at the top)
3. Update it to your Render service URL:

```javascript
const API_BASE = "https://your-service-name.onrender.com";
```

4. Commit and push to GitHub:
```bash
git add index.html
git commit -m "Update API URL for Render deployment"
git push origin main
```

5. Render will automatically redeploy when you push changes

---

## 📝 Step 9: Set Up Keep-Alive (For Free Tier)

Your backend already has a keep-alive endpoint. Set up a service to ping it:

### Option A: Use External Ping Service (Free)
1. Go to **https://cron-job.org** or **https://uptimerobot.com**
2. Create a new monitor/ping job
3. URL: `https://your-service-url.onrender.com/keepalive`
4. Interval: Every 14 minutes (to prevent sleep)

### Option B: Use Render Cron Jobs (Requires Paid Plan)
1. In Render dashboard, click **"New"** → **"Cron Job"**
2. Configure:
   - Name: `keep-alive-ping`
   - Schedule: `*/14 * * * *` (every 14 minutes)
   - Command: `curl https://your-service-url.onrender.com/keepalive`

---

## 📝 Step 10: Monitor Your Service

### Check Service Status:
1. Dashboard → Your Service → **"Logs"** tab
2. Monitor for errors or issues
3. Check **"Metrics"** tab for resource usage

### Common Issues to Watch:
- ❌ Service crashing on startup
- ❌ MongoDB connection errors
- ❌ Cloudinary configuration errors
- ❌ Port binding issues

---

## 🔧 Troubleshooting Common Issues

### Issue 1: Service Won't Start

**Symptoms:**
- Build succeeds but service crashes
- "Application failed to respond" error

**Solutions:**
1. Check **"Logs"** tab for error messages
2. Verify `PORT` is correctly used (Render sets it automatically)
3. Ensure all environment variables are set correctly
4. Check `package.json` has correct `start` command

---

### Issue 2: Cloudinary Not Working

**Symptoms:**
- Media uploads fail
- Error: "Invalid API key"

**Solutions:**
1. Verify `CLOUDINARY_URL` environment variable is set
2. Check for typos in the URL
3. Ensure no extra spaces in the value
4. Check logs for Cloudinary configuration message

---

### Issue 3: MongoDB Connection Issues

**Symptoms:**
- "MongoClient connection failed"
- Database errors

**Solutions:**
1. Verify MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
2. Check MongoDB connection string is correct
3. Ensure MongoDB Atlas cluster is running

---

### Issue 4: Service Keeps Sleeping (Free Tier)

**Symptoms:**
- First request takes 30+ seconds
- Service works after first request

**Solutions:**
1. Set up keep-alive ping service (Step 9)
2. Upgrade to paid plan for always-on service
3. Use external monitoring service to ping `/keepalive`

---

### Issue 5: Build Fails

**Symptoms:**
- Build log shows errors
- "npm install" fails

**Solutions:**
1. Check `package.json` has all dependencies
2. Verify Node.js version is compatible (you have `>=18`)
3. Check for syntax errors in `backend.js`
4. Review build logs for specific error messages

---

## 📊 Service Configuration Summary

Once deployed, your service should have:

✅ **Environment Variables:**
- `CLOUDINARY_URL` (or individual Cloudinary vars)
- `RENDER=true` (optional)

✅ **Build Settings:**
- Build Command: `npm install`
- Start Command: `node backend.js`

✅ **Service URL:**
- `https://your-service-name.onrender.com`

✅ **Health Check:**
- `GET /healthz` → Returns `{"ok":true}`
- `GET /keepalive` → Returns keep-alive status

---

## 🎯 Next Steps After Deployment

1. ✅ Test your API endpoints
2. ✅ Update frontend to use Render URL
3. ✅ Set up keep-alive for free tier
4. ✅ Monitor logs for first few days
5. ✅ Test media uploads with Cloudinary
6. ✅ Verify MongoDB connections

---

## 📞 Getting Help

If you encounter issues:
1. **Check Render Logs** - Most issues show in logs
2. **Verify Environment Variables** - Double-check all values
3. **Test Locally First** - Make sure it works on your machine
4. **Check Render Status** - https://status.render.com
5. **Render Support** - Dashboard → Support

---

## 🎉 Success Checklist

Your deployment is successful when:
- ✅ Service shows "Live" status in Render dashboard
- ✅ `https://your-url.onrender.com/healthz` returns `{"ok":true}`
- ✅ Logs show Cloudinary configured
- ✅ Logs show MongoDB connected
- ✅ No error messages in logs
- ✅ Frontend can connect to backend

---

## 📝 Quick Reference Commands

### View Logs:
```
Render Dashboard → Your Service → Logs Tab
```

### Redeploy:
```
Render Dashboard → Your Service → Manual Deploy → Deploy latest commit
```

### Update Environment Variables:
```
Render Dashboard → Your Service → Environment → Add/Edit Variables
```

### Restart Service:
```
Render Dashboard → Your Service → Settings → Restart Service
```

---

**You're all set! Follow these steps and your backend will be live on Render.com! 🚀**

