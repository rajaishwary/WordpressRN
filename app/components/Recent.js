import React, { Component } from 'react';
import {
    AppRegistry, 
    ListView, 
    Text, 
    View,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import TabBarContainer from '../common/TabBarContainer';
import Header from '../common/Header';
import { purple } from '../constants/color';
import { fetchPosts } from '../actions';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight } from '../constants/dimens';
import PostDetail from './PostDetail';

const { width, height } = Dimensions.get('window');
const titleContainerHeight = width / 10;
const HScrollViewHeight = width / 2;

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
			<TouchableOpacity onPress={() => this.onPressPostCard(data)}>
			<View style={styles.container} key={id}>
				<Text style={styles.postsView}>Image</Text>
				<Text>{data.title}</Text>
			</View>
			</TouchableOpacity>
		);
	}



    render() {
        const { navigator } = this.props;
        console.log(this.props);
        return (
            <TabBarContainer>
                <Header name={BLOG_NAME}/>
					<View style={{top: headerHeight, height: heightWOtabBar - headerHeight, width}}>
							<View style={{height: titleContainerHeight, width: width, backgroundColor: 'gray'}}>
								<Text>Recent Posts</Text>
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
	container: {
		justifyContent : 'center',
		alignItems: 'center',
		height : height * 0.25,
	 	borderWidth: 1,
	 	margin: 15,
	},
	postsView: {
		justifyContent : 'center',
		alignItems: 'center',
		height: height * 0.15,
	}
});

