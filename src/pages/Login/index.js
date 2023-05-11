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

export default function GetStarted({ navigation }) {


  const textLogo = new Animated.Value(0);


  const animasi = (x, from, to, durasi) => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(x, {
          toValue: from,
          duration: durasi,
          useNativeDriver: true
        }),
        Animated.timing(x, {
          toValue: to,
          duration: durasi,
          useNativeDriver: true
        }),
      ]),
      {
        iterations: 1,
      },
    ).start();
  };



  useEffect(() => {


    setTimeout(() => {
      // setBackgroundKU(require('../../assets/introtext2.png'));
      navigation.replace('Home');
    }, 2000)


  }, []);

  const [backgroundKU, setBackgroundKU] = useState(require('../../assets/introtext3.png'))


  const myimg = useRef();

  return (
    <ImageBackground
      ref={myimg}
      source={require('../../assets/intro2.jpg')}
      style={{
        flex: 1,
        padding: 10,
      }}>

      <Image source={backgroundKU} style={{
        width: windowWidth / 2,
        height: 60,
        resizeMode: 'contain'
      }} />

    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
