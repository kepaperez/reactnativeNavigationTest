import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import TopBackNabigation from "../components/TopBackNabigation";
import { useNavigation } from "@react-navigation/native";
import TopBackNavigation from "../components/TopBackNabigation";
import TabNavigation from "../Navigation/TabNavigation";
import TopBackNavigationConf from "../components/TopBackNabigationConf";

export default Configuration = (props) => {
    const [count, setCount] = useState(0);
    const navigation = useNavigation();
    return (
        <>
            <View style={styles.container}>
                <Text>CREAR PEDIDO</Text>
            </View>
            <Button title="-"  onPress={() => navigation.setOptions({  headerTitle: () => <TopBackNavigationConf count={count-1} /> })+setCount(count-1)}/>
            <Button title="+"  onPress={() => navigation.setOptions({  headerTitle: () => <TopBackNavigationConf count={count+1} /> })+setCount(count+1)}/>
            <Button title="AÑADIR AL CARRITO"  onPress={() => navigation.navigate('Carrito') }/>

        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",


    },

});
