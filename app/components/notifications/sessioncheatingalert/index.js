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
import {
    Animated,
    TouchableWithoutFeedback
} from 'react-native';

class SessionCheatingAlert extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.tipContainer}>
                    <Text style={styles.tipText}>Cheating?</Text>
                    <Text style={styles.tipText}>If you don't leave FM</Text>
                    <Text style={styles.tipText}>this flip is a cheat!</Text>
                    <View style={styles.tipArrow}/>
                </View>
                <Text style={styles.timeText} onPress={this.props.onClose}>21:45</Text>
            </View>
        );
    }
}

export default connect()(SessionCheatingAlert);