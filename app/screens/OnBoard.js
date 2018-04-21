import React from 'react';
import { View } from 'react-native';
import BoardButton from '../components/BoardButton';
import colors from '../colors';

export default ({ navigation: { navigate } }) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ width: '80%' }}>
      <BoardButton
        style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8 }}
        color={colors.primary}
        onPress={() => navigate('Lancers')}
        title="Find a gig"
      />
      <BoardButton
        style={{ borderBottomLeftRadius: 8, borderBottomRightRadius: 8 }}
        color={colors.secoundary}
        fontColor="black"
        title="Post a gig"
        onPress={() => navigate('Posters')}
      />
    </View>
  </View>
);
