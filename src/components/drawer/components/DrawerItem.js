import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const item = props => {
  const content = (
    <View style={[styles.drawerItem, props.active]}>
      <Icon
        name={props.icon}
        size={25}
        color={props.color}
        style={styles.drawerItemIcon}
      />
      <Text style={[styles.text, {color: props.textColor}]}>{props.text}</Text>
    </View>
  );

  let container;
  if (Platform.OS === 'android') {
    container = (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  } else {
    container = (
      <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
    );
  }
  return <View>{container}</View>;
};

const styles = StyleSheet.create({
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 25,
    paddingTop: 12,
    paddingBottom: 12,
  },
  drawerItemIcon: {
    marginRight: 30,
  },
  text: {
    fontSize: 15,
    fontWeight: 'bold',
  },
});

export default item;
