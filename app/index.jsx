import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Button} from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

import Navigation from './navigation.jsx'
import PotionTableImg from "@/assets/images/background-test.png" //homescreen background image
import BrewImg from "@/assets/images/file.png" //brew screen background test
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
    <View style={brewStyle.container}>
    <ImageBackground
        source={BrewImg}
        resizeMode="cover"
        style={brewStyle.image}
        >
          <TouchableOpacity 
                style ={{
                    height: 40,
                    width:160,
                    borderRadius:20,
                    backgroundColor : "green",
                    marginLeft :110,
                    marginRight:100,
                    marginTop :-100
                }}>
        <Button
          title="Start Brew"
          color="#ffffff"
          accessibilityLabel="Begin Brewing your potion"
          onPress={() => timer()}
        />
        </TouchableOpacity>
        </ImageBackground>
        <Image
        source ={cauldron}
        style={brewStyle.overlayImage}/>
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
      <Stack.Screen name="Home Screen" component={Brew} />
      <Stack.Screen name="Brew" component={HomeScreen} />
        </Stack.Navigator>
      </View>
    </>
  )
}

export default app


  // start a countdown til the potion is ready
  /*
  const timer =   setInterval(() => {
    setTimeLeft()
  }, 1000);

  return () => {
    clearInterval(timer);
  }

*/
  // ensure that when the user leaves the app, potions fails after 10 seconds 

  // when countdown is completed and user didnt leave the app, they earn __ number of coins

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
    left: '30%', // Center horizontally
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
    top: '65%', // Center vertically
    left: '30%', // Center horizontally
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