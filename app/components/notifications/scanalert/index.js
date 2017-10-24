import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Icon,
    Thumbnail,
    View,
    Button,
    Text
} from 'native-base';
import styles from './styles';
import {
    Animated,
    TouchableWithoutFeedback
} from 'react-native';

class ScanAlert extends Component{
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.tipContainer}>
                    <Text style={styles.tipText}>Join via QR code</Text>
                    <View style={styles.tipArrow}/>
                </View>
                <Button transparent style={styles.refreshBtn} onPress={this.props.onClose}>
                    <Thumbnail square source={require('../../../assets/stat/scan_3.png')} style={styles.refreshIcon}/>
                </Button>
            </View>
        );
    }
}

export default connect()(ScanAlert);