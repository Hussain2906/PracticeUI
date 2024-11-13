// src/navigation/TabNavigator.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../Views/Home';
import Details from '../Views/Details';
import DataForm from '../Form/DataForm';
import SettingView from '../Views/SettingView';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Details') {
            iconName = 'list-outline';
          } else if (route.name === 'DataForm') {
            iconName = 'information-circle-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#0E2F44',
        tabBarActiveBackgroundColor: '#6897BB',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Details" component={Details} />
      <Tab.Screen name="DataForm" component={DataForm} />
      <Tab.Screen name="Settings" component={SettingView} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
