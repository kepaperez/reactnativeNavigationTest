
import React, { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawNavigation from "./DrawNavigation";
import Otro from "../pages/Otro";

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
