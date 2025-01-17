import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DrawerNavigator from './src/navigation/DrawerNavigator'
import React from 'react';
import StackNavigator from './src/navigation/StackNavigator';


const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
      <StackNavigator/>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
