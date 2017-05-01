import React, { Component } from 'react';
import {
    AppRegistry, 
    ListView, 
    Text, 
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
    Image
} from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-spinkit';
import Icon from 'react-native-vector-icons/Ionicons';
import TabBarContainer from '../common/TabBarContainer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Header from '../common/Header';
import { purple } from '../constants/color';
import { fetchCatPosts } from '../actions';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight, screenHeight } from '../constants/dimens';
import PostDetail from './PostDetail';

const { width, height } = Dimensions.get('window');
const titleContainerHeight = width / 10;
const HScrollViewHeight = width / 2;
const MARGIN = width * 0.025;
const cardWidth = width - (2 * MARGIN);

export default class NoCategorisedPosts extends Component {
	constructor(props) {
		super(props);
	}

    render() {
        const { navigator, category } = this.props;
        return (
            <View>
            <View style={styles.viewContainer}>
           			    <View style={{height: titleContainerHeight, width: width, justifyContent: 'center'}}>
							<Text style={{left: width * 0.05, color: '#000', fontSize: 18, fontWeight: '600'}}>{`Getting posts`}</Text>
						</View>
                <View style={styles.cardContainer}>
					    <View
					    	style={{width: cardWidth, height: height * 0.25, backgroundColor: '#e4e4e4', justifyContent: 'center', alignItems: 'center'}} 
					    >
					    	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						        <View style={{ margin: 2 * MARGIN }}>
						        	<Spinner isVisible={true} size={50} type={'FadingCircleAlt'} color={'gray'}/>
						        </View>
						    	<Text style={{fontSize: 36, fontWeight: '600'}}>{BLOG_NAME}</Text>
							</View>	
					    </View>
						<View style={{width: cardWidth, height: 50, backgroundColor: '#f4f4f4', justifyContent: 'center'}} >
						  <Text ellipsizeMode={'tail'} numberOfLines={1}  style={{padding: MARGIN, fontSize: 18, fontWeight: '400'}}>{BLOG_NAME}</Text>
						</View>
					</View>
					<View style={styles.cardContainer}>
					    <View
					    	style={{width: cardWidth, height: height * 0.25, backgroundColor: '#e4e4e4', justifyContent: 'center', alignItems: 'center'}} 
					    >
					    	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						        <View style={{ margin: 2 * MARGIN }}>
						        	<Spinner isVisible={true} size={50} type={'FadingCircleAlt'} color={'gray'}/>
						        </View>
						    	<Text style={{fontSize: 36, fontWeight: '600'}}>{BLOG_NAME}</Text>
							</View>	
					    </View>
						<View style={{width: cardWidth, height: 50, backgroundColor: '#f4f4f4', justifyContent: 'center'}} >
						  <Text ellipsizeMode={'tail'} numberOfLines={1}  style={{padding: MARGIN, fontSize: 18, fontWeight: '400'}}>{BLOG_NAME}</Text>
						</View>
					</View>
					<View style={styles.cardContainer}>
					    <View
					    	style={{width: cardWidth, height: height * 0.25, backgroundColor: '#e4e4e4', justifyContent: 'center', alignItems: 'center'}} 
					    >
					    	<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
						        <View style={{ margin: 2 * MARGIN }}>
						        	<Spinner isVisible={true} size={50} type={'FadingCircleAlt'} color={'gray'}/>
						        </View>
						    	<Text style={{fontSize: 36, fontWeight: '600'}}>{BLOG_NAME}</Text>
							</View>	
					    </View>
						<View style={{width: cardWidth, height: 50, backgroundColor: '#f4f4f4', justifyContent: 'center'}} >
						  <Text ellipsizeMode={'tail'} numberOfLines={1}  style={{padding: MARGIN, fontSize: 18, fontWeight: '400'}}>{BLOG_NAME}</Text>
						</View>
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
        backgroundColor: 'white',  
    },
	viewContainer: {
	    position: 'absolute', 
	    top: headerHeight,
	    width: width, 
	    height: height - headerHeight,
	    opacity: 0.6, 
	  },
	postsView: {
		justifyContent : 'center',
		alignItems: 'center',
		height: height * 0.15,
	},
	cardContainer: {
	    marginLeft: MARGIN,
	    marginBottom: MARGIN,
	    marginRight: MARGIN,
	    marginTop: MARGIN,
	    width: cardWidth,
	    backgroundColor: 'white',
	    flexWrap: 'wrap', 
	    alignItems: 'flex-start',
	    shadowColor: 'gray',
	    shadowOffset: { height: 1, width: 1 },
	    shadowOpacity: 0.2,
	    shadowRadius: 3,
	    elevation: 1
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

