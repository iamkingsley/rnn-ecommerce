import colors from './colors';
export default {
  statusBar: {
    visible: true,
    style: 'light',
    backgroundColor: colors.statusBar,
    translucent: false,
  },
  topBar: {
    title: {
      color: 'white',
    },
    backButton: {
      color: 'white',
    },
    background: {
      color: colors.primary,
    },
  },
  bottomTab: {
    // badge: '2',
    // badgeColor: 'red',
    // dotIndicator: {
    //   color: 'green', // default red
    //   size: 8, // default 6
    //   visible: true, // default false
    // },
    // testID: 'bottomTabTestID',
    // icon: require('tab.png'),
    // iconColor: 'red',
    // textColor: Colors.primary,
    // selectedIconColor: Colors.accent,
    // selectedTextColor: Colors.primary,
    fontFamily: 'Open-Sans-Bold',
    // fontWeight: 'regular', // Available on iOS only, will ignore fontFamily style and use the iOS system fonts instead. Supported weights are: 'regular', 'bold', 'thin', 'ultraLight', 'light', 'medium', 'semibold', 'heavy' and 'black'.
    // fontSize: 10
  },
};
