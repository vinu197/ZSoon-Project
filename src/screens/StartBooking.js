import React from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {IMAGES} from '../common/theme';
import {windowHeight, windowWidth} from '../utils/Dimensions';

const StartBooking = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={styles.ImageView}>
          <Image source={IMAGES.logo} style={styles.ImageStyle} />
        </View>
        <View style={{alignSelf: 'center'}}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>
            Congratulations you are successfully
          </Text>
          <Text
            style={{
              margin: 10,
              fontSize: 16,
              color: 'black',
              alignSelf: 'center',
              fontWeight: 'bold',
            }}>
            registered to Zsoon!
          </Text>
        </View>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            padding: 20,
            marginHorizontal: 20,
            backgroundColor: 'darkblue',
          }}
          onPress={() =>navigation.goBack() }>
          <Text style={{fontSize: 20, color: 'white'}}>Start Booking</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ImageView: {
    width: windowWidth / 1,
    alignSelf: 'center',
    height: windowHeight / 3.5,
    justifyContent: 'center',
    marginVertical: 20,
  },
  ImageStyle: {
    alignSelf: 'center',
  },
});
export default StartBooking;
