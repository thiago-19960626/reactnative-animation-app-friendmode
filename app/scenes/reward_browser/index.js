import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    View,
    Header,
    Left,
    Right,
    Title,
    Icon,
    Button,
    Text,
    Body,
    Content
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import {  
    WebView
} from 'react-native';
import styles from './styles';

class RewardBrowserScreen extends Component{
    static navigationOptions = {
        header: null
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    render(){
        return (
            <Container>
                <Header>
                    <Left style={styles.headerLeft}>
                       <Button transparent onPress={() => this.onBack()}>
                            <Text>Cancel</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>FriendMode Reward</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent>
                            <Text></Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <WebView source={{uri: 'https://google.com'}}
                             style={styles.webview}/>
                </Content>
            </Container>
        );
    }
}

export default connect()(RewardBrowserScreen);