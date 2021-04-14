import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert } from 'react-native';
import {
  Button,
  ButtonText,
  Container,
  SubTitleText,
  TitleText,
} from './styles';

const HomeScreen = () => (
  <Container>
    <StatusBar style={{ style: 'light' }} />
    <TitleText>Plano Atual</TitleText>
    <SubTitleText>
      Essas são as informações disponíveis para seu plano
    </SubTitleText>
    <Button title="Change Page" onPress={() => Alert.alert('test')}>
      <ButtonText>Procurar</ButtonText>
    </Button>
  </Container>
);

export default HomeScreen;
