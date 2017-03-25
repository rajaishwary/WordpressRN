import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Linking,
    TouchableHighlight,
    AlertIOS
} from 'react-native';
import TopNotificationArea from '../common/TopNotificationArea';

export default class Message extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TopNotificationArea/>
                <Text>Message</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
    },
});
