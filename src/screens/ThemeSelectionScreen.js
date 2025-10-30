import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { themes } from '../data/themes';
import Footer from '../components/Footer';
import AnimatedCard from '../components/AnimatedCard';

const { width } = Dimensions.get('window');

export default function ThemeSelectionScreen({ navigation, route }) {
  const { template } = route.params;
  const [selectedTheme, setSelectedTheme] = useState(null);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(30)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  const handleContinue = () => {
    if (selectedTheme) {
      navigation.navigate('Editor', { 
        template, 
        theme: selectedTheme 
      });
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        <Animated.View
          style={[
            styles.header,
            {
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }],
            },
          ]}
        >
          <Text style={styles.title}>🎨 Choose Your Theme</Text>
          <Text style={styles.subtitle}>Select a style for your {template.name.toLowerCase()}</Text>
        </Animated.View>

        <View style={styles.themesContainer}>
          {themes.map((theme, index) => (
            <AnimatedCard
              key={theme.id}
              colors={['#ffffff', '#f8f9fa']}
              onPress={() => handleThemeSelect(theme)}
              style={[
                styles.themeCard,
                selectedTheme?.id === theme.id && styles.selectedCard,
              ]}
              delay={index * 80}
            >
              <LinearGradient
                colors={[theme.backgroundColor, theme.primaryColor]}
                style={styles.themePreview}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
              >
                <View style={styles.colorCircle}>
                  <View 
                    style={[
                      styles.colorSwatch, 
                      { backgroundColor: theme.primaryColor }
                    ]} 
                  />
                  <View 
                    style={[
                      styles.colorSwatch, 
                      { backgroundColor: theme.secondaryColor }
                    ]} 
                  />
                  <View 
                    style={[
                      styles.colorSwatch, 
                      { backgroundColor: theme.accentColor }
                    ]} 
                  />
                </View>
              </LinearGradient>
              <View style={styles.themeInfo}>
                <Text style={styles.themeName}>{theme.name}</Text>
                <Text style={styles.themeDescription}>{theme.description}</Text>
              </View>
              {selectedTheme?.id === theme.id && (
                <View style={styles.checkmark}>
                  <Ionicons name="checkmark-circle" size={32} color="#667eea" />
                </View>
              )}
            </AnimatedCard>
          ))}
        </View>
      </ScrollView>

      {selectedTheme && (
        <Animated.View
          style={[
            styles.footer,
            {
              opacity: fadeAnim,
            },
          ]}
        >
          <TouchableOpacity
            style={styles.continueButton}
            onPress={handleContinue}
          >
            <LinearGradient
              colors={['#667eea', '#764ba2']}
              style={styles.buttonGradient}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Ionicons name="create" size={24} color="white" />
              <Text style={styles.continueButtonText}>Continue to Editor</Text>
            </LinearGradient>
          </TouchableOpacity>
        </Animated.View>
      )}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1a202c',
  },
  subtitle: {
    fontSize: 16,
    color: '#718096',
    marginTop: 5,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  themesContainer: {
    padding: 10,
  },
  themeCard: {
    marginBottom: 15,
    marginHorizontal: 10,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'transparent',
    borderRadius: 20,
  },
  selectedCard: {
    borderColor: '#667eea',
    elevation: 10,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
  },
  themePreview: {
    height: 130,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorCircle: {
    flexDirection: 'row',
    gap: 10,
  },
  colorSwatch: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'white',
  },
  themeInfo: {
    padding: 15,
  },
  themeName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 5,
  },
  themeDescription: {
    fontSize: 14,
    color: '#718096',
  },
  checkmark: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  footer: {
    padding: 20,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  continueButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonGradient: {
    flexDirection: 'row',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  continueButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
