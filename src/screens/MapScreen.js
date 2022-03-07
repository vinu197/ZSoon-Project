import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import SQLite from 'react-native-sqlite-storage';
// import {COLORS, FONTS} from '../Constants/theme';

const {height, width} = Dimensions.get('window');

const db = SQLite.openDatabase(
  {
    name: 'MapDb',
    location: 'default',
  },
  () => {},
  error => {
    console.log(error);
  },
);

const MapScreen = ({navigation}) => {
  const [position, setPosition] = useState({
    latitude: 23.885942,
    longitude: 45.079162,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });
  // const [count, setCount] = useState(0);

  useEffect(() => {
    createTable();

    Geolocation.getCurrentPosition(pos => {
      const crd = pos.coords;
      setPosition({
        latitude: crd.latitude,
        longitude: crd.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0421,
      });
    }).catch(err => {
      console.log(err);
    });
  }, []);

  const createTable = () => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS ' +
          'Location ' +
          '(ID INTEGER PRIMARY KEY AUTOINCREMENT, latitude REAL, longitude REAL);',
      );
    });
  };

  // const setData = () => {
  //   setCount(count + 1);
  //   if (count === 1) {
  //     getLocation();
  //     setInterval(() => getLocation(), 1800000);
  //     navigation.navigate('Home');
  //   } else {
  //     navigation.navigate('Home');
  //   }

  //   navigation.navigate('Home');
  // };
  const getLocation = async () => {
    try {
      Geolocation.getCurrentPosition(pos => {
        const crd = pos.coords;
        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421,
        });
      });
      await db.transaction(async tx => {
        await tx.executeSql(
          'INSERT INTO Location (latitude, longitude) VALUES (?,?)',
          [position.latitude, position.longitude],
        );
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={position}
          showsUserLocation={true}>
          <Marker coordinate={position} />
    <Marker
    coordinate={{latitude: 56.0465, longitude:12.6945}}
    title={'Bike Rent 1'}
    
    description={'Helsingborg, Sweden'}
  />
    <Marker
    coordinate={{latitude: 55.6050, longitude:13.0038}}
    title={'Bike Rent 2'}
    description={'Malmö, Sweden'}
  />
  <Marker
    coordinate={{latitude: 59.9139, longitude:10.7522}}
    title={'Bike Rent 3'}
    description={'Oslo, Norway'}
  />
    <Marker 
    coordinate={{latitude: 59.3293, longitude:18.0686}}
    title={'Bike Rent 4'}
    description={'Stockholm, Sweden'}
    
  />
        </MapView>
      </View>
        <TouchableOpacity
          style={{
            width: width - 40,
            borderRadius: 10,
            // alignSelf: 'center',
            bottom: 70,
            backgroundColor: 'darkblue',
            position: 'absolute',
            margin:20
          }} 
          onPress={() => navigation.navigate('Rent Bike')}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize:20,
              marginVertical: 15,
              color:'white',
              fontWeight: 'bold',
            }}>
            View All BikeStand
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: width - 40,
            borderRadius: 10,
            alignSelf: 'center',
            bottom: 20,
            backgroundColor:'white',
            position: 'absolute',
            borderWidth:1,
            borderColor:'green'
          }}
          onPress={() => navigation.goBack()}>
          <Text
            style={{
              alignSelf: 'center',
              fontSize:20,
              marginVertical: 15,
              color: 'darkblue',
              fontWeight: 'bold',
            }}>
            Back
          </Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '95%',

    // justifyContent: "flex-end",
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '80%',
  },
  buttonStyle: {
    marginBottom: 10,
    padding: 10,
  },
});
export default MapScreen