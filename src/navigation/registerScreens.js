// @flow

import {Navigation} from 'react-native-navigation';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {
  AuthChecker,
  HomeScreen,
  SettingsScreen,
  SigninScreen,
} from '../screens';
import {
  AUTH_SCREEN,
  HOME_SCREEN,
  SETTINGS_SCREEN,
  SIGNIN_SCREEN,
} from './screens';

export default function () {
  Navigation.registerComponent(AUTH_SCREEN, () => AuthChecker);
  Navigation.registerComponent(SIGNIN_SCREEN, () => SigninScreen);
  Navigation.registerComponent(HOME_SCREEN, () => HomeScreen);
  Navigation.registerComponent(SETTINGS_SCREEN, () =>
    gestureHandlerRootHOC(SettingsScreen),
  );
}
