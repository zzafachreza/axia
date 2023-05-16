import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function GagalTidakGoal({ navigation }) {

    useEffect(() => {
        setTimeout(() => {
            navigation.goBack();
        }, 1200)
    }, [])

    return (
        <ImageBackground source={require('../../assets/tidakgoal.jpg')} style={{
            flex: 1,
            padding: 10,
            alignItems: 'flex-start'
        }}>
            <Image source={require('../../assets/rebut.png')} style={{
                margin: 10,
                width: 300,
                height: 70,
                resizeMode: 'contain'
            }} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})