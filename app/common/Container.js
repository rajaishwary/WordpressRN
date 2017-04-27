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
import { topNotificationAreaHeight, screenHeight } from '../constants/dimens';

const { width } = Dimensions.get('window');

export default class Container extends Component {
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
        height: screenHeight,
        width,
        top: topNotificationAreaHeight,
        position: 'absolute',
        backgroundColor: 'white',  
    },
});
