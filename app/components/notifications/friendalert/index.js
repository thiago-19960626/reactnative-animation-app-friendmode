import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Icon,
    Thumbnail,
    View,
    List,
    ListItem,
    Right,
    Button,
    Text,
    Label
} from 'native-base';
import styles from './styles';
import {
    Animated,
    TouchableWithoutFeedback
} from 'react-native';
var CircularProgressDisplay = require('react-native-progress-circular');

class FriendAlert extends Component{
    constructor(props){
        super(props);

        this.state = {
            bgFadeAnim: new Animated.Value(0),
            scale: new Animated.Value(0.5),
            progress: 0,
            timer: null
        }
    }

    componentDidMount(){
        Animated.parallel([
            Animated.timing(
                this.state.bgFadeAnim,
                {
                    toValue: 1,
                    duration: 1000
                }
            ),

            Animated.sequence([
                Animated.timing(
                    this.state.scale,
                    {
                        toValue: 1.1,
                        duration: 200
                    }
                ),
                Animated.timing(
                    this.state.scale,
                    {
                        toValue: 0.95,
                        duration: 200
                    }
                ),
                Animated.timing(
                    this.state.scale,
                    {
                        toValue: 1.05,
                        duration: 200
                    }
                ),
                Animated.timing(
                    this.state.scale,
                    {
                        toValue: 0.98,
                        duration: 200
                    }
                ),
                Animated.timing(
                    this.state.scale,
                    {
                        toValue: 1,
                        duration: 200
                    }
                )
            ])
        ]).start();

        setTimeout(() => {
            this.state.timer = setInterval(() => {
                if(this.state.progress <= 240){
                    this.setState({
                        progress: this.state.progress + 10
                    });
                }else{
                    clearInterval(this.state.timer);
                }
            }, 1);
        }, 500);        
    }

    onClose(){
        var { onClose } = this.props;
        onClose();
    }

    render(){
        return (
            <View style={styles.container}>
                <Animated.View style={{opacity: this.state.bgFadeAnim, transform: [{scaleX: this.state.scale},{scaleY: this.state.scale}]}}>
                    <View style={styles.content}>
                        <Animated.Text style={styles.title}>Lisa Bartley</Animated.Text>
                        <View style={styles.avatarContainer}>
                            <CircularProgressDisplay.Hollow
                                size={112}
                                progressBarWidth={5}
                                backgroundColor={'#ebe6d7'}
                                progressBarColor={'#0BE2A5'}
                                innerComponent={
                                    <View style={{width: 102, height: 102}}>
                                        <Thumbnail square source={require('../../../assets/Avatar.png')} style={styles.profile}/>
                                        <Label style={styles.initialNameText}>LB</Label>
                                    </View>
                                } 
                                rotate={this.state.progress}
                            />                            
                        </View>
                        <Label style={styles.title}>
                            FRIEND OF THE WEEK
                        </Label>
                        <Label style={styles.desc}>
                            With 78 minutes offline, we congratulate Lisa of being your FOW!
                        </Label>
                        <Button transparent style={styles.rightItem} onPress={() => this.onClose()}>
                            <Icon name="close" style={styles.icon}/>
                        </Button>
                    </View>
                </Animated.View>
            </View>
        );
    }
}

export default connect()(FriendAlert);