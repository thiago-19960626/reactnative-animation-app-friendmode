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
    Footer,
    Switch
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class FriendTwitterScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            step: 1
        }
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
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
                        <Title style={styles.title}>TWITTER</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                <View style={styles.syncContainer}>
                    <Text style={styles.syncText1}>SYNC ALL</Text>
                    <Switch tintColor="#2DC9FF" value={true} onTintColor="#2DC9FF"/>
                </View>
                <Content>
                    {this.state.step == 1?
                    <Text style={styles.userTitle}>USERS</Text>:null}
                    {this.state.step == 0?
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>NONE FOUND</Text>
                        <Text style={styles.emptyText}>None of your Facebook Friends has FriendMode yet.</Text>
                        <View style={styles.divider}/>
                        <Text style={styles.emptyText}>Invite them now!</Text>
                    </View>:null}
                    {this.state.step == 1?
                    <List>
                        <ListItem avatar style={styles.listItem}>
                            <Left>
                                <Thumbnail style={styles.itemAvatar} source={require('../../assets/friend/u1.png')}/>
                            </Left>
                            <Body style={styles.itemBody}>
                                <Text style={styles.itemText1}>LUKAS MODYSSON</Text>
                                <View style={styles.itemProgress}>
                                    <View style={[styles.itemProgressValue, {width: 100}]}/>
                                </View>
                                <Text style={styles.itemText2}>
                                    <Icon name="md-star" style={styles.itemIcon}/> Loyalty
                                </Text>
                            </Body>
                            <Right style={styles.itemRight}>
                                <Switch tintColor="#2DC9FF" value={true} onTintColor="#2DC9FF"/>
                            </Right>
                        </ListItem>
                        <ListItem avatar style={styles.listItem1}>
                            <Left>
                                <Thumbnail style={styles.itemAvatar} source={require('../../assets/friend/u1.png')}/>
                            </Left>
                            <Body style={styles.itemBody}>
                                <Text style={styles.itemText1}>LUKAS MODYSSON1</Text>
                                <View style={styles.itemProgress}>
                                    <View style={[styles.itemProgressValue, {width: 100}]}/>
                                </View>
                                <Text style={styles.itemText2}>
                                    <Icon name="md-star" style={styles.itemIcon}/> Loyalty
                                </Text>
                            </Body>
                            <Right style={styles.itemRight}>
                                <Switch tintColor="#2DC9FF" value={true} onTintColor="#2DC9FF"/>
                            </Right>
                        </ListItem>
                        <ListItem avatar style={styles.listItem}>
                            <Left>
                                <Thumbnail style={styles.itemAvatar} source={require('../../assets/friend/u1.png')}/>
                            </Left>
                            <Body style={styles.itemBody}>
                                <Text style={styles.itemText1}>LUKAS MODYSSON</Text>
                                <View style={styles.itemProgress}>
                                    <View style={[styles.itemProgressValue, {width: 100}]}/>
                                </View>
                                <Text style={styles.itemText2}>
                                    <Icon name="md-star" style={styles.itemIcon}/> Loyalty
                                </Text>
                            </Body>
                            <Right style={styles.itemRight}>
                                <Switch tintColor="#2DC9FF" value={false} onTintColor="#2DC9FF"/>
                            </Right>
                        </ListItem>
                        <ListItem avatar style={styles.listItem1}>
                            <Left>
                                <Thumbnail style={styles.itemAvatar} source={require('../../assets/friend/u1.png')}/>
                            </Left>
                            <Body style={styles.itemBody}>
                                <Text style={styles.itemText1}>LUKAS MODYSSON1</Text>
                                <View style={styles.itemProgress}>
                                    <View style={[styles.itemProgressValue, {width: 100}]}/>
                                </View>
                                <Text style={styles.itemText2}>
                                    <Icon name="md-star" style={styles.itemIcon}/> Loyalty
                                </Text>
                            </Body>
                            <Right style={styles.itemRight}>
                                <Switch tintColor="#2DC9FF" value={true} onTintColor="#2DC9FF"/>
                            </Right>
                        </ListItem>
                        <ListItem avatar style={styles.listItem}>
                            <Left>
                                <Thumbnail style={styles.itemAvatar} source={require('../../assets/friend/u1.png')}/>
                            </Left>
                            <Body style={styles.itemBody}>
                                <Text style={styles.itemText1}>LUKAS MODYSSON</Text>
                                <View style={styles.itemProgress}>
                                    <View style={[styles.itemProgressValue, {width: 100}]}/>
                                </View>
                                <Text style={styles.itemText2}>
                                    <Icon name="md-star" style={styles.itemIcon}/> Loyalty
                                </Text>
                            </Body>
                            <Right style={styles.itemRight}>
                                <Switch tintColor="#2DC9FF" value={false} onTintColor="#2DC9FF"/>
                            </Right>
                        </ListItem>
                        <ListItem avatar style={styles.listItem1}>
                            <Left>
                                <Thumbnail style={styles.itemAvatar} source={require('../../assets/friend/u1.png')}/>
                            </Left>
                            <Body style={styles.itemBody}>
                                <Text style={styles.itemText1}>LUKAS MODYSSON1</Text>
                                <View style={styles.itemProgress}>
                                    <View style={[styles.itemProgressValue, {width: 100}]}/>
                                </View>
                                <Text style={styles.itemText2}>
                                    <Icon name="md-star" style={styles.itemIcon}/> Loyalty
                                </Text>
                            </Body>
                            <Right style={styles.itemRight}>
                                <Switch tintColor="#2DC9FF" value={true} onTintColor="#2DC9FF"/>
                            </Right>
                        </ListItem>
                        <ListItem avatar style={styles.listItem}>
                            <Left>
                                <Thumbnail style={styles.itemAvatar} source={require('../../assets/friend/u1.png')}/>
                            </Left>
                            <Body style={styles.itemBody}>
                                <Text style={styles.itemText1}>LUKAS MODYSSON</Text>
                                <View style={styles.itemProgress}>
                                    <View style={[styles.itemProgressValue, {width: 100}]}/>
                                </View>
                                <Text style={styles.itemText2}>
                                    <Icon name="md-star" style={styles.itemIcon}/> Loyalty
                                </Text>
                            </Body>
                            <Right style={styles.itemRight}>
                                <Switch tintColor="#2DC9FF" value={false} onTintColor="#2DC9FF"/>
                            </Right>
                        </ListItem>
                    </List>:null}
                </Content>
                <Thumbnail square source={require('../../assets/gradient2.png')} style={styles.footerdrop}/>
                {this.state.step == 0?
                <Footer style={styles.footer}>
                    <Button block style={styles.footerBtn}>
                        <Text style={styles.footerBtnText}>INVITE</Text>
                    </Button>
                </Footer>: null}                
            </Container>
        );
    }
}

export default connect()(FriendTwitterScreen);