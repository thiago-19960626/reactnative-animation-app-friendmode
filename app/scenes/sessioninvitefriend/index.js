import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Header,
    Right,
    Left,
    Thumbnail,
    Text,
    View,
    Icon,
    Title,
    Button,
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import SessionCheatingAlert from '../../components/notifications/sessioncheatingalert';
import SessionPhotoAlert from '../../components/notifications/sessionphotoalert';
import SessionInviteAlert from '../../components/notifications/sessioninvitealert';

class SessionInviteFriendScreen extends Component{
    static navigationOptions = {
        header: null
    }

    onClose(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSessionCheating(d){
        var { dispatch } = this.props;
        dispatch({type: 'showSessionCheating', data: d});
    }

    onSessionPhoto(d){
        var { dispatch } = this.props;
        dispatch({type: 'showSessionPhoto', data: d});
    }

    onSessionInvite(d){
        var { dispatch } = this.props;
        dispatch({type: 'showSessionInvite', data: d});
    }

    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Right>
                        <Button transparent onPress={() => this.onSessionInvite(true)}>
                            <Thumbnail square source={require('../../assets/session/qrcode.png')} style={styles.qrIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={styles.blockContainer}>
                        <Thumbnail square source={require('../../assets/session/appicon.png')} style={styles.appIcon}/>
                        <Text style={styles.timeText} onPress={() => this.onSessionCheating(true)}>21:45</Text>
                        <Text style={styles.desc}>Flip your phone</Text>
                        <Text style={styles.desc}>to get back</Text>
                    </View>
                </Content>
                <Footer style={styles.footer}>
                    <View style={styles.btnContainer}>
                        <Button style={styles.btn} onPress={() => this.onSessionPhoto(true)}>
                            <Icon name="md-camera" style={styles.btnIcon}/>
                        </Button>
                    </View>
                    <View style={styles.bottomDivider}/>
                    <View style={styles.btnContainer}>
                        <Button style={styles.btn} onPress={() => this.onClose()}>
                            <Icon name="md-close" style={styles.btnIcon}/>
                        </Button>
                    </View>
                </Footer>
                {this.props.sessioncheating?
                <SessionCheatingAlert onClose={() => this.onSessionCheating(false)}/>:null}
                {this.props.sessionphoto?
                <SessionPhotoAlert onClose={() => this.onSessionPhoto(false)}/>:null}
                {this.props.sessioninvite?
                <SessionInviteAlert onClose={() => this.onSessionInvite(false)}/>: null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    sessioncheating: state.notification.sessioncheating,
    sessionphoto: state.notification.sessionphoto,
    sessioninvite: state.notification.sessioninvite
})

export default connect(mapStateToProps)(SessionInviteFriendScreen);