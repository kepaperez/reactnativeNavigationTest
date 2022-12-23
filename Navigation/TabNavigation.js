import React, { useState } from "react";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TopNavigationHome from "../components/TopNavigationHome";
import Home from "../pages/Home";
const Tab = createBottomTabNavigator();
import Info from "../pages/Info";
import Carrito from "../pages/Carrito";
import HomeIcon from "../Icons/HomeIcon";
import { color } from "react-native-reanimated";
import HelpIcon from "../Icons/HelpIcon";
import CartIcon from "../Icons/CartIcon";

export default TabNavigation = ({ navigation }) => {
    return (
        <>
            <Tab.Navigator screenOptions={{ headerShown: true ,
            tabBarActiveTintColor:'#FDE619',
            tabBarStyle:{
                backgroundColor:'black',
            
               
            } }}>
                <Tab.Screen name="Home" component={Home}
               
                 options={({ route }) => (
                    {
                        tabBarIcon:({color,size})=>(
                            <HomeIcon color={color} size={size}/>
                        ),
                        
                        headerTitle: () => <TopNavigationHome />, headerBackVisible: false, headerStyle: { backgroundColor: '#FDE619' }
                    })} 
                  
                    /> 
                <Tab.Screen name="Info" component={Info} options={({ route }) => (
                        {
                            tabBarIcon:({color,size})=>(
                                <HelpIcon color={color} size={size}/>
                            ),
                            headerTitle: () => <TopNavigationHome />, headerBackVisible: false, headerStyle: { backgroundColor: '#FDE619' }
                        })} />
                <Tab.Screen name="Carrito" component={Carrito}options={({ route }) => (
                        {
                            
                            tabBarIcon:({color,size})=>(
                                <CartIcon color={color} size={size}/>
                            ),
                            headerTitle: () => <TopNavigationHome />, headerBackVisible: false, headerStyle: { backgroundColor: '#FDE619' }
                        })} />
            </Tab.Navigator>

        </>
    )
}

