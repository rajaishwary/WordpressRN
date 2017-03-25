import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Platform,
    Dimensions,
} from 'react-native';

const { width, height } = Dimensions.get('window');
const topNotificationAreaHeight = Platform.OS === 'ios' ? 20 : 0;

export default class TopNotificationArea extends Component {
    render() {
        return (
            <View style={styles.container}/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
       height: topNotificationAreaHeight,
       width: width,
       backgroundColor: 'white',
       position: 'absolute',
       top: 0,
       left: 0, 
    },
});
