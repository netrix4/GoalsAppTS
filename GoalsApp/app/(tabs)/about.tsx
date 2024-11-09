import React from 'react'
import { View, Text, StyleSheet } from "react-native";

const AboutPage = () => {
  return (
    <View style={styleSheet.mainContainer}>
        <Text>Desde About</Text>
    </View>
  )
}

const styleSheet = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 20,
    }
})

export default AboutPage