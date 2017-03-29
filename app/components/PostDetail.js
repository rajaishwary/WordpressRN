import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity 
} from 'react-native';
import TabBarContainer from '../common/TabBarContainer';
import Header from '../common/Header';
import { purple } from '../constants/color';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight } from '../constants/dimens';

const { width, height } = Dimensions.get('window');
const margin = height / 30;

export default class PostDetail extends Component {
	
    render() {
        const { navigator } = this.props;
        return (
            <TabBarContainer>
                <View style={{
		       		position: 'absolute', 
		       		top: 0, 
		       		width: width, 
		       		height: headerHeight, 
		       		backgroundColor: purple, 
		       		flexDirection: 'row'
		       		}}>
		       		<TouchableOpacity onPress={() => this.props.navigator.pop()}>
		                <View style={{
		                	height: headerHeight, 
		                	width: headerHeight, 
		                	justifyContent: 'center',
		                	alignItems: 'center'
		                	}}>
		                	<Text style={{color: '#fff'}}>X</Text>
		                </View>
		            </TouchableOpacity>
		            <View style={{
		            	height: headerHeight, 
		            	width: width - (2 * headerHeight) , 
		            	backgroundColor: 'transparent', 
		            	justifyContent: 'center'
		            	}}>
	                   <Text style={{left: margin / 2, textAlign: 'center', color: 'white', fontWeight: '600', fontSize: 20}}>Post</Text>
		            </View>
		        </View>
            </TabBarContainer>
        );
    }
}