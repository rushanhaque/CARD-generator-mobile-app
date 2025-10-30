export const themes = [
  {
    id: 'elegant',
    name: 'Elegant',
    description: 'Classic and sophisticated',
    primaryColor: '#1a1a2e',
    secondaryColor: '#d4af37',
    accentColor: '#ffffff',
    backgroundColor: '#f5f5f0',
    fontFamily: 'serif',
    borderStyle: 'solid',
    pattern: 'floral',
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and contemporary',
    primaryColor: '#2d3748',
    secondaryColor: '#4299e1',
    accentColor: '#ffffff',
    backgroundColor: '#f7fafc',
    fontFamily: 'sans-serif',
    borderStyle: 'minimal',
    pattern: 'geometric',
  },
  {
    id: 'romantic',
    name: 'Romantic',
    description: 'Soft and dreamy',
    primaryColor: '#d53f8c',
    secondaryColor: '#fc8181',
    accentColor: '#ffffff',
    backgroundColor: '#fff5f7',
    fontFamily: 'cursive',
    borderStyle: 'rounded',
    pattern: 'hearts',
  },
  {
    id: 'vintage',
    name: 'Vintage',
    description: 'Timeless and nostalgic',
    primaryColor: '#744210',
    secondaryColor: '#c05621',
    accentColor: '#faf5f0',
    backgroundColor: '#fef5e7',
    fontFamily: 'serif',
    borderStyle: 'ornate',
    pattern: 'damask',
  },
  {
    id: 'tropical',
    name: 'Tropical',
    description: 'Vibrant and fun',
    primaryColor: '#38b2ac',
    secondaryColor: '#f6ad55',
    accentColor: '#ffffff',
    backgroundColor: '#e6fffa',
    fontFamily: 'sans-serif',
    borderStyle: 'rounded',
    pattern: 'leaves',
  },
  {
    id: 'minimalist',
    name: 'Minimalist',
    description: 'Simple and refined',
    primaryColor: '#000000',
    secondaryColor: '#718096',
    accentColor: '#ffffff',
    backgroundColor: '#ffffff',
    fontFamily: 'sans-serif',
    borderStyle: 'minimal',
    pattern: 'none',
  },
  {
    id: 'festive',
    name: 'Festive',
    description: 'Celebratory and bright',
    primaryColor: '#e53e3e',
    secondaryColor: '#f6e05e',
    accentColor: '#ffffff',
    backgroundColor: '#fffaf0',
    fontFamily: 'sans-serif',
    borderStyle: 'decorative',
    pattern: 'confetti',
  },
  {
    id: 'rustic',
    name: 'Rustic',
    description: 'Natural and warm',
    primaryColor: '#5f4339',
    secondaryColor: '#8b7355',
    accentColor: '#f5f5dc',
    backgroundColor: '#faf8f3',
    fontFamily: 'serif',
    borderStyle: 'wood',
    pattern: 'wood-grain',
  },
  {
    id: 'neon',
    name: 'Neon',
    description: 'Bold and electric',
    primaryColor: '#ff006e',
    secondaryColor: '#00f5ff',
    accentColor: '#ffffff',
    backgroundColor: '#1a1a2e',
    fontFamily: 'sans-serif',
    borderStyle: 'minimal',
    pattern: 'geometric',
  },
  {
    id: 'pastel',
    name: 'Pastel',
    description: 'Soft and gentle',
    primaryColor: '#b4a7d6',
    secondaryColor: '#ffd6e7',
    accentColor: '#ffffff',
    backgroundColor: '#f0f4f8',
    fontFamily: 'cursive',
    borderStyle: 'rounded',
    pattern: 'floral',
  },
  {
    id: 'ocean',
    name: 'Ocean',
    description: 'Deep and serene',
    primaryColor: '#006994',
    secondaryColor: '#00d9ff',
    accentColor: '#ffffff',
    backgroundColor: '#e0f7fa',
    fontFamily: 'sans-serif',
    borderStyle: 'rounded',
    pattern: 'geometric',
  },
  {
    id: 'sunset',
    name: 'Sunset',
    description: 'Warm and glowing',
    primaryColor: '#ff6b35',
    secondaryColor: '#f7931e',
    accentColor: '#ffffff',
    backgroundColor: '#fff4e6',
    fontFamily: 'serif',
    borderStyle: 'solid',
    pattern: 'none',
  },
  {
    id: 'forest',
    name: 'Forest',
    description: 'Natural and earthy',
    primaryColor: '#2d5016',
    secondaryColor: '#7cb342',
    accentColor: '#ffffff',
    backgroundColor: '#f1f8e9',
    fontFamily: 'serif',
    borderStyle: 'wood',
    pattern: 'leaves',
  },
  {
    id: 'royal',
    name: 'Royal',
    description: 'Luxurious and regal',
    primaryColor: '#4a148c',
    secondaryColor: '#ffd700',
    accentColor: '#ffffff',
    backgroundColor: '#f3e5f5',
    fontFamily: 'serif',
    borderStyle: 'ornate',
    pattern: 'damask',
  },
  {
    id: 'candy',
    name: 'Candy',
    description: 'Sweet and playful',
    primaryColor: '#ff1744',
    secondaryColor: '#ff80ab',
    accentColor: '#ffffff',
    backgroundColor: '#fff0f5',
    fontFamily: 'cursive',
    borderStyle: 'rounded',
    pattern: 'hearts',
  },
  {
    id: 'midnight',
    name: 'Midnight',
    description: 'Dark and mysterious',
    primaryColor: '#0d1b2a',
    secondaryColor: '#415a77',
    accentColor: '#e0e1dd',
    backgroundColor: '#1b263b',
    fontFamily: 'serif',
    borderStyle: 'solid',
    pattern: 'none',
  },
];

