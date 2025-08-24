# 🚀 Quick Deployment Guide - TL;DR

## Fastest Way to Deploy (5 minutes)

### 1. Prepare Your App
```bash
./deploy.sh
```

### 2. Deploy Backend (Railway - Recommended)
```bash
cd backend
npx @railway/cli@latest login
npx @railway/cli@latest up
```
☝️ Copy the URL Railway gives you (e.g., `https://your-app.railway.app`)

### 3. Deploy Frontend (Netlify)
1. Go to [netlify.com](https://netlify.com)
2. Drag & drop the `frontend/build` folder
3. In Site Settings → Environment Variables, add:
   - Key: `REACT_APP_API_URL`
   - Value: Your Railway URL from step 2

### 4. Done! 🎉

---

## Alternative: GitHub + Auto-Deploy

### 1. Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/restaurant-website
git push -u origin main
```

### 2. Connect to Deployment Platforms
- **Frontend:** Connect GitHub to Netlify/Vercel
- **Backend:** Connect GitHub to Railway/Render

### 3. Set Environment Variables
- Add `REACT_APP_API_URL` in your frontend platform
- Deployments will happen automatically on git push

---

## 💡 Pro Tips

- **Free Hosting:** Netlify (frontend) + Railway (backend) = $0/month for small apps
- **Custom Domain:** Add your domain in platform settings
- **HTTPS:** Automatically enabled on all modern platforms
- **Monitoring:** All platforms provide built-in analytics

---

## 📞 Need Help?

Common issues and solutions in `DEPLOYMENT.md`

**Your restaurant website will be live at:**
- Frontend: `https://your-site.netlify.app`
- Backend API: `https://your-app.railway.app`
