import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
const { spinnerContainer } = style;
  return (
    <View style={spinnerContainer}>
    <ActivityIndicator
    size={size || 'large'}
    color='#0000ff'
    />
    </View>
  );
};

const style = {
 spinnerContainer: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   padding: 8
 }
};

export { Spinner };
