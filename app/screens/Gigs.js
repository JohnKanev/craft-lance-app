import React from 'react';
import { View, Text } from 'react-native';
import TabIcon from '../components/TabIcon';
import NoPosterGigs from '../components/NoPosterGigs';
import { Paper, Subheading, TouchableRipple } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import store from '../store';

const Categories = ['Moving', 'Medical', 'Babysitting'];

const Item = ({ title, name, kmAway, price, onPress }) => (
  <TouchableRipple style={{ marginBottom: 4 }} onPress={onPress}>
    <View
      style={{
        backgroundColor: 'white',
        height: 120,
        width: '100%',
        alignSelf: 'center',
        elevation: 2,
        padding: 8
      }}
    >
      <Subheading style={{ fontSize: 24, fontWeight: 'bold' }}>
        {title}
      </Subheading>
      <View style={{ flex: 1 }} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <View>
          <Text style={{ color: 'gray' }}>by {name}</Text>
          <Text style={{ color: 'green' }}>Show details</Text>
        </View>
        <View>
          <Text>{kmAway} away</Text>
          <Text style={{ color: 'green', fontSize: 18, textAlign: 'right' }}>
            ${price}
          </Text>
        </View>
      </View>
    </View>
  </TouchableRipple>
);

const Gigs = ({ gigs, onItem }) => (
  <ScrollView style={{ flex: 1 }}>
    <View style={{ margin: 8, marginTop: 24 }}>
      {gigs.map((e, index) => (
        <Item
          onPress={onItem(e)}
          name={e.user.name}
          title={e.title}
          kmAway={e.kmAway}
          price={e.price}
          key={e.title}
        />
      ))}
    </View>
  </ScrollView>
);

const GigsContainer = ({ navigation }) =>
  Gigs({
    gigs: store.mergedUserGig,
    onItem: item => () => {
      navigation.navigate('GigDetails', { item });
    }
  });

export default GigsContainer;
