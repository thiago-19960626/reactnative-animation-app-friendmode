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
    Footer,
    Form,
    Item,
    Label,
    Input,
    Switch
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import FDatePicker  from '../../components/FDatepicker';
import moment from 'moment';
import { AlertIOS } from 'react-native';

class SettingScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            showDatePicker: false,
            date: new Date(),
            setDate: false,
            gender: false
        };
    }

    onClose(){
        this.setState({
            showDatePicker: false
        })
    }

    onSet(date){
        this.setState({
            date: new Date(date),
            showDatePicker: false,
            setDate: true
        });
    }

    onClickAge(){
        this.setState({
            showDatePicker: true
        })
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onConfirm(){
        AlertIOS.prompt(
            'Confirm',
            'Please re enter your password',
            text => console.log("You entered "+text)
          );
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
                        <Title style={styles.title}>SETTINGS</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={styles.mainContainer}>
                        <View style={styles.photoContainer}>
                            <Thumbnail source={require('../../assets/Avatar.png')}  style={styles.photo}/>
                            <Button style={styles.photoEditBtn}>
                                <Icon name="md-camera" style={styles.photoIcon}/>
                            </Button>
                        </View>          
                    </View>
                    <Form style={styles.formContainer}>
                        <Item inlineLabel style={styles.formItem}>
                            <Label style={styles.itemLabel}>Name</Label>
                            <Input style={styles.formInput}/>
                        </Item>
                        <Item inlineLabel style={styles.formItem}>
                            <Label style={styles.itemLabel}>User</Label>
                            <Input style={styles.formInput}/>
                        </Item>
                        <Item inlineLabel style={styles.formItem}>
                            <Label style={styles.itemLabel}>Email</Label>
                            <Input style={styles.formInput}/>
                        </Item>
                        <Item inlineLabel style={styles.formItem}>
                            <Label style={styles.itemLabel}>Password</Label>
                            <Input style={styles.formInput} secureTextEntry={true} onEndEditing={() => this.onConfirm()}/>
                        </Item>
                        <Item inlineLabel style={styles.formItem1}>
                            <Label style={styles.itemLabel}>Public</Label>
                            <Right>
                                <Switch tintColor="#8B8982" value={false} onTintColor="#8B8982"/>
                            </Right>
                        </Item>
                        <Item inlineLabel style={styles.formItem}>
                            <Label style={styles.itemLabel}>Age</Label>
                            <Right>
                                <Button transparent style={styles.itemBtn} onPress={() => this.onClickAge()}>
                                    <Text style={styles.itemBtnText}>{this.state.setDate? (moment(this.state.date).format("YYYY-MM-D")): "Please enter"}</Text>
                                </Button>
                            </Right>
                        </Item>
                    </Form>
                    <Text style={styles.bottomText}>Gender</Text>
                    <View style={styles.bottomContainer}>
                        <Button style={[styles.bottomBtn, this.state.gender && styles.bottomActiveBtn]} onPress={() => this.setState({gender: true})}>
                            <Text style={[styles.bottomBtnText, this.state.gender && styles.bottomActiveBtnText]}>BOY</Text>
                        </Button>
                        <View style={styles.bottomDivider}/>
                        <Button style={[styles.bottomBtn, !this.state.gender && styles.bottomActiveBtn]} onPress={() => this.setState({gender: false})}>
                            <Text style={[styles.bottomBtnText, !this.state.gender && styles.bottomActiveBtnText]}>GIRL</Text>
                        </Button>
                    </View>
                    <Text style={styles.bottomText}>Sync account</Text>
                    <View style={styles.bottomContainer}>
                        <Button style={[styles.bottomBtn, styles.bottomActiveBtn]}>
                            <Thumbnail square source={require('../../assets/setting/facebook.png')} style={styles.bottomFbIcon}/>
                        </Button>
                        <View style={styles.bottomDivider}/>
                        <Button style={styles.bottomBtn}>
                        <Thumbnail square source={require('../../assets/setting/twitter.png')} style={styles.bottomTwIcon}/>
                        </Button>
                    </View>
                    <Text style={styles.bottomText1}>Delete account</Text>
                    <View style={styles.bottomContainer}>
                        <View style={styles.bottomBtn1Container}>
                            <Button style={styles.bottomBtn1} onPress={() => this.onBack()}>
                                <Icon name="md-close" style={styles.bottomBtnIcon}/>
                            </Button>
                        </View>
                        <View style={styles.bottomDivider}/>
                        <View style={styles.bottomBtn1Container}>
                            <Button style={styles.bottomBtn1} onPress={() => this.onBack()}>
                                <Text style={styles.bottomBtnText1}>SAVE</Text>
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

export default connect()(SettingScreen);