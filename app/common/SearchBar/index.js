import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, Dimensions, Modal, TouchableHighlight } from 'react-native';
import TopNotificationArea from '../TopNotificationArea';

const topNotificationAreaHeight = Platform.OS === 'ios' ? 20 : 0;
const { width, height } = Dimensions.get('window');

export default class SearchBar extends Component {
 state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
          <View style={{top: topNotificationAreaHeight, position: 'absolute', width: width}}>
          <View>
            <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
            }}>
              <Text>Close</Text>
            </TouchableHighlight>
          </View>
         </View>
        </Modal>

        <TouchableHighlight onPress={() => {
          this.setModalVisible(true)
        }}>
          <Text>Tap to Search</Text>
        </TouchableHighlight>

      </View>
    );
  }
}