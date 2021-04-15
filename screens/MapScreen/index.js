import React from 'react';
import { Container, Map } from './styles';

const MapScreen = () => (
  <Container>
    <Map
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
      showsUserLocation
      loadingEnabled
    />
  </Container>
);

export default MapScreen;
