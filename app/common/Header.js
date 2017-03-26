import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Platform,
    StyleSheet,
    TouchableOpacity,
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

const { width } = Dimensions.get('window');
const height = getScreenHeight();
const margin = height / 30;

export default class Header extends Component {
    constructor(props) {
      super(props);
      this.close = this.close.bind(this);
    }

  close() {
    const { navigator } = this.props;
    navigator.pop();
  }

	render() {
		const { name } = this.props;
		return (
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
		);
	}
}

/*<TouchableOpacity onPress={() => this.close()}>
    <View style={{
    	height: headerHeight, 
    	width: headerHeight, 
    	justifyContent: 'center'
    }}>                 
        <Icon style={{textAlign: 'center'}} size={22} name="menu" color="#fff"/>            
    </View>
</TouchableOpacity>*/

