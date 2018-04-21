import React from 'react';
import { View } from 'react-native';
import { Subheading, Button } from 'react-native-paper';

export default ({ onPress }) => (
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
    }}
  >
    <View style={{ width: 240 }}>
      <Subheading style={{ textAlign: 'center' }}>
        No gigs were found that are created by you.
      </Subheading>
      <Button primary onPress={onPress}>
        Click to add one
      </Button>
    </View>
  </View>
);
