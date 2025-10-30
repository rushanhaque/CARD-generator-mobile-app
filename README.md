# Invitation Generator Mobile App 🎨✨

A feature-rich, beautifully animated mobile application for creating stunning, customizable invitations and greeting cards. Built with React Native and Expo with modern 3D effects and smooth animations.

**Developed with ❤️ by Rushan Haque**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/rushanhaque)
[![Instagram](https://img.shields.io/badge/Instagram-Follow-E4405F)](https://www.instagram.com/rushanhaque)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717)](https://github.com/rushanhaque)
[![Email](https://img.shields.io/badge/Email-Contact-EA4335)](mailto:rushanulhaque@gmail.com)

## ✨ New Features

### 🎭 Enhanced UI/UX
- **3D Card Effects** - Interactive cards with depth and shadow
- **Smooth Animations** - Fade, slide, and spring animations throughout
- **Floating Particles** - Animated decorative elements
- **Gradient Backgrounds** - Beautiful multi-color gradients
- **Interactive Buttons** - Press animations and visual feedback
- **Modern Color Scheme** - Updated purple/blue gradient theme

### 👤 Developer Footer
- Compact footer on all screens
- Direct social media links (LinkedIn, Instagram, GitHub)
- Email contact button
- Elegant dark gradient design

## Features

### 🎨 Multiple Templates
- **Wedding** - Elegant wedding invitations
- **Birthday** - Fun birthday party cards
- **Baby Shower** - Sweet baby celebration invites
- **Anniversary** - Romantic anniversary cards
- **Graduation** - Academic achievement celebrations
- **Engagement** - Beautiful engagement announcements
- **Housewarming** - New home celebration invites
- **Holiday Party** - Festive holiday greetings

### 🎭 8+ Beautiful Themes
- **Elegant** - Classic and sophisticated
- **Modern** - Clean and contemporary
- **Romantic** - Soft and dreamy
- **Vintage** - Timeless and nostalgic
- **Tropical** - Vibrant and fun
- **Minimalist** - Simple and refined
- **Festive** - Celebratory and bright
- **Rustic** - Natural and warm

### ✨ Extensive Customization Options

#### Colors
- Primary color picker
- Secondary color picker
- Background color picker
- Accent color picker
- 30+ preset colors
- Custom hex color input

#### Typography
- Multiple font families (Serif, Sans-serif, Cursive, Monospace)
- Adjustable heading size (20-48px)
- Adjustable body text size (12-24px)
- Adjustable detail text size
- Text alignment (Left, Center, Right)

#### Layout & Design
- Border width control (0-10px)
- Border radius control (0-50px)
- Padding adjustment (10-50px)
- Opacity control (10-100%)
- 7+ border styles
- Decorative patterns

#### Content
- Custom heading text
- Multiple event-specific fields
- Custom message area
- Image upload support
- Photo editing and cropping

### 📤 Export Options
- **JPEG Export** - Save high-quality images to gallery
- **PDF Export** - Create printable PDF documents
- **Share** - Share directly via social media and messaging apps
- **Gallery Save** - Automatic save to device photo library

### 🎯 User Experience
- Intuitive step-by-step workflow
- Real-time preview
- Interactive UI with smooth animations
- Responsive design
- Easy navigation

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Emulator

### Setup

1. **Install dependencies:**
```bash
npm install
```

2. **Start the development server:**
```bash
npm start
```

3. **Run on your device:**
   - Scan the QR code with Expo Go app (iOS/Android)
   - Or press `a` for Android emulator
   - Or press `i` for iOS simulator

## Project Structure

```
invitation/
├── App.js                          # Main app entry point
├── app.json                        # Expo configuration
├── package.json                    # Dependencies
├── babel.config.js                 # Babel configuration
├── src/
│   ├── screens/
│   │   ├── HomeScreen.js          # Landing page
│   │   ├── TemplateGalleryScreen.js  # Template selection
│   │   ├── ThemeSelectionScreen.js   # Theme picker
│   │   ├── EditorScreen.js        # Main editor
│   │   └── PreviewScreen.js       # Preview & export
│   ├── components/
│   │   ├── InvitationPreview.js   # Invitation renderer
│   │   ├── ColorPickerModal.js    # Color selection
│   │   ├── FontSelector.js        # Font picker
│   │   └── BorderStyleSelector.js # Border styles
│   └── data/
│       └── themes.js              # Theme & template data
└── assets/                        # Images and icons
```

## Usage Guide

### Creating an Invitation

1. **Choose Template**
   - Select from 8 different event types
   - Each template has specific fields

2. **Select Theme**
   - Browse 8+ pre-designed themes
   - Preview color combinations

3. **Design Your Invitation**
   - Fill in event details
   - Add custom heading and message
   - Upload photos (optional)
   - Customize colors
   - Adjust typography
   - Fine-tune layout

4. **Preview & Export**
   - Review final design
   - Export as JPEG or PDF
   - Share directly to social media
   - Save to gallery

### Customization Tips

- **Colors**: Use the color picker for brand matching or theme consistency
- **Typography**: Larger headings for impact, readable body text
- **Images**: Use high-quality photos for best results
- **Borders**: Match border style to your theme
- **Patterns**: Subtle patterns add texture without overwhelming

## Technical Details

### Built With
- **React Native** - Mobile framework
- **Expo** - Development platform
- **React Navigation** - Navigation library
- **Expo Linear Gradient** - Gradient backgrounds
- **Expo Image Picker** - Photo selection
- **Expo Print** - PDF generation
- **Expo Sharing** - Share functionality
- **Expo Media Library** - Gallery access
- **React Native View Shot** - Screenshot capture

### Permissions Required
- **Camera Roll** - To save invitations
- **Photo Library** - To add images
- **Storage** - To export files

## Features in Detail

### Color Customization
- 30+ preset colors covering all major hues
- Custom hex color input for exact matching
- Real-time preview of color changes
- Separate controls for primary, secondary, background, and accent colors

### Typography System
- System fonts for compatibility
- Serif for elegance
- Sans-serif for modern look
- Cursive for romantic feel
- Monospace for unique style

### Export System
- High-quality JPEG (1.0 quality)
- PDF with embedded images
- Maintains aspect ratio
- Optimized file sizes

### Template System
Each template includes:
- Custom icon
- Relevant fields
- Default heading
- Default message
- Field validation

## Troubleshooting

### Common Issues

**App won't start:**
```bash
# Clear cache and reinstall
rm -rf node_modules
npm install
npm start -- --clear
```

**Images not saving:**
- Check storage permissions
- Ensure sufficient storage space
- Try restarting the app

**PDF export fails:**
- Check file system permissions
- Ensure stable internet connection
- Try exporting as JPEG first

**Colors not applying:**
- Use valid hex format (#RRGGBB)
- Refresh preview
- Check theme compatibility

## Future Enhancements

- [ ] More templates (Corporate, Religious, etc.)
- [ ] Animation effects
- [ ] Stickers and emojis library
- [ ] Text effects (shadow, outline)
- [ ] Multiple page invitations
- [ ] Template marketplace
- [ ] Cloud save/sync
- [ ] Collaboration features
- [ ] QR code integration
- [ ] RSVP tracking

## Performance

- Optimized rendering with React.memo
- Lazy loading for images
- Efficient state management
- Smooth animations at 60fps
- Small bundle size

## Accessibility

- High contrast mode support
- Large touch targets
- Screen reader compatible
- Keyboard navigation
- Clear visual feedback

## License

This project is open source and available under the MIT License.

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact support team
- Check documentation

## Credits

- Icons by Expo Vector Icons
- Fonts from system defaults
- Gradients by Expo Linear Gradient

---

**Made with ❤️ for creating beautiful invitations**
