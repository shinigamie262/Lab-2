import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Src/homeScreen'
import HelloWorld from './Src/helloWorld';
import CapturingTaps from './Src/capturingTaps';
import CustomComponent from './Src/customComponent';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="CustomComponent">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="HelloWorld" component={HelloWorld} />
        <Stack.Screen name="CapturingTaps" component={CapturingTaps} />
        <Stack.Screen name="CustomComponent" component={CustomComponent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
