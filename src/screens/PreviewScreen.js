import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library';
import * as Sharing from 'expo-sharing';
import * as Print from 'expo-print';
import * as FileSystem from 'expo-file-system';
import ViewShot from 'react-native-view-shot';
import InvitationPreview from '../components/InvitationPreview';
import Footer from '../components/Footer';

export default function PreviewScreen({ navigation, route }) {
  const {
    invitationData,
    customTheme,
    fontSize,
    alignment,
    borderWidth,
    borderRadius,
    padding,
    opacity,
    template,
  } = route.params;

  const viewShotRef = useRef();
  const [isExporting, setIsExporting] = useState(false);

  const captureInvitation = async () => {
    try {
      const uri = await viewShotRef.current.capture();
      return uri;
    } catch (error) {
      console.error('Error capturing invitation:', error);
      Alert.alert('Error', 'Failed to capture invitation');
      return null;
    }
  };

  const exportAsJPEG = async () => {
    setIsExporting(true);
    try {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Please grant permission to save images');
        setIsExporting(false);
        return;
      }

      const uri = await captureInvitation();
      if (uri) {
        await MediaLibrary.saveToLibraryAsync(uri);
        Alert.alert(
          'Success',
          'Invitation saved to gallery!',
          [
            { text: 'OK' },
            {
              text: 'Share',
              onPress: async () => {
                if (await Sharing.isAvailableAsync()) {
                  await Sharing.shareAsync(uri);
                }
              },
            },
          ]
        );
      }
    } catch (error) {
      console.error('Error exporting JPEG:', error);
      Alert.alert('Error', 'Failed to export as JPEG');
    } finally {
      setIsExporting(false);
    }
  };

  const exportAsPDF = async () => {
    setIsExporting(true);
    try {
      const uri = await captureInvitation();
      if (uri) {
        const base64 = await FileSystem.readAsStringAsync(uri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        const html = `
          <html>
            <head>
              <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
              <style>
                body {
                  margin: 0;
                  padding: 0;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  min-height: 100vh;
                }
                img {
                  max-width: 100%;
                  height: auto;
                }
              </style>
            </head>
            <body>
              <img src="data:image/jpeg;base64,${base64}" />
            </body>
          </html>
        `;

        const { uri: pdfUri } = await Print.printToFileAsync({ html });
        
        if (await Sharing.isAvailableAsync()) {
          await Sharing.shareAsync(pdfUri, {
            mimeType: 'application/pdf',
            dialogTitle: 'Share your invitation',
          });
        }

        Alert.alert('Success', 'PDF created successfully!');
      }
    } catch (error) {
      console.error('Error exporting PDF:', error);
      Alert.alert('Error', 'Failed to export as PDF');
    } finally {
      setIsExporting(false);
    }
  };

  const shareInvitation = async () => {
    setIsExporting(true);
    try {
      const uri = await captureInvitation();
      if (uri && await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(uri);
      }
    } catch (error) {
      console.error('Error sharing:', error);
      Alert.alert('Error', 'Failed to share invitation');
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        <View style={styles.previewContainer}>
          <ViewShot
            ref={viewShotRef}
            options={{ format: 'jpg', quality: 1.0 }}
            style={styles.viewShot}
          >
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
              fullSize={true}
            />
          </ViewShot>
        </View>

        <View style={styles.actionsContainer}>
          <Text style={styles.actionsTitle}>Export Options</Text>
          
          <TouchableOpacity
            style={styles.actionButton}
            onPress={exportAsJPEG}
            disabled={isExporting}
          >
            <View style={styles.actionButtonContent}>
              <Ionicons name="image" size={28} color="#6366f1" />
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionButtonTitle}>Save as JPEG</Text>
                <Text style={styles.actionButtonDescription}>
                  Save to gallery and share
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#cbd5e0" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={exportAsPDF}
            disabled={isExporting}
          >
            <View style={styles.actionButtonContent}>
              <Ionicons name="document-text" size={28} color="#6366f1" />
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionButtonTitle}>Export as PDF</Text>
                <Text style={styles.actionButtonDescription}>
                  Create printable PDF document
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#cbd5e0" />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={shareInvitation}
            disabled={isExporting}
          >
            <View style={styles.actionButtonContent}>
              <Ionicons name="share-social" size={28} color="#6366f1" />
              <View style={styles.actionTextContainer}>
                <Text style={styles.actionButtonTitle}>Share</Text>
                <Text style={styles.actionButtonDescription}>
                  Share via apps
                </Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#cbd5e0" />
            </View>
          </TouchableOpacity>

          {isExporting && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#6366f1" />
              <Text style={styles.loadingText}>Processing...</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="create" size={20} color="#6366f1" />
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.newButton}
          onPress={() => navigation.navigate('Home')}
        >
          <LinearGradient
            colors={['#667eea', '#764ba2']}
            style={styles.buttonGradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <Ionicons name="add" size={20} color="white" />
            <Text style={styles.newButtonText}>Create New</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
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
  scrollContent: {
    padding: 20,
  },
  previewContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  viewShot: {
    backgroundColor: 'white',
  },
  actionsContainer: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  actionsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a202c',
    marginBottom: 15,
  },
  actionButton: {
    backgroundColor: '#f7fafc',
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  actionButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  actionTextContainer: {
    flex: 1,
    marginLeft: 15,
  },
  actionButtonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a202c',
    marginBottom: 3,
  },
  actionButtonDescription: {
    fontSize: 13,
    color: '#718096',
  },
  loadingContainer: {
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 10,
    fontSize: 14,
    color: '#718096',
  },
  bottomBar: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    gap: 10,
  },
  editButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7fafc',
    borderRadius: 12,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6366f1',
    marginLeft: 8,
  },
  newButton: {
    flex: 1,
    borderRadius: 12,
    overflow: 'hidden',
  },
  buttonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
  },
  newButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
});
