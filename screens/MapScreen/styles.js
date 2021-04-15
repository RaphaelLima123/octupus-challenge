import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const Container = styled.SafeAreaView`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  justify-content: flex-end;
  align-items: center;
`;

export const Map = styled(MapView)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
