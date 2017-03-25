import React, { Component } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';
import Screens from './Screens';
import { fetchAvailableSports } from '../actions';

export default class Home extends Component {
  static title = 'Scroll views';
  static backgroundColor = '#fff';
  static tintColor = '#222';
  static appbarElevation = 0;

  static propTypes = {
    style: View.propTypes.style,
  };

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'Sports' },
      { key: '2', title: 'Trending' },
      { key: '3', title: 'Message' },
      { key: '4', title: 'Profile' },
    ],
  };

  _first: Object;
  _second: Object;
  _third: Object;
  _forth: Object;

  _handleChangeTab = (index) => {
    this.setState({
      index,
    });
  };

  _handleTabItemPress = route => {
    if (route !== this.state.routes[this.state.index]) {
      return;
    }
    switch (route.key) {
    case '1':
      this._first.scrollTo({ y: 0 });
      break;
    case '2':
      this._second.scrollTo({ y: 0 });
      break;
    case '3':
      this._third.scrollTo({ y: 0 });
      break;
    case '4':
      this._forth.scrollTo({ y: 0 });
      break;
    }
  };

  _renderLabel = (props: any) => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(inputIndex => inputIndex === index ? '#D6356C' : '#222');
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <Animated.Text style={[ styles.label, { color } ]}>
        {route.title}
      </Animated.Text>
    );
  };

  _renderFooter = (props) => {
    return (
      <TabBarTop
        {...props}
        pressColor='rgba(255, 64, 129, .5)'
        onTabPress={this._handleTabItemPress}
        renderLabel={this._renderLabel(props)}
        indicatorStyle={styles.indicator}
        tabStyle={styles.tab}
        tabWidth={90}
        style={styles.tabbar}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <Screens/>;
    case '2':
      return <Screens/>;
    case '3':
      return <Screens/>;
    case '4':
      return <Screens/>;
    default:
      return null;
    }
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAvailableSports());
  }

  render() {
    return (
      <TabViewAnimated
        style={[ styles.container, this.props.style ]}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderFooter={this._renderFooter}
        onRequestChangeTab={this._handleChangeTab}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  indicator: {
    backgroundColor: '#ff4081',
  },
  label: {
    fontSize: 13,
    fontWeight: 'bold',
    margin: 8,
  },
  tabbar: {
    backgroundColor: '#fff',
  },
  tab: {
    opacity: 1,
  },
  page: {
    backgroundColor: '#f9f9f9',
  },
});

