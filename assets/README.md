# Assets Folder

This folder contains app assets like icons and splash screens.

## Required Assets

For a production build, you'll need to add the following files:

- **icon.png** - App icon (1024x1024px)
- **splash.png** - Splash screen (1242x2436px)
- **adaptive-icon.png** - Android adaptive icon (1024x1024px)
- **favicon.png** - Web favicon (48x48px)

## Temporary Development

During development, Expo will use default placeholder assets if these files are missing.

## Creating Assets

You can create these assets using:
- Design tools (Figma, Adobe XD, Sketch)
- Online generators (makeappicon.com, appicon.co)
- Expo's asset generation tools

## Asset Guidelines

### App Icon (icon.png)
- Size: 1024x1024px
- Format: PNG with transparency
- No rounded corners (handled by OS)
- Clear, simple design

### Splash Screen (splash.png)
- Size: 1242x2436px (iPhone X resolution)
- Format: PNG
- Centered logo/branding
- Background color matches app.json

### Adaptive Icon (adaptive-icon.png)
- Size: 1024x1024px
- Format: PNG with transparency
- Safe zone: 66% of canvas
- Works with various shapes

### Favicon (favicon.png)
- Size: 48x48px
- Format: PNG
- Simple, recognizable at small size
