import * as React from 'react';
import { NavigationContainer,NavigationAction } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';

import HomePage from './src/Screens/Home'
import AddScreen from './src/Screens/Add'
import AddAgen from './src/Screens/AddAgen'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen 
         options={{headerShown : false}}
         name='home' component={HomePage} />
        <Stack.Screen 
         options={{headerShown : false}}
        name='add' 
        component={AddScreen}
        />
        <Stack.Screen 
         options={{headerShown : false}}
        name='addAgen' 
        component={AddAgen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;