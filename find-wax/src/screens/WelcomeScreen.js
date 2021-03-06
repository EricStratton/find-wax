import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Screen from './../components/Screen';
import colors from '../config/colors';
import AppButton from '../components/AppButton';

function WelcomeScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('./../../assets/logo.png')} />
        <Text style={styles.text}>WELCOME</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title='Login' onPress={() => navigation.navigate("Login")}/>
        <AppButton title='Register' onPress={() => navigation.navigate("Register")}/>
      </View>
    </Screen>
  );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    // flex: 1,
    height: Dimensions.get('screen').height,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logo: {
    width: 300,
    height: 450
  },
  logoContainer: {
    bottom: 150,
    alignItems: 'center'
  },
  buttonContainer: {
    bottom: 150,
    alignItems: 'center',
    padding: 20,
    width: '80%',
  },
  text: {
    bottom: 220,
    fontSize: 20,
    fontWeight: 'bold',
  }
})

