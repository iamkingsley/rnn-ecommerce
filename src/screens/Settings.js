import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import styles from '../styles';

const FirstRoute = () => (
  <View style={[styles.container]}>
    <Text>First Tab 👋</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.container]}>
    <Text>Second Tab 👋</Text>
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};

const SettingsScreen = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
    />
  );
};

export default SettingsScreen;
