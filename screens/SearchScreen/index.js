import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import * as Location from 'expo-location';
import Search from '../../components/Search';
import {
  Container,
  LocationButton,
  TextLocation,
  TextButton,
  SearchButton,
  SearchView,
} from './styles';

const SearchScreen = ({ navigation: { navigate } }) => {
  const [location, setLocation] = useState(null);
  const [permission, setPermission] = useState(false);

  const getPermission = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status === 'granted') {
      const locationPosition = await Location.getCurrentPositionAsync({});
      setPermission(true);
      setLocation(locationPosition);
    }
  };

  const getGpsAdress = async () => {
    if (!permission) {
      Alert.alert('É necessário permitir o uso da localização');
      await getPermission();
    } else {
      navigate('Planos', location);
    }
  };

  useEffect(() => {
    async function getDeviceLocation() {
      await getPermission();
    }

    getDeviceLocation();
  }, []);

  return (
    <Container>
      <StatusBar style={{ style: 'light' }} />
      <Search setLocation={{ setLocation }} />
      <LocationButton onPress={getGpsAdress}>
        <MaterialIcons name="gps-fixed" size={24} color="black" />
        <TextLocation>Usar localização atual</TextLocation>
      </LocationButton>
      <SearchView>
        <SearchButton onPress={() => console.log('LOCATION AQUI', location)}>
          <TextButton>Buscar</TextButton>
        </SearchButton>
      </SearchView>
    </Container>
  );
};

export default SearchScreen;
