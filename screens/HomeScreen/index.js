import React from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container } from './styles';

const HomeScreen = () => (
  <Container>
    <StatusBar style={{ style: 'light' }} />
    <Text>This is HomeScreen</Text>
  </Container>
);

export default HomeScreen;
