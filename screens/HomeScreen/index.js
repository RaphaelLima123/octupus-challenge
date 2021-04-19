import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Button,
  ButtonText,
  Container,
  SubTitleText,
  TitleText,
} from './styles';

const HomeScreen = ({ navigation: { navigate } }) => (
  <Container>
    <StatusBar style={{ style: 'light' }} />
    <TitleText>Procure por um plano!</TitleText>
    <SubTitleText>
      Aqui você acha os melhores planos para sua região!
    </SubTitleText>
    <Button title="Change Page" onPress={() => navigate('Procurar')}>
      <ButtonText>Procurar</ButtonText>
    </Button>
  </Container>
);

export default HomeScreen;
