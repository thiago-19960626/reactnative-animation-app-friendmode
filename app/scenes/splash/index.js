import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Left,
    Right,
    Icon,
    Thumbnail
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class SplashScreen extends Component{
    static navigationOptions = {
        header: null
    }

    render (){
        return (
            <Container style={styles.container}>
                
            </Container>
        );
    }
}

export default connect()(SplashScreen);