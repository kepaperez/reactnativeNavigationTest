import 'react-native-gesture-handler';
import React, { useState } from 'react';


import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';

const App = () => {
  console.log("Hello there 🙃")

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  )

};



export default App;
