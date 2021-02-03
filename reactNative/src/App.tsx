import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import List from './modules/mails/list';
import Viewer from './modules/mails/viewer';

const Stack = createStackNavigator();

function App(): React.ReactElement {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Viewer" component={Viewer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
