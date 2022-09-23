import * as React from 'react';
import {View, ScrollView, StyleSheet, Button, Text, Dimensions} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Navigation} from 'react-native-navigation';
import {useForm} from 'react-hook-form';

import Constants from '../../constants';

import Input from '../../components/Input';
import Form from '../../components/Form';
import Hero from './components/Hero';
import {storage, validation} from '../../lib';
import {goToMainScreen, signUpConfig} from '../../navigation';

type FormData = {
  email: string;
  password: string;
};

const SigninScreen = () => {
  const {handleSubmit, register, setValue, errors} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // TODO: implement login logic 
    storage.set('rnn', data.email);
    goToMainScreen();
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      style={{backgroundColor: '#181e34'}}>
      <ScrollView style={styles.formContainer}>
        <Hero />
        <Form {...{register, setValue, validation, errors}}>
          <Input name="email" label="Email" />
          <Input name="password" label="Password" secureTextEntry={true} />
          <Button title="Login" onPress={handleSubmit(onSubmit)} />
        </Form>
        <View style={styles.sigupLink}>
          <Text style={{color: 'white'}}>Don't have an account?</Text>
          <Button
            color="transparent"
            title="Sign Up"
            onPress={() => Navigation.setStackRoot('auth', signUpConfig)}
          />
        </View>
      </ScrollView>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // vertical alignment 
    // alignItems: 'center', // horizontal alignment 
    // marginLeft: .1 * Dimensions.get('screen').width,
    // marginRight: .1 * Dimensions.get('screen').width,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#181e34',
    // width: .8 * Dimensions.get('screen').width,
  },
  formContainer: {
    padding: 8,
    // flex: 1,
  },
  button: {
    backgroundColor: 'red',
  },
  sigupLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
});

export default SigninScreen;
