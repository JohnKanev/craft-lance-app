import React from 'react';
import { View, TouchableHighlight, Text } from 'react-native';

export default ({ title, style, onPress, fontColor = 'black', color }) => (
  <TouchableHighlight style={style} onPress={onPress}>
    <View
      style={[
        {
          height: 120,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color
        },
        style
      ]}
    >
      <Text style={{ color: fontColor }}>{title}</Text>
    </View>
  </TouchableHighlight>
);
