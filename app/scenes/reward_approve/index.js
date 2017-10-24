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
    View,
    Thumbnail
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import FDatePicker  from '../../components/FDatepicker';
import moment from 'moment';

class RewardApproveScreen extends Component{
    static navigationOptions = {
        header: null
    };

    constructor(props){
        super(props);

        this.state = {
            gender: true,
            date: new Date(),
            showDatePicker: false,
            isDate: false
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onAge(){
        this.setState({
            showDatePicker: true
        })
    }

    onError(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({ routeName: 'rewardapproveerror' }));
    }

    selectGender(gender){
        this.setState({
            gender: gender
        });
    }

    onSet(date){
        this.setState({
            showDatePicker: false,
            date: date,
            isDate: true
        });
    }

    onClose(){
        this.setState({
            showDatePicker: false
        });
    }

    showAge(){
        return moment().diff(this.state.date, 'years');
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
                        <Title style={styles.title}>MISSING INFO</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.closeIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={styles.mainContainer}>
                        <Text style={styles.topText}>This offer is Age or Gender specific.</Text>
                        <View style={styles.tipContainer}>
                            <Text style={styles.tipText}>Tap to edit</Text>
                            <View style={styles.tipArrow}/>
                        </View>
                        <Text style={styles.ageText}>AGE</Text>
                        <Text style={styles.ageValueText} onPress={() => this.onAge()}>{this.state.isDate?this.showAge():"EDIT"}</Text>
                        <View style={styles.divider}/>
                        <Text style={styles.ageText}>GENDER</Text>
                        <View style={styles.genderContainer}>
                            <Button transparent style={styles.genderBtn} onPress={() => this.selectGender(true)}>
                                <Thumbnail square source={require('../../assets/reward/male.png')} style={[styles.genderIcon, this.state.gender && styles.activeGenderIcon]}/>
                            </Button>
                            <Text style={styles.genderDivider}>OR</Text>
                            <Button transparent style={styles.genderBtn} onPress={() => this.selectGender(false)}>
                                <Thumbnail square source={require('../../assets/reward/female.png')} style={[styles.genderIcon, !this.state.gender && styles.activeGenderIcon]}/>
                            </Button>
                        </View>
                        <View style={styles.doneBtnContainer}>
                            <Button style={styles.doneBtn} onPress={() => this.onError()}>
                                <Text style={styles.doneBtnText}>DONE</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
                {this.state.showDatePicker?
                <FDatePicker date={this.state.date} onClose={() => this.onClose()} onSet={(date) => this.onSet(date)}/>: null}
            </Container>
        );
    }
}

export default connect()(RewardApproveScreen);