import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import MapScreen from './screens/MapScreen';
import PlansListScreen from './screens/PlansListScreen';

const Stack = createStackNavigator();
const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTittleStyle: { color: 'white' },
  headerTintColor: 'white',
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Meu plano" component={HomeScreen} />
        <Stack.Screen name="Procurar" component={SearchScreen} />
        <Stack.Screen name="Mapa" component={MapScreen} />
        <Stack.Screen name="Planos" component={PlansListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
