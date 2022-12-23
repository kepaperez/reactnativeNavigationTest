import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigation from "./StackNavigation";
import TopNavigationHome from "../components/TopNavigationHome";
import CrearPedido from "../pages/Configuration";
const Tab = createBottomTabNavigator();
import TopBackNavigation from "../components/TopBackNabigation";

export default TabNavigation = ({ navigation }) => {
    return (
        <>
            <Tab.Navigator screenOptions={{ headerShown: true }}>
                <Tab.Screen name="Home" component={Home}
                 options={({ route }) => (
                    {
                        headerTitle: () => <TopNavigationHome />, headerBackVisible: false, headerStyle: { backgroundColor: '#FDE619' }
                    })} /> 
                <Tab.Screen name="Info" component={Info} options={({ route }) => (
                        {
                            headerTitle: () => <TopNavigationHome />, headerBackVisible: false, headerStyle: { backgroundColor: '#FDE619' }
                        })} />
                <Tab.Screen name="Carrito" component={Carrito}options={({ route }) => (
                        {
                            headerTitle: () => <TopNavigationHome />, headerBackVisible: false, headerStyle: { backgroundColor: '#FDE619' }
                        })} />
            </Tab.Navigator>

        </>
    )
}

