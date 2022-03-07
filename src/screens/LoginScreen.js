import {
  Text,
  View,
  SafeAreaView,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,

} from 'react-native';
import {COLORS, IMAGES, FONTS} from '../common/theme';
import {Formik} from 'formik';
import * as yup from 'yup';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {windowHeight, windowWidth} from '../utils/Dimensions';
const LoginScreen = ({navigation}) => {
  const [show, setShow] = useState(false);
  const [visible, setVisible] = useState(true);
  const loginValidationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Please enter valid email')
      .required('Please fill out this filed'),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Please fill out this filed'),
  });

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <ScrollView style={styles.ScrollViewStyle}>
          <View style={styles.ImageView}>
            <Image source={IMAGES.logo} style={styles.ImageStyle} />
          </View>
          <View style={styles.loginContainer}>
            <Formik
              validationSchema={loginValidationSchema}
              initialValues={{email: '', password: ''}}
              onSubmit={values => console.log(values)}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <View style={styles.textInputStyle}>
                    <TextInput
                      placeholder="User Name"
                      style={styles.textInput}
                      onChangeText={handleChange('email')}
                      onBlur={handleBlur('email')}
                      keyboardType="default"
                      maxLength={40}
                    />
                  </View>
                  {errors.email && touched.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}

                  <View style={styles.textInputStyle}>
                    <TextInput
                      placeholder="Password"
                      style={styles.textInput}
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      secureTextEntry={visible}
                      maxLength={15}
                    />
                    <TouchableOpacity
                      style={styles.btnStyle}
                      onPress={() => {
                        setShow(!show);
                        setVisible(!visible);
                      }}>
                      <Entypo
                        name={show === true ? 'eye' : 'eye-with-line'}
                        size={26}
                        color={COLORS.grey}
                      />
                    </TouchableOpacity>
                  </View>

                  {errors.password && touched.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}
                  <TouchableOpacity>
                    <Text style={styles.forgotStyle}>Forgot Password?</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.buttonStyle}
                    onPress={handleSubmit}>
                    <Text style={styles.textStyle}>Login</Text>
                  </TouchableOpacity>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      top: 10,
                      justifyContent: 'space-evenly',
                    }}>
                    <Text style={{color: 'black', margin: 10, right: 55}}>
                      Don't have an account?
                    </Text>

                    <TouchableOpacity
                      onPress={() => navigation.navigate('Sign')}>
                      <Text
                        style={{
                          color: 'blue',
                          fontSize: 18,
                          margin: 5,
                          left: 50,
                        }}>
                        Register
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    borderColor:'white'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
  loginContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    backgroundColor: 'white',
    elevation: 5,

  },
  textInputStyle: {
    padding: 6,
    width: windowWidth / 1.1,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
  },
  // textInput: {
  // },
  buttonStyle: {
    backgroundColor: 'darkblue',
    padding: 20,
    width: windowWidth / 1.1,
    borderRadius: 10,
    marginTop: '15%',
  },
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
  forgotStyle: {
    position: 'absolute',
    left: '20%',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
  },
  btnStyle: {
    position: 'absolute',
    marginTop: '5%',
    right: '5%',
  },
});

export default LoginScreen;
