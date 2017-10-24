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
    Text,
    Button,
    Title,
    View
 } from 'native-base';
 import { NavigationActions } from 'react-navigation';
 import styles from './styles';
 import { 
    Share
} from 'react-native';

class MenuScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onShare(){
        Share.share({
            title: "",
            message: ""
        }).then(data => {

        })
        .catch(err => {

        });
    }

    onRewards(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({ routeName: 'reward' }));
    }

    onFriends(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({ routeName: 'friend' }));
    }

    onNotifications(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({ routeName: 'notification' }));
    }

    onSettings(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({ routeName: 'setting' }));
    }

    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Text></Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>MENU</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.closeIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={styles.body}>                   
                        <Button transparent block style={styles.btn} onPress={() => this.onShare()}>
                            <Text style={styles.btnText}>SHARE</Text>
                        </Button>  
                        <Button transparent block style={styles.btn} onPress={() => this.onRewards()}>
                            <Text style={styles.btnText}>REWARDS</Text>
                        </Button>
                        <Button transparent block style={styles.btn} onPress={() => this.onFriends()}>
                            <Text style={styles.btnText}>FRIENDS</Text>
                        </Button>
                        <Button transparent block style={styles.btn} onPress={() => this.onNotifications()}>
                            <Text style={styles.btnText}>NOTIFICATIONS</Text>
                        </Button>
                        <Button transparent block style={styles.btn} onPress={() => this.onSettings()}>
                            <Text style={styles.btnText}>SETTINGS</Text>
                        </Button>     
                    </View>             
                </Content>
            </Container>
        );
    }
}

export default connect()(MenuScreen);