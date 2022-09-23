import React from 'react';
import {View, Text} from 'react-native';
import styles from '../styles';
import {getIcons} from '../lib';

const FavoriteScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Hello Favorites</Text>
    </View>
  );
};

getIcons().then(icons => {
  FavoriteScreen.options = {
    bottomTab: {
      text: 'Favorite',
      icon: icons.favorite,
    },
    topBar: {
      title: {
        text: 'Favorite',
      },
      rightButtons: [
        {
          id: 'cartButton',
          icon: icons.cart,
        },
      ],
    },
  };
})

export default FavoriteScreen;