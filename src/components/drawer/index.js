import React, {Component} from 'react';
import {View, Dimensions, StyleSheet, Platform} from 'react-native';
import {Navigation} from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import {connect} from 'react-redux';
import {LOGOUT} from '../../store/actionTypes';

import DrawerItem from './DrawerItem';
import DrawerProfile from './DrawerProfile';

import {
  FIND_PLACE_SCREEN,
  SHARE_PLACE_SCREEN,
  TOP_TABS_SCREEN,
} from '../../navigation/Screens';

import Colors from '../../constants/Colors';
import {settingsConfig} from '../../navigation';

class SideDrawer extends Component {
  state = {
    activePage: 'home',
  };

  constructor(props) {
    super(props);
  }

  onSignOut = () => {
    this.props.onLogout();
  };

  onHomeClick = () => {
    if (this.state.activePage === 'home') {
      return;
    }
    Promise.all([
      Icon.getImageSource(
        Platform.OS === 'android' ? 'md-search' : 'ios-search',
        25,
        Colors.primary,
      ),
      Icon.getImageSource(
        Platform.OS === 'android' ? 'md-share-alt' : 'ios-share-alt',
        25,
        Colors.primary,
      ),
      Icon.getImageSource(
        Platform.OS === 'android' ? 'md-menu' : 'ios-menu',
        25,
        'white',
      ),
    ]).then(sources => {
      Navigation.setStackRoot('center', {
        bottomTabs: {
          id: 'BOTTOM_TABS_LAYOUT',
          children: [
            {
              stack: {
                children: [
                  {
                    component: {
                      id: FIND_PLACE_SCREEN,
                      name: FIND_PLACE_SCREEN,
                      options: {
                        bottomTab: {
                          text: 'Find a place',
                          icon: sources[0],
                        },
                        topBar: {
                          title: {
                            text: 'Find a Place',
                          },
                          leftButtons: [
                            {
                              id: 'sideMenu',
                              icon: sources[2],
                            },
                          ],
                        },
                      },
                    },
                  },
                ],
              },
            },
            {
              stack: {
                children: [
                  {
                    component: {
                      id: SHARE_PLACE_SCREEN,
                      name: SHARE_PLACE_SCREEN,
                      options: {
                        bottomTab: {
                          text: 'Share a place',
                          icon: sources[1],
                        },
                        topBar: {
                          title: {
                            text: 'Share a Place',
                          },
                          leftButtons: [
                            {
                              id: 'sideMenu',
                              icon: sources[2],
                            },
                          ],
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      });
    });

    this.setState({activePage: 'home'});
  };

  onTopTabsClick = () => {
    if (this.state.activePage === 'TopTabs') {
      return;
    }
    Icon.getImageSource(
      Platform.OS === 'android' ? 'md-menu' : 'ios-menu',
      25,
      'white',
    ).then(icon => {
      Navigation.setStackRoot('center', {
        component: {
          id: TOP_TABS_SCREEN,
          name: TOP_TABS_SCREEN,
          options: {
            topBar: {
              title: {
                text: 'Top Tabs',
              },
              leftButtons: [
                {
                  id: 'sideMenu',
                  icon: icon,
                },
              ],
            },
          },
        },
      });
    });

    this.setState({activePage: 'TopTabs'});
  };

  onSettingsClick = () => {
    if (this.state.activePage === 'settings') {
      return;
    }
    Promise.all([
      Icon.getImageSource(
        Platform.OS === 'android'
          ? 'md-arrow-round-back'
          : 'ios-arrow-round-back',
        25,
        'white',
      ),
      Icon.getImageSource(
        Platform.OS === 'android' ? 'md-close' : 'ios-close',
        25,
        'white',
      ),
    ]).then(icon => {
      // Navigation.showModal(settingsConfig);
      Navigation.setStackRoot('center', settingsConfig);
    });

    Navigation.mergeOptions(this.props.componentId, {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    });

    this.setState({activePage: 'settings'});
  };

  render() {
    return (
      <View
        style={[
          styles.container,
          {width: Dimensions.get('window').width * 0.8},
        ]}>
        <DrawerProfile size="large" title="BC" email={this.props.email} />

        <DrawerItem
          onPress={this.onHomeClick}
          icon={Platform.OS === 'android' ? 'md-home' : 'ios-home'}
          text="Bottom Tabs"
          active={this.state.activePage === 'home' ? styles.active : null}
          color={
            this.state.activePage === 'home' ? Colors.primary : Colors.silva
          }
          textColor={this.state.activePage === 'home' ? Colors.primary : '#666'}
        />
        <DrawerItem
          onPress={this.onTopTabsClick}
          icon={Platform.OS === 'android' ? 'md-star' : 'ios-star'}
          text="Top Tabs"
          active={this.state.activePage === 'TopTabs' ? styles.active : null}
          color={
            this.state.activePage === 'TopTabs' ? Colors.primary : Colors.silva
          }
          textColor={
            this.state.activePage === 'TopTabs' ? Colors.primary : '#666'
          }
        />
        <DrawerItem
          onPress={this.onSettingsClick}
          icon={Platform.OS === 'android' ? 'md-settings' : 'ios-settings'}
          text="Settings"
          active={this.state.activePage === 'settings' ? styles.active : null}
          color={
            this.state.activePage === 'settings' ? Colors.primary : Colors.silva
          }
          textColor={
            this.state.activePage === 'settings' ? Colors.primary : '#666'
          }
        />
        <DrawerItem
          onPress={this.onSignOut}
          icon={Platform.OS === 'android' ? 'md-log-out' : 'ios-log-out'}
          text="Sign Out"
          color={Colors.silva}
          textColor="#666"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  active: {
    borderLeftWidth: 5,
    borderLeftColor: Colors.primary,
    backgroundColor: '#eee',
    paddingLeft: 20,
  },
  divider: {
    alignSelf: 'center',
    backgroundColor: 'rgba(50,50,50,1)',
    width: '70%',
    marginVertical: 20,
  },
});

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    component: state.app.componentId,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch({type: LOGOUT}),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideDrawer);
