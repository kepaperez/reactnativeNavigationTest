
import React, { useState } from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from "./TabNavigation";
import Info from "../pages/Info";
import CreatePedidoStack from "./CreatePedidoStack";
const Drawer = createDrawerNavigator();



export default DrawerNavigation = ({ navigation }) => {


    return (
            <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Drawer.Screen name="Home" component={TabNavigation} />
                <Drawer.Screen name="Info" component={Info} />
                <Drawer.Screen name="Crear Pedido"component={CreatePedidoStack} />
            </Drawer.Navigator>

    );
}


