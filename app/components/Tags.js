import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    View, 
    StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import TabBarContainer from '../common/TabBarContainer';
import Header from '../common/Header';
import { purple, tile } from '../constants/color';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight, width } from '../constants/dimens';

class Tags extends Component {
	constructor(props) {
		super(props);
        this.renderTags = this.renderTags.bind(this);
		this.state = { 
			requestingTags: true,
			tags: null,
		};
	}

	componentWillReceiveProps(nextProps) {
		const { data, requestingTags } = nextProps.tags;
		this.setState({requestingTags, tags: data.tags});
	}

    renderTags() {
        if(this.state.requestingTags === true) {
            return (
                <View><Text>Getting data</Text></View>
            );
        } else {
            return this.state.tags.map((tag, id) => (
                    <View key={id} style={styles.cardContainer}>
                        <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 18, padding: 5}}>#{tag.title}</Text>
                    </View>
            ));
        }
    }

    render() {
        const { navigator } = this.props;
        return (
                <View style={{width, height: heightWOtabBar - headerHeight}}>
                	<ScrollView>
                	  <View style={{alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', margin: 5}}>
                        {this.renderTags()}
                	  </View>
                	</ScrollView>
                </View>
        );
    }
}

function mapStateToProps(state) {
  const { tags } = state;
  return { tags };
}

export default connect(mapStateToProps)(Tags);

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: tile,
    justifyContent: 'center',
    margin: 5,
  }
});
