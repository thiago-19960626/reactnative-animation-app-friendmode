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

class FriendAddScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {

        }
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onUsername(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'friendusername'}));
    }

    onFacebook(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'friendfacebook'}));
    }

    onTwitter(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'friendtwitter'}));
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
                        <Title style={styles.title}>ADD FRIENDS</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <TouchableOpacity onPress={() => this.onFacebook()}>
                        <View style={styles.mainContainer}>
                            <Thumbnail square source={require('../../assets/friend/facebook.png')} style={styles.fbIcon}/>
                            <Text style={styles.fbText}>FACEBOOK</Text>
                            <View style={styles.divider}/>
                        </View>   
                    </TouchableOpacity>   
                    <TouchableOpacity onPress={() => this.onTwitter()}>
                        <View style={styles.mainContainer}>
                            <Thumbnail square source={require('../../assets/friend/twitter.png')} style={styles.twIcon}/>
                            <Text style={styles.fbText}>TWITTER</Text>
                            <View style={styles.divider}/>
                        </View>   
                    </TouchableOpacity>   
                    <TouchableOpacity onPress={() => this.onUsername()}>
                        <View style={styles.mainContainer}>
                            <Thumbnail square source={require('../../assets/friend/username.png')} style={styles.urIcon}/>
                            <Text style={styles.fbText}>USERNAME</Text>
                        </View>   
                    </TouchableOpacity>           
                </Content>
            </Container>
        );
    }
}

export default connect()(FriendAddScreen);