import React from 'react';
import { View, TextInput } from 'react-native';
import style from './style';

function Search(): React.ReactElement {
  return (
    <View style={style.container}>
      <TextInput style={style.input} placeholder="Recherche ..." />
    </View>
  );
}

export default Search;
