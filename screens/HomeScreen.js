import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const HomeScreen = () => (
  <View>
    <StatusBar style={{ style: 'light' }} />
    <Text>This is HomeScreen</Text>
  </View>
);

export default HomeScreen;
