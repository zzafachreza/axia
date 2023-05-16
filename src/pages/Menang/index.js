import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Sound from 'react-native-sound';

var whoosh = new Sound(
    require('../../assets/menang.mp3'),
    Sound.MAIN_BUNDLE,
).release();

export default function Menang({ navigation }) {

    useEffect(() => {
        whoosh.play();
        setTimeout(() => {
            navigation.replace('Splash')
        }, 1500)
    }, [])

    return (
        <ImageBackground source={require('../../assets/intro1.jpg')} style={{
            flex: 1,
            padding: 10,
            alignItems: 'flex-start'
        }}>
            <Image source={require('../../assets/b6.png')} style={{
                width: 300,
                height: 40,
                resizeMode: 'contain'
            }} />
            <Image source={require('../../assets/textmenang.png')} style={{
                margin: 10,
                width: 300,
                height: 70,
                resizeMode: 'contain'
            }} />
        </ImageBackground>
    )
}

const styles = StyleSheet.create({})