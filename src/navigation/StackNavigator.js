// src/navigation/StackNavigator.js

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator'; // Import the TabNavigator
import DisplayData from '../Views/DisplayData';
import DrawerNavigator from './DrawerNavigator';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="TabNavigator">
      <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="DrawerScreen" component={DrawerNavigator} options={{headerShown:true}}/>
      <Stack.Screen name="DisplayData" component={DisplayData} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
