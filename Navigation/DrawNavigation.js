
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../pages/Home";
import Configuration from "../pages/Configuration";
import TopBackNavigation from "../components/TopBackNabigation";

import TabNavigation from "./TabNavigation";
const Drawer = createDrawerNavigator();


export default DrawerNavigation = ({ navigation }) => {


    return (
            <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Home" component={TabNavigation} />
                <Drawer.Screen name="Info" component={Info} />
                <Drawer.Screen name="Explore" component={Explore} />
                <Drawer.Screen name="Crear Pedido"component={CreatePedidoStack} />
            </Drawer.Navigator>

    );
}


