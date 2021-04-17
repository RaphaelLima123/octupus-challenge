import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';
import { Container, ItemView, TitleText } from './styles';
import { getOctupusPlnas } from '../../services/octupusApi';

const PlansListScreen = ({ route, navigation: { navigate } }) => {
  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const getApiOctupus = async () => {
      const location = route.params.coords;
      const data = await getOctupusPlnas(location);
      const array = data.list;
      console.log('ESTE É O NOSSO ARRAY', array);
      setPlans(array);
    };

    getApiOctupus();
  }, []);

  const ViewPlan = ({ name }) => (
    <ItemView onPress={() => navigate('Mapa')}>
      <TitleText>{name}</TitleText>
    </ItemView>
  );

  return (
    <Container>
      <FlatList
        data={plans}
        renderItem={({ item }) => <ViewPlan name={item.name} />}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default PlansListScreen;
