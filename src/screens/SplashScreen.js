import React from "react";

import { View,StyleSheet, Image } from 'react-native';
import {IMAGES } from '../common/theme';

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
   navigation.replace('DrawerNav')
  }, 3000);

  return (
    <View style={styles.body}>
      <Image
        source={IMAGES.logo}
        style={{ width: 256, height:256 ,resizeMode:'contain'}} />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
     backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  }

});

export default SplashScreen;