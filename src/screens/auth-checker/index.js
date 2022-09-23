import React, {useEffect, useRef} from 'react';
import {View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Spinner} from 'native-base';
// import {connect} from 'react-redux';
import {Storage} from '../../lib';
import {mainScreen, loginConfig} from '../../navigation';
// import {TRY_LOGIN_SUCCESS} from '../../store/actionTypes';
import styles from '../../styles';

export default function AuthChecker() {
  const token = useRef(null);

  useEffect(() => {
    Storage.remove('rnn')
    Storage.get('rnn').then(result => {
      token.current = result;
      alert(JSON.stringify(token))
      if (token.current === null) {
        Navigation.setStackRoot('root', loginConfig);
      } else {
        this.props.setEmail(JSON.parse(result));
        mainScreen();
      }
    });
  }, [token]);

  return (
    <View style={styles.container}>
      <Spinner />
    </View>
  );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setEmail: email => dispatch({type: TRY_LOGIN_SUCCESS, email}),
//   };
// };

// export default connect(
//   null,
//   mapDispatchToProps,
// )(AuthChecker);
