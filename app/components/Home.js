import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated, View, StyleSheet, Dimensions } from 'react-native';
import { TabViewAnimated, TabBarTop } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tags from './Tags';
import Recent from './Recent';
import Categories from './Categories';
import { purple } from '../constants/color';
import { fetchCategories, fetchPosts, fetchTags } from '../actions';
import { topNotificationAreaHeight, getScreenHeight } from '../constants/dimens';

const height = getScreenHeight();
const { width } = Dimensions.get('window');
const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

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
      { key: '1', title: 'RECENT', icon: 'ios-bookmarks' },
      { key: '2', title: 'CATEGORIES', icon: 'ios-keypad' },
      { key: '3', title: 'TAGS', icon: 'ios-list-box' },
    ],
  };

  _first: Object;
  _second: Object;
  _third: Object;

  _handleChangeTab = (index) => {
    this.setState({
      index,
    });
  };

  _handleTabItemPress = route => {
    if (route !== this.state.routes[this.state.index]) {
      return;
    }
  };

  _renderIcon = ({ navigationState, position }) => ({ route, index }: any) => {
    const inputRange = navigationState.routes.map((x, i) => i);
    const filledOpacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map(i => i === index ? 1 : 0),
    });
    const outlineOpacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map(i => i === index ? 0 : 1),
    });
    return (
      <View style={styles.iconContainer}>
        <AnimatedIcon
          name={route.icon}
          size={20}
          style={[ styles.icon, { opacity: filledOpacity } ]}
        />
        <AnimatedIcon
          name={route.icon + '-outline'}
          size={20}
          style={[ styles.icon, styles.outline, { opacity: outlineOpacity } ]}
        />
      </View>
    );
  };

  _renderLabel = (props: any) => ({ route, index }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(inputIndex => inputIndex === index ? purple : '#222');
    const color = props.position.interpolate({
      inputRange,
      outputRange,
    });

    return (
      <Animated.View style={{justifyContent: 'center'}}>
          {this._renderIcon(props)({ route, index })}
          <Animated.Text style={[ styles.label, { color } ]}>
            {route.title}
          </Animated.Text>
      </Animated.View>
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
        tabWidth={width / 3}
        style={styles.tabbar}
      />
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <Recent navigator={this.props.navigator} dispatch={this.props.dispatch}/>;
    case '2':
      return <Categories navigator={this.props.navigator} dispatch={this.props.dispatch}/>;
    case '3':
      return <Tags navigator={this.props.navigator} dispatch={this.props.dispatch}/>;
    default:
      return null;
    }
  };

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
    backgroundColor: 'transparent',
  },
  indicator: {
    backgroundColor: purple,
  },
  label: {
    fontSize: 13,
    fontWeight: '400',
    height: 20
  },
  tabbar: {
    backgroundColor: '#f4f4f4',
  },
  tab: {
    opacity: 1,
  },
  page: {
    backgroundColor: '#f9f9f9',
  },
  iconContainer: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  icon: {
    position: 'absolute',
    textAlign: 'center',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    color: purple,
  },
});
