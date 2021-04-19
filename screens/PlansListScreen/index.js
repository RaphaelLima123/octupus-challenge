import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import getDistance from 'geolib/es/getDistance';
import convertDistance from 'geolib/es/convertDistance';
import { Container, ItemView, TitleText } from './styles';
import { getOctupusPlnas } from '../../services/octupusApi';
import { getPackages } from '../../services/getPackages';

const PlansListScreen = ({ route, navigation: { navigate } }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const getApiOctupus = async () => {
      const userLocation = route.params;
      const data = await getOctupusPlnas(userLocation);
      const array = data.list;

      const planDetails = [];

      array.forEach((plan) => {
        const distance = convertDistance(
          getDistance(
            {
              latitude: userLocation.latitude,
              longitude: userLocation.longitude,
            },
            { latitude: plan.coords.lat, longitude: plan.coords.lon },
          ),
          'km',
        );

        function getColor(type) {
          let color = '';
          switch (type) {
            case 'TV':
              color = 'red';
              break;
            case 'ADDON':
              color = 'blue';
              break;
            case 'LANDLINE':
              color = 'green';
              break;
            case 'BROADBAND':
              color = 'yellow';
              break;
            default:
              break;
          }
          return color;
        }

        const newObject = {
          coords: {
            lat: plan.coords.lat,
            lon: plan.coords.lon,
          },
          name: plan.name,
          price: plan.price,
          type: plan.type,
          color: getColor(plan.type),
          distance,
        };

        planDetails.push(newObject);

        const packages = getPackages(planDetails);

        setPlans(packages);
      });
    };

    getApiOctupus();
  }, []);

  const ViewPlan = ({ name, coords, items, price, distance }) => (
    <ItemView onPress={() => navigate('Mapa', { coords, plans })}>
      <TitleText>{name}</TitleText>
      <TitleText>{items}</TitleText>
      <TitleText>R${price}</TitleText>
      <TitleText>{distance} km</TitleText>
    </ItemView>
  );

  return (
    <Container>
      <FlatList
        data={plans}
        renderItem={({ item }) => (
          <ViewPlan
            name={item.name}
            coords={item.coords}
            items={item.items}
            price={item.price}
            distance={item.distance}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default PlansListScreen;
