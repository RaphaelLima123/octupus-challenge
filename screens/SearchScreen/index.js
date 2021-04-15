import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import {
  Container,
  InputAdress,
  LocationButton,
  TextLocation,
  TextButton,
  SearchButton,
  SearchView,
} from './styles';
import { getOctupusPlnas } from '../../services/octupusApi';

const SearchScreen = ({ navigation: { navigate } }) => {
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
      const lat = locationPosition.coords.latitude;
      const lon = locationPosition.coords.longitude;

      const plans = await getOctupusPlnas(lat, lon);
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
      <SearchView>
        <SearchButton onPress={() => navigate('Mapa')}>
          <TextButton>Buscar</TextButton>
        </SearchButton>
      </SearchView>
    </Container>
  );
};

export default SearchScreen;
