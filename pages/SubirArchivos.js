import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import TopBackNabigation from "../components/TopBackNabigation";
import { useNavigation } from "@react-navigation/native";

export default SubirArchivos = ({navigation}) => {
    return (
        <>
            <View style={styles.container}>
                <Text>SUBIR ARCHIVOS</Text>
            </View>
            <Button title="CONFIGURAR" onPress={() => navigation.navigate('Configuration')} />     
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
