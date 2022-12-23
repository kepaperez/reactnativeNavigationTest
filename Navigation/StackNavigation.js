
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../pages/Home";
import Configuration from "../pages/Configuration";
import TopBackNavigation from "../components/TopBackNabigation";
import DrawNavigation from "./DrawNavigation";
import CreatePedidoStack from "./CreatePedidoStack";
const HomeStack = createNativeStackNavigator();


export default StackNavigation = ({ navigation }) => {
    return (
        <>

            <HomeStack.Navigator screenOptions={{ headerShown:false }} >
                <HomeStack.Screen name="Home" component={DrawNavigation} />
                {/*<HomeStack.Screen name="Carrito" component={Carrito} />*/}
                <HomeStack.Screen name="Otro" component={Otro} />
            </HomeStack.Navigator>

        </>
    )
}
