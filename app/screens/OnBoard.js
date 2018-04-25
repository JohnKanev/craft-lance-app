import React from 'react';
import { View, ImageBackground, Image } from 'react-native';
import BoardButton from '../components/BoardButton';
import colors from '../colors';
import { Button } from 'react-native-paper';

export default ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <Image style={styles.icon} source={require('../../assets/Asset_6.png')} />
    <View style={{ width: '80%' }}>
      <Button dark raised color="#A3CB38" onPress={() => navigate('Tabs')}>
        Find a gig
      </Button>
      <Button color="white" onPress={() => navigate('Tabs')}>
        Post a gig
      </Button>
    </View>
  </View>
);

const styles = {
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  icon: { width: 200, resizeMode: Image.resizeMode.contain }
};
