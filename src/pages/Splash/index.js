import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  ImageBackground,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Splash({ navigation }) {



  const awanKiri = new Animated.Value(0);
  const logo = new Animated.Value(0);
  const awanKanan = new Animated.Value(50);
  const textLogo = new Animated.Value(0);

  const animasi = (x, from, to) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(x, {
          toValue: from,
          duration: 1000,
          useNativeDriver: true
        }),
        Animated.timing(x, {
          toValue: to,
          duration: 1000,
          useNativeDriver: true
        }),
      ]),
      {
        iterations: 10,
      },
    ).start();
  };



  useEffect(() => {

    animasi(awanKanan, 0, 50);
    animasi(awanKiri, 50, 0);

    Animated.timing(logo, {
      toValue: 200,
      duration: 1000,
    }).start();
    Animated.timing(textLogo, {
      toValue: 50,
      duration: 2000,
    }).start();


  }, []);

  const [backgroundKU, setBackgroundKU] = useState(require('../../assets/bgmulai.jpg'))


  const myimg = useRef();

  return (
    <ImageBackground
      ref={myimg}
      source={backgroundKU}
      style={{
        flex: 1,
        position: 'relative'
      }}>
      <Animated.Image
        source={require('../../assets/awan.png')} style={{
          width: 250,
          height: 80,
          top: 20,
          left: 0,
          position: 'absolute',
          transform: [{ translateX: awanKiri }],
        }} />
      <Animated.Image
        source={require('../../assets/awan.png')} style={{
          width: 250,
          height: 100,
          top: 50,
          right: 0,
          position: 'absolute',
          transform: [{ translateX: awanKanan }],
        }} />
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,

      }}>
        <Animated.Text style={{
          fontFamily: fonts.primary.normal,
          fontSize: textLogo,
          textShadowColor: '#FFF',
          textShadowOffset: { width: 5, height: 5 },
          textShadowRadius: 10,
        }}>MULAI ?</Animated.Text>
        <TouchableOpacity onPress={() => {

          navigation.replace('GetStarted')

        }}>

          <Animated.Image source={require('../../assets/btnmulai.png')} style={{
            width: logo,
            height: logo
          }} />
        </TouchableOpacity>
      </View>




    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
