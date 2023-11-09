import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { useDispatch } from 'react-redux';
import { HomeNavigator } from './HomeNavigator';
import { theme } from '../theme';
import { SetWeatherData } from '../redux/actions/weatherdataActions';

export function RootNavigator() {


  let data = [
    {
      "city": "Delhi",
      "date": "2023-01-01",
      "temperature": 28,
      "humidity": 75,
      "precipitation": 3.21,
      "wind_speed": 12
    },
    {
      "city": "Mumbai",
      "date": "2023-01-01",
      "temperature": 32,
      "humidity": 82,
      "precipitation": 1.45,
      "wind_speed": 15
    },
    {
      "city": "Bangalore",
      "date": "2023-01-01",
      "temperature": 24,
      "humidity": 67,
      "precipitation": 0.98,
      "wind_speed": 10
    },
    {
      "city": "Kolkata",
      "date": "2023-01-01",
      "temperature": 29,
      "humidity": 73,
      "precipitation": 2.75,
      "wind_speed": 14
    },
    {
      "city": "Chennai",
      "date": "2023-01-01",
      "temperature": 30,
      "humidity": 79,
      "precipitation": 1.12,
      "wind_speed": 11
    },
  ]
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SetWeatherData(data))

  }, [])

  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme]}>
      <HomeNavigator />
    </NavigationContainer>
  );
}
