import React, { Component } from 'react';
import { ListView, View, Text, StyleSheet, Animated, Platform, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';
import TopNotificationArea from '../../common/TopNotificationArea';
import SearchBar from '../../common/SearchBar';
import Loader from '../../common/Loader';
import BackgroundImage from '../../common/BackgroundImage';
import DetailsBySports from './DetailsBySports';

const topNotificationAreaHeight = Platform.OS === 'ios' ? 20 : 0;
const { width, height } = Dimensions.get('window');
const ViewOverListHeight = ( height / 3 ) - topNotificationAreaHeight;

class Sports extends Component {
  static appbarElevation = 0;
  constructor(props) {
    super(props);
    this._renderRow = this._renderRow.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
        data: [],
        dataSource: new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2,
        }),
      };
  }

  componentWillReceiveProps(nextProps) {
    const { sports } = nextProps;
    if (sports.requestingSports === false) {
      this.setState({
        data: sports.data.sports,
        dataSource: this.state.dataSource.cloneWithRows(sports.data.sports),
      });
    }
  }

  handleClick(data) {
    const detailsBySport = {
      name: 'DetailsBySports',
      component: DetailsBySports,
      passProps: { data },
    };
      const { navigator } = this.props;
      var routes = navigator.getCurrentRoutes();
      routes.push(detailsBySport);
      navigator.immediatelyResetRouteStack(routes);
  }

  _root: Object;

  _renderRow(data) {
     console.log(data);
     return (
      <TouchableWithoutFeedback onPress={() => this.handleClick(data)}>
        <View style={styles.row}>
         {/*  <BackgroundImage url={data.icon.url}>  */}
            <View style={{width: width, height: 100}}>
              <Text style={styles.text}>{data.name}</Text>
            </View>
         {/* </BackgroundImage>  */}
        </View>
      </TouchableWithoutFeedback>
    );
  } 

  scrollTo = (...args: any) => this._root.scrollTo(...args);

  render() {
    const { sports } = this.props;
    return (
     <Animated.View>
      <View style={{width: width, height: height / 3}}>
        <TopNotificationArea/>
        <View style={{top: topNotificationAreaHeight, position: 'absolute', width: width, height: ViewOverListHeight, backgroundColor: '#e7461b'}}>
          <View style={{height: ViewOverListHeight / 3, width: width, backgroundColor: 'transparent'}}>
            <SearchBar/>
          </View>
          <View style={{height: ViewOverListHeight / 3, width: width, backgroundColor: 'transparent'}}>
            
          </View>
          <View style={{height: ViewOverListHeight / 3, width: width, backgroundColor: 'transparent'}}>
            <View style={{height: (ViewOverListHeight / 3) / 2, width: width, backgroundColor: 'transparent'}}/>
            <View style={{height: (ViewOverListHeight / 3) / 2, width: width, backgroundColor: 'lightblue'}}>
              <Text>SPORTS</Text>
            </View>
          </View>
        </View>  
      </View>
      {sports.requestingSports === true ? 
        (
          <Loader/>
        ) : (
              <ListView
                {...this.props}
                removeClippedSubviews={false}
                contentContainerStyle={styles.container}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
                //onEndReached={this._genRows}
                ref={el => (this._root = el)}
              />
        )}
      </Animated.View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  row: {
    margin: 8,
    padding: 2,
    borderRadius: 3,
    backgroundColor: 'rgba(0, 0, 0, .1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgba(0, 0, 0, .4)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

function mapStateToProps(state) {
  const { sports } = state;
  return { sports };
}

export default connect(mapStateToProps)(Sports);