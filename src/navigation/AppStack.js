import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import CustomDrawer from '../components/CustomDrawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RentBike from '../screens/RentBike';
import Signup from '../screens/Signup';
import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen'
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

const AuthStack = () => {
  
  return (
 
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#aa18ea',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginLeft: -25,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true,
          drawerIcon: ({color}) => (
            <Ionicons name="home-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Rent Bike"
        component={RentBike}
        options={{headerShown: true,
          drawerIcon: ({color}) => (
            <Ionicons name="person-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Rent Bike (Bike Stand)"
        component={MapScreen}
        options={{headerShown:true,
          drawerIcon: ({color}) => (
            <Ionicons name="location" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown:true,
          drawerIcon: ({color}) => (
            <Ionicons name="timer-outline" size={22} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Sign"
        component={Signup}
        options={{ headerShown:true,
          drawerIcon: ({color}) => (
            <Ionicons name="settings-outline" size={22} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default AuthStack;
