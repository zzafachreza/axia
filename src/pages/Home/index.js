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

export default function Home({ navigation }) {


  const textLogo = new Animated.Value(0);

  const bola = new Animated.Value(100);
  const kanan = new Animated.Value(0);
  const atas = new Animated.Value(0);


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


  const tendangKanan = () => {
    Animated.timing(bola, {
      toValue: 50,
      duration: 1200,
    }).start();
    Animated.timing(kanan, {
      toValue: 180,
      duration: 1300,
    }).start();
    Animated.timing(atas, {
      toValue: -200,
      duration: 800,
    }).start();
  }

  const tendanganKiri = () => {
    Animated.timing(bola, {
      toValue: 50,
      duration: 1200,
    }).start();
    Animated.timing(kanan, {
      toValue: -180,
      duration: 1300,
    }).start();
    Animated.timing(atas, {
      toValue: -200,
      duration: 800,
    }).start();
  }

  const tendanganMulai = () => {
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
        {/* <Image source={require('../../assets/kiper_kanan.png')} style={{
          width: windowWidth / 1.5,
          height: windowHeight / 1.3,
          left: windowWidth / 10,
          resizeMode: "contain",
          position: 'absolute'
        }} /> */}

        <TouchableNativeFeedback onPress={() => {
          tendanganMulai();
        }}>
          <Image source={require('../../assets/kiper.png')} style={{
            width: windowWidth / 1.5,
            height: windowHeight / 1.3,
            left: windowWidth / 6,
            resizeMode: "contain",
            position: 'absolute'
          }} />
        </TouchableNativeFeedback>

        {/* <Image source={require('../../assets/kiper_kiri.png')} style={{
          width: windowWidth / 1.5,
          height: windowHeight / 1.3,
          right: windowWidth / 10,
          resizeMode: "contain",
          position: 'absolute'
        }} /> */}
      </View>

      <View style={{
        flexDirection: 'row'
      }}>
        <View style={{
          flex: 1,
          padding: 10,

        }}>
          <TouchableOpacity onPress={() => {
            tendanganKiri();
          }}>
            <Image source={require('../../assets/panah_kiri.png')} style={{
              height: 100,
              width: '100%',
              resizeMode: 'contain',
            }} />
          </TouchableOpacity>
        </View>
        <View style={{
          flex: 1,
          padding: 0,
        }}>
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
        </View>
        <View style={{
          flex: 1,
          padding: 10,

        }}>
          <TouchableOpacity onPress={() => {
            tendangKanan();
          }}>
            <Image source={require('../../assets/panah_kanan.png')} style={{
              height: 100,
              width: '100%',
              resizeMode: 'contain',
            }} />
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({});
