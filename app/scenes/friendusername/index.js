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

class FriendUsernameScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            status: 0
        }
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onChangeStatus(){
        this.setState({
            status: 1
        });
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
                        <Title style={styles.title}>SEARCH USERNAME</Title> 
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent onPress={() => this.onChangeStatus()}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                <View style={styles.searchContainer}>
                    <Input style={styles.searchInput} placeholder="SEARCH"/>
                </View>
                <Content>
                    <Text style={styles.userTitle}>USERS</Text>
                    {this.state.status == 0?
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>
                            Search for Username or Name Surname
                        </Text>
                    </View>: null}
                    {this.state.status == 1?
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
                                <Switch tintColor="#8B8982" value={false} onTintColor="#8B8982"/>
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
                                <Switch tintColor="#8B8982" value={false} onTintColor="#8B8982"/>
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
                                <Switch tintColor="#8B8982" value={true} onTintColor="#8B8982"/>
                            </Right>
                        </ListItem>
                    </List>: null}
                </Content>
            </Container>
        );
    }
}

export default connect()(FriendUsernameScreen);