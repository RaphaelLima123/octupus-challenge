import React from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Container } from './styles';

const Search = ({ setAdressLocation }) => (
  <Container>
    <GooglePlacesAutocomplete
      placeholder="Onde você esta?"
      onPress={(data, details) => {
        setAdressLocation(details.geometry.location);
      }}
      query={{
        key: 'AIzaSyAwHwZ9iRJa7O5jKMBYAzwuxFG2gpjlOmk',
        language: 'pt-br',
      }}
      textInputProps={{
        autoCorrect: false,
        autoCapitalize: 'none',
      }}
      fetchDetails
      enablePoweredByContainer={false}
      styles={{
        container: {
          position: 'relative',
          top: Platform.select({ ios: 60, android: 10 }),
          width: '100%',
        },
        textInputContainer: {
          backgroundColor: 'transparent',
          height: 54,
          marginHorizontal: 10,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          height: 54,
          margin: 0,
          borderRadius: 0,
          paddingBottom: 0,
          paddingTop: 0,
          paddingRight: 0,
          paddingLeft: 0,
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: '#DDD',
          fontSize: 18,
        },
        listView: {
          borderWidth: 1,
          borderColor: '#DDD',
          backgroundColor: '#FFF',
          marginHorizontal: 10,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: { x: 0, y: 0 },
          shadowRadius: 15,
          marginTop: 10,
        },
        description: {
          fontSize: 16,
        },
        row: {
          padding: 20,
          height: 58,
        },
      }}
    />
  </Container>
);

export default Search;
