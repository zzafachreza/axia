import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Splash,
  Home,
  Login,
  GetStarted,
  Menang,
  Gagal,
  TidakGoalKanan,
  TidakGoalKiri,
  GoalKanan,
  GoalKiri,
  GagalTidakGoal,

} from '../pages';
import { colors } from '../utils';
import { Icon } from 'react-native-elements';

const Stack = createStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName='Splash'>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="GetStarted"
        component={GetStarted}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="Menang"
        component={Menang}
        options={{
          headerShown: false,
        }}
      />


      <Stack.Screen
        name="Gagal"
        component={Gagal}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="TidakGoalKanan"
        component={TidakGoalKanan}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TidakGoalKiri"
        component={TidakGoalKiri}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="GoalKanan"
        component={GoalKanan}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="GoalKiri"
        component={GoalKiri}
        options={{
          headerShown: false,
        }}
      />



      <Stack.Screen
        name="GagalTidakGoal"
        component={GagalTidakGoal}
        options={{
          headerShown: false,
        }}
      />





    </Stack.Navigator>
  );
}
