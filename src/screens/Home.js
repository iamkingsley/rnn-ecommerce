import React from 'react';
import {View, Text, Button} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {settingsScreen} from '../navigation';
import {colors} from '../constants';
import styles from '../styles';

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Hello React Native Navigation 👋</Text>
      <Button
        title="Push Settings Screen"
        color={colors.primary}
        onPress={() => {
          Navigation.push(props.componentId, settingsScreen());
        }}
      />
    </View>
  );
};

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home',
      color: 'white',
    },
  },
};

export default HomeScreen;
