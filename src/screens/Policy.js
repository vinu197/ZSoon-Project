import React from 'react'
import {View ,SafeAreaView,StyleSheet,Text,TouchableOpacity,Image} from 'react-native'
import { IMAGES } from '../common/theme'
import {windowHeight, windowWidth} from '../utils/Dimensions';

const Policy = ({navigation}) => {
    
  return (
      <SafeAreaView style={{flex:1}}> 
    <View style={{flex:1}}>
    <View style={styles.ImageView}>
        <Image source={IMAGES.logo} style={styles.ImageStyle} />
      </View>
        <TouchableOpacity style={{borderWidth:1,padding:10,margin:10,backgroundColor:'darkblue'}}
        onPress={() => navigation.navigate('StartBookingScreen')}
        >

            <Text style={{fontSize:20,color:'white'}}>policy</Text>
            </TouchableOpacity>
            </View>
            </SafeAreaView>
  )
}
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
})
export default Policy