import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  
  TouchableOpacity,
} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';
import {IMAGES} from '../common/theme';
const Otp = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.ImageView}>
        <Image source={IMAGES.logo} style={styles.ImageStyle} />
      </View>
      <View style={{alignSelf: 'center'}}>
        <Text style={styles.textStyle}>Verification code has been send! </Text>
      </View>
      <View style={{alignSelf: 'center', marginVertical: 30}}>
        <Text style={styles.textStyle}>
          Please check your email box for a code
        </Text>
      </View>
      <View style={{flex: 1, marginHorizontal: 40, marginVertical: 30}}>
        <Text style={styles.textStyle}>Verification Code </Text>
      </View>
      <View style={{flexDirection: 'row', margin: 10}}>
        <TouchableOpacity
          style={styles.editBtn}
          onPress={() => navigation.navigate('PolicyScreen')}>
          <Text style={styles.editText}>Ok</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteBtn}
          onPress={() => navigation.goBack()}>
          <Text style={styles.deleteText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  ImageView: {
    width: windowWidth / 2,
    alignSelf: 'center',
    height: windowHeight / 3.5,
    justifyContent: 'center',
    marginVertical: 20,
  },
  ImageStyle: {
    alignSelf: 'center',
  },
  textStyle: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  editBtn: {
    flex: 1,
    backgroundColor: 'darkblue',
    padding: 20,
    borderRadius: 10,
    right: 4,
    margin:10
  },
  editText: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  deleteBtn: {
    flex: 1,
    margin: 10,
    backgroundColor: 'lightgrey',
    padding: 20,
    borderRadius: 10,
    left: 1,
  },
  deleteText: {
    alignSelf: 'center',
    color: 'darkblue',
    fontWeight: 'bold',
  },
});
export default Otp;
