import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');

export default function InvitationPreview({
  data,
  theme,
  fontSize,
  alignment,
  borderWidth,
  borderRadius,
  padding,
  opacity,
  template,
  fullSize = false,
}) {
  const containerWidth = fullSize ? width - 30 : width - 60;
  const containerHeight = fullSize ? containerWidth * 1.4 : containerWidth * 1.2;

  const renderPattern = () => {
    if (theme.pattern === 'none') return null;

    const patterns = {
      floral: '🌸',
      geometric: '◆',
      hearts: '♥',
      damask: '❖',
      leaves: '🍃',
      confetti: '✨',
      'wood-grain': '▓',
    };

    const patternChar = patterns[theme.pattern] || '';

    return (
      <View style={styles.patternContainer}>
        <Text style={[styles.patternText, { color: theme.secondaryColor, opacity: 0.2 }]}>
          {patternChar.repeat(20)}
        </Text>
      </View>
    );
  };

  const renderField = (fieldName, value) => {
    if (!value) return null;

    const fieldLabels = {
      bride: 'Bride',
      groom: 'Groom',
      name: 'Name',
      age: 'Age',
      date: 'Date',
      time: 'Time',
      venue: 'Venue',
      parentName: 'Parents',
      coupleName: 'Couple',
      years: 'Years',
      degree: 'Degree',
      hostName: 'Host',
      address: 'Address',
      occasion: 'Occasion',
    };

    return (
      <View key={fieldName} style={styles.fieldContainer}>
        <Text
          style={[
            styles.fieldLabel,
            {
              color: theme.secondaryColor,
              fontSize: fontSize.details,
              textAlign: alignment,
            },
          ]}
        >
          {fieldLabels[fieldName]}:
        </Text>
        <Text
          style={[
            styles.fieldValue,
            {
              color: theme.primaryColor,
              fontSize: fontSize.body,
              textAlign: alignment,
              fontFamily: theme.fontFamily,
            },
          ]}
        >
          {value}
        </Text>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          width: containerWidth,
          height: containerHeight,
          opacity: opacity,
        },
      ]}
    >
      <LinearGradient
        colors={[theme.backgroundColor, theme.accentColor]}
        style={[
          styles.gradient,
          {
            borderWidth: borderWidth,
            borderColor: theme.primaryColor,
            borderRadius: borderRadius,
            padding: padding,
          },
        ]}
      >
        {renderPattern()}

        <View style={styles.content}>
          {/* Decorative Top Border */}
          <View style={styles.decorativeBorder}>
            <View
              style={[
                styles.decorativeLine,
                { backgroundColor: theme.secondaryColor },
              ]}
            />
            <Text style={[styles.decorativeIcon, { color: theme.secondaryColor }]}>
              {template.icon}
            </Text>
            <View
              style={[
                styles.decorativeLine,
                { backgroundColor: theme.secondaryColor },
              ]}
            />
          </View>

          {/* Heading */}
          <Text
            style={[
              styles.heading,
              {
                color: theme.primaryColor,
                fontSize: fontSize.heading,
                textAlign: alignment,
                fontFamily: theme.fontFamily,
              },
            ]}
          >
            {data.heading}
          </Text>

          {/* Image */}
          {data.image && (
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: data.image }}
                style={[
                  styles.image,
                  { borderColor: theme.secondaryColor },
                ]}
                resizeMode="cover"
              />
            </View>
          )}

          {/* Fields */}
          <View style={styles.fieldsContainer}>
            {template.fields.map((field) =>
              renderField(field, data.fields[field])
            )}
          </View>

          {/* Message */}
          {data.message && (
            <View style={styles.messageContainer}>
              <Text
                style={[
                  styles.message,
                  {
                    color: theme.primaryColor,
                    fontSize: fontSize.body,
                    textAlign: alignment,
                    fontFamily: theme.fontFamily,
                  },
                ]}
              >
                {data.message}
              </Text>
            </View>
          )}

          {/* Decorative Bottom Border */}
          <View style={styles.decorativeBorder}>
            <View
              style={[
                styles.decorativeLine,
                { backgroundColor: theme.secondaryColor },
              ]}
            />
            <Text style={[styles.decorativeIcon, { color: theme.secondaryColor }]}>
              ✦
            </Text>
            <View
              style={[
                styles.decorativeLine,
                { backgroundColor: theme.secondaryColor },
              ]}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
  gradient: {
    flex: 1,
    position: 'relative',
  },
  patternContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  patternText: {
    fontSize: 40,
    lineHeight: 50,
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    zIndex: 1,
  },
  decorativeBorder: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  decorativeLine: {
    flex: 1,
    height: 2,
  },
  decorativeIcon: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  heading: {
    fontWeight: 'bold',
    marginVertical: 10,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 15,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
  },
  fieldsContainer: {
    marginVertical: 10,
  },
  fieldContainer: {
    marginVertical: 5,
  },
  fieldLabel: {
    fontWeight: '600',
    marginBottom: 2,
  },
  fieldValue: {
    fontWeight: 'bold',
  },
  messageContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  message: {
    fontStyle: 'italic',
    lineHeight: 22,
  },
});
