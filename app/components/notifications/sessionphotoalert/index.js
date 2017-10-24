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

class SessionPhotoAlert extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.tipContainer}>
                    <Text style={styles.tipText}>Photo?</Text>
                    <Text style={styles.tipText}>If you're only taking</Text>
                    <Text style={styles.tipText}>a picture, that's OK.</Text>
                    <View style={styles.tipArrow}/>
                </View>
                <Button style={styles.btn} onPress={this.props.onClose}>
                    <Icon name="md-camera" style={styles.icon}/>
                </Button>
            </View>
        );
    }
}

export default connect()(SessionPhotoAlert);