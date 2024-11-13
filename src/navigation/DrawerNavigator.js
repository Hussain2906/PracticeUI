// src/navigation/DrawerNavigator.js

import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../Views/Home';
import SettingView from '../Views/SettingView';
import StackNavigator from './StackNavigator';


const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home}/>
      <Drawer.Screen name="Profile" component={SettingView} />
      <Drawer.Screen name="StackScreen" component={StackNavigator}/>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
