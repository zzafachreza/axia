import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Sound from 'react-native-sound';

export default function GagalTidakGoal({ navigation }) {


    useEffect(() => {
        const tidakgoal = new Sound('rebut.mpeg', Sound.MAIN_BUNDLE, (error) => {
            if (error) {
                console.log('error', error);
                return;
            }
            tidakgoal.play(success => {
                navigation.goBack();
                const kemana = new Sound('kemana.mp3', Sound.MAIN_BUNDLE, (error) => {

                    kemana.play(kk => {
                        if (kk) {
                            console.log('kea arah mana', kk);
                            kemana.reset();
                        } else {
                            console.log('playback failed due to audio decoding errors');
                        }
                    })
                })
            });
        });

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