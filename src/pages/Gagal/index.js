import { Image, ImageBackground, StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native'
import React, { useEffect } from 'react'
import SoundPlayer from 'react-native-sound-player'



export default function Gagal({ navigation }) {

    useEffect(() => {
        setTimeout(() => {

            SoundPlayer.playSoundFile('kalahtotal', 'mpeg')
        }, 100)
        setTimeout(() => {

            navigation.replace('Splash')
        }, 8000)
    }, [])

    return (
        <TouchableNativeFeedback onPress={() => navigation.replace('Splash')}>
            <ImageBackground source={require('../../assets/kalah.jpg')} style={{
                flex: 1,
                padding: 10,
                alignItems: 'flex-end'
            }}>
                <Image source={require('../../assets/textkalah.png')} style={{
                    margin: 10,
                    width: 300,
                    height: 70,
                    resizeMode: 'contain'
                }} />
            </ImageBackground>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({})