import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function Footer() {
  const scaleAnim = new Animated.Value(1);

  const handlePress = (url) => {
    Linking.openURL(url);
  };

  const animateButton = (callback) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 0.9,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(callback);
  };

  const SocialButton = ({ icon, url, color }) => (
    <TouchableOpacity
      onPress={() => {
        animateButton(() => handlePress(url));
      }}
      style={styles.socialButton}
    >
      <LinearGradient
        colors={[color, color + 'dd']}
        style={styles.socialGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Ionicons name={icon} size={16} color="white" />
      </LinearGradient>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1a1a2e', '#16213e', '#0f3460']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.content}>
          <Text style={styles.text}>
            Developed with <Text style={styles.heart}>❤️</Text> by{' '}
            <Text style={styles.name}>Rushan Haque</Text>
          </Text>
          
          <View style={styles.socialContainer}>
            <SocialButton
              icon="logo-linkedin"
              url="https://www.linkedin.com/in/rushanhaque"
              color="#0077b5"
            />
            <SocialButton
              icon="logo-instagram"
              url="https://www.instagram.com/rushanhaque"
              color="#E4405F"
            />
            <SocialButton
              icon="logo-github"
              url="https://github.com/rushanhaque"
              color="#333333"
            />
            <SocialButton
              icon="mail"
              url="mailto:rushanulhaque@gmail.com"
              color="#EA4335"
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
  gradient: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 11,
    color: '#ffffff',
    fontWeight: '500',
  },
  heart: {
    color: '#ff6b6b',
    fontSize: 12,
  },
  name: {
    fontWeight: 'bold',
    color: '#4ecdc4',
  },
  socialContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  socialButton: {
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  socialGradient: {
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
});
