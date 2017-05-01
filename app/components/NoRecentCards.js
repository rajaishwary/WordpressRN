import React, { Component } from 'react';
import {
    AppRegistry, 
    ListView, 
    Text, 
    View,
    Dimensions,
    StyleSheet,
    TouchableWithoutFeedback,
    ScrollView,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';
import { purple } from '../constants/color';
import { fetchPosts } from '../actions';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight, screenHeight } from '../constants/dimens';
import PostDetail from './PostDetail';
import DrawerLayout from 'react-native-drawer-layout';

const height = heightWOtabBar - headerHeight;
const { width } = Dimensions.get('window');
const titleContainerHeight = width / 10;
const HScrollViewHeight = width / 2;
const MARGIN = width * 0.025;
const cardWidth = width - (2 * MARGIN);

export default class NoRecentCards extends Component {
	constructor(props) {
		super(props);
	}

    render() {
        const { navigator } = this.props;
        return ( 
			<View style={styles.viewContainer}>
				<View style={{height: titleContainerHeight, width: width, justifyContent: 'center'}}>
					<Text style={{left: width * 0.05, color: '#000', fontSize: 20, fontWeight: '600'}}>Recent Posts</Text>
				</View>
				<View style={{flex: 1}}>
					<View style={styles.cardContainer}>
						<View
					    	style={{width: width, height: height * 0.35, backgroundColor: '#fff', alignItems: 'center'}} 
					    >
						    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						        <View style={{ margin: 2 * MARGIN }}>
						        	<Spinner isVisible={true} size={50} type={'FadingCircleAlt'} color={'gray'}/>
						        </View>
						    	<Text style={{fontSize: 36, fontWeight: '600'}}>{BLOG_NAME}</Text>
							</View>
						</View>
						<View style={{width: width, height: 50, backgroundColor: '#f4f4f4', justifyContent: 'center'}} >
						  <Text ellipsizeMode={'tail'} numberOfLines={1}  style={{padding: MARGIN, fontSize: 18, fontWeight: '400'}}>{BLOG_NAME}</Text>
						</View>
					</View>
					<View style={styles.cardContainer}>
						<View
					    	style={{width: width, height: height * 0.35, backgroundColor: '#fff', alignItems: 'center'}} 
					    >
						    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						        <View style={{ margin: 2 * MARGIN }}>
						        	<Spinner isVisible={true} size={50} type={'FadingCircleAlt'} color={'gray'}/>
						        </View>
						    	<Text style={{fontSize: 36, fontWeight: '600'}}>{BLOG_NAME}</Text>
							</View>
						</View>
						<View style={{width: width, height: 50, backgroundColor: '#f4f4f4', justifyContent: 'center'}} >
						  <Text ellipsizeMode={'tail'} numberOfLines={1}  style={{padding: MARGIN, fontSize: 18, fontWeight: '400'}}>{BLOG_NAME}</Text>
						</View>
					</View>
				</View>
			</View>
        );
    }
}

const styles = StyleSheet.create({
	viewContainer: {
	    position: 'absolute', 
	    top: 0,
	    width: width, 
	    height,
	    backgroundColor: '#e4e4e4',
	    opacity: 0.6
	  },
	postsView: {
		justifyContent : 'center',
		alignItems: 'center',
		height: height * 0.15,
	},
	cardContainer: {
	    marginBottom: MARGIN,
	    marginTop: MARGIN,
	    width: width,
	    backgroundColor: 'white',
	    flexWrap: 'wrap', 
	    alignItems: 'flex-start',
	    shadowColor: 'gray',
	    shadowOffset: { height: 1, width: 1 },
	    shadowOpacity: 0.2,
	    shadowRadius: 3,
	    elevation: 1
	  },
});

