# 🚀 Deployment Guide for Bella Vista Restaurant

This guide covers multiple deployment options for your full-stack restaurant website.

## 📋 Pre-Deployment Checklist

- [ ] Backend runs locally (`go run main.go`)
- [ ] Frontend runs locally (`npm start`)
- [ ] API calls work between frontend and backend
- [ ] All features tested (menu, reservations, navigation)

## 🎯 Recommended Deployment Stack

**Frontend:** Netlify (Free tier available)
**Backend:** Railway or Render (Free tier available)
**Database:** SQLite (included in backend)

---

## 🔵 Option 1: Netlify + Railway (Recommended)

### Step 1: Deploy Backend to Railway

1. **Create Railway account:** https://railway.app
2. **Install Railway CLI:**
   ```bash
   npm install -g @railway/cli
   ```
3. **Login and deploy:**
   ```bash
   cd backend
   railway login
   railway new
   railway up
   ```
4. **Add domain:** Railway will provide a URL like `https://your-app.railway.app`

### Step 2: Deploy Frontend to Netlify

1. **Build the frontend:**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to https://netlify.com
   - Drag & drop the `build` folder
   - Or connect your GitHub repo for automatic deployments

3. **Update environment variables:**
   - In Netlify dashboard, go to Site Settings > Environment Variables
   - Add: `REACT_APP_API_URL` = `https://your-railway-backend-url`

---

## 🔴 Option 2: Vercel + Render

### Step 1: Deploy Backend to Render

1. **Create Render account:** https://render.com
2. **Create new Web Service:**
   - Connect your GitHub repo
   - Build Command: `go build -o main .`
   - Start Command: `./main`
   - Environment: Add `PORT=10000`

### Step 2: Deploy Frontend to Vercel

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```
2. **Deploy:**
   ```bash
   cd frontend
   vercel
   ```
3. **Set environment variable:**
   ```bash
   vercel env add REACT_APP_API_URL
   # Enter your Render backend URL
   ```

---

## 🟢 Option 3: Heroku (Full Stack)

### Prepare for Heroku

1. **Install Heroku CLI:** https://devcenter.heroku.com/articles/heroku-cli
2. **Create apps:**
   ```bash
   # Backend
   cd backend
   heroku create your-restaurant-api
   
   # Frontend  
   cd ../frontend
   heroku create your-restaurant-app
   ```

### Deploy Backend

1. **Add Procfile:**
   ```bash
   cd backend
   echo "web: ./main" > Procfile
   ```
2. **Deploy:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   heroku git:remote -a your-restaurant-api
   git push heroku main
   ```

### Deploy Frontend

1. **Add buildpacks:**
   ```bash
   cd frontend
   heroku buildpacks:set mars/create-react-app
   ```
2. **Set environment:**
   ```bash
   heroku config:set REACT_APP_API_URL=https://your-restaurant-api.herokuapp.com
   ```
3. **Deploy:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   heroku git:remote -a your-restaurant-app
   git push heroku main
   ```

---

## 🐳 Option 4: Docker + DigitalOcean/AWS

### Create Docker Compose

A `docker-compose.yml` file has been created in the root directory.

### Deploy with Docker

1. **Build and run locally:**
   ```bash
   docker-compose up --build
   ```

2. **Deploy to DigitalOcean App Platform:**
   - Create account at https://digitalocean.com
   - Use App Platform with GitHub integration
   - Configure environment variables

3. **Deploy to AWS ECS:**
   - Push images to ECR
   - Create ECS service with load balancer

---

## 🔧 Environment Variables Setup

### Frontend (.env.production)
```bash
REACT_APP_API_URL=https://your-backend-domain.com
GENERATE_SOURCEMAP=false
```

### Backend (Production)
```bash
PORT=8080
GIN_MODE=release
```

---

## 🎯 Quick Deploy Commands

### Build Frontend for Production
```bash
cd frontend
npm run build
# Creates optimized build in 'build' folder
```

### Test Production Build Locally
```bash
# Serve built files
npx serve -s build -l 3000
```

### Build Backend Binary
```bash
cd backend
go build -o restaurant-server .
# Creates executable binary
```

---

## 🚀 One-Click Deployment Links

### Deploy Frontend to Netlify
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/yourusername/restaurant-frontend)

### Deploy Backend to Railway
[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/new/template)

### Deploy to Vercel
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/restaurant-frontend)

---

## 📊 Post-Deployment Checklist

- [ ] Frontend loads without errors
- [ ] Menu items display from API
- [ ] Reservation form submits successfully
- [ ] Navigation works on all pages
- [ ] Mobile responsiveness works
- [ ] API endpoints return correct data
- [ ] CORS is properly configured
- [ ] HTTPS is enabled (automatically with most platforms)

---

## 🐛 Common Deployment Issues & Solutions

### Issue: CORS Errors
**Solution:** Update backend CORS configuration to include your frontend domain
```go
config.AllowOrigins = []string{"https://your-frontend-domain.netlify.app"}
```

### Issue: API Calls Fail
**Solution:** Check environment variables
```bash
# In browser console
console.log(process.env.REACT_APP_API_URL)
```

### Issue: Routes Don't Work on Refresh
**Solution:** Configure redirects in `netlify.toml` (already included)

### Issue: Build Fails
**Solution:** 
- Check Node.js version (use 18+)
- Clear npm cache: `npm cache clean --force`
- Delete node_modules: `rm -rf node_modules && npm install`

---

## 💰 Cost Estimates

### Free Tier Deployments
- **Netlify:** 100GB bandwidth, 300 build minutes/month
- **Railway:** $5 credit monthly (good for small apps)
- **Render:** 750 hours/month static sites
- **Vercel:** 100GB bandwidth, unlimited static sites

### Paid Options (per month)
- **Netlify Pro:** $19/month
- **Railway:** Pay per usage (~$5-20)
- **Heroku:** $7/month per dyno
- **DigitalOcean:** $4-25/month

---

## 🔗 Useful Links

- [Netlify Documentation](https://docs.netlify.com/)
- [Railway Documentation](https://docs.railway.app/)
- [Vercel Documentation](https://vercel.com/docs)
- [Render Documentation](https://render.com/docs)
- [Go Deployment Guide](https://golang.org/doc/tutorial/web-service-gin)

---

## 🎉 Success! Your Restaurant Website is Live

Once deployed, your website will be accessible worldwide with:
- ✅ Professional domain name
- ✅ HTTPS encryption
- ✅ Global CDN
- ✅ Automatic scaling
- ✅ Mobile optimization

**Next Steps:**
1. Set up custom domain name
2. Configure analytics (Google Analytics)
3. Set up monitoring and alerts
4. Add backup strategies
5. Implement CI/CD for automatic deployments
