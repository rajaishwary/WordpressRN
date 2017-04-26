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
	getScreenHeight, 
	tabBarHeight, 
	headerHeight, 
	heightWOtabBar, 
	topNotificationAreaHeight 
} from '../constants/dimens';
import { purple } from '../constants/color';
import DrawerLayout from 'react-native-drawer-layout';

const { width } = Dimensions.get('window');
const height = getScreenHeight();
const margin = height / 30;

var DrawerLockModeSwitches = React.createClass({

  render: function() {
    const {
      value,
      onValueChange,
    } = this.props;

    return (
      <ScrollView style={styles.drawerLock}>
        <View style={[styles.container, styles.split]}>
          <Switch onValueChange={value => value ? onValueChange('unlocked') : onValueChange('unlocked')} value={value === 'unlocked'} />
          <Text style={styles.spacedLeft}>Unlocked</Text>
        </View>
        <View style={[styles.container, styles.split]}>
          <Switch onValueChange={value => value ? onValueChange('locked-closed') : onValueChange('unlocked')} value={value === 'locked-closed'} />
          <Text style={styles.spacedLeft}>locked-closed</Text>
        </View>
        <View style={[styles.container, styles.split]}>
          <Switch onValueChange={value => value ? onValueChange('locked-open') : onValueChange('unlocked')} value={value === 'locked-open'} />
          <Text style={styles.spacedLeft}>locked-open</Text>
        </View>
      </ScrollView>
    );
  }
});

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
	        <DrawerLockModeSwitches value={drawerLockMode} onValueChange={value => this.setState({drawerLockMode: value})} />
	        <TouchableHighlight onPress={() => this.drawer.closeDrawer()}>
	          <Text>Close drawer</Text>
	        </TouchableHighlight>
	      </View>
	    );
		return (
	       		<DrawerLayout
			        onDrawerSlide={(e) => this.setState({drawerSlideOutput: JSON.stringify(e.nativeEvent)})}
			        onDrawerStateChanged={(e) => this.setState({drawerStateChangedOutput: JSON.stringify(e)})}
			        drawerBackgroundColor="red"
			        drawerWidth={300}
			        drawerLockMode={drawerLockMode}
			        ref={(drawer) => { return this.drawer = drawer  }}
			        keyboardDismissMode="on-drag"
			        statusBarBackgroundColor="blue"
			        renderNavigationView={() => navigationView}>
			       <View style={styles.container}>
				       <View style={{
				       		position: 'absolute', 
				       		top: 0, 
				       		width: width, 
				       		height: headerHeight, 
				       		backgroundColor: purple, 
				       		flexDirection: 'row'
				       	}}>
					       
					    <View style={{
		                	height: headerHeight, 
		                	width: headerHeight, 
		                	justifyContent: 'center'
		                }}/>
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
				        <ScrollView>
					          <Text style={styles.welcome}>Content!</Text>
					          <Text>{this.state.drawerStateChangedOutput}</Text>
					          <Text>{this.state.drawerSlideOutput}</Text>
					          <TouchableHighlight onPress={() => this.drawer.openDrawer()}>
					            <Text>Open drawer</Text>
					          </TouchableHighlight>
					          <TextInput style={styles.inputField} />
					    </ScrollView>
			        </View>
				        
			      </DrawerLayout>
                
		);
	}
}

var styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
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
