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

import {getIcons} from '../../lib';
import {settingsConfig} from '../../navigation';

export default function Profile() {
  return (
    <Container>
      <Content>
        <Separator />
        <ListItem>
          <Body>
            <Text>Orders</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem
          onPress={() => {
            Navigation.push('center', settingsConfig);
          }}>
          <Body>
            <Text>Settings</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <Separator />
        <ListItem>
          <Body>
            <Text>More</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        <ListItem last>
          <Body>
            <Text>Even more</Text>
          </Body>
          <Right>
            <Icon name="arrow-forward" />
          </Right>
        </ListItem>
        {/* <Separator /> */}
      </Content>
    </Container>
  );
}

getIcons().then(icons => {
  Profile.options = {
    bottomTab: {
      text: 'Profile',
      icon: icons.profile,
    },
    topBar: {
      title: {
        text: 'Profile',
      },
      rightButtons: [
        {
          id: 'cartButton',
          icon: icons.cart,
        },
      ],
    },
  };
});
