import React from 'react';
import { ScrollView } from 'react-native';
import TabIcon from '../components/TabIcon';
import NoPosterGigs from '../components/NoPosterGigs';
import { ListSection, ListItem } from 'react-native-paper';

const DATA = {
  taken: [
    { type: 'Cleaning', id: 23 },
    { type: 'Cleaning', id: 24 },
    { type: 'Cleaning', id: 232 },
    { type: 'Cleaning', id: 2321 }
  ],
  posted: [
    { type: 'woodworking', id: 2322 },
    { type: 'woodworking', id: 232311 },
    { type: 'woodworking', id: 23343223 },
    { type: 'woodworking', id: 23123123 }
  ]
};

const MyGigs = ({ taken = DATA.taken, posted = DATA.posted }) => (
  <ScrollView style={{ flex: 1 }}>
    <ListSection
      title="Jobs Posted"
      style={{ borderRadius: 16, backgroundColor: 'white' }}
    >
      {taken.map(e => (
        <ListItem key={e.id} title={e.type} icon="person-pin-circle" />
      ))}
    </ListSection>
    <ListSection
      title="Jobs Taken"
      style={{ borderRadius: 16, backgroundColor: 'white' }}
    >
      {posted.map(e => (
        <ListItem key={e.id} title={e.type} icon="person-pin-circle" />
      ))}
    </ListSection>
  </ScrollView>
);

MyGigs.navigationOptions = {
  tabBarIcon: TabIcon('activity')
};

export default MyGigs;
