
import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createNativeStackNavigator } from '@react-navigation/native-stack';


import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../pages/Home";
import Configuration from "../pages/Configuration";
import TopBackNavigation from "../components/TopBackNabigation";
import DrawNavigation from "./DrawNavigation";
import TabNavigation from "./TabNavigation";
import SubirArchivos from "../pages/SubirArchivos";
import TopBackNavigationConf from "../components/TopBackNabigationConf";

const PedidoStack = createNativeStackNavigator();


export default CreatePedidoStack = ({ navigation }) => {
    return (
        <>

            <PedidoStack.Navigator screenOptions={{ headerShown: true }} >
                <PedidoStack.Screen name="Subir Archivos" component={SubirArchivos}
                    options={({ route }) => (
                        {
                            headerTitle: () => <TopBackNavigation />, headerBackVisible: false, headerStyle: { backgroundColor: '#FDE619' }
                        })} />
                <PedidoStack.Screen name="Configuration"
                    component={Configuration}
                    options={({ route }) => (
                        {
                            headerTitle: () => <TopBackNavigationConf />, headerBackVisible: false, headerStyle: { backgroundColor: '#FDE619' }
                        })} />
                <PedidoStack.Screen name="Otro" component={Otro} />
            </PedidoStack.Navigator>

        </>
    )
}