import React, { Component } from 'react';
import {
    AppRegistry, 
    ListView, 
    Text, 
    View,
    Dimensions
} from 'react-native';
import { connect } from 'react-redux';
import TabBarContainer from '../common/TabBarContainer';
import Header from '../common/Header';
import { purple } from '../constants/color';
import { fetchPosts } from '../actions';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight } from '../constants/dimens';
export const { width, height } = Dimensions.get('window');

class Recent extends Component {
	constructor(props) {
		super(props);
		this.fetchNextPosts = this.fetchNextPosts.bind(this);
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
		this.newData = this.newData.concat(data);
		this.setState({requestingPosts, dataSource: this.ds.cloneWithRows(this.newData)});
	}

	fetchNextPosts() {
		const { dispatch } = this.props;
	    dispatch(fetchPosts(this.counter));
	    this.counter += 1;
	}

    render() {
        const { navigator } = this.props;
        return (
            <TabBarContainer>
                <Header name={BLOG_NAME}/>
                <View style={{flex: 1, top: headerHeight, height, width}}>
			        <View style={{flex: 1}}>
			        <ListView
			          dataSource={this.state.dataSource}
			          renderRow={(rowData, id) => (<View key={id}>
			          	<Text>{rowData.date}</Text>
			        
			          	</View>)}
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

