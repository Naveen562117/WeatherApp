import React, { useState } from 'react';
import { View, FlatList, Text, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { getWeatherdata } from '../../redux/selectors/weatherdataSelectors';

export const WeatherAppHome = () => {
  const { weatherData } = useSelector(getWeatherdata);
  const [searchText, setSearchText] = useState('');

  const filteredData = weatherData.filter(item =>
    item.city.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.city}>{item.city}</Text>
      <Text>Date: {item.date}</Text>
      <Text>Temperature: {item.temperature}°C</Text>
      <Text>Humidity: {item.humidity}%</Text>
      <Text>Precipitation: {item.precipitation} mm</Text>
      <Text>Wind Speed: {item.wind_speed} km/h</Text>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search by City"
          value={searchText}
          onChangeText={setSearchText}
        />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={(item) => item.city}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: 'white',
  },
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: 'rgba(255,255,255,0.8)',
  },
  city: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
