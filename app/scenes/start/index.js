import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Header,
    Left,
    Right,
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

class StartScreen extends Component{
    static navigationOptions = {
        header: null
    }

    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Title style={style.title}>START</Title>
                </Header>
            </Container>
        );
    }
}

export default connect()(StartScreen);