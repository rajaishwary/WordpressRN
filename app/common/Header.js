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
	Image,
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
const margin = height / 60;
const drawerWidth=width * 0.7;

export default class Header extends Component {
	constructor(props) {
	  super(props);
	  this.close = this.close.bind(this);
	  this.handleCategoryPress = this.handleCategoryPress.bind(this);
	  this.handleHomePress = this.handleHomePress.bind(this);
	  this.handleTagsPress = this.handleTagsPress.bind(this);
	  this.state = {
	  	drawerLockMode: 'unlocked'
	  };
	}

  close() {
    const { navigator } = this.props;
    navigator.pop();
  }

  handleCategoryPress() {
  	this.props.handleChangeTab(1);
  	this.drawer.closeDrawer();
  }

  handleHomePress() {
  	this.props.handleChangeTab(0);
  	this.drawer.closeDrawer();
  }

  handleTagsPress() {
  	this.props.handleChangeTab(2);
  	this.drawer.closeDrawer();
  }

	render() {
		const { name } = this.props;
		const {
	      drawerLockMode,
	    } = this.state;

	    const navigationView = (
	      <View style={{flex: 1}}>
	      	<ScrollView>
	        	<Image source={require('../assets/logo.png')} style={{width: width * 0.7, height: width * 0.7}}/>
	        	<TouchableOpacity onPress={() => this.handleHomePress()}>
		        	<View style={styles.item}>
		        		<Text style={styles.itemText}>Home</Text>
		        	</View>
	        	</TouchableOpacity>
	        	<TouchableOpacity onPress={() => this.handleCategoryPress()}>
		        	<View style={styles.item}>
		        		<Text style={styles.itemText}>Categories</Text>
		        	</View>
	        	</TouchableOpacity>
	        	<TouchableOpacity onPress={() => this.handleTagsPress()}>
		        	<View style={styles.item}>
		        		<Text style={styles.itemText}>Popular Tags</Text>
		        	</View>
	        	</TouchableOpacity>
	      	</ScrollView>
	      </View>
	    );

	    const { children } = this.props;
		return (
	       		<DrawerLayout
			        onDrawerSlide={(e) => this.setState({drawerSlideOutput: JSON.stringify(e.nativeEvent)})}
			        onDrawerStateChanged={(e) => this.setState({drawerStateChangedOutput: JSON.stringify(e)})}
			        drawerBackgroundColor="white"
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
			                	alignItems: 'center'
			                }}>
			                	<Icon name="menu" size={22} color="#fff" />
			                </View>
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
  item: { height: 44, 
  	width: drawerWidth, 
  	borderBottomWidth: 1, 
  	borderBottomColor: 'black', 
  	justifyContent: 'center',
  	padding: margin,
  },
  itemText: {
  	fontSize: 16,
  	fontWeight: '600',
  }
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
