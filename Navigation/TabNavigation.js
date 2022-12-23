import React, { useState } from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopNavigationHome from "../components/TopNavigationHome";
import Home from "../pages/Home";
const Tab = createBottomTabNavigator();
import Info from "../pages/Info";
import Carrito from "../pages/Carrito";

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

