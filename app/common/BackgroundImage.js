import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

export default class BackgroundImage extends Component {

    render() {
      const { url } = this.props;
        return (
            <Image source={{ uri: url}}
                  style={styles.backgroundImage}>
                  {this.props.children}
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
});