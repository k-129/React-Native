import React from 'react';
import { View, StyleSheet } from 'react-native';
import CurrentWeather from './src/components/CurrentWeather';
import UpComingWeather from './src/components/UpComingWeather';


function App() {
  return (
    <View style={styles.container}>
      <UpComingWeather/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
export default App
