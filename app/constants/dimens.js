import { Platform, Dimensions } from 'react-native';

export const { width, height } = Dimensions.get('window');
export const topNotificationAreaHeight = Platform.OS === 'ios' ? 20 : 0;
const androidStatusBarHeight = 24;

export const tabBarHeight = 50 + (2 * 8)  // margin 8
export const screenHeight = getScreenHeight();
export const heightWOtabBar = getScreenHeight() - tabBarHeight;
export const headerHeight = getHeaderHeight();

export function getScreenHeight() {
	const androidScreenHeight = height - topNotificationAreaHeight - androidStatusBarHeight;
	if (Platform.OS === 'ios') {
		return (height - topNotificationAreaHeight);
	} else if (Platform.OS === 'android') {
        return (androidScreenHeight);
	}
}

//import { getScreenHeight } from '../../constants/dimension';
//const height = getScreenHeight();

export function getHeaderHeight() {
	const iosHeaderHeight = 44;
	const androidHeaderHeight = 44;
	if (Platform.OS === 'ios') {
		return (iosHeaderHeight);
	} else if (Platform.OS === 'android') {
        return (androidHeaderHeight);
	}
}