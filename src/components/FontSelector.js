import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fontFamilies } from '../data/themes';

export default function FontSelector({ visible, onClose, onFontSelect, currentFont }) {
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
            <Text style={styles.modalTitle}>Choose Font</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={28} color="#1a202c" />
            </TouchableOpacity>
          </View>

          <View style={styles.fontList}>
            {fontFamilies.map((font) => (
              <TouchableOpacity
                key={font.id}
                style={[
                  styles.fontOption,
                  currentFont === font.value && styles.selectedFont,
                ]}
                onPress={() => {
                  onFontSelect(font.value);
                  onClose();
                }}
              >
                <Text
                  style={[
                    styles.fontPreview,
                    { fontFamily: font.value },
                  ]}
                >
                  {font.name}
                </Text>
                {currentFont === font.value && (
                  <Ionicons name="checkmark-circle" size={24} color="#6366f1" />
                )}
              </TouchableOpacity>
            ))}
          </View>
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
    maxHeight: '60%',
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
  fontList: {
    padding: 20,
  },
  fontOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f7fafc',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedFont: {
    borderColor: '#6366f1',
    backgroundColor: '#ede9fe',
  },
  fontPreview: {
    fontSize: 18,
    color: '#1a202c',
  },
});
