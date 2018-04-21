import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import screens from './screens';

const LancerTabs = TabNavigator(
  {
    Home: screens.PosterHome,
    MyProfile: screens.MyProfile
  },
  { animationEnabled: true }
);

const PosterTabs = TabNavigator(
  {
    Home: screens.LancerHome,
    MyProfile: screens.MyProfile
  },
  {
    animationEnabled: true
  }
);

export default StackNavigator(
  {
    onBoard: screens.OnBoard,
    Lancers: PosterTabs,
    Posters: LancerTabs
  },
  {
    headerMode: 'none'
  }
);
