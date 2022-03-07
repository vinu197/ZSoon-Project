import {StyleSheet, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const COLORS = {
  black: '#101011',
  lightBlack: '#777777',
  darkPink: '#F9485A',
  blue: '#4A68FF',
  lightBlue: '#91A3FF',
  orange: '#FEAD00',
  brown: '#FF6F00',
  lightPink: '#F38EB0',
  lightGrey: '#C4C4CF',
  navyBlue: '#14153F',
  grey: '#707070',
  white: '#EBEDF2',
  lightBlueC: '#67A0C0',
  red: '#FF0000',
  pureWhite: '#FFFFFF',
  green: '#58A158',
  skyBlue: '#87ceeb',
  whiteBlue: '#CCE5FF',
  lightGreen: '#78BE21',
  redOrange: '#F87750',
};
export const FONTS = {
  appFontSemiBold: {fontFamily: 'Poppins-SemiBold.ttf', fontSize: 15},
  appFontSemi: {fontFamily: 'Poppins-SemiBold.ttf', fontSize: 17},
  appFontSmallBold: {fontFamily: 'Poppins-SemiBold.ttf', fontSize: 12},
  appFontBold: {fontFamily: 'Poppins-SemiBold.ttf', fontSize: 20},
};
const logo = require('../../src/assets/images/logo.jpg');
const menu = require('../../src/assets/images/menu-bg.jpeg');

const user = require('../../src/assets/images/user-profile.jpg');



export const IMAGES = {
logo,
menu,
user
  
};
export const GLOBALSTYLES = StyleSheet.create({
  
});