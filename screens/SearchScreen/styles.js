import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  margin: 10px;
`;

export const LocationButton = styled.TouchableOpacity`
  flex-direction: row;
  height: 40px;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 10px;
`;

export const TextLocation = styled.Text`
  font-family: Roboto;
  margin-left: 3%;
  font-size: 18px;
`;

export const SearchView = styled.SafeAreaView`
  align-items: center;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 100px;
  height: 40px;
  align-items: center;
  justify-content: center;
  background-color: #2c6bed;
  border-radius: 5px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  font-family: Roboto;
`;
