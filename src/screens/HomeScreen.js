import React, { useRef, useEffect } from 'react';
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
import Footer from '../components/Footer';
import AnimatedCard from '../components/AnimatedCard';
import FloatingButton from '../components/FloatingButton';
import { generateRandomCard } from '../data/themes';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(50)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(slideAnim, {
        toValue: 0,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();

    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const features = [
    { icon: 'color-palette', title: '16 Themes', description: 'Unique color schemes' },
    { icon: 'document-text', title: '16 Templates', description: 'Every occasion covered' },
    { icon: 'create', title: 'Full Customization', description: 'Colors, fonts & more' },
    { icon: 'shuffle', title: 'Random Generator', description: 'Surprise me feature' },
  ];

  const handleSurpriseMe = () => {
    const randomCard = generateRandomCard();
    navigation.navigate('Editor', {
      template: randomCard.template,
      theme: randomCard.theme,
    });
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <LinearGradient
          colors={['#667eea', '#764ba2', '#f093fb', '#4facfe']}
          style={styles.header}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          {/* Animated particles */}
          <Animated.View style={[styles.particle, styles.particle1, { transform: [{ rotate }] }]}>
            <Ionicons name="sparkles" size={20} color="rgba(255,255,255,0.3)" />
          </Animated.View>
          <Animated.View style={[styles.particle, styles.particle2, { transform: [{ rotate }] }]}>
            <Ionicons name="star" size={16} color="rgba(255,255,255,0.2)" />
          </Animated.View>
          <Animated.View style={[styles.particle, styles.particle3, { transform: [{ rotate }] }]}>
            <Ionicons name="heart" size={18} color="rgba(255,255,255,0.25)" />
          </Animated.View>

          <Animated.View
            style={[
              styles.headerContent,
              {
                opacity: fadeAnim,
                transform: [{ translateY: slideAnim }],
              },
            ]}
          >
            <View style={styles.iconContainer}>
              <LinearGradient
                colors={['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.1)']}
                style={styles.iconGradient}
              >
                <Ionicons name="mail" size={80} color="white" />
              </LinearGradient>
            </View>
            <Text style={styles.title}>Invitation Generator</Text>
            <Text style={styles.subtitle}>Create Beautiful Invitations in Minutes</Text>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>✨ Premium Quality</Text>
            </View>
          </Animated.View>
        </LinearGradient>

        <View style={styles.content}>
          <AnimatedCard
            colors={['#667eea', '#764ba2']}
            onPress={() => navigation.navigate('TemplateGallery')}
            style={styles.primaryButton}
          >
            <View style={styles.buttonContent}>
              <View style={styles.buttonIconContainer}>
                <Ionicons name="add-circle" size={32} color="white" />
              </View>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.primaryButtonText}>Create New Invitation</Text>
                <Text style={styles.primaryButtonSubtext}>Start designing now</Text>
              </View>
              <Ionicons name="arrow-forward" size={24} color="rgba(255,255,255,0.8)" />
            </View>
          </AnimatedCard>

          <AnimatedCard
            colors={['#f093fb', '#4facfe']}
            onPress={handleSurpriseMe}
            style={styles.surpriseButton}
          >
            <View style={styles.buttonContent}>
              <View style={styles.buttonIconContainer}>
                <Ionicons name="shuffle" size={32} color="white" />
              </View>
              <View style={styles.buttonTextContainer}>
                <Text style={styles.primaryButtonText}>Surprise Me!</Text>
                <Text style={styles.primaryButtonSubtext}>Generate random card</Text>
              </View>
              <Ionicons name="sparkles" size={24} color="rgba(255,255,255,0.8)" />
            </View>
          </AnimatedCard>

          <View style={styles.featuresContainer}>
            <Text style={styles.sectionTitle}>✨ Features</Text>
            <View style={styles.featuresGrid}>
              {features.map((feature, index) => (
                <AnimatedCard
                  key={index}
                  colors={['#ffffff', '#f8f9fa']}
                  style={styles.featureCard}
                  delay={index * 100}
                >
                  <View style={styles.featureContent}>
                    <LinearGradient
                      colors={['#667eea', '#764ba2']}
                      style={styles.featureIconContainer}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 1 }}
                    >
                      <Ionicons name={feature.icon} size={28} color="white" />
                    </LinearGradient>
                    <Text style={styles.featureTitle}>{feature.title}</Text>
                    <Text style={styles.featureDescription}>{feature.description}</Text>
                  </View>
                </AnimatedCard>
              ))}
            </View>
          </View>

          <View style={styles.infoSection}>
            <Text style={styles.sectionTitle}>🚀 How It Works</Text>
            <AnimatedCard colors={['#ffffff', '#f8f9fa']} style={styles.stepContainer}>
              <View style={styles.stepsContent}>
                <View style={styles.step}>
                  <LinearGradient
                    colors={['#667eea', '#764ba2']}
                    style={styles.stepNumber}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Text style={styles.stepNumberText}>1</Text>
                  </LinearGradient>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>Choose Template</Text>
                    <Text style={styles.stepDescription}>Select from various event types</Text>
                  </View>
                </View>
                <View style={styles.step}>
                  <LinearGradient
                    colors={['#667eea', '#764ba2']}
                    style={styles.stepNumber}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Text style={styles.stepNumberText}>2</Text>
                  </LinearGradient>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>Pick Theme & Style</Text>
                    <Text style={styles.stepDescription}>Customize colors and design</Text>
                  </View>
                </View>
                <View style={styles.step}>
                  <LinearGradient
                    colors={['#667eea', '#764ba2']}
                    style={styles.stepNumber}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Text style={styles.stepNumberText}>3</Text>
                  </LinearGradient>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>Add Details</Text>
                    <Text style={styles.stepDescription}>Fill in event information</Text>
                  </View>
                </View>
                <View style={styles.step}>
                  <LinearGradient
                    colors={['#667eea', '#764ba2']}
                    style={styles.stepNumber}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                  >
                    <Text style={styles.stepNumberText}>4</Text>
                  </LinearGradient>
                  <View style={styles.stepContent}>
                    <Text style={styles.stepTitle}>Export & Share</Text>
                    <Text style={styles.stepDescription}>Download as JPEG or PDF</Text>
                  </View>
                </View>
              </View>
            </AnimatedCard>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 50,
    position: 'relative',
    overflow: 'hidden',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    elevation: 10,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
  },
  particle: {
    position: 'absolute',
  },
  particle1: {
    top: 80,
    left: 30,
  },
  particle2: {
    top: 120,
    right: 40,
  },
  particle3: {
    bottom: 60,
    left: 50,
  },
  headerContent: {
    alignItems: 'center',
  },
  iconContainer: {
    marginBottom: 15,
  },
  iconGradient: {
    width: 140,
    height: 140,
    borderRadius: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.95)',
    marginTop: 8,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  badge: {
    backgroundColor: 'rgba(255,255,255,0.25)',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginTop: 15,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  badgeText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '600',
  },
  content: {
    padding: 20,
  },
  primaryButton: {
    marginTop: 20,
    marginBottom: 15,
  },
  surpriseButton: {
    marginBottom: 30,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  buttonIconContainer: {
    marginRight: 15,
  },
  buttonTextContainer: {
    flex: 1,
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  primaryButtonSubtext: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 13,
    marginTop: 3,
  },
  featuresContainer: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 15,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featureCard: {
    width: (width - 60) / 2,
    marginBottom: 15,
  },
  featureContent: {
    padding: 20,
    alignItems: 'center',
  },
  featureIconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    elevation: 5,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  featureTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1a202c',
    textAlign: 'center',
    marginBottom: 5,
  },
  featureDescription: {
    fontSize: 12,
    color: '#718096',
    textAlign: 'center',
  },
  infoSection: {
    marginBottom: 30,
  },
  stepContainer: {
    marginBottom: 20,
  },
  stepsContent: {
    padding: 20,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  stepNumber: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
    elevation: 5,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  stepNumberText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 3,
  },
  stepDescription: {
    fontSize: 14,
    color: '#718096',
  },
});
