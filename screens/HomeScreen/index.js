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
    <TitleText>Plano Atual</TitleText>
    <SubTitleText>
      Essas são as informações disponíveis para seu plano
    </SubTitleText>
    <Button title="Change Page" onPress={() => navigate('Procurar')}>
      <ButtonText>Procurar</ButtonText>
    </Button>
  </Container>
);

export default HomeScreen;
