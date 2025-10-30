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
import { templates } from '../data/themes';
import Footer from '../components/Footer';
import AnimatedCard from '../components/AnimatedCard';

const { width } = Dimensions.get('window');

export default function TemplateGalleryScreen({ navigation }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
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

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  const handleContinue = () => {
    if (selectedTemplate) {
      navigation.navigate('ThemeSelection', { template: selectedTemplate });
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
          <Text style={styles.title}>🎨 Choose Your Event Type</Text>
          <Text style={styles.subtitle}>Select a template to get started</Text>
        </Animated.View>

        <View style={styles.templatesGrid}>
          {templates.map((template, index) => (
            <AnimatedCard
              key={template.id}
              colors={
                selectedTemplate?.id === template.id
                  ? ['#667eea', '#764ba2']
                  : ['#ffffff', '#f8f9fa']
              }
              onPress={() => handleTemplateSelect(template)}
              style={styles.templateCard}
              delay={index * 50}
            >
              <View style={styles.templateContent}>
                <LinearGradient
                  colors={
                    selectedTemplate?.id === template.id
                      ? ['rgba(255,255,255,0.3)', 'rgba(255,255,255,0.2)']
                      : ['#f093fb', '#4facfe']
                  }
                  style={styles.templateIconContainer}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                >
                  <Text style={styles.templateIcon}>{template.icon}</Text>
                </LinearGradient>
                <Text
                  style={[
                    styles.templateName,
                    selectedTemplate?.id === template.id && styles.selectedText,
                  ]}
                >
                  {template.name}
                </Text>
                {selectedTemplate?.id === template.id && (
                  <View style={styles.checkmark}>
                    <Ionicons name="checkmark-circle" size={28} color="white" />
                  </View>
                )}
              </View>
            </AnimatedCard>
          ))}
        </View>
      </ScrollView>

      {selectedTemplate && (
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
              <Ionicons name="arrow-forward-circle" size={24} color="white" />
              <Text style={styles.continueButtonText}>Continue</Text>
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
  templatesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  templateCard: {
    width: (width - 40) / 2,
    marginBottom: 15,
    marginHorizontal: 5,
  },
  templateContent: {
    padding: 20,
    alignItems: 'center',
  },
  templateIconContainer: {
    width: 90,
    height: 90,
    borderRadius: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    elevation: 5,
    shadowColor: '#667eea',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  templateIcon: {
    fontSize: 45,
  },
  templateName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a202c',
    textAlign: 'center',
  },
  selectedText: {
    color: 'white',
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
