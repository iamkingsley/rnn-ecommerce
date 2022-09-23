import {Navigation} from 'react-native-navigation';
import {
  AUTH_SCREEN,
  HOME_SCREEN,
  SETTINGS_SCREEN,
  CART_SCREEN,
  SIGNIN_SCREEN,
  SIGNUP_SCREEN,
  PROFILE_SCREEN,
  FAVORITE_SCREEN,
} from './screens';

export function goToMainScreen() {
  Navigation.setRoot({
    root: {
      stack: {
        id: 'center',
        children: [
          {
            bottomTabs: {
              id: 'BOTTOM_TABS',
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          id: HOME_SCREEN,
                          name: HOME_SCREEN,
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
                          id: FAVORITE_SCREEN,
                          name: FAVORITE_SCREEN,
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
                          id: PROFILE_SCREEN,
                          name: PROFILE_SCREEN,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
}

export const authConfig = {
  root: {
    stack: {
      id: 'auth',
      children: [
        {
          component: {
            name: AUTH_SCREEN,
            options: {
              topBar: {
                visible: false,
                title: {
                  text: 'Auth Checker',
                },
              },
            },
          },
        },
      ],
    },
  },
}

export const settingsConfig = {
  component: {
    id: SETTINGS_SCREEN,
    name: SETTINGS_SCREEN,
  },
};

export const cartConfig = {
  component: {
    id: CART_SCREEN,
    name: CART_SCREEN,
  },
};

export const loginConfig = {
  component: {
    id: SIGNIN_SCREEN,
    name: SIGNIN_SCREEN,
    options: {
      topBar: {
        visible: false,
        title: {
          text: 'Login',
        },
      },
    },
  },
};

export const signUpConfig = {
  component: {
    id: SIGNUP_SCREEN,
    name: SIGNUP_SCREEN,
    options: {
      topBar: {
        visible: false,
        title: {
          text: 'Sign Up',
        },
      },
    },
  },
};
