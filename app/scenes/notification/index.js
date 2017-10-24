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
    Text
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class NotificationScreen extends Component{
    static navigationOptions = {
        header: null
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="arrow-back" style={styles.headerIcon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>NOTIFICATIONS</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Right>                    
                </Header>
                <Thumbnail square source={require('../../assets/gradient1.png')} style={styles.headerdrop}/>
                <Content>
                    <List>
                        <ListItem style={styles.listItem}>
                            <Thumbnail square source={require('../../assets/notification/1.png')} style={styles.listItemIcon}/>
                            <Body>
                                <Text style={styles.listItemTitle}>Huggy bear!</Text>
                                <Text style={styles.listItemDes}>You got a new reward</Text>
                                <Text style={styles.listItemTime}>
                                    <Icon name="md-time" style={styles.listItemTimeIcon}/>  Just now
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem1}>
                            <Thumbnail square source={require('../../assets/notification/2.png')} style={styles.listItemIcon}/>
                            <Body>
                                <Text style={styles.listItemTitle}>Drinks at Nosh & Chow</Text>
                                <Text style={styles.listItemDes}>Completed a FriendMode 78 min 37 sec</Text>
                                <Text style={styles.listItemTime}>
                                    <Icon name="md-time" style={styles.listItemTimeIcon}/>  57 min ago
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Thumbnail square source={require('../../assets/notification/3.png')} style={styles.listItemIcon}/>
                            <Body>
                                <Text style={styles.listItemTitle}>New friend</Text>
                                <Text style={styles.listItemDes}>Became friends with Maria Doyle</Text>
                                <Text style={styles.listItemTime}>
                                    <Icon name="md-time" style={styles.listItemTimeIcon}/>  3 weeks ago
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem1}>
                            <Thumbnail square source={require('../../assets/notification/4.png')} style={styles.listItemIcon}/>
                            <Body>
                                <Text style={styles.listItemTitle}>Foodie</Text>
                                <Text style={styles.listItemDes}>You got a new reward</Text>
                                <Text style={styles.listItemTime}>
                                    <Icon name="md-time" style={styles.listItemTimeIcon}/>  1 month ago
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Thumbnail square source={require('../../assets/notification/5.png')} style={styles.listItemIcon}/>
                            <Body>
                                <Text style={styles.listItemTitle}>Starwards Marathon</Text>
                                <Text style={styles.listItemDes}>Completed a FriendMode 321 min 2 sec</Text>
                                <Text style={styles.listItemTime}>
                                    <Icon name="md-time" style={styles.listItemTimeIcon}/>  1 month ago
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem1}>
                            <Thumbnail square source={require('../../assets/notification/1.png')} style={styles.listItemIcon}/>
                            <Body>
                                <Text style={styles.listItemTitle}>Huggy bear!</Text>
                                <Text style={styles.listItemDes}>You got a new reward</Text>
                                <Text style={styles.listItemTime}>
                                    <Icon name="md-time" style={styles.listItemTimeIcon}/>  Just now
                                </Text>
                            </Body>
                        </ListItem>
                        <ListItem style={styles.listItem}>
                            <Thumbnail square source={require('../../assets/notification/2.png')} style={styles.listItemIcon}/>
                            <Body>
                                <Text style={styles.listItemTitle}>Drinks at Nosh & Chow</Text>
                                <Text style={styles.listItemDes}>Completed a FriendMode 78 min 37 sec</Text>
                                <Text style={styles.listItemTime}>
                                    <Icon name="md-time" style={styles.listItemTimeIcon}/>  57 min ago
                                </Text>
                            </Body>
                        </ListItem>   
                        <ListItem style={styles.listItem1}>
                            <Thumbnail square source={require('../../assets/notification/3.png')} style={styles.listItemIcon}/>
                            <Body>
                                <Text style={styles.listItemTitle}>New friend</Text>
                                <Text style={styles.listItemDes}>Became friends with Maria Doyle</Text>
                                <Text style={styles.listItemTime}>
                                    <Icon name="md-time" style={styles.listItemTimeIcon}/>  3 weeks ago
                                </Text>
                            </Body>
                        </ListItem>                     
                    </List>                    
                </Content>
                <Thumbnail square source={require('../../assets/gradient2.png')} style={styles.footerdrop}/>
            </Container>
        );
    }
}

export default connect()(NotificationScreen);