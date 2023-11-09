import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NAVIGATION } from '../redux/constants';
import { WeatherAppHome } from '../screens';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (

    <Stack.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Stack.Screen name={NAVIGATION.WeatherAppHome} component={WeatherAppHome} />
    </Stack.Navigator>


  );
}
