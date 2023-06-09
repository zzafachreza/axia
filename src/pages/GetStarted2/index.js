import React, { useEffect, useRef, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Image,
    Animated,
    ImageBackground,
    TouchableNativeFeedback,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';



export default function GetStarted2({ navigation }) {



    const sound = new Sound('otw.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('error', error);
            return;
        }
        sound.play(success => {
            if (success) {
                sound.stop();

                navigation.replace('Login');

            } else {
                console.log('playback failed due to audio decoding errors');
            }
        });




    });


    const myimg = useRef();

    return (
        <TouchableNativeFeedback onPress={() => {
            sound.stop();
            navigation.replace('Login');


        }} style={{
            flex: 1,
        }}>
            <ImageBackground
                ref={myimg}
                source={require('../../assets/intro1.jpg')}
                style={{
                    flex: 1,
                    padding: 10,
                }}>

                <Image source={require('../../assets/introtext2.png')} style={{
                    width: windowWidth / 2,
                    height: 60,
                    resizeMode: 'contain'
                }} />

            </ImageBackground>
        </TouchableNativeFeedback>
    );
}

const styles = StyleSheet.create({});
