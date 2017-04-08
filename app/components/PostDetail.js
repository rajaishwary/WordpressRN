import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import TabBarContainer from '../common/TabBarContainer';
import Header from '../common/Header';
import { purple } from '../constants/color';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight, screenHeight } from '../constants/dimens';

const { width, height } = Dimensions.get('window');
const margin = height / 60;

export default class PostDetail extends Component {
	
    render() {
        const { navigator } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.headerView}>
		       		<TouchableOpacity onPress={() => this.props.navigator.pop()}>
		                <View style={styles.closeButton}>
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
		        <View style={styles.viewContainer}>
		          <View style={{flex: 1, backgroundColor: '#f4f4f4'}}>
		             <ScrollView>
		             	<View style={{height: height * 0.30, width, backgroundColor: 'gray'}}>
		             	
		             	</View>
		             	<View style={{height: height * 0.120, width, backgroundColor: 'white', justifyContent: 'center'}}>
		             		<Text style={{padding: margin}}>Title</Text>
		             	</View>
		             	<View style={{	    
		             		backgroundColor: 'white',
						    flexWrap: 'wrap', 
						    alignItems: 'flex-start',
						    margin,
						    width: width - (2 * margin),
						}}>
						<Text>hsaghsgkdjbajkhsdjahjkdhgGXhGHJXghGkhgKJGXkjgGXjgGJKXGkZGXjkgZXJk</Text>
						</View>
		             </ScrollView>
		          </View>
		        </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: screenHeight,
        width,
        top: topNotificationAreaHeight,
        position: 'absolute',
        backgroundColor: 'transparent',  
    },
    viewContainer: {
	    position: 'absolute', 
	    top: headerHeight,
	    width: width, 
	    height: height - headerHeight, 
	  },
	headerView: {
   		position: 'absolute', 
   		top: 0, 
   		width: width, 
   		height: headerHeight, 
   		backgroundColor: purple, 
   		flexDirection: 'row'
   	},
   	closeButton: {
		height: headerHeight, 
		width: headerHeight, 
		justifyContent: 'center',
		alignItems: 'center'
	}
});
