# 🎯 Render.com Deployment - Detailed Step-by-Step Guide

Complete click-by-click instructions for deploying your backend.

---

## 📝 STEP 3: Configure Service → Set Name, Branch, Build/Start Commands

### Location: Render Dashboard → New Web Service Page

After connecting your GitHub repository, you'll see the configuration form:

---

### 3.1: Set Service Name

**Field:** "Name" (at the top of the form)

**Action:**
- Click in the **"Name"** field
- Type: `campus-event-hub-backend`
- Or use any name you prefer (e.g., `event-hub-api`, `campus-backend`)

**What it does:** This becomes part of your service URL: `https://campus-event-hub-backend.onrender.com`

---

### 3.2: Set Region

**Field:** "Region" (dropdown below Name)

**Action:**
- Click the **"Region"** dropdown
- Choose the region closest to your users:
  - **Oregon (US West)** - Best for US users
  - **Frankfurt (EU)** - Best for European users
  - **Singapore (Asia Pacific)** - Best for Asian users
- Example: Select **"Oregon (US West)"**

**What it does:** Determines where your server runs (affects latency)

---

### 3.3: Set Branch

**Field:** "Branch" (below Region)

**Action:**
- The field should auto-populate with `main`
- If empty or different:
  - Click in the **"Branch"** field
  - Type: `main`
  - Or select from dropdown if it appears

**What it does:** Which Git branch to deploy from

---

### 3.4: Set Root Directory

**Field:** "Root Directory" (optional field)

**Action:**
- **Leave this field EMPTY** (or blank)
- Your `backend.js` is in the root of your repository, so no subdirectory needed

**When to use:** Only if your backend code is in a subfolder like `backend/` or `server/`

---

### 3.5: Set Runtime

**Field:** "Runtime" (usually auto-detected)

**Action:**
- Should auto-detect as **"Node"**
- If not:
  - Click the **"Runtime"** dropdown
  - Select **"Node"**

**What it does:** Which runtime environment to use

---

### 3.6: Set Build Command

**Field:** "Build Command" (in Advanced settings or main form)

**Action:**
1. Scroll down or look for **"Advanced"** section (may need to expand it)
2. Find **"Build Command"** field
3. Click in the field
4. Type or verify it shows: `npm install`

**What it does:** Command to install dependencies before starting

**Expected value:**
```
npm install
```

---

### 3.7: Set Start Command

**Field:** "Start Command" (right below Build Command)

**Action:**
1. Find **"Start Command"** field
2. Click in the field
3. Type: `node backend.js`

**What it does:** Command to start your application

**Expected value:**
```
node backend.js
```

---

### 3.8: Verify Node Version

**Field:** "Node Version" (may be auto-detected)

**Action:**
- Should auto-detect Node version from `package.json` (you have `>=18`)
- If manual selection available:
  - Choose **Node 18** or **Node 20** (latest LTS)

---

**✅ Step 3 Complete Checklist:**
- [ ] Name: `campus-event-hub-backend`
- [ ] Region: Selected
- [ ] Branch: `main`
- [ ] Root Directory: Empty/Blank
- [ ] Runtime: `Node`
- [ ] Build Command: `npm install`
- [ ] Start Command: `node backend.js`

---

## 📝 STEP 4: Set Environment Variables → Add Cloudinary Configuration

### Location: Same page, scroll to "Advanced" section

---

### 4.1: Open Environment Variables Section

**Action:**
1. Scroll down on the configuration page
2. Look for section: **"Environment Variables"** or **"Environment"**
3. Click **"Advanced"** if it's collapsed (to expand it)
4. You'll see a section with:
   - "Add Environment Variable" button
   - Or a table/list of environment variables

---

### 4.2: Add CLOUDINARY_URL (Recommended Method)

**Action:**
1. Click the **"Add Environment Variable"** button
2. A form/row will appear with two fields:
   - **Key** (left field)
   - **Value** (right field)
3. In the **"Key"** field, type: `CLOUDINARY_URL`
4. In the **"Value"** field, type: `cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd`
5. Click **"Add"** or **"Save"** button (if shown)
6. The variable should appear in your list

