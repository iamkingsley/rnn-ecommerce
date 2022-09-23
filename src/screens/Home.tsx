import React from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  Alert,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {useNavigationButtonPress} from 'react-native-navigation-hooks';
import {TabView, SceneMap} from 'react-native-tab-view';
import constants, {colors} from '../constants';
import {cartConfig, settingsConfig} from '../navigation';
import styles from '../styles';
import {getIcons} from '../lib';

const FirstRoute = () => (
  <View style={[styles.container]}>
    <Text>First Tab</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.container]}>
    <Text>Second Tab 👋</Text>
  </View>
);

const ThirdRoute = () => (
  <View style={[styles.container]}>
    <Text>Third Tab 👋</Text>
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};

const HomeScreen = () => {
  useNavigationButtonPress(
    e => {
      if (e.buttonId === 'cartButton') {
        Navigation.push('center', cartConfig);
      }
    },
    // {componentId: props.componentId},
  );

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Electronics'},
    {key: 'second', title: 'Clothen'},
    {key: 'third', title: 'Accessories'},
  ]);

  // OPTIONAL: needed to customize tabBar
  const renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={tabStyles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map(inputIndex =>
              inputIndex === i ? 1 : 0.5,
            ),
          });

          return (
            <TouchableOpacity
              style={tabStyles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={{opacity}}>{route.title}</Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={renderTabBar}
      initialLayout={initialLayout}
    />
  );
};

getIcons().then(icons => {
  HomeScreen.options = {
    bottomTab: {
      text: 'Home',
      icon: icons.home,
    },
    topBar: {
      title: {
        text: 'Home',
      },
      rightButtons: [
        {
          id: 'cartButton',
          icon: icons.cart,
        },
      ],
    },
  };
});

const tabStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: constants.statusBarHeight,
    fontFamily: 'Open-Sans-Bold',
    // backgroundColor: colors.primary,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});

export default HomeScreen;