export const templates = [
  {
    id: 'wedding',
    name: 'Wedding',
    icon: '💒',
    fields: ['bride', 'groom', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'You Are Invited',
    defaultMessage: 'Join us as we celebrate our special day',
  },
  {
    id: 'birthday',
    name: 'Birthday',
    icon: '🎂',
    fields: ['name', 'age', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Birthday Celebration',
    defaultMessage: "Let's celebrate together!",
  },
  {
    id: 'baby-shower',
    name: 'Baby Shower',
    icon: '👶',
    fields: ['parentName', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Baby Shower',
    defaultMessage: 'Celebrating the arrival of our little one',
  },
  {
    id: 'anniversary',
    name: 'Anniversary',
    icon: '💑',
    fields: ['coupleName', 'years', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Anniversary Celebration',
    defaultMessage: 'Celebrating years of love and togetherness',
  },
  {
    id: 'graduation',
    name: 'Graduation',
    icon: '🎓',
    fields: ['name', 'degree', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Graduation Ceremony',
    defaultMessage: 'Join us in celebrating this milestone',
  },
  {
    id: 'engagement',
    name: 'Engagement',
    icon: '💍',
    fields: ['bride', 'groom', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Engagement Celebration',
    defaultMessage: 'We are getting engaged!',
  },
  {
    id: 'housewarming',
    name: 'Housewarming',
    icon: '🏠',
    fields: ['hostName', 'date', 'time', 'address', 'message'],
    defaultHeading: 'Housewarming Party',
    defaultMessage: 'Join us as we celebrate our new home',
  },
  {
    id: 'holiday',
    name: 'Holiday Party',
    icon: '🎄',
    fields: ['hostName', 'occasion', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Holiday Celebration',
    defaultMessage: 'Season\'s Greetings!',
  },
  {
    id: 'bridal-shower',
    name: 'Bridal Shower',
    icon: '👰',
    fields: ['brideName', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Bridal Shower',
    defaultMessage: 'Celebrating the bride-to-be!',
  },
  {
    id: 'retirement',
    name: 'Retirement',
    icon: '🎉',
    fields: ['name', 'company', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Retirement Celebration',
    defaultMessage: 'Join us in honoring years of dedication',
  },
  {
    id: 'baptism',
    name: 'Baptism',
    icon: '✝️',
    fields: ['childName', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Baptism Ceremony',
    defaultMessage: 'Join us for this blessed occasion',
  },
  {
    id: 'corporate',
    name: 'Corporate Event',
    icon: '💼',
    fields: ['eventName', 'company', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'You\'re Invited',
    defaultMessage: 'Join us for an important event',
  },
  {
    id: 'reunion',
    name: 'Reunion',
    icon: '👥',
    fields: ['groupName', 'year', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Reunion',
    defaultMessage: 'Let\'s reconnect and reminisce!',
  },
  {
    id: 'fundraiser',
    name: 'Fundraiser',
    icon: '🎗️',
    fields: ['cause', 'organizer', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Fundraising Event',
    defaultMessage: 'Support our cause',
  },
  {
    id: 'concert',
    name: 'Concert',
    icon: '🎵',
    fields: ['artist', 'venue', 'date', 'time', 'ticketInfo', 'message'],
    defaultHeading: 'Live Concert',
    defaultMessage: 'Join us for an unforgettable night!',
  },
  {
    id: 'dinner-party',
    name: 'Dinner Party',
    icon: '🍽️',
    fields: ['hostName', 'occasion', 'date', 'time', 'venue', 'message'],
    defaultHeading: 'Dinner Party',
    defaultMessage: 'Join us for an evening of fine dining',
  },
];

export const fontFamilies = [
  { id: 'default', name: 'Default', value: 'System' },
  { id: 'serif', name: 'Serif (Classic)', value: 'serif' },
  { id: 'sans-serif', name: 'Sans Serif (Modern)', value: 'sans-serif' },
  { id: 'cursive', name: 'Cursive (Elegant)', value: 'cursive' },
  { id: 'monospace', name: 'Monospace (Tech)', value: 'monospace' },
  { id: 'fantasy', name: 'Fantasy (Artistic)', value: 'fantasy' },
];

export const borderStyles = [
  { id: 'none', name: 'None', width: 0 },
  { id: 'minimal', name: 'Minimal', width: 1 },
  { id: 'solid', name: 'Solid', width: 3 },
  { id: 'rounded', name: 'Rounded', width: 2, radius: 20 },
  { id: 'ornate', name: 'Ornate', width: 4 },
  { id: 'decorative', name: 'Decorative', width: 3 },
  { id: 'wood', name: 'Wood', width: 5 },
];

// Random Generator Utility
export const getRandomTheme = () => {
  return themes[Math.floor(Math.random() * themes.length)];
};

export const getRandomTemplate = () => {
  return templates[Math.floor(Math.random() * templates.length)];
};

export const getRandomFont = () => {
  return fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
};

export const getRandomBorderStyle = () => {
  return borderStyles[Math.floor(Math.random() * borderStyles.length)];
};

export const generateRandomCard = () => {
  const template = getRandomTemplate();
  const theme = getRandomTheme();
  const font = getRandomFont();
  const border = getRandomBorderStyle();
  
  return {
    template,
    theme,
    customization: {
      fontFamily: font.value,
      borderStyle: border,
      fontSize: {
        heading: 24 + Math.floor(Math.random() * 16), // 24-40
        body: 14 + Math.floor(Math.random() * 8), // 14-22
        details: 12 + Math.floor(Math.random() * 6), // 12-18
      },
      alignment: ['left', 'center', 'right'][Math.floor(Math.random() * 3)],
      borderWidth: Math.floor(Math.random() * 6), // 0-5
      borderRadius: Math.floor(Math.random() * 31), // 0-30
      padding: 15 + Math.floor(Math.random() * 21), // 15-35
      opacity: 0.8 + Math.random() * 0.2, // 0.8-1.0
    },
  };
};
