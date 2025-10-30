# Development Guide

## Getting Started

### Environment Setup

1. **Install Node.js**
   - Download from [nodejs.org](https://nodejs.org/)
   - Verify: `node --version` (should be v14+)

2. **Install Expo CLI**
   ```bash
   npm install -g expo-cli
   ```

3. **Clone and Install**
   ```bash
   cd invitation
   npm install
   ```

4. **Start Development**
   ```bash
   npm start
   ```

## Project Architecture

### Directory Structure

```
invitation/
├── App.js                      # Root component with navigation
├── app.json                    # Expo configuration
├── package.json                # Dependencies
├── babel.config.js             # Babel settings
│
├── src/
│   ├── screens/               # Screen components
│   │   ├── HomeScreen.js
│   │   ├── TemplateGalleryScreen.js
│   │   ├── ThemeSelectionScreen.js
│   │   ├── EditorScreen.js
│   │   └── PreviewScreen.js
│   │
│   ├── components/            # Reusable components
│   │   ├── InvitationPreview.js
│   │   ├── ColorPickerModal.js
│   │   ├── FontSelector.js
│   │   └── BorderStyleSelector.js
│   │
│   └── data/                  # Static data
│       └── themes.js
│
└── assets/                    # Images, fonts, icons
```

### Component Hierarchy

```
App (NavigationContainer)
├── HomeScreen
├── TemplateGalleryScreen
├── ThemeSelectionScreen
├── EditorScreen
│   ├── InvitationPreview
│   ├── ColorPickerModal
│   ├── FontSelector
│   └── BorderStyleSelector
└── PreviewScreen
    └── InvitationPreview
```

## Key Technologies

### Core Stack
- **React Native** - Mobile framework
- **Expo** - Development platform
- **React Navigation** - Routing

### UI Libraries
- **Expo Linear Gradient** - Gradient backgrounds
- **Expo Vector Icons** - Icon library
- **React Native Gesture Handler** - Touch gestures
- **React Native Reanimated** - Animations

### Export & Media
- **Expo Image Picker** - Photo selection
- **Expo Media Library** - Gallery access
- **Expo File System** - File operations
- **Expo Print** - PDF generation
- **Expo Sharing** - Share functionality
- **React Native View Shot** - Screenshot capture

## Development Workflow

### 1. Creating New Screens

```javascript
// src/screens/NewScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NewScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>New Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
```

Add to navigation in `App.js`:
```javascript
<Stack.Screen name="NewScreen" component={NewScreen} />
```

### 2. Adding New Templates

Edit `src/data/themes.js`:
```javascript
{
  id: 'new-template',
  name: 'New Template',
  icon: '🎉',
  fields: ['field1', 'field2'],
  defaultHeading: 'Default Heading',
  defaultMessage: 'Default message',
}
```

### 3. Creating New Themes

```javascript
{
  id: 'new-theme',
  name: 'New Theme',
  description: 'Description',
  primaryColor: '#000000',
  secondaryColor: '#ffffff',
  accentColor: '#cccccc',
  backgroundColor: '#f0f0f0',
  fontFamily: 'sans-serif',
  borderStyle: 'solid',
  pattern: 'geometric',
}
```

### 4. Adding Components

```javascript
// src/components/NewComponent.js
import React from 'react';
import { View, Text } from 'react-native';

export default function NewComponent({ prop1, prop2 }) {
  return (
    <View>
      <Text>{prop1}</Text>
    </View>
  );
}
```

## State Management

### Current Approach
- Local state with `useState`
- Props drilling for data flow
- Route params for navigation data

### State Flow Example
```javascript
// EditorScreen.js
const [invitationData, setInvitationData] = useState({
  heading: '',
  message: '',
  fields: {},
  image: null,
});

// Pass to preview
navigation.navigate('Preview', { invitationData });
```

### Future Improvements
- Context API for global state
- Redux for complex state
- AsyncStorage for persistence

## Styling Guidelines

### Style Organization
```javascript
const styles = StyleSheet.create({
  // Container styles
  container: { flex: 1 },
  
  // Layout styles
  row: { flexDirection: 'row' },
  
  // Component styles
  button: { padding: 15 },
  
  // Text styles
  title: { fontSize: 24 },
});
```

### Color Palette
```javascript
const colors = {
  primary: '#6366f1',
  secondary: '#8b5cf6',
  accent: '#d946ef',
  background: '#f8f9fa',
  text: '#1a202c',
  textLight: '#718096',
  border: '#e2e8f0',
};
```

### Spacing System
```javascript
const spacing = {
  xs: 5,
  sm: 10,
  md: 15,
  lg: 20,
  xl: 30,
};
```

## Testing

### Manual Testing Checklist
- [ ] Template selection works
- [ ] Theme selection works
- [ ] All input fields accept data
- [ ] Color picker functions
- [ ] Image upload works
- [ ] Preview renders correctly
- [ ] JPEG export saves to gallery
- [ ] PDF export creates file
- [ ] Share functionality works
- [ ] Navigation flows smoothly

### Device Testing
- [ ] iOS phone
- [ ] Android phone
- [ ] iOS tablet
- [ ] Android tablet
- [ ] Different screen sizes

### Performance Testing
- [ ] Smooth scrolling
- [ ] Fast navigation
- [ ] Quick export
- [ ] No memory leaks
- [ ] Efficient rendering

## Debugging

### Common Issues

**Metro bundler won't start:**
```bash
npx react-native start --reset-cache
```

**Module resolution errors:**
```bash
rm -rf node_modules
npm install
```

**iOS build issues:**
```bash
cd ios
pod install
cd ..
```

**Android build issues:**
```bash
cd android
./gradlew clean
cd ..
```

### Debug Tools

**React Native Debugger:**
```bash
npm install -g react-native-debugger
```

**Flipper:**
- Built-in debugging tool
- Network inspector
- Layout inspector
- Logs viewer

**Console Logs:**
```javascript
console.log('Debug:', variable);
console.warn('Warning:', issue);
console.error('Error:', error);
```

## Performance Optimization

### Best Practices

1. **Use React.memo for components**
```javascript
export default React.memo(InvitationPreview);
```

2. **Optimize images**
```javascript
<Image 
  source={{ uri }} 
  resizeMode="cover"
  style={{ width: 100, height: 100 }}
/>
```

3. **Lazy load heavy components**
```javascript
const HeavyComponent = React.lazy(() => import('./Heavy'));
```

4. **Use FlatList for lists**
```javascript
<FlatList
  data={items}
  renderItem={renderItem}
  keyExtractor={item => item.id}
/>
```

5. **Avoid inline functions**
```javascript
// Bad
<Button onPress={() => handlePress()} />

// Good
<Button onPress={handlePress} />
```

## Building for Production

### iOS Build

1. **Configure app.json**
```json
{
  "ios": {
    "bundleIdentifier": "com.yourcompany.invitation",
    "buildNumber": "1.0.0"
  }
}
```

2. **Build**
```bash
expo build:ios
```

### Android Build

1. **Configure app.json**
```json
{
  "android": {
    "package": "com.yourcompany.invitation",
    "versionCode": 1
  }
}
```

2. **Build**
```bash
expo build:android
```

### Publishing Updates

```bash
expo publish
```

## Code Style

### Naming Conventions
- **Components:** PascalCase (`HomeScreen.js`)
- **Functions:** camelCase (`handlePress`)
- **Constants:** UPPER_SNAKE_CASE (`MAX_SIZE`)
- **Files:** PascalCase for components, camelCase for utilities

### Import Order
```javascript
// 1. React imports
import React, { useState } from 'react';

// 2. React Native imports
import { View, Text } from 'react-native';

// 3. Third-party imports
import { LinearGradient } from 'expo-linear-gradient';

// 4. Local imports
import InvitationPreview from '../components/InvitationPreview';
```

### Component Structure
```javascript
// 1. Imports
import React from 'react';

// 2. Component
export default function Component() {
  // 3. State
  const [state, setState] = useState();
  
  // 4. Effects
  useEffect(() => {}, []);
  
  // 5. Handlers
  const handleAction = () => {};
  
  // 6. Render
  return <View />;
}

// 7. Styles
const styles = StyleSheet.create({});
```

## Git Workflow

### Branch Strategy
- `main` - Production code
- `develop` - Development code
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `hotfix/*` - Urgent fixes

### Commit Messages
```
feat: Add new template
fix: Resolve export issue
docs: Update README
style: Format code
refactor: Improve performance
test: Add unit tests
```

## Resources

### Documentation
- [React Native Docs](https://reactnative.dev/)
- [Expo Docs](https://docs.expo.dev/)
- [React Navigation](https://reactnavigation.org/)

### Tools
- [Expo Snack](https://snack.expo.dev/) - Online playground
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- [Flipper](https://fbflipper.com/)

### Community
- [React Native Discord](https://discord.gg/react-native)
- [Expo Forums](https://forums.expo.dev/)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

---

**Happy coding! 🚀**
