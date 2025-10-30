# 🚀 Deployment Guide

## Local Development

### 1. Install Dependencies
```bash
cd "d:/New folder/invitation"
npm install
```

### 2. Run Locally

#### For Mobile (Recommended)
```bash
npm start
```
Then scan QR code with Expo Go app.

#### For Web Browser
```bash
npm run web
```
Opens at http://localhost:8081 or http://localhost:19006

### 3. Test Web Build
```bash
npm run build
```
This creates a production build in the `dist` folder.

---

## GitHub Setup

### 1. Initialize Git Repository
```bash
git init
git add .
git commit -m "Initial commit: Invitation Generator v2.0"
```

### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Name: `invitation-generator`
3. Description: "Beautiful invitation generator with 3D animations"
4. Keep it Public (for Vercel free tier)
5. Don't initialize with README (we already have one)
6. Click "Create repository"

### 3. Push to GitHub
```bash
git remote add origin https://github.com/YOUR_USERNAME/invitation-generator.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

---

## Vercel Deployment

### Method 1: Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit https://vercel.com
   - Sign up/Login with GitHub

2. **Import Project**
   - Click "Add New..." → "Project"
   - Select your GitHub repository
   - Click "Import"

3. **Configure Build Settings**
   - Framework Preset: **Other**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Environment Variables** (Optional)
   - None required for this app

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app will be live!

### Method 2: Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Y**
- Which scope? Select your account
- Link to existing project? **N**
- Project name? `invitation-generator`
- Directory? `./`
- Override settings? **N**

4. **Deploy to Production**
```bash
vercel --prod
```

---

## Post-Deployment

### 1. Custom Domain (Optional)
1. Go to your Vercel project
2. Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed

### 2. Update README
Add your live URL to README.md:
```markdown
## 🌐 Live Demo
Visit: https://your-app.vercel.app
```

### 3. Share Your App
- LinkedIn: https://www.linkedin.com/in/rushanhaque
- Instagram: https://www.instagram.com/rushanhaque
- GitHub: https://github.com/rushanhaque

---

## Continuous Deployment

Once connected to GitHub, Vercel automatically:
- ✅ Deploys on every push to `main`
- ✅ Creates preview deployments for PRs
- ✅ Runs build checks
- ✅ Provides deployment URLs

### Update Your App
```bash
# Make changes
git add .
git commit -m "Update: description of changes"
git push

# Vercel automatically deploys!
```

---

## Troubleshooting

### Build Fails on Vercel

**Issue**: Build command fails
**Solution**: 
```bash
# Locally test the build
npm run build

# If it works locally, check Vercel logs
# Ensure all dependencies are in package.json
```

### App Doesn't Load

**Issue**: White screen or errors
**Solution**:
- Check browser console for errors
- Verify `dist` folder was created
- Check Vercel deployment logs

### Missing Features on Web

**Issue**: Some mobile features don't work
**Solution**: 
- Image picker: Use web file input
- Media library: Use download instead
- Camera: Not available on web

### Slow Loading

**Issue**: App takes time to load
**Solution**:
- Enable Vercel's Edge Network
- Use image optimization
- Enable caching headers

---

## Environment-Specific Code

Some features work differently on web:

### Image Picker
```javascript
// Mobile: expo-image-picker
// Web: HTML file input

if (Platform.OS === 'web') {
  // Use file input
} else {
  // Use expo-image-picker
}
```

### File Download
```javascript
// Mobile: Save to gallery
// Web: Download file

if (Platform.OS === 'web') {
  // Trigger download
} else {
  // Save to media library
}
```

---

## Performance Optimization

### 1. Enable Compression
Vercel automatically enables gzip/brotli compression.

### 2. Image Optimization
Use Vercel's image optimization:
```javascript
import Image from 'next/image'
```

### 3. Code Splitting
Expo automatically splits code for web.

### 4. Caching
Vercel automatically caches static assets.

---

## Monitoring

### Vercel Analytics
1. Go to your project on Vercel
2. Analytics tab
3. View traffic, performance, etc.

### Error Tracking
Consider adding:
- Sentry for error tracking
- Google Analytics for usage
- Vercel Analytics (built-in)

---

## Updating Dependencies

```bash
# Check for updates
npm outdated

# Update all
npm update

# Update Expo
expo upgrade

# Test locally
npm run web

# Push to GitHub (auto-deploys)
git push
```

---

## Rollback Deployment

If something goes wrong:

1. Go to Vercel Dashboard
2. Select your project
3. Deployments tab
4. Find previous working deployment
5. Click "..." → "Promote to Production"

---

## Custom Configuration

### Add Environment Variables
1. Vercel Dashboard → Settings → Environment Variables
2. Add variables
3. Redeploy

### Custom Headers
Create `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

---

## Cost

### Vercel Free Tier Includes:
- ✅ Unlimited deployments
- ✅ 100GB bandwidth/month
- ✅ Automatic HTTPS
- ✅ Custom domains
- ✅ Preview deployments
- ✅ Analytics (basic)

**Perfect for this project!**

---

## Support

### Issues?
- Check Vercel logs
- Review build output
- Test locally first
- Check Vercel status page

### Contact
- Email: rushanulhaque@gmail.com
- GitHub: https://github.com/rushanhaque
- LinkedIn: https://www.linkedin.com/in/rushanhaque

---

## Quick Commands Reference

```bash
# Local development
npm start              # Mobile dev server
npm run web           # Web dev server
npm run build         # Production build

# Git commands
git add .
git commit -m "message"
git push

# Vercel commands
vercel                # Deploy preview
vercel --prod        # Deploy production
vercel logs          # View logs
vercel domains       # Manage domains
```

---

**Developed with ❤️ by Rushan Haque**

Ready to deploy? Follow the steps above! 🚀
