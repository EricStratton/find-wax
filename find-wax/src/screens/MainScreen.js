import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Button from './../components/Button'
import Map from './../components/Map';

import colors from '../config/colors';

const Screen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>Home Screen</Text>
      </View>
      <View style={styles.mapContainer} >
        <Map />
      </View>
      <View style={styles.buttonContainer}>
        <Button />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    top: -10,
  },
  container: {
    backgroundColor: colors.primary,
    // flex: 1,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center', 
    flexWrap: 'wrap'
  },
  mapContainer: {
    bottom: 50
  },
  textContainer: {
    bottom: 200,
  }
})

export default Screen;