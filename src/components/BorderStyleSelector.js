import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { borderStyles } from '../data/themes';

export default function BorderStyleSelector({ visible, onClose, onBorderSelect, currentBorder }) {
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
            <Text style={styles.modalTitle}>Choose Border Style</Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={28} color="#1a202c" />
            </TouchableOpacity>
          </View>

          <View style={styles.borderList}>
            {borderStyles.map((border) => (
              <TouchableOpacity
                key={border.id}
                style={[
                  styles.borderOption,
                  currentBorder?.id === border.id && styles.selectedBorder,
                ]}
                onPress={() => {
                  onBorderSelect(border);
                  onClose();
                }}
              >
                <View style={styles.borderPreviewContainer}>
                  <View
                    style={[
                      styles.borderPreview,
                      {
                        borderWidth: border.width,
                        borderRadius: border.radius || 0,
                        borderColor: '#6366f1',
                      },
                    ]}
                  />
                </View>
                <Text style={styles.borderName}>{border.name}</Text>
                {currentBorder?.id === border.id && (
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
  borderList: {
    padding: 20,
  },
  borderOption: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f7fafc',
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  selectedBorder: {
    borderColor: '#6366f1',
    backgroundColor: '#ede9fe',
  },
  borderPreviewContainer: {
    marginRight: 15,
  },
  borderPreview: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
  },
  borderName: {
    flex: 1,
    fontSize: 16,
    color: '#1a202c',
    fontWeight: '500',
  },
});
