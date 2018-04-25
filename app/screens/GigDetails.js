import React from 'react';
import { View, Text, Alert } from 'react-native';
import TabIcon from '../components/TabIcon';
import NoPosterGigs from '../components/NoPosterGigs';
import { Paper, Subheading, TouchableRipple, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from '@expo/vector-icons/Feather';

import { MapView } from 'expo';
const { alert } = Alert;

const GigsDetails = ({ title, description, name, location, onApply }) => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <MapView
      style={{ height: 180, width: '100%' }}
      initialRegion={{
        latitude: 41.6086,
        longitude: 21.7453,
        latitudeDelta: 1.5,
        longitudeDelta: 1.5
      }}
    />
    <View
      style={{
        padding: 8,
        backgroundColor: 'white'
      }}
    >
      <Text style={{ fontSize: 18, paddingBottom: 8 }}>
        <Icon size={24} name="map-pin" /> {location}{' '}
      </Text>

      <View style={{ paddingBottom: 16 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingBottom: 4 }}>
          {title}
        </Text>
        <Text style={{ fontSize: 16, paddingBottom: 4 }}>{description}</Text>
      </View>

      <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 4 }}>
        {name}
      </Text>
    </View>
    <Button flexDirection="column-reverse" primary onPress={onApply}>
      Apply
    </Button>
  </View>
);

const GigsDetailsContainer = ({
  navigation: {
    state: {
      params: {
        item: {
          title,
          description,
          user: { name },
          location
        }
      }
    },
    goBack
  }
}) =>
  GigsDetails({
    title,
    description,
    name,
    location,
    onApply: () => {
      alert('You have applied for the gig!');
      goBack();
    }
  });

export default GigsDetailsContainer;
