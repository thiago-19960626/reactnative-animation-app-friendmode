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
    Button,
    Title,
    Text,
    View,
    Thumbnail
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';

class RewardApproveErrorScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack() {
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    render(){
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left style={styles.headerLeft}>
                        <Button transparent>
                            <Text></Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={styles.title}>AGE APPROVAL</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.closeIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={styles.mainContainer}>
                        <Text style={styles.text1}>OH, SORRY!</Text>
                        <Text style={styles.text2}>
                            This reward isn't suitable with your personal settings.
                        </Text>
                        <View style={styles.bottomContainer}>
                            <View style={styles.bottomBtnContainer}>
                                <Button style={styles.bottomBtn}>
                                    <Text style={styles.bottomBtnText}>EDIT SETTINGS</Text>
                                </Button>
                            </View>
                            <View style={styles.bottomDivider}/>
                            <View style={styles.bottomBtnContainer}>
                                <Button style={styles.bottomBtn}>
                                    <Text style={styles.bottomBtnText}>SKIP REWARD</Text>
                                </Button>
                            </View>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default connect()(RewardApproveErrorScreen);