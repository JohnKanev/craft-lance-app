import React from 'react';
import { View } from 'react-native';
import TabIcon from '../components/TabIcon';
import NoPosterGigs from '../components/NoPosterGigs';

const PosterHome = () => (
  <View style={{ flex: 1 }}>
    <NoPosterGigs />
  </View>
);
PosterHome.navigationOptions = {
  tabBarIcon: TabIcon('home')
};

export default PosterHome;
