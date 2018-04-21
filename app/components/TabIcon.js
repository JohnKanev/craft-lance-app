import React from 'react';
import Icon from '@expo/vector-icons/Feather';

export default name => ({ tintColor, focused }) => (
  <Icon size={!focused ? 24 : 26} color={tintColor} name={name} />
);
