import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { Container, InputAdress, LocationButton, TextLocation } from './styles';

const SearchScreen = () => {
  const [adress, setAdress] = useState('');

  return (
    <Container>
      <StatusBar style={{ style: 'light' }} />
      <InputAdress
        onChangeText={() => setAdress()}
        value={adress}
        placeholder="Onde você esta?"
      />
      <LocationButton>
        <MaterialIcons name="gps-fixed" size={24} color="black" />
        <TextLocation>Usar localização atual</TextLocation>
      </LocationButton>
    </Container>
  );
};

export default SearchScreen;
