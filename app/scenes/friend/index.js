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
import { 
    Share
} from 'react-native';

class FriendScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            step: false
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onChange(){
        this.setState({
            step: !this.state.step
        });
    }

    onInvite(){
        Share.share({
            title: "",
            message: ""
        }).then(data => {

        })
        .catch(err => {

        });
    }

    onFriendUsername(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'friendusername'}));
    }

    onFriendAdd(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'friendadd'}));
    }

    onFriendInfo(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'friendinfo'}));
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
                        <Title style={styles.title}>My FRIENDSHIPS</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.onChange()}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                <View style={styles.searchContainer}>
                    <Input style={styles.searchInput} placeholder="SEARCH"/>
                </View>
                <Content>
                    {this.state.step?
                    <List>
                        <ListItem avatar style={styles.item} onPress={() => this.onFriendInfo()}>
                            <Left>
                                <Thumbnail style={styles.itemAvatar} source={require('../../assets/friend/u1.png')}/>
                            </Left>
                            <Body style={styles.itemBody}>
                                <Text style={styles.itemText1}>CLARA SUNDDTEDT</Text>
                                <View style={styles.itemProgress}>
                                    <View style={[styles.itemProgressValue, {width: 150}]}/>
                                </View>
                                <View style={styles.itemIconContainer}>
                                    <Text style={styles.itemIconText}><Icon name="md-star" style={styles.itemIcon}/> Loyalty</Text>
                                    <Text style={styles.itemIconText}><Icon name="md-flag" style={styles.itemIcon}/> 37</Text>
                                    <Text style={styles.itemIconText}><Icon name="clock" style={styles.itemIcon}/> 28 min</Text>
                                </View>
                            </Body>
                        </ListItem>
                        <ListItem avatar style={[styles.item, styles.item1]}>
                            <Left>
                                <Thumbnail style={styles.itemAvatar} source={require('../../assets/friend/u1.png')}/>
                            </Left>
                            <Body style={styles.itemBody}>
                                <Text style={styles.itemText1}>CLARA SUNDDTEDT</Text>
                                <View style={styles.itemProgress}>
                                    <View style={[styles.itemProgressValue, {width: 100}]}/>
                                </View>
                                <View style={styles.itemIconContainer}>
                                    <Text style={styles.itemIconText}><Icon name="md-star" style={styles.itemIcon}/> Loyalty</Text>
                                    <Text style={styles.itemIconText}><Icon name="md-flag" style={styles.itemIcon}/> 37</Text>
                                    <Text style={styles.itemIconText}><Icon name="clock" style={styles.itemIcon}/> 28 min</Text>
                                </View>
                            </Body>
                        </ListItem>
                    </List>:
                    <View style={styles.mainContainer}>
                        <Text style={styles.mainText1}>NOT FOUND</Text>
                        <Text style={styles.mainText1}>Try Name Surname, </Text>
                        <Text style={styles.mainText1}>Username or Invite!</Text>
                    </View>}
                </Content>
                <Footer style={styles.footer}>
                    {this.state.step?
                    <View>
                        <Button block style={styles.bottomBtn} onPress={() => this.onFriendAdd()}>
                            <Text style={styles.bottomBtnText}>ADD</Text>
                        </Button>
                        <View style={styles.footerDivider}/>
                        <Button block style={styles.bottomBtn} onPress={() => this.onInvite()}>
                            <Text style={styles.bottomBtnText}>INVITE</Text>
                        </Button>
                    </View>:
                    <Button block style={styles.bottomBtn1} onPress={() => this.onInvite()}>
                        <Text style={styles.bottomBtnText}>INVITE</Text>
                    </Button>}
                </Footer>
            </Container>
        );
    }
}


export default connect()(FriendScreen);