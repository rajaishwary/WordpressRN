import React, { Component } from 'react';
import {
    Text,
    ScrollView,
    View, 
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import TabBarContainer from '../common/TabBarContainer';
import Header from '../common/Header';
import { purple, tilePurple } from '../constants/color';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight, width } from '../constants/dimens';
import CategorisedPosts from './CategorisedPosts';
import { fetchCategories, fetchPosts, fetchTags } from '../actions';

class Categories extends Component {
	constructor(props) {
		super(props);
        this.renderCategories = this.renderCategories.bind(this);
        this.onCategoryPress = this.onCategoryPress.bind(this);
		this.state = { 
			requestingCategories: true,
			categories: null,
		};
	}

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchCategories()).then(dispatch(fetchTags()));
  }

	componentWillReceiveProps(nextProps) {
		const { data, requestingCategories } = nextProps.categories;
		this.setState({requestingCategories, categories: data.categories});
	}

    onCategoryPress(data) {
       const { navigator } = this.props;
       const catPost = {
           name: 'CategorisedPosts',
           component: CategorisedPosts,
           passProps: { category: data }
       }
       navigator.push(catPost);
    }

    renderCategories() {
        if(this.state.requestingCategories === true) {
            return (
                <View><Text>Getting data</Text></View>
            );
        } else { 
            return this.state.categories.map((category, id) => (
              <TouchableOpacity key={id} onPress={() => this.onCategoryPress(category)}> 
                <View style={styles.cardContainer}>
                    <Text style={{textAlign: 'center', fontWeight: '600', fontSize: 18, color: 'white'}}>{category.title}</Text>
                </View>
              </TouchableOpacity> 
            ));
        }
    }

    render() {
        const { navigator } = this.props;
        return (
                <View style={{top: 0, width, height: heightWOtabBar - headerHeight}}>
	                	<ScrollView>
	                	  <View style={{alignItems: 'flex-start', flexDirection: 'row', flexWrap: 'wrap', margin: 5}}>
                            {this.renderCategories()}
	                	  </View>
	                	</ScrollView>
                </View>
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
  	height: (width / 2) - 15,
    width: (width / 2) - 15,
    backgroundColor: '#474747',
    justifyContent: 'center',
    margin: 5,
    shadowColor: 'gray',
    shadowOffset: { height: 2, width: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  }
});
