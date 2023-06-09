import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Sound from 'react-native-sound';

import SoundPlayer from 'react-native-sound-player'


var whoosh2 = new Sound('assets/finish.mpeg',
    Sound.MAIN_BUNDLE,
).release();
export default function Menang({ navigation }) {



    useEffect(() => {
        setTimeout(() => {
            SoundPlayer.playSoundFile('finish', 'mpeg')
        }, 100)
        setTimeout(() => {

            navigation.replace('Splash')
        }, 6000)
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