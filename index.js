/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import {defaultNavOptions} from './src/constants';
import registerScreens from './src/navigation/registerScreens';
import {authScreen, mainScreen} from './src/navigation';

// Register all screens on launch
registerScreens();

Navigation.setDefaultOptions(defaultNavOptions);

Navigation.events().registerAppLaunchedListener(() => {
  // Navigation.setRoot(mainScreen());
  Navigation.setRoot(authScreen());
});
