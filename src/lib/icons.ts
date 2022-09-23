import {Platform} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Material from 'react-native-vector-icons/MaterialIcons';
import Awesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import constants, {colors} from '../constants';

const getIcons = () => {
  return new Promise((resolve, reject) => {
    Promise.all([
      Ionicons.getImageSource(
        Platform.OS === 'android' ? 'md-home-outline' : 'ios-home-outline',
        constants.iconSize,
        colors.bottomIcon,
      ),
      Feather.getImageSource(
        Platform.OS === 'android' ? 'user' : 'user',
        constants.iconSize,
        colors.bottomIcon,
      ),
      Material.getImageSource(
        Platform.OS === 'android' ? 'favorite-outline' : 'favorite-outline',
        constants.iconSize,
        colors.bottomIcon,
      ),
      Ionicons.getImageSource(
        Platform.OS === 'android' ? 'cart-outline' : 'cart-outline',
        constants.iconSize,
        colors.white,
      ),
    ])
      .then(sources => {
        resolve({
          home: sources[0],
          profile: sources[1],
          favorite: sources[2],
          cart: sources[3],
        });
      })
      .catch(error => reject(error));
  });
};

export default getIcons;
