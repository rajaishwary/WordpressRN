import React, { Component } from 'react';
import { Image, View, Dimensions, Text } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Splash extends Component {
  constructor(props) {
    super(props);
  }

  goToRoute(route) {
     const { navigator } = this.props;
     const { flux } = this.context;
     if (route === homeRoute) {
        const { flux } = this.context;
        getSession().then(session => {
          const id = JSON.parse(session)._id;
          flux.getActions('player').fetchPlayer(id);
        }).catch(() => console.log('getSession'));
     }
     navigator.replace(route);
  }

  render() {
    return (
      <View/>
    );
  }
}
