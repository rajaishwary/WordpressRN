import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Linking,
    TouchableHighlight,
    Dimensions
} from 'react-native';
import { purple } from '../constants/color';
import { topNotificationAreaHeight, heightWOtabBar } from '../constants/dimens';

const height = heightWOtabBar;
const { width } = Dimensions.get('window');

export default class TabBarContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: heightWOtabBar,
        width,
        top: topNotificationAreaHeight,
        position: 'absolute',
        backgroundColor: 'transparent',  
    },
});
