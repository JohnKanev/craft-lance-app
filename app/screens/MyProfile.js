import React from 'react';
import { View, Image } from 'react-native';
import TabIcon from '../components/TabIcon';
import { Subheading } from 'react-native-paper';

const ProfilePicture = () => (
  <Image
    style={{ marginTop: 120, width: 120, height: 120, borderRadius: 60 }}
    source={{
      uri:
        'https://i.pinimg.com/originals/ec/1b/4e/ec1b4e14705f4c1961b54b8bf3a59570.jpg'
    }}
  />
);

const MyProfile = () => (
  <View style={{ flex: 1 }}>
    <ProfilePicture />
    <Subheading>Name Shasa Gray</Subheading>
    <Subheading />
  </View>
);

MyProfile.navigationOptions = {
  tabBarIcon: TabIcon('user'),
  title: 'My profile'
};

export default MyProfile;
