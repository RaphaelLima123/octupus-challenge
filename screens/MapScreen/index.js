import React from 'react';
import { Container, Map } from './styles';

const MapScreen = ({ route }) => {
  console.log('ESSA É MINHA ROUTE', route);
  const { lat, lon } = route.params;
  return (
    <Container>
      <Map
        initialRegion={{
          latitude: lat,
          longitude: lon,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation
        loadingEnabled
      />
    </Container>
  );
};

export default MapScreen;
