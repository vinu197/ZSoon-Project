import React from 'react';
import AuthStack from './src/navigation/AppStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import RentBike from './src/screens/RentBike';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import MapScreen from './src/screens/MapScreen';
import Signup from './src/screens/Signup';
import Otp from './src/screens/Otp';
import SplashScreen from './src/screens/SplashScreen';
import Policy from './src/screens/Policy'
import StartBooking from './src/screens/StartBooking';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}>
          <Stack.Screen name="Splash" component={SplashScreen} />

          <Stack.Screen name="DrawerNav" component={AuthStack} />

        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Rent Bike (Bike Stand)" component={MapScreen} />


        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Rent Bike" component={RentBike} />

        <Stack.Screen name="Sign" component={Signup} />
        <Stack.Screen name="OtpScreen" component={Otp} />
        <Stack.Screen name="PolicyScreen" component={Policy} />
        <Stack.Screen name="StartBookingScreen" component={StartBooking} />




      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
