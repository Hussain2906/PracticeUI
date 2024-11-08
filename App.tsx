import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Settings, StyleSheet} from 'react-native';
import React from 'react';
import Home from './src/Views/Home';
import Details from './src/Views/Details';
import SettingView from './src/Views/SettingView';
import Icon from 'react-native-vector-icons/Ionicons';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({route}) => ({
            tabBarIcon: ({color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = 'home-outline';
              } else if (route.name === 'Details') {
                iconName = 'list-outline';
              } else if (route.name === 'Settings') {
                iconName = 'settings-outline';
              }
              return <Icon name={iconName} size={size} color={color} />;
              
            },
            tabBarActiveTintColor: '#FF0000',
            tabBarInactiveTintColor: 'gray',
          })}
            
          >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Details" component={Details} />
          <Tab.Screen name="Settings" component={SettingView} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
