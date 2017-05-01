import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableHighlight,
} from 'react-native';
import HomeNoAnimate from './HomeNoAnimate';
import FCM, {FCMEvent, RemoteNotificationResult, WillPresentNotificationResult, NotificationType} from 'react-native-fcm';


export default class Root extends Component {

  componentDidMount() {
        FCM.requestPermissions(); // for iOS
        FCM.getFCMToken().then(token => {
            console.log(token)
            // store fcm token in your server
        });
        this.notificationListener = FCM.on(FCMEvent.Notification, async (notif) => {
            // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
            if(notif.local_notification){
              //this is a local notification
            }
            if(notif.opened_from_tray){
              //app is open/resumed because user clicked banner
            }
            await someAsyncCall();
            
            if(Platform.OS ==='ios'){
              //optional
              //iOS requires developers to call completionHandler to end notification process. If you do not call it your background remote notifications could be throttled, to read more about it see the above documentation link. 
              //This library handles it for you automatically with default behavior (for remote notification, finish with NoData; for WillPresent, finish depend on "show_in_foreground"). However if you want to return different result, follow the following code to override
              //notif._notificationType is available for iOS platfrom
              switch(notif._notificationType){
                case NotificationType.Remote:
                  notif.finish(RemoteNotificationResult.NewData) //other types available: RemoteNotificationResult.NewData, RemoteNotificationResult.ResultFailed
                  break;
                case NotificationType.NotificationResponse:
                  notif.finish();
                  break;
                case NotificationType.WillPresent:
                  notif.finish(WillPresentNotificationResult.All) //other types available: WillPresentNotificationResult.None
                  break;
              }
            }
        });
        this.refreshTokenListener = FCM.on(FCMEvent.RefreshToken, (token) => {
            console.log(token)
            // fcm token may not be available on first load, catch it here
        });
    }

    componentWillUnmount() {
        // stop listening for events
        this.notificationListener.remove();
        this.refreshTokenListener.remove();
    }


  configureScene(route) {
    return {
      ...Navigator.SceneConfigs.FloatFromRight,
      gestures: {},
    };
  }

    renderScene(route, navigator) {
        const Component = route.component;
        return (
            <Component navigator={navigator} {...route.passProps} />
        )
    }

    render() {
        const defaultRoute = {
          name: 'HomeNoAnimate',
          component: HomeNoAnimate,
          passProps: { dispatch: this.props.dispatch },
        };
        return (
            <Navigator
                renderScene={this.renderScene.bind(this)}
                configureScene={this.configureScene.bind(this)}
                initialRoute={defaultRoute}
            />
        );
    }
}