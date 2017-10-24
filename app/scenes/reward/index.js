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
    Button,
    Title,
    Text,
    View,
    List,
    ListItem
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class RewardScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state ={
            step: 2
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onRewardApprove(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({ routeName: 'rewardapprove' }));
    }

    onRewardHome(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({ routeName: 'rewardhome' }));
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
                        <Title style={styles.title}>REWARDS</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    {this.state.step == 0?
                    <View style={styles.rewardEmptyContainer}>
                        <Text style={styles.rewardEmptyText}>You don't have any new rewards. Be more in FriendMode, it will pay off!</Text>
                    </View>: 
                    this.state.step == 1?
                    <View style={styles.rewardContainer}>
                        <Thumbnail square source={require('../../assets/reward/linje-tio-3.png')} style={styles.rewardImage}/>
                        <View style={styles.rewardBackdrop}>
                            <Text style={styles.rewardTitle}>DINNER FOR TWO</Text>
                            <Text style={styles.rewardDes}>Use before 02.03.2017</Text>
                            <View style={styles.rewardBtnContainer}>
                                <Button style={styles.viewBtn}>
                                    <Text style={styles.viewBtnText}>VIEW</Text>
                                </Button>
                            </View>
                        </View>
                    </View>:
                    this.state.step == 2?
                    <View>
                        <View style={styles.rewardContainer}>
                            <Thumbnail square source={require('../../assets/reward/linje-tio-3.png')} style={styles.rewardImage}/>
                            <View style={styles.rewardBackdrop}>
                                <Text style={styles.rewardTitle}>DINNER FOR TWO</Text>
                                <Text style={styles.rewardDes}>Use before 02.03.2017</Text>
                                <View style={styles.rewardBtnContainer}>
                                    <Button style={styles.viewBtn}>
                                        <Text style={styles.viewBtnText}>VIEW</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                        <View style={styles.rewardContainer}>
                            <Thumbnail square source={require('../../assets/reward/linje-tio-3.png')} style={styles.rewardImage}/>
                            <View style={styles.rewardBackdrop}>
                                <Text style={styles.rewardTitle}>DINNER FOR TWO</Text>
                                <Text style={styles.rewardDes}>Use before 02.03.2017</Text>
                                <View style={styles.rewardBtnContainer}>
                                    <Button style={styles.viewBtn}>
                                        <Text style={styles.viewBtnText}>VIEW</Text>
                                    </Button>
                                </View>
                            </View>
                        </View>
                    </View>
                    : null}
                    <View style={styles.expiredContainer}>
                        <Text style={styles.expiredText}>EXPIRED</Text>
                        {true?
                        <List>
                            <ListItem style={styles.expiredItem} onPress={() => this.onRewardApprove()}>
                                <Text style={styles.expiredItemText}>DINNER FOR TWO</Text>
                            </ListItem>
                            <ListItem style={styles.expiredItem} onPress={() => this.onRewardHome()}>
                                <Text style={styles.expiredItemText}>TRY CLIMBING FOR FREE</Text>
                            </ListItem>
                            <ListItem style={styles.expiredItem}>
                                <Text style={styles.expiredItemText}>50% DINNER</Text>
                            </ListItem>
                        </List>:null}
                    </View>
                </Content>
            </Container>
        );
    }
}

export default connect()(RewardScreen);