import React from 'react';
import {
  Container,
  Content,
  ListItem,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text,
  Separator,
} from 'native-base';
import {Navigation} from 'react-native-navigation';

import {authConfig} from '../navigation';
import {storage} from '../lib';

const SettingsScreen = () => {
  return (
    <Container>
      <Content>
        <Separator />
        <ListItem>
          <Body>
            <Text>Theme</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem
          last
          onPress={() => {
            storage.remove('rnn');
            Navigation.setRoot(authConfig);
          }}>
          <Body>
            <Text>Log Out</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
      </Content>
    </Container>
  );
};

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings',
    },
  },
};

export default SettingsScreen;
