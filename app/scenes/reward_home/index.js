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
    View,
    Text
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class RewardHomeScreen extends Component{
    static navigationOptions = {
        header: null
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onRewardMap(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'rewardmap'}))
    
    }

    onRewardBrowser(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({routeName: 'rewardbrowser'}))
    }

    render(){
        return (
            <Container style={styles.container}>
                <Thumbnail square source={require('../../assets/reward/linje-tio-2.png')} style={styles.backdrop}/>
                <View style={styles.backdrop1}/>
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
                    <Text style={styles.text1}>DRINKS FOR TWO</Text>
                    <Text style={styles.text2}>
                        TJOGET RESTURANT & BAR
                    </Text>
                    <Button small transparent block onPress={() => this.onRewardMap()}>
                        <Text style={styles.locationBtnText}><Icon name="md-pin" style={styles.pin}/> View Location</Text>
                    </Button>
                    <View style={styles.mainContainer}>
                        <Text style={styles.mainText1}>FRIENDMODE REWARD 50% ON EVERY MAIN DISH!</Text>
                        <Text style={styles.mainText2}>
                        At TJOGET, the food tastes great and sounds even better. Their menu features a wide variety locally-sourced eats and tasty beverages and beer.
                        </Text>
                        <Text style={styles.mainText3}>
                            Use before 02.03.2017
                        </Text>
                        <View style={styles.bottomBtnContainer}>
                            <Button style={styles.bottomBtn} onPress={() => this.onRewardBrowser()}>
                                <Text style={styles.bottomBtnText}>USE</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default connect()(RewardHomeScreen);