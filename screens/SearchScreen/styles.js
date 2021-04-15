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

export const SearchView = styled.View`
  align-items: center;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  background-color: #2c6bed;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: Roboto;
`;
