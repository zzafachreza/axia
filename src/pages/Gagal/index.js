import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Sound from 'react-native-sound';

var whoosh = new Sound(
    require('../../assets/kalah.mp3'),
    Sound.MAIN_BUNDLE,
).release();
export default function Gagal({ navigation }) {

    useEffect(() => {
        whoosh.play()
        setTimeout(() => {
            navigation.replace('Splash')
        }, 1500)
    }, [])

    return (
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
    )
}

const styles = StyleSheet.create({})