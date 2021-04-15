import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 2%;
  padding: 2%;
`;

export const InputAdress = styled.TextInput`
  font-family: Roboto;
  height: 40px;
  padding: 2%;
  border-width: 1px;
  font-size: 18px;
`;

export const LocationButton = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-top: 2%;
`;

export const TextLocation = styled.Text`
  font-family: Roboto;
  margin-left: 3%;
  font-size: 18px;
`;
