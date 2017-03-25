import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Loader extends Component {
   render() {
   	  return (
        <View style={{height: 200, width: width}}>
          <Text>Loading...</Text>
        </View>
   	  );
   }
}