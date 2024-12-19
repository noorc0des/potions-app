import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Navigation from './navigation.jsx'
import PotionTableImg from "@/assets/images/background-test.png" //homescreen background image
import BrewImg from "@/assets/images/brew-test.jpg" //brew screen background test
import cauldron from "@/assets/images/cauldron.png"
import potion from "@/assets/images/potion.png"

const HomeScreen = () => {
  return (
    <View style={styles.container}>
    <ImageBackground
        source={PotionTableImg}
        resizeMode="cover"
        style={styles.image}
        >
        <Text style={styles.text}>Welcome to Potions class!</Text>
        </ImageBackground>
        <TouchableOpacity onPress = {() => Navigation.navigate('Brew')}>
        <Image
        source ={cauldron}
        style={styles.overlayImage}/>
        </TouchableOpacity>
      <Image
        source ={potion}
        style={styles.potionImage}/>
    </View>
    // Home Screen UI
  )
}

const Brew = () => {
  return (
    <View>
    <ImageBackground
        source={BrewImg}
        resizeMode="cover"
        style={brewStyle.image}
        >
        <Button
          onPress={onPressLearnMore}
          title="Brew"
          color="#841584"
          accessibilityLabel="Begin Brewing your potion"
        />
        </ImageBackground>
        <TouchableOpacity onPress = {() => Navigation.navigate('Brew')}>
        <Image
        source ={cauldron}
        style={styles.overlayImage}/>
        </TouchableOpacity>
      <Image
        source ={potion}
        style={styles.potionImage}/>
    </View>
  )
}

/*
const PotionsShelf = () => {
  return (
    // Detail Screen UI
  )
}
  */

const app = () => {
  return (
    <>
      <View style={styles.container}>
      <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Brew" component={Brew} />
        </Stack.Navigator>
      </View>
    </>
  )
}

export default app

// home screen layout:

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlayImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: '70%', // Center vertically
    left: '12%', // Center horizontally
    transform: [{ translateX: -50 }, { translateY: -50 }], // Offset to center the image
  },

  potionImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: '75%', // Center vertically
    left: '70%', // Center horizontally
    transform: [{ translateX: -50 }, { translateY: -50 }], // Offset to center the image
  },
  text:
  {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

// brew screen layout:

const brewStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlayImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: '70%', // Center vertically
    left: '12%', // Center horizontally
    transform: [{ translateX: -50 }, { translateY: -50 }], // Offset to center the image
  },

  potionImage: {
    width: 150,
    height: 150,
    position: 'absolute',
    top: '75%', // Center vertically
    left: '70%', // Center horizontally
    transform: [{ translateX: -50 }, { translateY: -50 }], // Offset to center the image
  },
  text:
  {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})