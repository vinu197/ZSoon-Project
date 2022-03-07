import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {IMAGES} from '../../src/common/theme';
import {windowWidth, windowHeight} from '../utils/Dimensions';

export default function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', borderWidth: 1}}>
      <View
        style={{
          width: windowWidth / 2,
          alignSelf: 'center',
          height: windowHeight / 3.5,
          justifyContent: 'center',
          marginVertical: 60,
        }}>
        <Image source={IMAGES.logo} style={{alignSelf: 'center'}} />
      </View>
      <View
        style={{
          padding: 80,
          borderWidth: 1,
          alignItems: 'center',
          margin: 10,
          backgroundColor: 'darkblue',
        }}>
        <TouchableOpacity style={{}} onPress={() => navigation.navigate('Rent Bike (Bike Stand)')}>
          <Text style={{color: 'white', fontSize: 20}}>Rent Bike</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            padding: 40,
            margin: 10,
            backgroundColor: 'darkgreen',
          }}>
          <TouchableOpacity>
            <Text style={{alignSelf: 'center', color: 'white'}}>Tickets</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            borderWidth: 1,
            padding: 40,
            margin: 10,
            backgroundColor: 'darkgreen',
          }}>
          <TouchableOpacity style={{flex:1}}
          onPress={()=> navigation.navigate('Rent Bike')}
          >
            <Text style={{alignSelf: 'center', color: 'white'}}
            >Events</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