**Visual Guide:**
```
Key: CLOUDINARY_URL
Value: cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd
```

**⚠️ Important:** Make sure there are NO spaces before or after the value!

---

### 4.3: Add RENDER Environment Variable (Optional but Recommended)

**Action:**
1. Click **"Add Environment Variable"** again
2. **Key:** `RENDER`
3. **Value:** `true`
4. Click **"Add"**

**What it does:** Helps your backend detect it's running on Render

---

### 4.4: Verify Environment Variables

**Before proceeding, verify you have:**

**Required:**
- ✅ `CLOUDINARY_URL` = `cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd`

**Optional but Recommended:**
- ✅ `RENDER` = `true`

---

**✅ Step 4 Complete Checklist:**
- [ ] `CLOUDINARY_URL` added with correct value
- [ ] `RENDER` = `true` added (optional)
- [ ] No typos or extra spaces in values

---

## 📝 STEP 5: Choose Instance Type → Free or Paid Plan

### Location: Scroll down to "Plan" section

---

### 5.1: Find Plan Selection

**Action:**
1. Scroll down on the configuration page
2. Look for section: **"Plan"** or **"Instance Type"**
3. You'll see options like:
   - **Free**
   - **Starter** ($7/month)
   - **Standard** ($25/month)
   - etc.

---

### 5.2: Select Free Plan (Recommended for Testing)

**Action:**
1. Click the radio button or select: **"Free"**
2. Review the limitations shown:
   - ⚠️ Service sleeps after 15 minutes of inactivity
   - ⚠️ 750 hours/month total
   - ⚠️ Cold starts may take 30+ seconds

**What it does:** Uses free tier (perfect for testing and development)

---

### 5.3: Alternative - Select Paid Plan (Optional)

**If you want always-on service:**

**Action:**
1. Click **"Starter"** ($7/month)
2. Benefits:
   - ✅ Always-on (no sleeping)
   - ✅ No cold starts
   - ✅ Better performance

**When to use:** Production use, when you need reliable uptime

---

**✅ Step 5 Complete Checklist:**
- [ ] Plan selected (Free or Paid)
- [ ] Understand the limitations of chosen plan

---

## 📝 STEP 6: Deploy → Click "Create Web Service"

### Location: Bottom of configuration page

---

### 6.1: Review Your Configuration

**Before deploying, double-check:**

**Settings:**
- ✅ Name: `campus-event-hub-backend`
- ✅ Branch: `main`
- ✅ Build Command: `npm install`
- ✅ Start Command: `node backend.js`
- ✅ Environment Variables: `CLOUDINARY_URL` set

**Plan:**
- ✅ Free or Paid selected

---

### 6.2: Click Create Web Service

**Action:**
1. Scroll to the very bottom of the configuration page
2. Find the button: **"Create Web Service"** (usually blue/green button)
3. Click **"Create Web Service"**
4. You'll be redirected to your service dashboard

---

### 6.3: Wait for Deployment

**What happens next:**
1. Render starts the deployment process
2. You'll see a build log appear
3. The process typically takes 2-5 minutes

**Build stages you'll see:**
1. **"Fetching source code"** - Cloning your repo
2. **"Building application"** - Running `npm install`
3. **"Starting service"** - Running `node backend.js`
4. **"Service is live"** - Deployment complete

---

### 6.4: Watch the Build Logs

**Action:**
1. Stay on the service dashboard page
2. Watch the **"Logs"** tab (usually visible)
3. Look for:
   - ✅ `npm install` output
   - ✅ `☁️ Cloudinary configured` message
   - ✅ `✅ MongoDB connected`
   - ✅ `Server running on port...`

**Common successful messages:**
```
✓ Cloning repository...
✓ Installing dependencies...
✓ Building application...
✓ Starting service...
☁️ Cloudinary configured from CLOUDINARY_URL
✅ MongoDB connected
Server running on port 10000
```

---

**✅ Step 6 Complete Checklist:**
- [ ] Clicked "Create Web Service"
- [ ] Build started successfully
- [ ] Build completed without errors
- [ ] Service status shows "Live" or "Deployed"

---

