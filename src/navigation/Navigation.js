import {
  AUTH_SCREEN,
  HOME_SCREEN,
  SETTINGS_SCREEN,
  SIGNIN_SCREEN,
  SIGNUP_SCREEN,
} from './screens';

export function mainScreen() {
  return {
    root: {
      stack: {
        children: [
          {
            component: {
              name: HOME_SCREEN,
            },
          },
        ],
      },
    },
  };
}

export function settingsScreen() {
  return {
    component: {
      name: SETTINGS_SCREEN,
      options: {
        topBar: {
          title: {
            text: 'Settings',
          },
        },
      },
    },
  };
}

export function authScreen() {
  return {
    root: {
      stack: {
        id: 'root',
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
  };
}

export const settingsConfig = {
  component: {
    id: SETTINGS_SCREEN,
    name: SETTINGS_SCREEN,
    options: {
      topBar: {
        title: {
          text: 'Settings',
        },
        leftButtons: [
          {
            id: 'backButton',
            // icon: ,
          },
        ],
      },
    },
  },
};

export const loginConfig = {
  component: {
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
