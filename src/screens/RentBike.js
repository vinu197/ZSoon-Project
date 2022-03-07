import React, {useState} from 'react';
import {
  View,
  Dimensions,
  Image,
  Text,
  SafeAreaView,
  ScrollView,
  FlatList,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
const RentBike = () => {
  const [isPress, setIsPress] = useState(false);

  const PetNames = [
    {
      id: 1,
      name: 'Luggage Store',
    },
    {
      id: 2,
      name: 'One Way',
    },
    {
      id: 3,
      name: 'Extra Service',
    },
    {
      id: 4,
      name: 'Insurance',
    },
  ];
  const touchProps = {
    activeOpacity: 1,
    underlayColor: 'darkblue',
    style: isPress ? styles.btnPress : styles.btnNormal,
    onHideUnderlay: () => setIsPress(false),
    onShowUnderlay: () => setIsPress(true),
    onPress: () => console.log('HELLO'),
  };
  const GridView = ({name}) => (
    <TouchableHighlight
      {...touchProps}
      style={styles.gridViewStyle}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
        }}>
        {name}
      </Text>
    </TouchableHighlight>
  );
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{flex: 1}}>
          <Text
            style={styles.selectStyle}>
            Select Tour
          </Text>

          <ScrollView style={{flexDirection: 'row'}} horizontal={true}>
            <View
              style={styles.content}>
              <View>
                <Text style={{fontSize: 20,alignSelf:'center',color:'darkblue',fontWeight:'bold'}}>Test Tour</Text>
              </View>
            </View>
            <View
              style={styles.content}>
              <View>
                <Text style={{fontSize: 20,alignSelf:'center',color:'darkblue',fontWeight:'bold'}}>Food Tour</Text>
              </View>
            </View>
            <View
              style={styles.content}>
              <View>
                <Text style={{fontSize: 20,alignSelf:'center',color:'darkblue',fontWeight:'bold'}}>Guided Tour</Text>
              </View>
            </View>
            <View
              style={styles.content}>
              <View>
                <Text style={{fontSize: 20,alignSelf:'center',color:'darkblue',fontWeight:'bold'}}>Rent Tour</Text>
              </View>
            </View>
            <View
              style={styles.content}>
              <View>
                <Text style={{fontSize: 20,alignSelf:'center',color:'darkblue',fontWeight:'bold'}}>Explore Tour</Text>
              </View>
            </View>
            <View
              style={styles.content}>
              <View>
                <Text style={{fontSize: 20,alignSelf:'center',color:'darkblue',fontWeight:'bold'}}>Turist Tour</Text>
              </View>
            </View>
           
          </ScrollView>
        </View>

   
          <Text style={{fontSize: 20, margin: 10,color:'black',fontWeight:'bold'}}>Future Reservation</Text>

          <View style={{flex: 1,flexDirection:'row',justifyContent:'space-evenly'}}>
            
          <View
            style={styles.selectView}>
            <Text style={{fontSize: 20, color: 'white',alignSelf:'center',color:'darkblue',fontWeight:'bold'}}>Local</Text>
          </View>
          <View
            style={styles.selectView}>
            <Text style={{fontSize: 20, color: 'white',alignSelf:'center',color:'darkblue',fontWeight:'bold'}}>Remote</Text>
          </View>
     
        </View> 
        <Text style={styles.selectStyle}>Extra Services</Text>
        <FlatList
          style={{margin: 10}}
          data={PetNames}
          renderItem={({item}) => <GridView name={item.name} />}
          keyExtractor={item => item.id}
          numColumns={2}
          key={item => item.id}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  btnNormal: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: 100,
  },
  btnPress: {
    borderColor: 'blue',
    borderWidth: 1,
    height: 30,
    width: 100,
  },
  gridViewStyle:{
    flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        margin: 2,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'darkblue',
  },
  selectStyle:{
    fontSize: 20,
              margin: 10,
              fontWeight: 'bold',
              color: 'black',
  },
  selectView:{
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flex:1,
    borderColor:'darkblue',borderWidth:1
    
  },
  content:{
    backgroundColor: 'lightgreen',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    borderColor:'darkblue',borderWidth:1


  }
  

});
export default RentBike;
