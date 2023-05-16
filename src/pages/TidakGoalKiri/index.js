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
    TouchableOpacity, Modal

} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';
import { SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import Sound from 'react-native-sound';

var whoosh = new Sound(
    require('../../assets/tidakgoal.mp3'),
    Sound.MAIN_BUNDLE,
).release();
export default function TidakGoalKiri({ navigation }) {


    const tanda = new Animated.Value(0);
    const textLogo = new Animated.Value(0);

    const bola = new Animated.Value(100);
    const kanan = new Animated.Value(0);
    const atas = new Animated.Value(0);
    const kiper_loncat1 = new Animated.Value(0);
    const kiper_loncat2 = new Animated.Value(0);
    const kiper_loncat3 = new Animated.Value(0);
    const kiper_loncat4 = new Animated.Value(1);
    const kiper_loncat5 = new Animated.Value(0);


    const MyCanvas = useRef();



    const kiper_loncat = (x = 0, y = 0, z = 0, k = 1, j = 0) => {
        Animated.timing(kiper_loncat1, {
            toValue: x,
            duration: 800,
            useNativeDriver: true
        }).start();
        Animated.timing(kiper_loncat2, {
            toValue: y,
            duration: 1500,
            useNativeDriver: true
        }).start();
        Animated.timing(kiper_loncat3, {
            toValue: z,
            duration: 1200,
            useNativeDriver: true
        }).start();
        Animated.timing(kiper_loncat4, {
            toValue: k,
            duration: 1,
            useNativeDriver: true
        }).start();
        Animated.timing(kiper_loncat5, {
            toValue: j,
            duration: 1,
            useNativeDriver: true
        }).start();
    }


    const tendangKanan = () => {
        kiper_loncat(0, -20, 0, 0, 1)

        Animated.timing(bola, {
            toValue: 50,
            duration: 1200,
            useNativeDriver: false
        }).start();
        Animated.timing(kanan, {
            toValue: 160,
            duration: 1300,
            useNativeDriver: false
        }).start();
        Animated.timing(atas, {
            toValue: -240,
            duration: 800,
            useNativeDriver: false
        }).start();
    }

    const tendanganKiri = () => {

        // kiper_loncat(-230, 20, 1, 0, 1)
        kiper_loncat(0, -20, 0, 0, 1)

        Animated.timing(tanda, {
            toValue: 1,
            duration: 800,
        }).start();
        Animated.timing(bola, {
            toValue: 50,
            duration: 1500,
        }).start();
        Animated.timing(kanan, {
            toValue: -165,
            duration: 800,
        }).start();
        Animated.timing(atas, {
            toValue: -240,
            duration: 800,
        }).start();
    }




    const tendanganMulai = () => {

        kiper_loncat(0, 0, 0, 1, 0)


        Animated.timing(bola, {
            toValue: 100,
            duration: 1000,
        }).start();
        Animated.timing(kanan, {
            toValue: 0,
            duration: 1300,
        }).start();
        Animated.timing(atas, {
            toValue: 0,
            duration: 800,
        }).start();
    }



    useEffect(() => {

        tendanganKiri();
        whoosh.play();
        setTimeout(() => {
            navigation.replace('GagalTidakGoal')
        }, 1200)



    }, []);



    const myimg = useRef();

    return (
        <ImageBackground

            source={require('../../assets/bghome.png')}
            style={{
                flex: 1,
                padding: 10,
            }}>

            <View style={{
                flex: 1,
                // backgroundColor: 'red',
                position: 'relative'

            }}>


                <Image source={require('../../assets/gawang.png')} style={{
                    width: windowWidth,
                    height: windowHeight / 1.5,
                }} />




                <Animated.Image source={require('../../assets/kiper.png')} style={{
                    opacity: kiper_loncat4,
                    width: windowWidth / 1.5,
                    height: windowHeight / 1.3,
                    right: 275,
                    resizeMode: "contain",
                    position: 'absolute',
                    transform: [
                        { translateX: kiper_loncat1 },
                        { translateY: kiper_loncat2 },
                        {
                            rotateZ: kiper_loncat3.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-80deg"]
                            })
                        }
                    ]
                }} />

                <Animated.Image source={require('../../assets/seru.png')} style={{
                    opacity: tanda,
                    width: 80,
                    height: 150,
                    left: 90,
                    position: 'absolute'
                }}

                />

                <Animated.Image source={require('../../assets/kiper_tangkap.png')} style={{
                    opacity: kiper_loncat5,
                    width: windowWidth / 1.5,
                    height: windowHeight / 1.3,
                    right: 275,

                    resizeMode: "contain",
                    position: 'absolute',
                    transform: [
                        { translateX: kiper_loncat1 },
                        { translateY: kiper_loncat2 },
                        {
                            rotateZ: kiper_loncat3.interpolate({
                                inputRange: [0, 1],
                                outputRange: ["0deg", "-80deg"]
                            })
                        }
                    ]
                }} />


                {/* <Image source={require('../../assets/kiper_kiri.png')} style={{
          width: windowWidth / 1.5,
          height: windowHeight / 1.3,
          right: windowWidth / 10,
          resizeMode: "contain",
          position: 'absolute'
        }} /> */}



                <View style={{

                    padding: 0,
                    height: 100,
                }}>
                    <TouchableNativeFeedback onPress={() => tendanganMulai()}>
                        <Animated.Image source={require('../../assets/bola.gif')} style={{
                            height: bola,
                            width: '100%',
                            resizeMode: 'contain',
                            position: 'absolute',
                            transform: [
                                { translateX: kanan },
                                { translateY: atas },
                            ]
                        }} />
                    </TouchableNativeFeedback>
                </View>


            </View>

        </ImageBackground >
    );
}

const styles = StyleSheet.create({});
