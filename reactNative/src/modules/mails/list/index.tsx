import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import style from './style';
import Search from '../search';
import Thumbnail from '../thumbnail';
import { useMails } from '../api';

function List(): React.ReactElement {
  const mails = useMails();

  const navigation = useNavigation();

  return (
    <View style={style.container}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Search />
        <FlatList
          data={mails.mails}
          style={style.list}
          contentInset={{ bottom: 100 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Viewer', { mail: item })}>
              <Thumbnail mail={item} />
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={style.separators} />}
          keyExtractor={({ id }) => id}
          refreshing={mails.pending}
        />
      </SafeAreaView>
    </View>
  );
}

export default List;
