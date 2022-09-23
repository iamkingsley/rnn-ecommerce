import * as React from 'react';
import {View, StyleSheet, Button, Text, ScrollView} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import Constants from '../../constants';
import {useForm} from 'react-hook-form';

import Input from '../../components/Input';
import Form from '../../components/Form';
import Hero from './components/Hero';
import {validation} from '../../lib';
import {Navigation} from 'react-native-navigation';
import {loginConfig} from '../../navigation';

type FormData = {
  name: string;
  email: string;
  password: string;
};

const SignupScreen = () => {
  const {handleSubmit, register, setValue, errors} = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // TODO: implement signup logic 
    Navigation.setStackRoot('root', loginConfig);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={styles.container}
      style={{backgroundColor: '#181e34'}}>
      <ScrollView style={styles.formContainer}>
        <Hero />
        <Form {...{register, setValue, validation, errors}}>
          <Input name="name" label="Name" />
          <Input name="email" label="Email" />
          <Input name="password" label="Password" secureTextEntry={true} />
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </Form>
        <View style={styles.loginLink}>
          <Text style={{color: 'white'}}>Already have an account?</Text>
          <Button
            color="transparent"
            title="Log In"
            onPress={() => Navigation.setStackRoot('auth', loginConfig)}
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
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#181e34',
  },
  formContainer: {
    padding: 8,
    flex: 1,
  },
  button: {
    backgroundColor: 'red',
  },
  loginLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
    marginBottom: 2,
  },
});

export default SignupScreen;
