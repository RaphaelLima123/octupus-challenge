import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { Container, ItemView, TitleText } from './styles';
import { getOctupusPlnas } from '../../services/octupusApi';

const PlansListScreen = ({ route, navigation: { navigate } }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const getApiOctupus = async () => {
      if (route.params) {
        const location = route.params;
        const data = await getOctupusPlnas(location);
        const array = data.list;
        setPlans(array);
      } else {
        const location = route.params.adressLocation;
        const newObject = {
          latitude: location.lat,
          longitude: location.lng,
        };
        const data = await getOctupusPlnas(newObject);
        const array = data.list;
        setPlans(array);
      }
    };

    getApiOctupus();
  }, []);

  const ViewPlan = ({ name, coords }) => (
    <ItemView onPress={() => navigate('Mapa', { coords, plans })}>
      <TitleText>{name}</TitleText>
    </ItemView>
  );

  return (
    <Container>
      <FlatList
        data={plans}
        renderItem={({ item }) => (
          <ViewPlan name={item.name} coords={item.coords} />
        )}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default PlansListScreen;
