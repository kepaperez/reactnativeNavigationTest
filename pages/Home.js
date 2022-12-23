import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import TabNavigation from "../Navigation/TabNavigation";


export default Home = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
         
                <Text>THIs IS HOME</Text>
                <Button title="CREAR PEDIDO " onPress={() => navigation.navigate('Crear Pedido')} />
            </View>

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

