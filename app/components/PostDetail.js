import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import HTML from 'react-native-fence-html'
import TabBarContainer from '../common/TabBarContainer';
import Header from '../common/Header';
import BackgroundImage from '../common/BackgroundImage';
import { purple } from '../constants/color';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight, screenHeight } from '../constants/dimens';

const { width, height } = Dimensions.get('window');
const margin = height / 60;

export default class PostDetail extends Component {
    render() {
        const { navigator, post } = this.props;
        const html = post.content; 
        	const htmlstyles = {
				p: { fontSize: 18, fontWeight: '400'}
		}
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
		             		{post && post.attachments[0] && post.attachments[0].url ? (
		             			<BackgroundImage style={{height: height * 0.30, width}} url={post && post.attachments[0] && post.attachments[0].url}/>
		             		) : (
		             			<View style={{height: height * 0.30, width, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center'}}>
		             				<Text style={{fontSize: 24, fontWeight: '600', color: 'white'}}>{BLOG_NAME}</Text>
		             			</View>
		             		)}
		             	</View>
		             	<View style={{height: height * 0.120, width, backgroundColor: 'white', justifyContent: 'center'}}>
		             		<Text ellipsizeMode={'tail'} numberOfLines={2} style={{padding: margin, fontSize: 20, fontWeight: '600'}}>{post.title}</Text>
		             	</View>
		             	<View style={{	    
		             		backgroundColor: 'white',
						    flexWrap: 'wrap', 
						    alignItems: 'flex-start',
						    margin,
						    width: width - (2 * margin),
						    padding: 2 * margin,
						}}>
						<HTML
							// Required. The html snippet you want to render as a string
							html={html}

							// The styles to supply for each html tag. Default styles
							// are already pre-provided in HTMLStyles.js. The additional
							// styles that you provide will be merged over these, so if
							// you need some funky red background on your h1, just set
							// the background
							htmlStyles={htmlstyles}

							// Callback for when the user taps on a link. Oh look! You
							// get the href passed back. Handy if you want to send
							// someone somewhere :-)
							//onLinkPress={(evt, href) => console.log(href)} 
							/>
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
