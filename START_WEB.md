# 🌐 Start Web Preview Locally

## Quick Start (Choose One Method)

### Method 1: Automatic (Recommended)
```bash
cd "d:/New folder/invitation"
echo Y | npx expo start --web
```

### Method 2: Manual
```bash
cd "d:/New folder/invitation"
npx expo start --web
```
When prompted "Use port 8082 instead?", press **Y** and **Enter**

### Method 3: Specific Port
```bash
cd "d:/New folder/invitation"
npx expo start --web --port 19000
```

---

## What Happens Next?

1. **Metro Bundler starts** (takes 30-60 seconds)
2. **Browser opens automatically** at:
   - http://localhost:8082 (or 19000)
   - Or http://localhost:19006

3. **App loads** with:
   - ✨ All animations
   - 🎨 3D effects
   - 👤 Your footer with social links
   - 💫 Full functionality

---

## If Browser Doesn't Open

Manually visit:
- http://localhost:8082
- http://localhost:19000
- http://localhost:19006

---

## Troubleshooting

### Port Already in Use
```bash
# Kill process on port 8081
npx kill-port 8081

# Or use different port
npx expo start --web --port 19000
```

### Metro Bundler Errors
```bash
# Clear cache
npx expo start --web --clear

# Or reset everything
rm -rf node_modules
npm install
npx expo start --web
```

### White Screen
- Wait 60 seconds for initial build
- Check browser console (F12)
- Refresh page (Ctrl+R)

### Slow Loading
- First load takes 1-2 minutes
- Subsequent loads are faster
- Enable Fast Refresh in browser

---

## Features Available on Web

✅ All screens and navigation
✅ Animations and 3D effects
✅ Footer with social links
✅ Theme and template selection
✅ Color customization
✅ Text editing
✅ Preview generation

⚠️ Limited Features:
- Image upload (uses web file picker)
- PDF export (uses browser download)
- Gallery save (downloads file instead)

---

## Development Tips

### Hot Reload
- Save files to see changes instantly
- No need to refresh browser

### Debug Mode
- Press F12 for Developer Tools
- Check Console for errors
- Inspect Elements

### Performance
- Use Chrome/Edge for best performance
- Close other tabs
- Disable browser extensions if slow

---

## Next Steps

### 1. Test Locally
```bash
npx expo start --web
```

### 2. Build for Production
```bash
npx expo export --platform web
```
Creates optimized build in `dist` folder

### 3. Deploy to Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or use Vercel Dashboard (see DEPLOYMENT.md)

---

## Browser Compatibility

✅ **Recommended:**
- Chrome 90+
- Edge 90+
- Firefox 88+
- Safari 14+

⚠️ **Limited Support:**
- IE 11 (not supported)
- Older mobile browsers

---

## Keyboard Shortcuts

- **Ctrl+R** - Reload
- **Ctrl+Shift+R** - Hard reload
- **F12** - Developer tools
- **Ctrl+Shift+C** - Inspect element

---

## Common Issues

### "Cannot find module"
```bash
npm install
npx expo start --web --clear
```

### "Port in use"
```bash
npx expo start --web --port 19000
```

### "Build failed"
```bash
# Check for syntax errors
# Clear cache
npx expo start --web --clear
```

---

## Mobile View in Browser

1. Open Developer Tools (F12)
2. Click device icon (Ctrl+Shift+M)
3. Select mobile device
4. Refresh page

---

## Production Preview

To see production build locally:

```bash
# Build
npx expo export --platform web

# Serve
npx serve dist

# Visit
http://localhost:3000
```

---

## Environment

- **Development**: http://localhost:8082
- **Production**: https://your-app.vercel.app
- **Preview**: Vercel preview URLs

---

## Support

Issues? Check:
1. Node.js version (14+)
2. npm version (6+)
3. Internet connection
4. Firewall settings

Contact:
- Email: rushanulhaque@gmail.com
- GitHub: https://github.com/rushanhaque

---

**Ready to start?**

```bash
cd "d:/New folder/invitation"
npx expo start --web
```

Press **Y** when prompted about port, then wait for browser to open!

---

**Developed with ❤️ by Rushan Haque**
