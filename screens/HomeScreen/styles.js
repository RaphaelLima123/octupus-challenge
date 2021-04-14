import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  align-items: center;
  justify-content: center;
  margin: 0% 2% 2% 2%;
  padding: 0% 2% 2% 2%;
`;

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: 25px;
`;

export const SubTitleText = styled.Text`
  font-size: 18px;
  margin-top: 5%;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 18px;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  margin-top: 5%;
  width: 30%;
  height: 20%;
  background-color: #2c6bed;
  border-radius: 5px;
`;
