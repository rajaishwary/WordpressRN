import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Linking,
    TouchableHighlight,
    AlertIOS
} from 'react-native';
import { topNotificationAreaHeight } from '../constants/dimens';

export default class Screens extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        top: topNotificationAreaHeight
    },
});
