import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Home';
import Info from './pages/Info';

const Stack = createStackNavigator();

export const NavStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Main}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
