import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import { Container, InputAdress, LocationButton, TextLocation } from './styles';

const SearchScreen = () => {
  const [adress, setAdress] = useState('');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    async function getDeviceLocation() {
      const { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permissão negada');
        return;
      }
      const locationPosition = await Location.getCurrentPositionAsync({});
      setLocation(locationPosition);
    }

    getDeviceLocation();
  }, []);

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
