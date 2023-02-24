
import React, { useState } from "react";

import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigation from "./TabNavigation";


import CustomDrawerContent from "./CustomDrawerContent";


export default DrawerNavigation = ({ navigation }) => {
    const Drawer = createDrawerNavigator();

    return (
             <Drawer.Navigator screenOptions={{ headerShown:false }} drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={TabNavigation} />
            </Drawer.Navigator>

    );
}


