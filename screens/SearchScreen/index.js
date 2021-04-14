import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Container, TitleText } from './styles';

const SearchScreen = () => (
  <Container>
    <StatusBar style={{ style: 'light' }} />
    <TitleText>This is the SearchScreen</TitleText>
  </Container>
);

export default SearchScreen;
