import React, { Component } from 'react';
import {
    Text,
} from 'react-native';
import TabBarContainer from '../common/TabBarContainer';
import Header from '../common/Header';
import { purple } from '../constants/color';
import { BLOG_NAME } from '../constants/config';
import { topNotificationAreaHeight, heightWOtabBar, headerHeight } from '../constants/dimens';
//<Header navigator={navigator} name={BLOG_NAME}/>
export default class Tags extends Component {
    render() {
        const { navigator } = this.props;
        return (
            <TabBarContainer>
                <Header name={'Popular Tags'}/>

            </TabBarContainer>
        );
    }
}
