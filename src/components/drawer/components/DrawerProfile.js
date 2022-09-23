import React from 'react';
import {View, Text} from 'react-native';
import {Thumbnail, ListItem} from 'native-base';

import {StyleSheet} from 'react-native';
import Colors from '../../../constants/Colors';

const DrawerProfile = props => {
  const {containerStyle, email} = props;

  return (
    <View style={[styles.container, containerStyle]}>
      <ListItem style={styles.header} avatar>
        <Thumbnail source={require('../../assets/beautiful-place.jpg')} />
        <Text style={styles.nameText}>{email}</Text>
      </ListItem>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  header: {
    padding: 10,
    marginLeft: -20,
  },
  nameText: {
    fontFamily: 'Dosis-Medium',
    color: 'white',
    fontSize: 15,
    marginLeft: 10,
  },
});
export default DrawerProfile;
