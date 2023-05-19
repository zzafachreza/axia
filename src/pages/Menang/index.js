import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Sound from 'react-native-sound';


var whoosh = new Sound(
    require('../../assets/menang.mp3'),
    Sound.MAIN_BUNDLE,
).release();

var whoosh2 = new Sound(
    require('../../assets/finish.mpeg'),
    Sound.MAIN_BUNDLE,
).release();
export default function Menang({ navigation }) {



    useEffect(() => {
        setTimeout(() => {
            // whoosh.play();
            whoosh2.play();
        }, 100)
        setTimeout(() => {
            navigation.replace('Splash')
        }, 5000)
    }, [])

    return (
        <ImageBackground source={require('../../assets/menang.jpg')} style={{
            flex: 1,
            padding: 10,
            alignItems: 'flex-start'
        }}>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({})