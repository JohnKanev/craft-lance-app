import React from 'react';
import { View } from 'react-native';
import TabIcon from '../components/TabIcon';

const LancerHome = () => <View style={{ flex: 1, backgroundColor: 'red' }} />;
LancerHome.navigationOptions = {
  tabBarIcon: TabIcon('home')
};

export default LancerHome;
