import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import ColorPickerModal from '../components/ColorPickerModal';
import FontSelector from '../components/FontSelector';
import BorderStyleSelector from '../components/BorderStyleSelector';
import InvitationPreview from '../components/InvitationPreview';
import Footer from '../components/Footer';

const { width } = Dimensions.get('window');

export default function EditorScreen({ navigation, route }) {
  const { template, theme } = route.params;

  // State for invitation data
  const [invitationData, setInvitationData] = useState({
    heading: template.defaultHeading,
    message: template.defaultMessage,
    fields: {},
    image: null,
  });

  // State for customization
  const [customTheme, setCustomTheme] = useState({ ...theme });
  const [fontSize, setFontSize] = useState({
    heading: 28,
    body: 16,
    details: 14,
  });
  const [alignment, setAlignment] = useState('center');
  const [borderWidth, setBorderWidth] = useState(2);
  const [borderRadius, setBorderRadius] = useState(15);
  const [padding, setPadding] = useState(20);
  const [opacity, setOpacity] = useState(1);

  // Modal states
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [activeColorType, setActiveColorType] = useState(null);
  const [showFontSelector, setShowFontSelector] = useState(false);
  const [showBorderSelector, setShowBorderSelector] = useState(false);
  const [showCustomizationPanel, setShowCustomizationPanel] = useState(false);

  const handleFieldChange = (fieldName, value) => {
    setInvitationData({
      ...invitationData,
      fields: {
        ...invitationData.fields,
        [fieldName]: value,
      },
    });
  };

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setInvitationData({
        ...invitationData,
        image: result.assets[0].uri,
      });
    }
  };

  const openColorPicker = (colorType) => {
    setActiveColorType(colorType);
    setShowColorPicker(true);
  };

  const handleColorChange = (color) => {
    setCustomTheme({
      ...customTheme,
      [activeColorType]: color,
    });
    setShowColorPicker(false);
  };

  const handlePreview = () => {
    navigation.navigate('Preview', {
      invitationData,
      customTheme,
      fontSize,
      alignment,
      borderWidth,
      borderRadius,
      padding,
      opacity,
      template,
    });
  };

  const renderFieldInput = (fieldName) => {
    const fieldLabels = {
      bride: 'Bride Name',
      groom: 'Groom Name',
      name: 'Name',
      age: 'Age',
      date: 'Date',
      time: 'Time',
      venue: 'Venue',
      message: 'Message',
      parentName: 'Parent Name',
      coupleName: 'Couple Name',
      years: 'Years',
      degree: 'Degree',
      hostName: 'Host Name',
      address: 'Address',
      occasion: 'Occasion',
    };

    return (
      <View key={fieldName} style={styles.inputGroup}>
        <Text style={styles.inputLabel}>{fieldLabels[fieldName] || fieldName}</Text>
        <TextInput
          style={styles.input}
          placeholder={`Enter ${fieldLabels[fieldName] || fieldName}`}
          value={invitationData.fields[fieldName] || ''}
          onChangeText={(value) => handleFieldChange(fieldName, value)}
          placeholderTextColor="#a0aec0"
        />
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView}>
        {/* Preview Section */}
        <View style={styles.previewSection}>
          <Text style={styles.sectionTitle}>Preview</Text>
          <InvitationPreview
            data={invitationData}
            theme={customTheme}
            fontSize={fontSize}
            alignment={alignment}
            borderWidth={borderWidth}
            borderRadius={borderRadius}
            padding={padding}
            opacity={opacity}
            template={template}
          />
        </View>

        {/* Content Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Content</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Heading</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter heading"
              value={invitationData.heading}
              onChangeText={(value) =>
                setInvitationData({ ...invitationData, heading: value })
              }
              placeholderTextColor="#a0aec0"
            />
          </View>

          {template.fields.map((field) => renderFieldInput(field))}

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>Custom Message</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="Enter your message"
              value={invitationData.message}
              onChangeText={(value) =>
                setInvitationData({ ...invitationData, message: value })
              }
              multiline
              numberOfLines={4}
              placeholderTextColor="#a0aec0"
            />
          </View>

          <TouchableOpacity style={styles.imageButton} onPress={handleImagePick}>
            <Ionicons name="image" size={24} color="#6366f1" />
            <Text style={styles.imageButtonText}>
              {invitationData.image ? 'Change Image' : 'Add Image'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Quick Customization */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Quick Customization</Text>
          
          <View style={styles.colorRow}>
            <TouchableOpacity
              style={styles.colorOption}
              onPress={() => openColorPicker('primaryColor')}
            >
              <View style={[styles.colorPreview, { backgroundColor: customTheme.primaryColor }]} />
              <Text style={styles.colorLabel}>Primary</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.colorOption}
              onPress={() => openColorPicker('secondaryColor')}
            >
              <View style={[styles.colorPreview, { backgroundColor: customTheme.secondaryColor }]} />
              <Text style={styles.colorLabel}>Secondary</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={styles.colorOption}
              onPress={() => openColorPicker('backgroundColor')}
            >
              <View style={[styles.colorPreview, { backgroundColor: customTheme.backgroundColor }]} />
              <Text style={styles.colorLabel}>Background</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.customizationButton}
            onPress={() => setShowCustomizationPanel(true)}
          >
            <Ionicons name="settings" size={20} color="#6366f1" />
            <Text style={styles.customizationButtonText}>Advanced Customization</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.previewButton} onPress={handlePreview}>
          <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={styles.buttonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons name="eye" size={24} color="white" />
            <Text style={styles.previewButtonText}>Preview & Export</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Color Picker Modal */}
      <ColorPickerModal
        visible={showColorPicker}
        onClose={() => setShowColorPicker(false)}
        onColorSelect={handleColorChange}
        currentColor={customTheme[activeColorType]}
      />

      {/* Advanced Customization Modal */}
      <Modal
        visible={showCustomizationPanel}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Advanced Customization</Text>
              <TouchableOpacity onPress={() => setShowCustomizationPanel(false)}>
                <Ionicons name="close" size={28} color="#1a202c" />
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.modalScroll}>
              {/* Font Size Controls */}
              <View style={styles.controlGroup}>
                <Text style={styles.controlLabel}>Heading Size: {fontSize.heading}px</Text>
                <View style={styles.sliderContainer}>
                  <TouchableOpacity onPress={() => setFontSize({...fontSize, heading: Math.max(20, fontSize.heading - 2)})}>
                    <Ionicons name="remove-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                  <View style={styles.sliderValue}>
                    <Text style={styles.sliderValueText}>{fontSize.heading}</Text>
                  </View>
                  <TouchableOpacity onPress={() => setFontSize({...fontSize, heading: Math.min(48, fontSize.heading + 2)})}>
                    <Ionicons name="add-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.controlGroup}>
                <Text style={styles.controlLabel}>Body Size: {fontSize.body}px</Text>
                <View style={styles.sliderContainer}>
                  <TouchableOpacity onPress={() => setFontSize({...fontSize, body: Math.max(12, fontSize.body - 1)})}>
                    <Ionicons name="remove-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                  <View style={styles.sliderValue}>
                    <Text style={styles.sliderValueText}>{fontSize.body}</Text>
                  </View>
                  <TouchableOpacity onPress={() => setFontSize({...fontSize, body: Math.min(24, fontSize.body + 1)})}>
                    <Ionicons name="add-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Alignment */}
              <View style={styles.controlGroup}>
                <Text style={styles.controlLabel}>Text Alignment</Text>
                <View style={styles.alignmentButtons}>
                  {['left', 'center', 'right'].map((align) => (
                    <TouchableOpacity
                      key={align}
                      style={[
                        styles.alignmentButton,
                        alignment === align && styles.alignmentButtonActive,
                      ]}
                      onPress={() => setAlignment(align)}
                    >
                      <Ionicons
                        name={`text-${align === 'left' ? 'left' : align === 'right' ? 'right' : 'center'}`}
                        size={24}
                        color={alignment === align ? 'white' : '#6366f1'}
                      />
                    </TouchableOpacity>
                  ))}
                </View>
              </View>

              {/* Border Controls */}
              <View style={styles.controlGroup}>
                <Text style={styles.controlLabel}>Border Width: {borderWidth}px</Text>
                <View style={styles.sliderContainer}>
                  <TouchableOpacity onPress={() => setBorderWidth(Math.max(0, borderWidth - 1))}>
                    <Ionicons name="remove-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                  <View style={styles.sliderValue}>
                    <Text style={styles.sliderValueText}>{borderWidth}</Text>
                  </View>
                  <TouchableOpacity onPress={() => setBorderWidth(Math.min(10, borderWidth + 1))}>
                    <Ionicons name="add-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.controlGroup}>
                <Text style={styles.controlLabel}>Border Radius: {borderRadius}px</Text>
                <View style={styles.sliderContainer}>
                  <TouchableOpacity onPress={() => setBorderRadius(Math.max(0, borderRadius - 5))}>
                    <Ionicons name="remove-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                  <View style={styles.sliderValue}>
                    <Text style={styles.sliderValueText}>{borderRadius}</Text>
                  </View>
                  <TouchableOpacity onPress={() => setBorderRadius(Math.min(50, borderRadius + 5))}>
                    <Ionicons name="add-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Padding */}
              <View style={styles.controlGroup}>
                <Text style={styles.controlLabel}>Padding: {padding}px</Text>
                <View style={styles.sliderContainer}>
                  <TouchableOpacity onPress={() => setPadding(Math.max(10, padding - 5))}>
                    <Ionicons name="remove-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                  <View style={styles.sliderValue}>
                    <Text style={styles.sliderValueText}>{padding}</Text>
                  </View>
                  <TouchableOpacity onPress={() => setPadding(Math.min(50, padding + 5))}>
                    <Ionicons name="add-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Opacity */}
              <View style={styles.controlGroup}>
                <Text style={styles.controlLabel}>Opacity: {Math.round(opacity * 100)}%</Text>
                <View style={styles.sliderContainer}>
                  <TouchableOpacity onPress={() => setOpacity(Math.max(0.1, opacity - 0.1))}>
                    <Ionicons name="remove-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                  <View style={styles.sliderValue}>
                    <Text style={styles.sliderValueText}>{Math.round(opacity * 100)}%</Text>
                  </View>
                  <TouchableOpacity onPress={() => setOpacity(Math.min(1, opacity + 0.1))}>
                    <Ionicons name="add-circle" size={32} color="#6366f1" />
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
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
  previewSection: {
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  section: {
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 15,
  },
  inputGroup: {
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4a5568',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#f7fafc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#1a202c',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  imageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ede9fe',
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  imageButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366f1',
    marginLeft: 10,
  },
  colorRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  colorOption: {
    alignItems: 'center',
  },
  colorPreview: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#e2e8f0',
    marginBottom: 8,
  },
  colorLabel: {
    fontSize: 12,
    color: '#718096',
  },
  customizationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7fafc',
    borderRadius: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  customizationButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366f1',
    marginLeft: 10,
  },
  bottomBar: {
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
  },
  previewButton: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  previewButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a202c',
  },
  modalScroll: {
    padding: 20,
  },
  controlGroup: {
    marginBottom: 25,
  },
  controlLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: 12,
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sliderValue: {
    backgroundColor: '#ede9fe',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    minWidth: 80,
    alignItems: 'center',
  },
  sliderValueText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6366f1',
  },
  alignmentButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  alignmentButton: {
    width: 60,
    height: 60,
    borderRadius: 10,
    backgroundColor: '#f7fafc',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  alignmentButtonActive: {
    backgroundColor: '#6366f1',
    borderColor: '#6366f1',
  },
});
