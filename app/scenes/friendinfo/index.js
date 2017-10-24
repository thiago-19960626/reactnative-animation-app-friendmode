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
    Grid,
    Col,
    Row
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
var CircularProgressDisplay = require('react-native-progress-circular');
import Carousel from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

class FriendInfoScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            entries: [
                {},
                {}
            ],
            selectedIndex: 0
        };
    }

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    onSnapToItem(index){
        this.setState({
            selectedIndex: index
        });
    }

    renderItem(item, index){
        return (
            <View style={styles.itemContainer}>
            <Grid>
                <Row>
                    <Col style={styles.item}>
                        <Thumbnail square source={require('../../assets/stat/Shape.png')} style={styles.itemIcon}/>
                        <Text style={styles.itemText1}>37</Text>
                        <Text style={styles.itemText2}>FM'S</Text>
                    </Col>
                    <Col style={styles.item}>
                        <Thumbnail square source={require('../../assets/stat/Speed.png')} style={styles.itemIcon}/>
                        <Text style={styles.itemText1}>3732</Text>
                        <Text style={styles.itemText2}>POINTS</Text>
                    </Col>
                </Row>
                <Row>
                    <Col style={styles.item}>
                        <Thumbnail square source={require('../../assets/stat/Speed.png')} style={styles.itemIcon}/>
                        <Text style={styles.itemText1}>92</Text>
                        <Text style={styles.itemText2}>MINUTES</Text>
                    </Col>
                    <Col style={styles.item}>
                        <Thumbnail square source={require('../../assets/stat/heart.png')} style={styles.itemIcon1}/>
                        <Text style={styles.itemText1}>2</Text>
                        <Text style={styles.itemText2}>CHEATS</Text>
                    </Col>
                </Row>
            </Grid>
            </View>
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
                        <Title style={styles.title}>CLARA SUNDSTEDT</Title>
                    </Body>
                    <Right style={styles.headerRight}>
                        <Button transparent onPress={() => this.onBack()}>
                            <Icon name="md-close" style={styles.headerIcon}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Text style={styles.username}>clara_99</Text>
                    {this.state.selectedIndex == 0?
                    <View style={styles.profileContainer}>
                        <View style={styles.profileWrapper}>
                            <CircularProgressDisplay.Hollow 
                                size={179}
                                progressBarWidth={9}                        
                                backgroundColor={'#ebe6d7'} 
                                progressBarColor={'#0BE2A5'}
                                innerComponent={<Thumbnail square source={require('../../assets/Avatar.png')} style={styles.profile}/>} 
                                rotate={((64/100)*360)}/>
                            <View style={styles.profilePercentContainer}>
                                <View style={styles.profilePercentWrapper}>
                                    <Text style={styles.profilePercentText}>64%</Text>  
                                </View>
                            </View>
                        </View>                  
                    </View>:
                    <View style={styles.profileContainer}>
                        <View style={styles.profileWrapContainer}>
                        <View style={styles.profileWrapper1}>
                            <CircularProgressDisplay.Hollow 
                                size={159}
                                progressBarWidth={9}                        
                                backgroundColor={'#ebe6d7'} 
                                progressBarColor={'#0BE2A5'}
                                innerComponent={<Thumbnail square source={require('../../assets/Avatar.png')} style={styles.profile1}/>} 
                                rotate={((64/100)*360)}/>
                            <View style={styles.profilePercentContainer}>
                                <View style={styles.profilePercentWrapper}>
                                    <Text style={styles.profilePercentText}>64%</Text>  
                                </View>
                            </View>
                        </View> 
                        <View style={styles.profileWrapper1}>
                            <CircularProgressDisplay.Hollow 
                                size={159}
                                progressBarWidth={9}                        
                                backgroundColor={'#ebe6d7'} 
                                progressBarColor={'#0BE2A5'}
                                innerComponent={<Thumbnail square source={require('../../assets/Avatar.png')} style={styles.profile1}/>} 
                                rotate={((64/100)*360)}/>
                            <View style={styles.profilePercentContainer}>
                                <View style={styles.profilePercentWrapper}>
                                    <Text style={styles.profilePercentText}>64%</Text>  
                                </View>
                            </View>
                        </View>             
                        </View>    
                    </View>
                    }
                    <View style={styles.tabContainer}>
                        <Grid>
                            <Col>
                                <Button transparent block style={[styles.tabBtn, this.state.selectedIndex == 0 && styles.tabActiveBtn]}>
                                    <Text style={styles.tabBtnText}>CLARA</Text>
                                </Button>
                            </Col>
                            <Col>
                                <Button transparent block style={[styles.tabBtn, this.state.selectedIndex == 1 && styles.tabActiveBtn]}>
                                    <Text style={styles.tabBtnText}>YOU & CLARA</Text>
                                </Button>
                            </Col>
                        </Grid>
                    </View>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        renderItem={this.renderItem}
                        sliderWidth={width}
                        itemWidth={width}    
                        onSnapToItem={(index) => this.onSnapToItem(index)}                    
                        />                    
                </Content>
            </Container>
        );
    }
}

export default connect()(FriendInfoScreen);