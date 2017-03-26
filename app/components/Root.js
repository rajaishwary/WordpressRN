import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
} from 'react-native';
import Home from './Home';

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
          name: 'Home',
          component: Home,
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