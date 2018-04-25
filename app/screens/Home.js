import React from 'react';
import { View } from 'react-native';
import TabIcon from '../components/TabIcon';
import NoPosterGigs from '../components/NoPosterGigs';
import { Paper, Subheading, TouchableRipple } from 'react-native-paper';

const Categories = ['Cleaning', 'Moving', 'Medical', 'Babysitting'];

const Category = ({ title, onPress }) => (
  <TouchableRipple onPress={onPress}>
    <Paper
      style={{
        width: '100%',
        height: 50,
        marginBottom: 2,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Subheading>{title}</Subheading>
    </Paper>
  </TouchableRipple>
);

const Home = ({ categories, onPress }) => (
  <View style={{ flex: 1 }}>
    {categories ? (
      categories.map(e => <Category onPress={onPress} key={e} title={e} />)
    ) : (
      <NoPosterGigs />
    )}
  </View>
);

const HomeContainer = ({ navigation: { navigate } }) =>
  Home({ categories: Categories, onPress: () => navigate('Gigs') });

HomeContainer.navigationOptions = {
  tabBarIcon: TabIcon('home')
};

export default HomeContainer;
