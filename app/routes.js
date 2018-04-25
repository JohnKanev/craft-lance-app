import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import screens from './screens';
import MyGigs from './screens/MyGigs';
import GigsContainer from './screens/Gigs';
import TabIcon from './components/TabIcon';
import GigDetails from './screens/GigDetails';

const HomeStack = StackNavigator(
  {
    Gigs: GigsContainer,
    GigDetails
  },
  { navigationOptions: { header: null, tabBarIcon: TabIcon('home') } }
);
const Tabs = TabNavigator(
  {
    Home: HomeStack,
    MyProfile: screens.MyProfile,
    MyGigs: MyGigs
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    lazy: false
  }
);

export default StackNavigator(
  {
    onBoard: screens.OnBoard,
    Tabs
  },
  {
    headerMode: 'none'
  }
);
