// @flow

import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {
  AuthChecker,
  HomeScreen,
  SettingsScreen,
  SigninScreen,
  SignupScreen,
  ProfileScreen,
  CartScreen,
  FavoriteScreen,
} from '../screens';
import {
  AUTH_SCREEN,
  HOME_SCREEN,
  SETTINGS_SCREEN,
  SIGNIN_SCREEN,
  SIGNUP_SCREEN,
  PROFILE_SCREEN,
  CART_SCREEN,
  FAVORITE_SCREEN,
} from './screens';

export default function () {
  Navigation.registerComponent(AUTH_SCREEN, () => AuthChecker);
  Navigation.registerComponent(SIGNIN_SCREEN, () => SigninScreen);
  Navigation.registerComponent(SIGNUP_SCREEN, () => SignupScreen);
  Navigation.registerComponent(SETTINGS_SCREEN, () => SettingsScreen);
  Navigation.registerComponent(CART_SCREEN, () => CartScreen);
  Navigation.registerComponent(FAVORITE_SCREEN, () => FavoriteScreen);
  Navigation.registerComponent(PROFILE_SCREEN, () => ProfileScreen);
  Navigation.registerComponent(HOME_SCREEN, () =>
    gestureHandlerRootHOC(HomeScreen),
  );
}
