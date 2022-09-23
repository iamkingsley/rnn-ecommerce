import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Spinner} from 'native-base';
import {storage} from '../../lib';
import {goToMainScreen, loginConfig} from '../../navigation';
import styles from '../../styles';

export default function AuthChecker() {
  useEffect(() => {
    // storage.remove('rnn')
    storage.get('rnn').then(result => {
      if (result === null) {
        Navigation.setStackRoot('auth', loginConfig);
      } else {
        // setEmail(result);
        goToMainScreen();
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
}
