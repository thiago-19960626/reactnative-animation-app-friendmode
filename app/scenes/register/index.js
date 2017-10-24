import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Header,
    Left,
    Right,
    Icon,
    Thumbnail,
    List,
    ListItem,
    Button,
    Title,
    View,
    Text,
    Input,
    Footer
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import { TouchableOpacity } from 'react-native';

class RegisterScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onFacebook(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'newusersocial'}));
    }

    onTwitter(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName:'newusersocial'}));
    }

    onUsername(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'newusercreate'}));
    }

    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left style={styles.headerLeft}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="arrow-back" style={styles.headerIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>REGISTER</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content style={styles.content}>
                    <Button transparent style={styles.btn} onPress={() => this.onFacebook()}>
                        <View style={styles.fbBtnContainer}>
                            <Thumbnail square source={require('../../assets/register/facebook.png')} style={styles.fbIcon}/>
                            <Text style={styles.btnText}>CONNECT WITH FACEBOOK</Text>
                        </View>
                    </Button>
                    <View style={styles.divider}/>
                    <Button transparent style={styles.btn} onPress={() => this.onTwitter()}>
                        <View style={styles.fbBtnContainer}>
                            <Thumbnail square source={require('../../assets/register/twitter.png')} style={styles.twIcon}/>
                            <Text style={styles.btnText}>CONNECT WITH TWITTER</Text>
                        </View>
                    </Button>
                    <View style={styles.divider}/>
                    <Button transparent style={styles.btn} onPress={() => this.onUsername()}>
                        <View style={styles.fbBtnContainer}>
                            <Thumbnail square source={require('../../assets/register/username.png')} style={styles.urIcon}/>
                            <Text style={styles.btnText}>CREAT NEW USERNAME</Text>
                        </View>
                    </Button>
                </Content>
            </Container>
        );
    }
}

export default connect()(RegisterScreen);