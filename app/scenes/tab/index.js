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
    Title,
    View,
    Footer,
    Text,
    Button
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import {
    TouchableWithoutFeedback,
    Animated
} from 'react-native';
import RefreshAlert from '../../components/notifications/refreshalert';
import ScanAlert from '../../components/notifications/scanalert';

import StatScreen from '../stats';


class FTabScreen extends Component{
    static navigationOptions = {
        header: null
    }

    constructor(props){
        super(props);

        this.state = {
            tab: 0,
            translateY: new Animated.Value(70)
        }
    }

    componentDidMount(){
        Animated.timing(
            this.state.translateY,
            {
                toValue: 0,
                duration: 1000
            }
        ).start();
    }

    onSelectTab(index){
        this.setState({
            tab: index
        });

        if(index == 1){
            var { dispatch } = this.props;
            dispatch(NavigationActions.navigate({routeName: 'sessioninvitefriend'}));
        }
    }

    onMenu(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.navigate({ routeName: 'menu' }));
    }

    onCloseRefresh(){
        var { dispatch } = this.props;
        dispatch({type: 'showRefresh', data: false});
    }

    onCloseScan(){
        var { dispatch } = this.props;
        dispatch({type: 'showScan', data: false});
    }

    onPlay(){
        var { dispatch, play} = this.props;
        if(play){
            dispatch({type: 'showPlay', data: false});
        }else{
            dispatch({type: 'showPlay', data: true});
        }        
    }

    render(){
        return (
            <Container style={styles.container}>
                <StatScreen/>
                <Footer style={styles.footer}>
                    <Animated.View style={{transform: [{translateY: this.state.translateY}]}}>
                    <View style={styles.footerContainer}>
                        <Button transparent style={styles.tabBtn} onPress={() => this.onSelectTab(0)}>
                            {this.state.tab == 0?
                            <Thumbnail square source={require('../../assets/tab/tab1_active.png')} style={styles.tabBtnIcon2}/>:
                            <Thumbnail square source={require('../../assets/tab/tab1.png')} style={styles.tabBtnIcon2}/>
                            }
                        </Button>
                        <Button transparent style={styles.tabBtn} onPress={() => this.onSelectTab(1)}>
                            {this.state.tab == 1?
                            <Thumbnail square source={require('../../assets/tab/tab2_active.png')} style={styles.tabBtnIcon}/>:
                            <Thumbnail square source={require('../../assets/tab/tab2.png')} style={styles.tabBtnIcon}/>
                            }
                        </Button>
                        <View style={styles.playBtnContainer}>
                            <TouchableWithoutFeedback onPress={() => this.onPlay()}>
                                <View style={styles.playBtn}>
                                    <Text style={styles.playBtnText}>PLAY</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        </View>
                        <Button transparent style={styles.tabBtn}>
                            <Thumbnail square source={require('../../assets/tab/tab3.png')} style={styles.tabBtnIcon}/>
                        </Button>
                        <Button transparent style={styles.tabBtn} onPress={() => this.onMenu()}>
                            <Thumbnail square source={require('../../assets/tab/tab4.png')} style={styles.tabBtnIcon1}/>
                        </Button>
                    </View>
                    </Animated.View>
                </Footer>
                {this.props.refresh?
                <RefreshAlert onClose={() => this.onCloseRefresh()}/>:null}
                {this.props.scan?
                <ScanAlert onClose={() => this.onCloseScan()}/>: null}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    refresh: state.notification.refresh,
    scan: state.notification.scan,
    play: state.notification.play
})

export default connect(mapStateToProps)(FTabScreen);