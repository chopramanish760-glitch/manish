# 🔐 Render.com Environment Variables - Complete List

Copy-paste ready list of all environment variables for Render.com deployment.

---

## ✅ REQUIRED Variables (Must Add)

### 1. CLOUDINARY_URL
```
Key: CLOUDINARY_URL
Value: cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd
```

---

## ⚠️ RECOMMENDED Variables (For Security)

### 2. MONGODB_URI
```
Key: MONGODB_URI
Value: mongodb+srv://p70242086_db_user:jG9ebjpdn8PQRLyw@cluster0.zpbbagj.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=Cluster0
```

### 3. ADMIN_USER
```
Key: ADMIN_USER
Value: Chopraa03
```

### 4. ADMIN_PASS
```
Key: ADMIN_PASS
Value: Manish@2000
```

---

## 📋 OPTIONAL Variables (Nice to Have)

### 5. RENDER
```
Key: RENDER
Value: true
```

---

## 📊 Quick Copy-Paste Table

| Key | Value |
|-----|-------|
| **CLOUDINARY_URL** | `cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd` |
| **MONGODB_URI** | `mongodb+srv://p70242086_db_user:jG9ebjpdn8PQRLyw@cluster0.zpbbagj.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=Cluster0` |
| **ADMIN_USER** | `Chopraa03` |
| **ADMIN_PASS** | `Manish@2000` |
| **RENDER** | `true` |

---

## 🎯 Minimum Setup (Required Only)

If you want the bare minimum to get started:

| Key | Value |
|-----|-------|
| **CLOUDINARY_URL** | `cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd` |

---

## ✅ Recommended Setup (For Security)

For better security, add all of these:

| Key | Value |
|-----|-------|
| **CLOUDINARY_URL** | `cloudinary://149519962886185:0lUh8GcUOrBQt-uOCBRGdoHIMUM@dazcrwazd` |
| **MONGODB_URI** | `mongodb+srv://p70242086_db_user:jG9ebjpdn8PQRLyw@cluster0.zpbbagj.mongodb.net/campus_event_hub?retryWrites=true&w=majority&appName=Cluster0` |
| **ADMIN_USER** | `Chopraa03` |
| **ADMIN_PASS** | `Manish@2000` |
| **RENDER** | `true` |

---

## 📝 How to Add in Render.com

1. Go to your service dashboard
2. Click **"Environment"** tab
3. Click **"Add Environment Variable"** for each variable
4. Copy the **Key** and **Value** from above
5. Paste and click **"Save"** or **"Add"**
6. Repeat for all variables
7. Service will auto-restart after saving

---

## ⚠️ Important Notes

- **No spaces** before or after values
- **Case-sensitive** - Use exact capitalization shown
- **Required:** Only `CLOUDINARY_URL` is absolutely required
- **Recommended:** Adding MongoDB and Admin variables is more secure
- **Fallback:** If you don't add optional variables, code uses default values

---

## 🔍 Verification

After adding variables, check logs for:

**Cloudinary:**
```
☁️ Cloudinary configured from CLOUDINARY_URL
```

**MongoDB:**
```
✅ MongoDB connected
```

**Admin:**
```
🔧 Admin: Chopraa03
```

---

## 🎊 That's It!

Add these variables in Render.com and your backend will be fully configured! 🚀

