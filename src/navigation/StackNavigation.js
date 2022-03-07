import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/Signup';
import HomeScreen from '../screens/HomeScreen';
import AuthStack from './AppStack';
import MapScreen from '../screens/MapScreen';
import {locations} from '../Dummy/markerDummy';
import Signup from '../screens/Signup';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DrawerNav"

        initialRoute="DrawerNav"

        screenOptions={{
          headerShown: false,
        }}>
                  <Stack.Screen name="DrawerNav" component={AuthStack} />

        <Stack.Screen name="Home" component={HomeScreen} />

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Rent Bike (Bike Stand)" component={MapScreen} />
        <Stack.Screen name="Rent Bike Select" component={ProfileScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="markerDummyScreen" component={locations} />

        <Stack.Screen name="Sign" component={Signup} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
