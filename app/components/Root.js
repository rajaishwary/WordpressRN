import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
} from 'react-native';
import HomeNoAnimate from './HomeNoAnimate';

export default class Root extends Component {

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