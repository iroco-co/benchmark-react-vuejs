import React from 'react';
import { View, TextInput, Platform } from 'react-native';
import style from './style';

function Search(): React.ReactElement {
  return (
    <View style={style.container}>
      <TextInput
        style={style.input}
        placeholder="Recherche ..."
        testID="search"
        accessibilityLabel={'search'}
        accessible={Platform.OS !== 'ios'}
      />
    </View>
  );
}

export default Search;
