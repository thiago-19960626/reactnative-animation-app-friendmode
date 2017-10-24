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

class NewUserCreateScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            avatar: false,
            username: "",
            password: "",
            confirm: "",
            fullname: "",
            email: "",
            step: 0,
            gender: true,
            showDatePicker: false,
            birthday: new Date(),
            isSet: false
        }
    }

    onBack(){
        if(this.state.step <= 0){
            var { dispatch } = this.props;
            dispatch(NavigationActions.back());
        }else{
            this.setState({
                step: this.state.step -1
            })
        }
    }

    onAvatar(){
        this.setState({
            avatar: !this.state.avatar
        })
    }

    onChangeText(field, text){
        switch(field){
            case "username":
                this.setState({
                    username: text
                });
                break;
            case "password":
                this.setState({
                    password: text
                });
                break;
            case "confirm":
                this.setState({
                    confirm: text
                });
                break;
            case "email":
                this.setState({
                    email: text
                });
                break;
            case "fullname":
                this.setState({
                    fullname: text
                });
                break
        }
    }

    onNext(){
        if(this.state.step < 2){
            this.setState({
                step: this.state.step + 1
            });
        }else{
            var { dispatch } = this.props;
            dispatch(NavigationActions.navigate({routeName: 'tab'}));
        }
    }

    onGender(gender){
        this.setState({
            gender: gender
        });
    }

    onClose(){
        this.setState({
            showDatePicker: false
        })
    }

    onSet(date){
        this.setState({
            isSet: true,
            showDatePicker: false,
            birthday: new Date(date)
        });
    }

    onDatePicker(){
        this.setState({
            showDatePicker: true
        });
    }

    showAge(){
        var date1 = new Date();
        return (date1.getFullYear() - this.state.birthday.getFullYear());
    }

    isEnableNext(){
        if(this.state.step == 0){
            if(this.state.username != "" && this.state.password != "" && this.state.confirm != ""){
                return true;
            }else{
                return false;
            }
        }else if(this.state.step == 1){
            if(this.state.fullname != "" && this.state.email != ""){
                return true;
            }else{
                return false;
            }
        }else if(this.state.step == 2){
            if(this.state.isSet){
                return true;
            }else{
                return false;
            }
        }
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
                        <Button transparent onPress={() => {this.props.dispatch(NavigationActions.back());}}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={styles.mainContainer}>
                        <View style={styles.avatarContainer}>
                            {this.state.avatar?
                            <Thumbnail square source={require('../../assets/Avatar.png')} style={styles.avatarImg}/>:null}
                            {this.state.avatar?
                            <Button style={styles.avatarCamera1} onPress={() => this.onAvatar()}>
                                <Icon name="md-camera" style={styles.cameraIcon2}/>
                            </Button>:
                            <Button style={styles.avatarCamera2} onPress={() => this.onAvatar()}>
                                <Icon name="md-camera" style={styles.cameraIcon1}/>
                            </Button>
                            }
                        </View>
                    </View>
                    {this.state.step == 0?
                    <Form style={styles.formContainer}>
                        <Item style={styles.formItem}>
                            <Input placeholder="USERNAME" style={styles.input} placeholderTextColor={"rgba(255,250,233,0.5)"} onChangeText={(text) => this.onChangeText('username', text)} value={this.state.username}/>
                        </Item>
                        <View style={styles.divider}/>
                        <Item style={styles.formItem}>
                            <Input placeholder="PASSWORD" secureTextEntry={true} style={styles.input} placeholderTextColor={"rgba(255,250,233,0.5)"} onChangeText={(text) => this.onChangeText('password', text)} value={this.state.password}/>
                        </Item>
                        <View style={styles.divider}/>
                        <Item style={styles.formItem}>
                            <Input placeholder="REPEAT PASSWORD" secureTextEntry={true} style={styles.input1} placeholderTextColor={"rgba(255,250,233,0.5)"} onChangeText={(text) => this.onChangeText('confirm', text)} value={this.state.confirm}/>
                        </Item>
                    </Form>: null}
                    {this.state.step == 1?
                    <Form style={styles.formContainer}>
                        <Item style={styles.formItem}>
                            <Input placeholder="FULL NAME" style={styles.input} placeholderTextColor={"rgba(255,250,233,0.5)"} onChangeText={(text) => this.onChangeText('fullname', text)} value={this.state.fullname}/>
                        </Item>
                        <View style={styles.divider}/>
                        <Item style={styles.formItem}>
                            <Input placeholder="EMAIL ADDRESS" style={styles.input} placeholderTextColor={"rgba(255,250,233,0.5)"} onChangeText={(text) => this.onChangeText('email', text)} value={this.state.email}/>
                        </Item>
                        <View style={{height: 65}}/>
                    </Form>: null}
                    {this.state.step == 2?
                    <View style={styles.formContainer}>
                        <View style={styles.ageContainer}>
                            {this.state.gender?
                            <Text style={styles.ageActiveBtn}>BOY</Text>:
                            <Text style={styles.ageBtn} onPress={() => this.onGender(true)}>BOY</Text>
                            }
                            <Text style={styles.ageDivider}>OR</Text>
                            {this.state.gender?
                            <Text style={styles.ageBtn} onPress={() => this.onGender(false)}>GIRL</Text>:
                            <Text style={styles.ageActiveBtn}>GIRL</Text>
                            }
                        </View>
                        <View style={styles.divider}/>
                        {this.state.isSet?
                        <Text style={styles.ageText} onPress={() => this.onDatePicker()}>{this.showAge()}</Text>:
                        <Text style={styles.ageText} onPress={() => this.onDatePicker()}>AGE</Text>
                        }
                        <View style={{height: 65}}/>
                    </View>
                    : null}
                    <View style={styles.controlContainer}>
                         {this.state.step == 0?
                         <View style={styles.controlActiveItem}/>: <View style={styles.controlItem}/>}
                         {this.state.step == 1?
                            <View style={styles.controlActiveItem}/>: <View style={styles.controlItem}/>}
                        {this.state.step == 2?
                         <View style={styles.controlActiveItem}/>: <View style={styles.controlItem}/>}
                    </View>
                    <View style={styles.controlContainer}>
                         <View style={styles.controlBtnContainer}>
                            <Button style={styles.controlBtn} onPress={() => this.onBack()}>
                                <Icon name="ios-arrow-back" style={styles.controlBtnIcon}/>
                            </Button>
                         </View>
                         <View style={styles.controlDivider}/>
                         <View style={styles.controlBtnContainer}>
                             {this.isEnableNext()?
                            <Button style={styles.controlBtn} onPress={() => this.onNext()}>
                                {this.state.step != 2?
                                <Icon name="ios-arrow-forward" style={styles.controlBtnIcon}/>:
                                <Text style={styles.createBtnText}>CREATE</Text>
                                }
                            </Button>:
                            <Button style={styles.controlDisableBtn}>
                                {this.state.step != 2?
                                <Icon name="ios-arrow-forward" style={styles.controlBtnIcon}/>:
                                <Text style={styles.createBtnText}>CREATE</Text>
                                }
                            </Button>}
                         </View>
                    </View>
                </Content>
                {this.state.showDatePicker?
                <FDatePicker date={this.state.birthday} onClose={() => this.onClose()} onSet={(date) => this.onSet(date)}/>:null}
            </Container>
        );
    }
}

export default connect()(NewUserCreateScreen);