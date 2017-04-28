import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
} from 'react-native';
import HomeNoAnimate from './HomeNoAnimate';
import OneSignal from 'react-native-onesignal';

export default class Root extends Component {
  
  componentWillMount() {
      OneSignal.addEventListener('received', this.onReceived);
      OneSignal.addEventListener('opened', this.onOpened);
      OneSignal.addEventListener('registered', this.onRegistered);
      OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
      OneSignal.removeEventListener('received', this.onReceived);
      OneSignal.removeEventListener('opened', this.onOpened);
      OneSignal.removeEventListener('registered', this.onRegistered);
      OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
      console.log("Notification received: ", notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onRegistered(notifData) {
      console.log("Device had been registered for push notifications!", notifData);
  }

  onIds(device) {
  console.log('Device info: ', device);
  }

  configureScene(route) {
    return {
      ...Navigator.SceneConfigs.FloatFromRight,
      gestures: {},
    };
  }

    renderScene(route, navigator) {
        const Component = route.component;
        return (
            <Component navigator={navigator} {...route.passProps} />
        )
    }

    render() {
        const defaultRoute = {
          name: 'HomeNoAnimate',
          component: HomeNoAnimate,
          passProps: { dispatch: this.props.dispatch },
        };
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                configureScene={this.configureScene.bind(this)}
                initialRoute={defaultRoute}
            />
        );
    }
}