import React, { PureComponent } from 'react';
import {
  Animated,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions
} from 'react-native';
import { TabViewAnimated, TabViewPagerPan } from 'react-native-tab-view';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Tags from './Tags';
import Recent from './Recent';
import { BLOG_NAME } from '../constants/config';
import Container from '../common/Container';
import Header from '../common/Header';
import Categories from './Categories';
import { purple } from '../constants/color';
import { fetchCategories, fetchPosts, fetchTags } from '../actions';
import { topNotificationAreaHeight, screenHeight, headerHeight } from '../constants/dimens';
import type { NavigationState } from 'react-native-tab-view/types';

const { width } = Dimensions.get('window');
const AnimatedIcon = Animated.createAnimatedComponent(Ionicons);

type Route = {
  key: string,
  title: string,
  icon: string,
};

type State = NavigationState<Route>;

export default class HomeNoAnimate extends PureComponent<void, *, State> {
  static title = 'No animation';
  static backgroundColor = '#f4f4f4';
  static tintColor = '#222';
  static appbarElevation = 4;

  static propTypes = {
    style: View.propTypes.style,
  };

  state: State = {
    index: 0,
    routes: [
      { key: '1', title: 'RECENT', icon: 'ios-bookmarks' },
      { key: '2', title: 'CATEGORIES', icon: 'ios-keypad' },
      { key: '3', title: 'TAGS', icon: 'ios-list-box' },
    ],
  };

  _handleChangeTab = index => {
    this.setState({
      index,
    });
  };

  _renderLabel = ({ position, navigationState }) => ({ route, index }) => {
    const inputRange = navigationState.routes.map((x, i) => i);
    const outputRange = inputRange.map(
      inputIndex => (inputIndex === index ? '#2196f3' : '#939393'),
    );
    const color = position.interpolate({
      inputRange,
      outputRange,
    });
    return (
      <Animated.Text style={[styles.label, { color }]}>
        {route.title}
      </Animated.Text>
    );
  };

  _renderIcon = ({ navigationState, position }) => ({
    route,
    index,
  }: { route: Route, index: number }) => {
    const inputRange = navigationState.routes.map((x, i) => i);
    const filledOpacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 1 : 0)),
    });
    const outlineOpacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 0 : 1)),
    });
    return (
      <View style={styles.iconContainer}>
        <AnimatedIcon
          name={route.icon}
          size={26}
          style={[styles.icon, { opacity: filledOpacity }]}
        />
        <AnimatedIcon
          name={route.icon + '-outline'}
          size={26}
          style={[styles.icon, styles.outline, { opacity: outlineOpacity }]}
        />
      </View>
    );
  };

  _renderFooter = props => {
    return (
      <View style={styles.tabbar}>
        {props.navigationState.routes.map((route, index) => {
          return (
            <TouchableWithoutFeedback
              key={route.key}
              onPress={() => props.jumpToIndex(index)}
            >
              <Animated.View style={styles.tab}>
                {this._renderIcon(props)({ route, index })}
                {this._renderLabel(props)({ route, index })}
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
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
      <Container>
          <Header handleChangeTab={this._handleChangeTab} name={BLOG_NAME}>
            <TabViewAnimated
              style={[styles.container, this.props.style]}
              navigationState={this.state}
              renderScene={this._renderScene}
              renderFooter={this._renderFooter}
              onRequestChangeTab={this._handleChangeTab}
              swipeEnabled={false}
              animationEnabled={false}
            />
          </Header>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: screenHeight,
    width,
  },
  tabbar: {
    height: 66,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f4f4f4',
  },
  tab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .2)',
    paddingTop: 4.5,
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
  outline: {
    color: '#939393',
  },
  label: {
    fontSize: 13,
    fontWeight: '400',
    height: 20
  },
  page: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
