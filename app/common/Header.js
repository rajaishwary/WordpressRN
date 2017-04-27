import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Platform,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
	Switch,
	TextInput,
	TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { 
	screenHeight, 
	tabBarHeight, 
	headerHeight, 
	heightWOtabBar, 
	topNotificationAreaHeight 
} from '../constants/dimens';
import { purple } from '../constants/color';
import DrawerLayout from 'react-native-drawer-layout';

const { width } = Dimensions.get('window');
const height = screenHeight - headerHeight;
const margin = height / 30;

export default class Header extends Component {
	constructor(props) {
	  super(props);
	  this.close = this.close.bind(this);
	  this.state = {
	  	drawerLockMode: 'unlocked'
	  };
	}

  close() {
    const { navigator } = this.props;
    navigator.pop();
  }

	render() {
		const { name } = this.props;
		const {
	      drawerLockMode,
	    } = this.state;

	    const navigationView = (
	      <View style={[styles.container]}>
	        <Text>Hello there!</Text>
	      </View>
	    );

	    const { children } = this.props;
		return (
	       		<DrawerLayout
			        onDrawerSlide={(e) => this.setState({drawerSlideOutput: JSON.stringify(e.nativeEvent)})}
			        onDrawerStateChanged={(e) => this.setState({drawerStateChangedOutput: JSON.stringify(e)})}
			        drawerBackgroundColor="red"
			        drawerWidth={width * 0.7}
			        drawerLockMode={drawerLockMode}
			        ref={(drawer) => { return this.drawer = drawer  }}
			        keyboardDismissMode="on-drag"
			        statusBarBackgroundColor="blue"
			        renderNavigationView={() => navigationView}>
				       <View style={{
				       		width: width, 
				       		height: headerHeight, 
				       		backgroundColor: purple, 
				       		flexDirection: 'row'
				       	}}>
				       	<TouchableHighlight onPress={() => this.drawer.openDrawer()}> 
						    <View style={{
			                	height: headerHeight, 
			                	width: headerHeight, 
			                	justifyContent: 'center',
			                	backgroundColor: 'red'
			                }}/>
			            </TouchableHighlight>    
			            <View style={{
			            	height: headerHeight, 
			            	width: width - (3 * headerHeight), 
			            	backgroundColor: 'transparent', 
			            	justifyContent: 'center'
			            }}>
		                <Text style={{left: margin / 2, textAlign: 'center', color: 'white', fontWeight: '600', fontSize: 20}}>{name}</Text>
			            </View>
			            <View style={{height: headerHeight, width: headerHeight, backgroundColor: purple, justifyContent: 'center'}}></View>
			            <View style={{height: headerHeight, width: headerHeight, backgroundColor: purple, justifyContent: 'center'}}></View>
			        </View>
			            <View style={{top: 0, height, width}}>
			              {children}
				        </View>  
			</DrawerLayout>
		);
	}
}

var styles = StyleSheet.create({
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputField: {
    backgroundColor: '#F2F2F2',
    height: 40,
  },
  split: {
    flexDirection: 'row',
  },
  spacedLeft: {
    paddingLeft: 10,
  },
  drawerLock: {
    height: 200,
    paddingTop: 50,
  },
});

/*<TouchableOpacity onPress={() => this.close()}>
    <View style={{
    	height: headerHeight, 
    	width: headerHeight, 
    	justifyContent: 'center'
    }}>                 
        <Icon style={{textAlign: 'center'}} size={22} name="menu" color="#fff"/>            
    </View>
</TouchableOpacity>
<TouchableHighlight onPress={() => this.drawer.openDrawer()}>
					            <Text>Open drawer</Text>
					          </TouchableHighlight>*/
