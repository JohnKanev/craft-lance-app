import React from 'react';
import { View, Image } from 'react-native';
import TabIcon from '../components/TabIcon';
import { Subheading, Paper } from 'react-native-paper';
import Icon from '@expo/vector-icons/Feather';

const ProfilePicture = () => (
  <Image
    style={{ marginTop: 60, width: 120, height: 120, borderRadius: 60 }}
    source={{
      uri: 'https://www.biografiasyvidas.com/biografia/p/fotos/polo_marco.jpg'
    }}
  />
);

const MyProfile = ({ name, description, age, contact, location, skills }) => (
  <View style={{ flex: 1, alignItems: 'center' }}>
    <ProfilePicture />
    <View
      style={{
        width: '92%',
        height: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        marginTop: 30
      }}
    >
      <View style={{ paddingTop: 16, paddingHorizontal: 16, flex: 1 }}>
        <View style={{ paddingBottom: 24 }}>
          <Subheading style={{ fontWeight: 'bold', fontSize: 18 }}>
            {name}
          </Subheading>
          <Subheading style={{ color: 'gray' }}>{description} </Subheading>
        </View>
        <View>
          <Subheading>
            <Icon size={18} name="map-pin" /> {age} {location}
          </Subheading>
          <Subheading>Contact: {contact}</Subheading>
          <Subheading>Skills: {JSON.stringify(skills)}</Subheading>
        </View>
      </View>
    </View>
  </View>
);

const MyProfileContainer = () =>
  MyProfile({
    name: 'Marco Pollo',
    description:
      'Nullam et neque at felis accumsan porta in eu justo. In non lacus at orci efficitur suscipit.',
    age: 27,
    contact: '052-232-233',
    location: 'Ohrid Macedonia',
    skills: ['Strong', 'Good-Looking']
  });

MyProfileContainer.navigationOptions = {
  tabBarIcon: TabIcon('user'),
  title: 'My profile'
};

export default MyProfileContainer;
