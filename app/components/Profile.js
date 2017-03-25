import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Linking,
    TouchableHighlight,
    AlertIOS,
    Dimensions,
    Platform,
} from 'react-native';
import TopNotificationArea from '../common/TopNotificationArea';

const { width, height } = Dimensions.get('window');
const topNotificationAreaHeight = Platform.OS === 'ios' ? 20 : 0;

export default class Profile extends Component {
    render() {
        return (
              
                <View style={{flex: 1}}>
                    <TopNotificationArea/>
                        <View style={{flex: 1, backgroundColor: 'red'}}>
                           <View style={{backgroundColor: 'white',top: topNotificationAreaHeight, position: 'absolute', width: width }}>
                              <Text>Name</Text>
                              <Text>View and Edit Profile</Text>
                              <Text>Profile Picture</Text>
                           </View>
                        </View>
                        <View style={{flex: 2, backgroundColor: 'grey', margin: 20}}>
                          <View style={{flex: 1, backgroundColor: 'lightblue'}}>
                            <Text>Booking</Text>
                          </View>
                          <View style={{flex: 1, backgroundColor: 'red'}}>
                            <Text>Saved</Text>
                          </View>
                          <View style={{flex: 1, backgroundColor: 'white'}}>
                            <Text>Settings</Text>
                          </View>
                          <View style={{flex: 1, backgroundColor: 'red'}}>
                            <Text>Help</Text>
                          </View>
                          <View style={{flex: 1, backgroundColor: 'lightblue'}}>
                            <Text>Give us feedback</Text>
                          </View>
                        </View>
                </View>
        );
    }
}
