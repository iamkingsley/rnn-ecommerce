import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Your shopping Cart</Text>
    </View>
  );
};

CartScreen.options = {
  topBar: {
    title: {
      text: 'Your Cart',
    },
  },
};

export default CartScreen;

