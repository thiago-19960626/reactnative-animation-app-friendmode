import React from 'react';
import { connect } from 'react-redux';
import {
    StackNavigator,
    addNavigationHelpers
} from 'react-navigation';

import MenuScreen from '../scenes/menu';
import NotificationScreen from '../scenes/notification';
import RewardScreen from '../scenes/reward';
import RewardApproveScreen from '../scenes/reward_approve';
import RewardApproveErrorScreen from '../scenes/reward_error';
import RewardHomeScreen from '../scenes/reward_home';
import RewardMapScreen from '../scenes/reward_map';
import RewardBrowserScreen from '../scenes/reward_browser';
import FriendScreen from '../scenes/friend';
import FTabScreen from '../scenes/tab';
import FriendUsernameScreen from '../scenes/friendusername';
import FriendAddScreen from '../scenes/friendadd';
import FriendFacebookScreen from '../scenes/friendfacebook';
import FriendTwitterScreen from '../scenes/friendtwitter';
import FriendInfoScreen from '../scenes/friendinfo';
import SettingScreen from '../scenes/setting';
import RegisterScreen from '../scenes/register';
import NewUserCreateScreen from '../scenes/newusercreate';
import NewUserSocialScreen from '../scenes/newusersocial';
import SplashScreen from '../scenes/splash';
import SessionInviteFriendScreen from '../scenes/sessioninvitefriend';

export const AppNavigator = StackNavigator({
    menu: { screen: MenuScreen },
    notification: { screen: NotificationScreen },
    reward: { screen: RewardScreen },
    rewardapprove: { screen: RewardApproveScreen },
    rewardapproveerror: { screen: RewardApproveErrorScreen },
    rewardhome: { screen: RewardHomeScreen },
    rewardmap: { screen: RewardMapScreen },
    rewardbrowser: { screen: RewardBrowserScreen },
    friend: { screen: FriendScreen },
    tab: { screen: FTabScreen },
    friendusername: { screen: FriendUsernameScreen },
    friendadd: { screen: FriendAddScreen },
    friendfacebook: { screen: FriendFacebookScreen },
    friendtwitter: { screen: FriendTwitterScreen },
    friendinfo: { screen: FriendInfoScreen },
    setting: { screen: SettingScreen },
    register: { screen: RegisterScreen },
    newusercreate: { screen: NewUserCreateScreen },
    newusersocial: { screen: NewUserSocialScreen },
    splash: { screen: SplashScreen },
    sessioninvitefriend: { screen: SessionInviteFriendScreen }
});

const AppWithNavigationState = ({dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})}/>
);

const mapStateToProps = state => ({
    nav: state.nav
});

export default connect(mapStateToProps)(AppWithNavigationState);