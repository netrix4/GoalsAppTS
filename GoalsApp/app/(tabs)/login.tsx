import React from 'react'
import { View, Text, TextInput, StyleSheet } from "react-native";
// import { TextInput } from 'react-native-gesture-handler';

const LoginScreen = () => {
  return (
    <View style={styleSheet.mainContainer}>
        <View style={styleSheet.fieldContainer}>
            <Text>Usuario:</Text>
            <TextInput placeholder='Ingresa usuario'></TextInput>
        </View>
        <View style={styleSheet.fieldContainer}>
            <Text>Contraseña:</Text>
            <TextInput placeholder='Ingresa contrasena'></TextInput>
        </View>
    </View>
  )
}

const styleSheet = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
    },
    fieldContainer:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 350,
        
    }
})

export default LoginScreen