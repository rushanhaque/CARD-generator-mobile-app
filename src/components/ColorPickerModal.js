import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const presetColors = [
  '#000000', '#ffffff', '#ff0000', '#00ff00', '#0000ff',
  '#ffff00', '#ff00ff', '#00ffff', '#ff8800', '#8800ff',
  '#1a1a2e', '#d4af37', '#2d3748', '#4299e1', '#d53f8c',
  '#fc8181', '#744210', '#c05621', '#38b2ac', '#f6ad55',
  '#718096', '#e53e3e', '#f6e05e', '#5f4339', '#8b7355',
  '#6366f1', '#8b5cf6', '#d946ef', '#ec4899', '#f43f5e',
];

export default function ColorPickerModal({ visible, onClose, onColorSelect, currentColor }) {
  const [customColor, setCustomColor] = useState(currentColor || '#000000');

  const handlePresetSelect = (color) => {
    onColorSelect(color);
  };

  const handleCustomColorSubmit = () => {
    if (/^#[0-9A-F]{6}$/i.test(customColor)) {
      onColorSelect(customColor);
    } else {
      alert('Please enter a valid hex color (e.g., #FF0000)');
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Choose Color</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={28} color="#1a202c" />
            </TouchableOpacity>
          </View>

          <ScrollView style={styles.modalScroll}>
            <Text style={styles.sectionTitle}>Preset Colors</Text>
            <View style={styles.colorGrid}>
              {presetColors.map((color, index) => (
                <TouchableOpacity
                  key={index}
                  style={[
                    styles.colorSwatch,
                    { backgroundColor: color },
                    currentColor === color && styles.selectedSwatch,
                  ]}
                  onPress={() => handlePresetSelect(color)}
                >
                  {currentColor === color && (
                    <Ionicons name="checkmark" size={24} color={color === '#ffffff' ? '#000000' : '#ffffff'} />
                  )}
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionTitle}>Custom Color</Text>
            <View style={styles.customColorContainer}>
              <TextInput
                style={styles.customColorInput}
                value={customColor}
                onChangeText={setCustomColor}
                placeholder="#000000"
                placeholderTextColor="#a0aec0"
                autoCapitalize="characters"
                maxLength={7}
              />
              <View
                style={[
                  styles.customColorPreview,
                  { backgroundColor: customColor },
                ]}
              />
            </View>
            <TouchableOpacity
              style={styles.applyButton}
              onPress={handleCustomColorSubmit}
            >
              <Text style={styles.applyButtonText}>Apply Custom Color</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    maxHeight: '70%',
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: 15,
    marginTop: 10,
  },
  colorGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  colorSwatch: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedSwatch: {
    borderColor: '#6366f1',
    borderWidth: 3,
  },
  customColorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  customColorInput: {
    flex: 1,
    backgroundColor: '#f7fafc',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    color: '#1a202c',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  customColorPreview: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#e2e8f0',
  },
  applyButton: {
    backgroundColor: '#6366f1',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 15,
  },
  applyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
