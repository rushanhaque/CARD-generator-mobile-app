import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import EditorScreen from './src/screens/EditorScreen';
import ThemeSelectionScreen from './src/screens/ThemeSelectionScreen';
import PreviewScreen from './src/screens/PreviewScreen';
import TemplateGalleryScreen from './src/screens/TemplateGalleryScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: {
              backgroundColor: '#6366f1',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen 
            name="Home" 
            component={HomeScreen}
            options={{ title: 'Invitation Generator' }}
          />
          <Stack.Screen 
            name="TemplateGallery" 
            component={TemplateGalleryScreen}
            options={{ title: 'Choose Template' }}
          />
          <Stack.Screen 
            name="ThemeSelection" 
            component={ThemeSelectionScreen}
            options={{ title: 'Select Theme' }}
          />
          <Stack.Screen 
            name="Editor" 
            component={EditorScreen}
            options={{ title: 'Design Your Invitation' }}
          />
          <Stack.Screen 
            name="Preview" 
            component={PreviewScreen}
            options={{ title: 'Preview & Export' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
