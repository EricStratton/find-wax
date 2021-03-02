import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'; // UI library //
import AppControl from './src/components/AppControl';
import Map from './src/components/Map';

export default function App() {

  // const handlePress = () => console.log("Text Pressed");

  return (
    <PaperProvider theme={theme}>
      <SafeAreaView style={styles.container}>
        {/* <Text numberOfLines={1} onPress={handlePress}>Hello Everyone!</Text> */}
        <AppControl />
        {/* <Map /> */}
        <StatusBar style="auto" />
      </SafeAreaView>
    </PaperProvider>
  );
}

const theme = { // Test Theme //
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'yellow',
    accent: 'brown'
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
