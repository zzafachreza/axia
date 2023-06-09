import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './routes';
import { LogBox, StatusBar } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { colors } from './utils';
import Sound from 'react-native-sound';
import SoundPlayer from 'react-native-sound-player'
export default function App() {
  LogBox.ignoreAllLogs();

  const sound = new Sound('utama.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('error', error);
      return;
    }
    sound.setVolume(0.3);
    sound.play();
  });




  return (
    <NavigationContainer>
      <StatusBar hidden backgroundColor={colors.white} barStyle="dark-content" />
      <Router />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}
