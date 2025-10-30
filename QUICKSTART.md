# Quick Start Guide

Get your Invitation Generator app running in minutes!

## Prerequisites

Before you begin, ensure you have:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** package manager
- **Expo CLI** - Install with: `npm install -g expo-cli`
- A smartphone with **Expo Go** app installed ([iOS](https://apps.apple.com/app/expo-go/id982107779) | [Android](https://play.google.com/store/apps/details?id=host.exp.exponent))

## Installation Steps

### 1. Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including:
- React Native
- Expo SDK
- Navigation libraries
- Image processing tools
- Export utilities

### 2. Start Development Server

```bash
npm start
```

Or alternatively:
```bash
expo start
```

This will:
- Start the Metro bundler
- Open Expo DevTools in your browser
- Display a QR code

### 3. Run on Your Device

#### Option A: Physical Device (Recommended)
1. Install **Expo Go** app on your phone
2. Scan the QR code from the terminal/browser
3. App will load on your device

#### Option B: iOS Simulator (Mac only)
```bash
npm run ios
```

#### Option C: Android Emulator
```bash
npm run android
```

## First Run

When the app launches, you'll see:

1. **Home Screen** - Welcome page with features overview
2. Click **"Create New Invitation"**
3. **Choose Template** - Select event type (Wedding, Birthday, etc.)
4. **Select Theme** - Pick a color scheme
5. **Design Editor** - Customize your invitation
6. **Preview & Export** - Save or share your creation

## Quick Test

To quickly test the app:

1. Select **"Birthday"** template
2. Choose **"Modern"** theme
3. Fill in:
   - Name: "John Doe"
   - Age: "30"
   - Date: "December 25, 2024"
   - Time: "7:00 PM"
   - Venue: "123 Party Street"
4. Click **"Preview & Export"**
5. Try **"Save as JPEG"**

## Troubleshooting

### "Module not found" error
```bash
rm -rf node_modules
npm install
```

### Metro bundler issues
```bash
npm start -- --clear
```

### Expo Go connection problems
- Ensure phone and computer are on same WiFi
- Try disabling VPN
- Restart Expo DevTools

### Permission errors
- Allow camera/storage permissions when prompted
- Check device settings if permissions were denied

## Development Tips

### Hot Reload
- Shake device or press `Ctrl+M` (Android) / `Cmd+D` (iOS)
- Enable "Fast Refresh" for instant updates

### Debug Menu
- Shake device to open developer menu
- Access console logs and debugging tools

### Testing on Multiple Devices
- Scan same QR code on multiple devices
- All will update simultaneously

## Project Structure Overview

```
invitation/
├── App.js              # Entry point
├── src/
│   ├── screens/        # All app screens
│   ├── components/     # Reusable components
│   └── data/          # Themes and templates
└── assets/            # Images and icons
```

## Next Steps

1. **Explore Templates** - Try all 8 event types
2. **Customize Themes** - Experiment with colors
3. **Add Images** - Upload photos to invitations
4. **Test Export** - Try JPEG and PDF formats
5. **Share** - Send invitations to friends

## Common Commands

```bash
# Start development server
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Clear cache
npm start -- --clear

# Install new package
npm install <package-name>

# Check for updates
expo upgrade
```

## Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review error messages in terminal
- Check Expo documentation: https://docs.expo.dev
- Ensure all dependencies are installed

## Performance Tips

- Close other apps to free memory
- Use physical device for best performance
- Disable unnecessary background processes
- Keep Expo Go app updated

---

**Ready to create beautiful invitations! 🎉**
