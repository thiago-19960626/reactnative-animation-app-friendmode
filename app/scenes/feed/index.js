import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Header,
    Title,
    Thumbnail,
    Text,
    View,
    Content,
    Body,
    Footer,
    Button
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class FeedScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
    }

    render(){
        return (
            <Container>
                
            </Container>
        );
    }
}

export default connect()(FeedScreen);