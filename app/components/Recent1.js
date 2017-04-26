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
import TabBarContainer from '../common/TabBarContainer';
import Header from '../common/Header';
import { purple } from '../constants/color';
import { fetchPosts } from '../actions';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight } from '../constants/dimens';
import PostDetail from './PostDetail';
import SplashScreen from '@remobile/react-native-splashscreen';
import DrawerLayout from 'react-native-drawer-layout';

const { width, height } = Dimensions.get('window');
const titleContainerHeight = width / 10;
const HScrollViewHeight = width / 2;
const MARGIN = width * 0.025;
const cardWidth = width - (2 * MARGIN);

class Recent extends Component {
	constructor(props) {
		super(props);
		this.fetchNextPosts = this.fetchNextPosts.bind(this);
		this.renderCard = this.renderCard.bind(this);
		this.onPressPostCard = this.onPressPostCard.bind(this);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.newData=[];
		this.counter= 1;
	    this.state = {
	       requestingPosts: true,
	       dataSource: this.ds.cloneWithRows([]),
	    };
	}

	componentWillMount() {
	    const { dispatch } = this.props;
	    dispatch(fetchPosts(this.counter));
	    this.counter += 1;
  	}

  	componentWillReceiveProps(nextProps) {
  		SplashScreen.hide();
  		console.log(nextProps)
		const { data, requestingPosts } = nextProps.posts;
		this.newData = this.newData.concat(data.posts);
		this.setState({requestingPosts, dataSource: this.ds.cloneWithRows(this.newData)});
	}

	fetchNextPosts() {
		const { dispatch } = this.props;
	    dispatch(fetchPosts(this.counter));
	    this.counter += 1;
	}

	onPressPostCard(data) {
	   const { navigator } = this.props;
	   const post = {
	   	   name: 'PostDetail',
	   	   component: PostDetail,
	   	   passProps: { post: data }
	   }
	   navigator.push(post);
	}

	renderCard(data, id) {
		return (
			<TouchableWithoutFeedback onPress={() => this.onPressPostCard(data)}>
			<View style={styles.cardContainer} key={id}>
			    {data && data.attachments[0] && data.attachments[0].url ? (
			    	<Image style={{width: cardWidth, height: height * 0.25}} source={{uri: data && data.attachments[0] && data.attachments[0].url}}/>
			    ) : (<View
			    	style={{width: cardWidth, height: height * 0.25, backgroundColor: '#e4e4e4', justifyContent: 'center', alignItems: 'center'}} 
			    ><Text style={{fontSize: 22, fontWeight: '400'}}>{BLOG_NAME}</Text></View>)}
				<View style={{width: cardWidth, height: height * 0.05, backgroundColor: '#f4f4f4', justifyContent: 'center'}} >
				  <Text ellipsizeMode={'tail'} numberOfLines={1}  style={{padding: MARGIN, fontSize: 18, fontWeight: '400'}}>{data.title}</Text>
				</View>
			</View>
			</TouchableWithoutFeedback>
		);
	}



    render() {
        const { navigator } = this.props;
        return (
            <TabBarContainer>
                <Header name={BLOG_NAME}/>
					<View style={styles.viewContainer}>
							<View style={{height: titleContainerHeight, width: width, justifyContent: 'center'}}>
								<Text style={{left: width * 0.05, color: '#000', fontSize: 18, fontWeight: '600'}}>Recent Posts</Text>
							</View>
							<View style={{flex: 1}}>
								<ListView
									dataSource={this.state.dataSource}
									renderRow={(rowData, id) => this.renderCard(rowData, id)}
									enableEmptySections={true}
									onEndReached={this.fetchNextPosts}
								/>
							</View>
						</View>
            </TabBarContainer>
        );
    }
}

function mapStateToProps(state) {
  const { posts } = state;
  return { posts };
}

export default connect(mapStateToProps)(Recent);

const styles = StyleSheet.create({
	viewContainer: {
	    position: 'absolute', 
	    top: headerHeight,
	    width: width, 
	    height: height - headerHeight, 
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
	    shadowOffset: { height: 2, width: 2 },
	    shadowOpacity: 0.3,
	    shadowRadius: 4,
	    elevation: 5
	  },
});