## 📝 STEP 7: Verify → Check Logs and Test Health Endpoint

### Location: Service Dashboard → Logs Tab & Settings Tab

---

### 7.1: Check Service Status

**Action:**
1. In your service dashboard, look at the top
2. Check the status indicator:
   - 🟢 **"Live"** = Service is running ✅
   - 🟡 **"Deploying"** = Still deploying (wait)
   - 🔴 **"Failed"** = Something went wrong (check logs)

**What you want:** 🟢 **"Live"**

---

### 7.2: Review Build Logs

**Action:**
1. Click on **"Logs"** tab (usually visible in the dashboard)
2. Scroll through the logs
3. Look for these success indicators:

**✅ Good Signs:**
```
☁️ Cloudinary configured from CLOUDINARY_URL
✅ MongoDB connected to campus_event_hub
Server running on port 10000
```

**❌ Bad Signs (If you see these, there's a problem):**
```
❌ Error: Invalid API key
❌ MongoDB connection failed
❌ Port already in use
❌ Cannot find module 'cloudinary'
```

---

### 7.3: Get Your Service URL

**Action:**
1. Click on **"Settings"** tab in your service dashboard
2. Scroll down to **"Service URL"** section
3. Copy the URL shown (e.g., `https://campus-event-hub-backend.onrender.com`)
4. **Save this URL** - you'll need it!

**What it looks like:**
```
Service URL: https://campus-event-hub-backend.onrender.com
```

---

### 7.4: Test Health Endpoint

**Action:**
1. Open a new browser tab
2. Type your service URL + `/healthz`
   - Example: `https://campus-event-hub-backend.onrender.com/healthz`
3. Press Enter
4. You should see: `{"ok":true}`

**✅ Success:** JSON response with `{"ok":true}`

**❌ Failure:** Error page, timeout, or connection error

---

### 7.5: Test Root Endpoint

**Action:**
1. In browser, go to just your service URL:
   - Example: `https://campus-event-hub-backend.onrender.com`
2. You should see text about your API endpoints

**✅ Success:** Shows text about API endpoints

**❌ Failure:** Error or timeout

---

### 7.6: Test Keep-Alive Endpoint

**Action:**
1. Go to: `https://your-url.onrender.com/keepalive`
2. You should see: `{"ok":true,"timestamp":"...","message":"Backend is alive"}`

**✅ Success:** JSON response with timestamp

---

**✅ Step 7 Complete Checklist:**
- [ ] Service status shows "Live" (green)
- [ ] Logs show Cloudinary configured
- [ ] Logs show MongoDB connected
- [ ] Service URL copied and saved
- [ ] `/healthz` endpoint returns `{"ok":true}`
- [ ] Root endpoint shows API info
- [ ] `/keepalive` endpoint works

---

## 📝 STEP 8: Update Frontend → Change API_BASE to Your Render URL

### Location: Local `index.html` file

---

### 8.1: Open Your Frontend File

**Action:**
1. Open your project in your code editor
2. Open the file: `index.html`
3. Find the API configuration (usually near the top, around line 100-200)

---

### 8.2: Find API_BASE Constant

**Action:**
1. Look for line that says: `const API_BASE = ...`
2. It might currently say:
   ```javascript
   const API_BASE = "http://localhost:5000";
   ```
   or
   ```javascript
   const API_BASE = "";
   ```
   or another URL

---

### 8.3: Update API_BASE

**Action:**
1. Replace the current `API_BASE` value with your Render URL
2. Use the URL you copied in Step 7.3
3. Change it to:
   ```javascript
   const API_BASE = "https://campus-event-hub-backend.onrender.com";
   ```
   *(Replace with YOUR actual Render URL)*

**Example:**
```javascript
// Before:
const API_BASE = "http://localhost:5000";

// After:
const API_BASE = "https://campus-event-hub-backend.onrender.com";
```

**⚠️ Important:**
- Include `https://`
- Don't include trailing slash `/`
- Use your actual service URL

---

### 8.4: Save the File

**Action:**
1. Save `index.html`
2. Verify the change is saved

---

### 8.5: Commit and Push to GitHub

**Action:**
1. Open terminal/command prompt
2. Navigate to your project directory
3. Run these commands:

```bash
git add index.html
git commit -m "Update API_BASE to Render production URL"
git push origin main
```

**What happens:**
- Changes are pushed to GitHub
- Render automatically detects the push
- Render will redeploy your service (usually takes 2-5 minutes)

---

### 8.6: Test Frontend Connection

**Action:**
1. Open your `index.html` file in a browser (or host it somewhere)
2. Open browser Developer Tools (F12)
3. Go to "Console" tab
4. Try using your app
5. Check for API calls in "Network" tab
6. Verify requests go to your Render URL (not localhost)

**✅ Success:** No errors, API calls work, data loads

**❌ Failure:** CORS errors, connection refused, or API not responding

---

**✅ Step 8 Complete Checklist:**
- [ ] Found `API_BASE` constant in `index.html`
- [ ] Updated to Render URL (with `https://`)
- [ ] Saved the file
- [ ] Committed changes to Git
- [ ] Pushed to GitHub
- [ ] Render auto-redeployed (watch logs)
- [ ] Frontend can connect to backend

---

## 📝 STEP 9: Set Up Keep-Alive → Prevent Free Tier from Sleeping

### Location: External service (UptimeRobot or cron-job.org)

**Why:** Free tier sleeps after 15 min inactivity. Keep-alive prevents this.

---

### Option A: Using UptimeRobot (Recommended - Free & Easy)

**9.1: Create UptimeRobot Account**
1. Go to **https://uptimerobot.com**
2. Click **"Sign Up"** (free account)
3. Sign up with email or Google
4. Verify your email

**9.2: Add New Monitor**
1. Log in to UptimeRobot dashboard
2. Click **"Add New Monitor"** button

**9.3: Configure Monitor**
1. **Monitor Type:** Select **"HTTP(s)"**
2. **Friendly Name:** `Campus Event Hub Keep-Alive`
3. **URL:** Enter your Render service URL + `/keepalive`
   - Example: `https://campus-event-hub-backend.onrender.com/keepalive`
4. **Monitoring Interval:** Select **"5 minutes"**
5. **Click "Create Monitor"**

**9.4: Verify It Works**
1. Wait 5-10 minutes
2. Check UptimeRobot dashboard - should show "UP" status
3. Your Render service should stay awake

---

### Option B: Using cron-job.org (Free Alternative)

**9.1: Create Account**
1. Go to **https://cron-job.org**
2. Click **"Sign Up"** (free)
3. Create account

**9.2: Create Cron Job**
1. Click **"Create cronjob"**
2. **Title:** `Render Keep-Alive`
3. **Address:** Your Render URL + `/keepalive`
   - Example: `https://campus-event-hub-backend.onrender.com/keepalive`
4. **Schedule:** 
   - Select **"Every 14 minutes"**
   - Or custom: `*/14 * * * *`
5. **Click "Create cronjob"**

---

### Option C: Render Cron Jobs (Paid Plan Only)

**If you have a paid Render plan:**

1. In Render dashboard, click **"New"** → **"Cron Job"**
2. **Name:** `keep-alive`
3. **Schedule:** `*/14 * * * *` (every 14 minutes)
4. **Command:** 
   ```bash
   curl https://your-service-url.onrender.com/keepalive
   ```
5. Click **"Create Cron Job"**

---

**✅ Step 9 Complete Checklist:**
- [ ] Chosen keep-alive service (UptimeRobot, cron-job.org, etc.)
- [ ] Created account
- [ ] Added monitor/cron job
- [ ] Set URL to: `https://your-url.onrender.com/keepalive`
- [ ] Set interval to 14 minutes or less
- [ ] Verified monitor shows "UP" or successful pings

---

## 📝 STEP 10: Monitor → Watch Logs and Metrics

### Location: Render Dashboard → Your Service

---

### 10.1: View Real-Time Logs

**Action:**
1. Go to your service dashboard in Render
2. Click **"Logs"** tab
3. You'll see real-time logs from your application

**What to monitor:**
- ✅ Normal operation messages
- ❌ Error messages (red text)
- ⚠️ Warning messages (yellow text)

**Common logs you'll see:**
```
💓 Keep-alive ping at 2024-01-15T10:30:00Z
POST /api/events - 200 OK
☁️ Uploading photo to Cloudinary: image.jpg
✅ MongoDB query successful
```

---

### 10.2: Check Service Metrics

**Action:**
1. Click **"Metrics"** tab in your service dashboard
2. View charts showing:
   - **CPU Usage** - Should be low (<50% typically)
   - **Memory Usage** - Monitor for memory leaks
   - **Network Traffic** - Incoming/outgoing requests
   - **Response Times** - How fast your API responds

**What to watch for:**
- ✅ CPU: Low usage (<50%)
- ✅ Memory: Stable (not constantly increasing)
- ✅ Response Time: <500ms average
- ❌ CPU: 100% constant (service overloaded)
- ❌ Memory: Constantly increasing (memory leak)
- ❌ Response Time: >5 seconds (performance issue)

---

### 10.3: Set Up Log Retention (Optional)

**Action:**
1. Go to **"Settings"** tab
2. Find **"Log Retention"** or **"Logs"** section
3. Set retention period (e.g., 7 days)
4. This helps you review past errors

---

### 10.4: Monitor Service Health

**Action:**
1. Regularly check:
   - Service status (should be "Live")
   - Recent logs (should show activity)
   - Metrics (should be within normal ranges)
2. Set up alerts if available (paid plans)

**How often:**
- **First week:** Check daily
- **After that:** Check weekly or when issues occur

---

### 10.5: Troubleshoot Issues from Logs

**Common issues and what to look for:**

**Problem: Cloudinary Errors**
```
❌ Cloudinary upload error: Invalid API key
```
**Solution:** Check `CLOUDINARY_URL` environment variable

---

**Problem: MongoDB Connection Errors**
```
❌ MongoDB connection failed
```
**Solution:** Verify MongoDB Atlas connection string and network access

---

**Problem: Service Crashes**
```
❌ Application crashed
❌ Process exited with code 1
```
**Solution:** Check logs before crash, verify all environment variables

---

**Problem: High Memory Usage**
```
⚠️ Memory usage: 95%
```
**Solution:** Monitor for memory leaks, consider upgrading plan

---

**✅ Step 10 Complete Checklist:**
- [ ] Know how to access logs tab
- [ ] Know how to access metrics tab
- [ ] Set up keep-alive monitoring
- [ ] Understand what to look for in logs
- [ ] Know how to identify common issues
- [ ] Plan to check logs regularly

---

## 🎉 Complete Deployment Checklist

Before considering deployment complete, verify:

**Configuration:**
- [ ] Service name set
- [ ] Build command: `npm install`
- [ ] Start command: `node backend.js`
- [ ] Branch: `main`

**Environment Variables:**
- [ ] `CLOUDINARY_URL` set correctly
- [ ] `RENDER` = `true` (optional)

**Deployment:**
- [ ] Service deployed successfully
- [ ] Status shows "Live"
- [ ] No errors in build logs

**Verification:**
- [ ] `/healthz` endpoint works
- [ ] `/keepalive` endpoint works
- [ ] Cloudinary configured (check logs)
- [ ] MongoDB connected (check logs)

**Frontend:**
- [ ] `API_BASE` updated to Render URL
- [ ] Frontend pushed to GitHub
- [ ] Frontend can connect to backend

**Monitoring:**
- [ ] Keep-alive service configured
- [ ] Logs accessible and monitored
- [ ] Metrics being tracked

---

**🎊 Congratulations! Your backend is now live on Render.com!**

---

## 📞 Quick Troubleshooting Reference

| Issue | Check This |
|-------|-----------|
| Service won't start | Logs tab → Look for errors |
| Cloudinary not working | Environment variables → `CLOUDINARY_URL` |
| MongoDB errors | Logs → Connection string correct |
| Service sleeping | Keep-alive → Is it pinging? |
| High memory | Metrics tab → Memory usage |
| Build fails | Logs → npm install errors |

---

**Need help? Check the logs first! Most issues show error messages there.**

