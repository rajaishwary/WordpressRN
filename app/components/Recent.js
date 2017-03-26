import React, { Component } from 'react';
import {
    Text,
} from 'react-native';
import TabBarContainer from '../common/TabBarContainer';
import Header from '../common/Header';
import { purple } from '../constants/color';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight } from '../constants/dimens';

export default class Recent extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <TabBarContainer>
                <Header name={BLOG_NAME}/>

            </TabBarContainer>
        );
    }
}
