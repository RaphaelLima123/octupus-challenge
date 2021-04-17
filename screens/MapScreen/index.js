import React, { useState, useEffect } from 'react';
import { Marker, MarkerAnimated } from 'react-native-maps';
import { Container, Map } from './styles';

const MapScreen = ({ route }) => {
  const [markers, setMarkers] = useState([]);
  const { lat, lon } = route.params.coords;
  const allPlans = route.params.plans;
  const pins = [];

  useEffect(() => {
    allPlans.map((plan) =>
      pins.push({
        coordinate: {
          latitude: plan.coords.lat,
          longitude: plan.coords.lon,
        },
        title: plan.name,
        description: plan.type,
      }),
    );
    setMarkers(pins);
  }, []);

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
      >
        {markers.map((marker, index) => (
          <Marker
            key={index.toString()}
            coordinate={{
              latitude: marker.coordinate.latitude,
              longitude: marker.coordinate.longitude,
            }}
            title={marker.title}
            description={marker.description}
          />
        ))}
      </Map>
    </Container>
  );
};

export default MapScreen;
