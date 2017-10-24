import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    Container,
    Content,
    Body,
    Thumbnail,
    Icon,
    View,
    Button,
    Text
} from 'native-base';
import styles from './styles';

class SessionInviteAlert extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.tipContainer}>
                    <View style={styles.tipArrow}/>
                    <Text style={styles.tipText}>Invite friends?</Text>
                    <Text style={styles.tipText}>Not cheating.</Text>                    
                </View>
                <Button transparent style={styles.btn} onPress={this.props.onClose}>
                    <Thumbnail square source={require('../../../assets/session/qrcode.png')} style={styles.icon}/>
                </Button>
            </View>
        );
    }
}

export default connect()(SessionInviteAlert);