import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    View,
    Text
} from 'native-base';
import styles from './styles';
import {
    Animated,
    TouchableWithoutFeedback
} from 'react-native';

class PlayAlert extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.tipContainer}>
                    <Text style={styles.tipText}>Start new FriendMode</Text>
                    <View style={styles.tipArrow}/>
                </View>
            </View>
        );
    }
}

export default connect()(PlayAlert);