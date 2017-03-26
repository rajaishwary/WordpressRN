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
import { purple } from '../constants/color';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight, width } from '../constants/dimens';

class Categories extends Component {
	constructor(props) {
		super(props);
        this.renderCategories = this.renderCategories.bind(this);
		this.state = { 
			requestingCategories: true,
			categories: null,
		};
	}

	componentWillReceiveProps(nextProps) {
		const { data, requestingCategories } = nextProps.categories;
		this.setState({requestingCategories, categories: data});
	}

    renderCategories() {
        if(this.state.requestingCategories === true) {
            return (
                <View><Text>Getting data</Text></View>
            );
        } else {
            return this.state.categories.map((category, id) => (
                <View key={id} style={styles.cardContainer}>
                    <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 18}}>{category.name}</Text>
                </View>
            ));
        }
    }

    render() {
    	console.log(this.props);
        const { navigator } = this.props;
        // const { requestingCategories } = this.state;
        return (
            <TabBarContainer>
                <Header name={'Categories'}/>
                <View style={{top: headerHeight, width, height: heightWOtabBar - headerHeight}}>
	                	<ScrollView>
	                	  <View style={{alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap'}}>
                            {this.renderCategories()}
	                	  </View>
	                	</ScrollView>
                </View>
            </TabBarContainer>
        );
    }
}

function mapStateToProps(state) {
  const { categories, tags } = state;
  return { categories, tags };
}

export default connect(mapStateToProps)(Categories);

const styles = StyleSheet.create({
  cardContainer: {
  	height: width / 2,
    width: width / 2,
    backgroundColor: 'gray',
    justifyContent: 'center'
  }
});
