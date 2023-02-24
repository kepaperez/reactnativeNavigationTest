
import TabNavigation from "./TabNavigation";
import Info from "../pages/Info";
import CreatePedidoStack from "./CreatePedidoStack";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import BackIcon from "../Icons/BackIcon";

export default CustomDrawerConten = (props) => {
    const navigation = useNavigation();
    const [option, setOption] = useState("Home");
    return (
        <DrawerContentScrollView {...props}>

            {option === "Home" ?
                <>
                    <DrawerItem
                        label="Carrito"
                        onPress={() => navigation.navigate("Carrito")}

                    />
                    <DrawerItem
                        label="User"
                        onPress={() => setOption("User")}
                    />
                    <DrawerItem
                        label="Info"
                        onPress={() => navigation.navigate("Info")}
                    />

                </>

                : option === "User" ?
                    <>
                        <DrawerItem
                            icon={() => <BackIcon size={25} color={"black"} />}
                            onPress={() => setOption("Home")}
                             label="" />
                        <DrawerItem
                            label="User data1"
                            onPress={() => navigation.navigate("UserData")}
                        />
                        <DrawerItem
                            label="User data"
                        />

                    </>
                    : <></>



            }


        </DrawerContentScrollView>
    );
}


