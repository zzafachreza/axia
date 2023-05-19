import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Sound from 'react-native-sound';

export default function GagalTidakGoal({ navigation }) {
    const rebut = new Sound(
        require('../../assets/rebut.mpeg'),
        Sound.MAIN_BUNDLE,
    ).release();

    useEffect(() => {
        setTimeout(() => {
            // navigation.goBack();
            rebut.play();
        }, 100)
        setTimeout(() => {
            navigation.goBack();
            // alert('oke')
        }, 7200)
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