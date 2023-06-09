import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  Animated,
  TouchableNativeFeedback,
  ImageBackground,
} from 'react-native';
import { MyButton } from '../../components';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { getData } from '../../utils/localStorage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';

export default function GetStarted({ navigation }) {





  const sound = new Sound('ayo.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('error', error);
      return;
    }
    sound.play(success => {
      if (success) {
        sound.stop();
        const sound2 = new Sound('kemana.mp3', Sound.MAIN_BUNDLE, (error) => {
          if (error) {
            console.log('error', error);
            return;
          }
          navigation.replace('Home');

          sound2.play(success => {
            if (success) {
              sound2.stop();


            } else {
              console.log('playback failed due to audio decoding errors');
            }
          });

        });



      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });

  });


  const myimg = useRef();
  return (
    <TouchableNativeFeedback onPress={() => {
      navigation.replace('Home')
      sound.stop();
    }}>
      <ImageBackground
        ref={myimg}
        source={require('../../assets/intro2.jpg')}
        style={{
          flex: 1,
          padding: 10,
        }}>
        {/* 
      <Image source={backgroundKU} style={{
        width: windowWidth / 2,
        height: 60,
        resizeMode: 'contain'
      }} /> */}

      </ImageBackground>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({});
