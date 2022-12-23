import 'react-native-gesture-handler';
import React, { useState } from 'react';
import Home from './pages/Home';
import Info from './pages/Info';
import Explore from './pages/Carrito';
import Carrito from './pages/Configuration';
import Otro from './pages/Otro';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopBackNavigation from './components/TopBackNabigation';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNavigation from './Navigation/StackNavigation';
import {
  SafeAreaView,
  Text,
} from 'react-native';


const App = () => {
  console.log("Hello there 🙃")

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>

  )


};



export default App;
