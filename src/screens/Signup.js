import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {COLORS, IMAGES, FONTS} from '../common/theme';

import {Formik} from 'formik';
import * as yup from 'yup';
import {windowHeight, windowWidth} from '../utils/Dimensions';
const Signup = ({navigation}) => {
  const [country, setCountry] = useState('');
  const signUpValidationSchema = yup.object().shape({
    fname: yup.string().required(' first name is required'),
    lname: yup.string().required(' last name is required'),
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Email is required'),
    city: yup.string().required(' city is required'),
    phone: yup
      .string()
      .matches(/(01)(\d){8}\b/, 'Enter a valid phone number')
      .required('Phone number is required'),
    zipcode: yup.string().required(' zip code is required'),
    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
  });
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.signupContainer}>
          <Formik
            validationSchema={signUpValidationSchema}
            initialValues={{
              fname: '',
              lname: '',
              email: '',
              selectCountry: '',
              city: '',
              phone: '',
              zipcode: '',
              email: '',
              selectcountry: '',
              password: '',
            }}
            onSubmit={values => console.log(values)}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <View style={{height: windowHeight / 1.2}}>
                  <ScrollView>
                    <View style={{height: windowHeight / 0.6}}>
                      <View style={{height: windowHeight / 1.2}}>
                        <View style={styles.ImageView}>
                          <Image
                            source={IMAGES.logo}
                            style={styles.ImageStyle}
                          />
                        </View>
                        <View style={styles.textInputStyle}>
                          <TextInput
                            placeholder="First Name"
                            style={styles.textInput}
                            onChangeText={handleChange('fname')}
                            onBlur={handleBlur('fname')}
                          />
                        </View>
                        {errors.fname && touched.fname && (
                          <Text style={styles.errorStyle}>{errors.fname}</Text>
                        )}
                        <View style={styles.textInputStyle}>
                          <TextInput
                            placeholder="Last Name"
                            style={styles.textInput}
                            onChangeText={handleChange('lname')}
                            onBlur={handleBlur('lname')}
                          />
                        </View>
                        {errors.lname && touched.lname && (
                          <Text style={styles.errorStyle}>{errors.lname}</Text>
                        )}
                        <View style={styles.textInputStyle}>
                          <TextInput
                            placeholder="Email"
                            style={styles.textInput}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                          />
                        </View>
                        {errors.email && touched.email && (
                          <Text style={styles.errorStyle}>{errors.email}</Text>
                        )}
                        <View style={styles.textInputStyle}>
                          <Picker
                            selectedValue={country}
                            mode="dropdown"
                            onValueChange={itemValue => setCountry(itemValue)}>
                            <Picker.Item
                              label="Select Country"
                              value=""
                              color="grey"
                            />

                            <Picker.Item label="Austria" value="" />
                            <Picker.Item label="Czech Republic" value="" />
                            <Picker.Item label="Denmark" value="" />
                            <Picker.Item label="India" value="" />
                            <Picker.Item label="Poland" value="" />
                            <Picker.Item label="Saudi Arabia" value="" />
                            <Picker.Item label="Sweden" value="" />
                          </Picker>
                        </View>
                        <View style={styles.textInputStyle}>
                          <TextInput
                            placeholder="City"
                            style={styles.textInput}
                            onChangeText={handleChange('city')}
                            onBlur={handleBlur('city')}
                          />
                        </View>
                        {errors.city && touched.city && (
                          <Text style={styles.errorStyle}>{errors.city}</Text>
                        )}
                        <View style={styles.textInputStyle}>
                          <TextInput
                            placeholder="Phone Number"
                            style={styles.textInput}
                            onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                          />
                        </View>
                        {errors.phone && touched.phone && (
                          <Text style={styles.errorStyle}>{errors.phone}</Text>
                        )}
                        <View style={styles.textInputStyle}>
                          <TextInput
                            placeholder="Zip Code"
                            style={styles.textInput}
                            onChangeText={handleChange('zipcode')}
                            onBlur={handleBlur('zipcode')}
                          />
                        </View>
                        {errors.zipcode && touched.zipcode && (
                          <Text style={styles.errorStyle}>
                            {errors.zipcode}
                          </Text>
                        )}
                        <View style={styles.textInputStyle}>
                          <TextInput
                            placeholder="Password"
                            style={styles.textInput}
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                          />
                        </View>
                        {errors.password && touched.password && (
                          <Text style={styles.errorStyle}>
                            {errors.password}
                          </Text>
                        )}
                      </View>
                    </View>
                  </ScrollView>
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', margin: 10}}>
                    <TouchableOpacity style={styles.editBtn} 
                      onPress={() => navigation.navigate('OtpScreen')}>
                      <Text style={styles.editText}>Sign Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteBtn}
                    onPress={()=> navigation.goBack()}
                    >
                      <Text style={styles.deleteText}>Cancel</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signupContainer: {
    flex:1,
  },
  textInputStyle: {
    padding: 6,
    width: windowWidth / 1.1,
    borderWidth: 1,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },

  ImageView: {
    width: windowWidth / 1,
    alignSelf: 'center',
    height: windowHeight / 3.5,
    justifyContent: 'center',
    marginVertical: 20,
    // borderWidth:1
  },
  ImageStyle: {
    alignSelf: 'center',
  },
  errorStyle: {
    color: 'red',
    marginStart: 10,
  },
  editBtn: {
    backgroundColor: 'darkblue',
    padding: 15,
    flex: 1,
    borderRadius: 10,
    right: 7,
  },
  editText: {
    ...FONTS.appFontSemi,
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  deleteBtn: {
    backgroundColor: 'lightgrey',
    padding: 15,
    flex: 1,
    borderRadius: 10,
    left: 5,
  },
  deleteText: {
    ...FONTS.appFontSemi,
    alignSelf: 'center',
    color: 'darkblue',
    fontWeight: 'bold',
  },
});
export default Signup;
