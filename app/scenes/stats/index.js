import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Header,
    Title,
    Thumbnail,
    Text,
    View,
    Content,
    Body,
    Footer,
    Button,
    Icon
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, ScrollView, Animated, Easing, Image } from 'react-native';
const { width, height } = Dimensions.get('window');
import AppDropDownAlert from '../../components/notifications/appdropdownalert';
import RewardAlert from '../../components/notifications/rewardalert';
import RateDlg from '../../components/notifications/ratedlg';
import FriendAlert from '../../components/notifications/friendalert';
var CircularProgressDisplay  = require('react-native-progress-circular');
import PlayAlert from '../../components/notifications/playalert';

class StatScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            entries: [
                {title: "LOYALTY"},
                {title: "STATS"},
                {title: "TROPHIES"}
            ],
            indicator: 0,
            isVisible: false,
            progress: 0,
            timer: null,
            fade1: new Animated.Value(0),
            y1: new Animated.Value(20),
            scale1: new Animated.Value(1),
            scale2: new Animated.Value(0),
            isVisiable2: false,
            isVisiable3: false,
            fade2: new Animated.Value(1),
            fade3: new Animated.Value(0),
            y2: new Animated.Value(20),
            isVisible4: false,
            isVisible5: false,
            isVisible6: false,
            isVisible7: false,
            isVisible8: false
        }

        this.renderItem = this.renderItem.bind(this);
        this.onNearBy1 = this.onNearBy1.bind(this);
        this.onNearBy2 = this.onNearBy2.bind(this);

        //start animation
        setTimeout(() => {
            this.setState({
                isVisible: true
            })
        }, 15000);  
        
        setTimeout(() => {
            this.setState({
                isVisible4: true
            })
        }, 20000); 

        setTimeout(() => {
            this.setState({
                isVisible5: true
            })
        }, 25000);

        setTimeout(() => {
            this.setState({
                isVisible6: true
            })
        }, 30000);

        setTimeout(() => {
            this.setState({
                isVisible7: true
            })
        }, 35000);

        setTimeout(() => {
            this.setState({
                isVisible8: true
            })
        }, 40000);
    }

    componentDidMount(){
        this.state.timer = setInterval(() => {
            if(this.state.progress <= 220){
                this.setState({
                    progress: this.state.progress + 30
                });
            }else{
                clearInterval(this.state.timer);
            }
        }, 50);

        Animated.parallel([
            Animated.timing(
                this.state.fade1,
                {
                    toValue: 1,
                    duration: 1000
                }
            ),
            Animated.timing(
                this.state.y1,
                {
                    toValue: 0,
                    duration: 1000
                }
            )
        ]).start();

        setTimeout(() => {
            this.onNearBy1();
        },5000);
    }

    onNearBy1(){
        this.setState({
            isVisiable3: true
        });

        Animated.parallel([
            Animated.timing(
                this.state.fade1,
                {
                    toValue: 0,
                    duration: 800
                }
            ),
            Animated.timing(
                this.state.y1,
                {
                    toValue: -180,
                    duration: 1000
                }
            ),
            Animated.timing(
                this.state.scale1,
                {
                    toValue: 0,
                    duration: 1000
                }
            ),

            Animated.timing(
                this.state.scale2,
                {
                    toValue: 1,
                    duration: 1000
                }
            )
        ]).start(() => {
            this.setState({
                isVisiable2: true
            });

            setTimeout(() => {
                this.onNearBy2()
            }, 3000);
        });
    }

    onNearBy2(){        

        Animated.parallel([
            Animated.timing(
                this.state.fade2,
                {
                    toValue: 0,
                    duration: 500
                }
            ),
            Animated.timing(
                this.state.fade3,
                {
                    toValue: 1,
                    duration: 500
                }
            ),
            Animated.timing(
                this.state.y2,
                {
                    toValue: 0,
                    duration: 500
                }
            )
        ]).start();
    }

    renderItem(item, index){      
        console.log(item);
        switch(item.index){
            case 2: 
                return (
                    <View style={{width: width, height: (height - 200)}}>
                    <ScrollView style={{flex: 1}}>                   
                    <View style={styles.gridContainer}>                                                
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/1.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/2.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                            <View style={styles.noteContainer}>
                                <Text style={styles.note}>10</Text>
                            </View>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/3.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/1.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/2.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                            <View style={styles.noteContainer}>
                                <Text style={styles.note}>3</Text>
                            </View>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/1.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/3.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/1.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/2.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/3.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/1.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/2.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/1.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/3.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>
                        <View style={styles.gridItem}>
                            <Thumbnail square source={require('../../assets/stat/1.png')} style={styles.gridIcon}/>
                            <Text style={styles.gridText}>NEWBIE</Text>
                        </View>                        
                    </View>     
                    </ScrollView>
                    </View>               
                );
                break;
            case 1:
                return (
                    <View style={{width: width, height: (height - 200)}}>
                    <ScrollView style={{flex: 1}}>
                    <View style={styles.mainContainer}>
                        <Thumbnail square source={require('../../assets/stat/Shape.png')} style={styles.icon1}/>
                        <Text style={styles.valueText}>49</Text>
                        <Text style={styles.fieldText}>SESSIONS</Text>
                        <View style={styles.divider}/>
                        <Thumbnail square source={require('../../assets/stat/Speed.png')} style={styles.icon2}/>
                        <Text style={styles.valueText}>6727</Text>
                        <Text style={styles.fieldText}>POINTS</Text>
                        <View style={styles.divider}/>
                        <Thumbnail square source={require('../../assets/stat/heart.png')} style={styles.icon3}/>
                        <Text style={styles.valueText}>6</Text>
                        <Text style={styles.fieldText}>POINTS</Text>
                    </View>
                    </ScrollView>
                    </View>
                )
                break;
            case 0:
                return (
                    <View style={{width: width, height: (height - 200)}}>
                    <ScrollView style={{flex: 1}}>
                    <View style={styles.mainContainer}>
                        <View style={styles.progressBarContainer}>
                            <CircularProgressDisplay.Hollow
                                size={220}
                                progressBarWidth={10}
                                backgroundColor={'#ebe6d7'}
                                progressBarColor={'#0BE2A5'}
                                innerComponent={
                                    <View style={styles.loyaltyContainer}>
                                        <Text style={styles.totalText}>TOTAL MINUTES</Text>
                                        <View style={styles.iconContainer}>
                                            <Text style={styles.totalNumber}>
                                                1362                                                                                
                                            </Text>
                                            <Icon name="clock" style={styles.clockIcon}/>
                                        </View>
                                    </View>
                                }
                                rotate={this.state.progress}
                            />
                            <View style={styles.progressValueContainer}>
                                <View style={styles.progressValueWrap}>
                                    <Text style={styles.progressValueText}>{(this.state.progress/360 * 100).toFixed(0)}</Text>
                                    <Text style={styles.progressPercentText}>%</Text>
                                </View>
                            </View>
                        </View>
                        <Animated.View style={{transform: [{translateY: this.state.y1}]}}>
                            <Animated.View style={{opacity: this.state.fade1,transform: [{scaleX: this.state.scale1}, {scaleY: this.state.scale1}]}}>
                                <Animated.Text style={styles.text1}>YOU ARE...</Animated.Text>
                                <Animated.Text style={styles.text2}>PRETTY GOOD</Animated.Text>
                            </Animated.View>
                            <Animated.View style={[styles.nearbyContainer, this.state.isVisiable3 && styles.nearbyActiveContainer, {opacity: this.state.fade2}]}>
                                <Text style={styles.text3}>{this.state.isVisiable2? "NEARBY": " "}</Text>
                                <Animated.Image source={require('../../assets/stat/nearby.png')} style={[styles.image1,{transform: [{scaleX: this.state.scale2}, {scaleY: this.state.scale2}]}]}/>
                                {this.state.isVisiable2?
                                <Thumbnail square source={require('../../assets/stat/refresh_icon.png')} style={styles.refresh_icon}/>: null}
                                {this.state.isVisiable2? 
                                <Thumbnail square source={require('../../assets/stat/scan_icon.png')} style={styles.scan_icon}/>: null}
                            </Animated.View>                          
                            <Animated.View style={[styles.nearbyActiveContainer, {opacity: this.state.fade3, marginTop: -180}]}>
                                <Text style={styles.text3}>NONE FOUND</Text> 
                                <View style={styles.nearbyContainer2}>
                                    <Animated.View style={[styles.refreshBtnContainer1, {transform: [{translateY: this.state.y2}]}]}>
                                        <Button transparent style={styles.refreshBtn2} onPress={() => this.onRefresh()}>
                                            <Thumbnail square source={require('../../assets/stat/refresh_2.png')} style={styles.refresh_icon2}/>
                                        </Button>
                                    </Animated.View>
                                    <Animated.View style={[styles.scanBtnContainer1, {transform: [{translateY: this.state.y2}]}]}>
                                        <Button transparent style={styles.scanBtn2} onPress={() => this.onScan()}>
                                            <Thumbnail square source={require('../../assets/stat/scan_2.png')} style={styles.scan_icon2}/>
                                        </Button>
                                    </Animated.View>
                                </View>   
                            </Animated.View>        
                        </Animated.View>
                    </View>
                    </ScrollView>
                    </View>
                );
                break;
        }        
    }

    onSnapToItem(index){
        this.setState({
            indicator: index
        })
    }


    onRefresh(){
        var { dispatch } =  this.props;
        dispatch({type: 'showRefresh', data:  true});
    }

    onScan(){
        var { dispatch } = this.props;
        dispatch({type: 'showScan', data: true});
    }

    render(){
        return (
            <Container>
                <Header style={styles.header}>
                    <Body>
                        <Title style={styles.title}>{this.state.entries[this.state.indicator].title}</Title>
                    </Body>
                </Header>
                {this.state.indicator==2?
                <Thumbnail square source={require('../../assets/gradient1.png')} style={styles.headerdrop}/>:null}
                <Content>                    
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        renderItem={this.renderItem}
                        sliderWidth={width}
                        itemWidth={width}
                        onSnapToItem={(index) => this.onSnapToItem(index)}                        
                        />
                </Content>  
                {this.state.indicator==2?    
                <Thumbnail square source={require('../../assets/gradient2.png')} style={styles.footerdrop}/>: null}          
                <Footer style={styles.footer}>                    
                    <Button style={[styles.bottomBtn, (this.state.indicator == 0) && styles.bottomBtnActive]}/>
                        <View style={styles.bottomDivider}/>
                    <Button style={[styles.bottomBtn, (this.state.indicator == 1) && styles.bottomBtnActive]}/>
                        <View style={styles.bottomDivider}/>
                    <Button style={[styles.bottomBtn, (this.state.indicator == 2) && styles.bottomBtnActive]}/>                    
                </Footer>
                {this.state.isVisible?
                <FriendAlert onClose={() => this.setState({isVisible: false})}/>:null}
                {this.state.isVisible4?
                <RateDlg onClose={() => this.setState({isVisible4: false})}/>:null}
                {this.state.isVisible5?
                <AppDropDownAlert title="Admin message" subtitle="Lorem ipsum dolor sit, amet isupum." img={require('../../assets/notification/8.png')} onClose={() =>this.setState({isVisible5: false})}/>:null}
                {this.state.isVisible6?
                <AppDropDownAlert title="New Trophy" subtitle="You're an official Huggy bear." img={require('../../assets/notification/1.png')} onClose={() => this.setState({isVisible6: false})}/>:null}
                {this.props.play?
                <PlayAlert/>:null}
                {this.state.isVisible7?
                <RewardAlert title="New Reward!" subtitle="It pays off to be loyal, view it now." img={require('../../assets/notification/7.png')} onClose={() => this.setState({isVisible7: false})}/>:null}
                {this.state.isVisible8?
                <RewardAlert title="Unseen Rewards" subtitle="You have not viewed recent rewards." img={require('../../assets/notification/8.png')} onClose={() => this.setState({isVisible8: false})}/>:null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    play: state.notification.play
})

export default connect(mapStateToProps)(StatScreen);