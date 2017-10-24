import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
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
    Body,
    Form,
    Item
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import FDatePicker from '../../components/FDatepicker/';

class NewUserSocialScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            username: "",
            birthday: new Date(),
            gender: true,
            showDatePicker: false,
            isSet: false
        }
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onChangeText(text){
        this.setState({
            username: text
        })
    }

    onGender(gender){
        this.setState({
            gender: gender
        })
    }

    onClose(){
        this.setState({
            showDatePicker: false
        })
    }

    onSet(date){
        this.setState({
            showDatePicker: false,
            isSet: true,
            birthday: new Date(date)
        })
    }

    onDatePicker(){
        this.setState({
            showDatePicker: true
        })
    }

    showAge(){
        var date1 = new Date();
        return (date1.getFullYear() - this.state.birthday.getFullYear());
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
                        <Title style={styles.title}>REGISTER</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={styles.mainContainer}>
                        <View style={styles.avatarContainer}>
                            <Thumbnail square source={require('../../assets/Avatar.png')} style={styles.avatarImg}/>
                            <Button style={styles.avatarCamera}>
                                <Icon name="md-camera" style={styles.cameraIcon}/>
                            </Button>
                        </View>
                    </View>
                    <Form style={styles.formContainer}>
                        <Item style={styles.formItem}>
                            <Input placeholder="USERNAME" style={styles.input} placeholderTextColor="rgba(255,250,233,0.5)" onChangeText={(text) => this.onChangeText(text)} value={this.state.username}/>
                        </Item>
                        <View style={styles.divider}/>    
                        <View style={styles.ageContainer}>
                            {this.state.gender?
                            <Text style={styles.ageActiveBtn}>BOY</Text>:
                            <Text style={styles.ageBtn} onPress={() => this.onGender(true)}>
                                BOY
                            </Text>
                            }
                            <Text style={styles.ageDivider}>OR</Text>
                            {this.state.gender?
                            <Text style={styles.ageBtn} onPress={() => this.onGender(false)}>
                                GIRL
                            </Text>:
                            <Text style={styles.ageActiveBtn}>GIRL</Text>
                            }
                        </View>  
                        <View style={styles.divider}/>
                        {this.state.isSet?
                        <Text style={styles.ageText} onPress={() => this.onDatePicker()}>
                            {this.showAge()}
                        </Text>:
                        <Text style={styles.ageText} onPress={() => this.onDatePicker()}>AGE</Text>
                        }                  
                    </Form>
                    <View style={styles.controlContainer}>
                        <View style={styles.controlBtnContainer}>
                            <Button style={styles.controlBtn} onPress={() => {}}>
                                <Text style={styles.createBtnText}>CREATE</Text>
                            </Button>
                        </View>
                    </View>
                </Content>
                {this.state.showDatePicker?
                <FDatePicker date={this.state.birthday} onClose={() => this.onClose()} onSet={(date) => this.onSet(date)}/>: null}
            </Container>
        );
    }
}

export default connect()(NewUserSocialScreen);