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
    Text
} from 'native-base';
import styles from './styles';
import {
    Animated,
    TouchableWithoutFeedback
} from 'react-native';

class RateDlg extends Component{
    constructor(props){
        super(props);

        this.state = {
            bgFadeAnim: new Animated.Value(0),
            textFadeAnim: new Animated.Value(0),
            starScale: new Animated.Value(0.5),
            rating: 2
        };

        this.onClose = this.onClose.bind(this);
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
            Animated.timing(
                this.state.textFadeAnim,
                {
                    toValue: 1,
                    duration: 2000
                }
            ),

            Animated.sequence([
                Animated.timing(
                    this.state.starScale,
                    {
                        toValue: 1.1,
                        duration: 200
                    }
                ),
                Animated.timing(
                    this.state.starScale,
                    {
                        toValue: 0.95,
                        duration: 200
                    }
                ),
                Animated.timing(
                    this.state.starScale,
                    {
                        toValue: 1.05,
                        duration: 200
                    }
                ),
                Animated.timing(
                    this.state.starScale,
                    {
                        toValue: 0.98,
                        duration: 200
                    }
                ),
                Animated.timing(
                    this.state.starScale,
                    {
                        toValue: 1,
                        duration: 200
                    }
                )
            ])
        ]).start();
    }

    onClose(){
        var { onClose } = this.props;
        onClose();
    }

    onRating(rate){
        this.setState({
            rating: rate
        })
    }

    render(){
        return (
            
                <View style={styles.container}>
                    <Animated.View style={{opacity: this.state.bgFadeAnim, transform: [{scaleX: this.state.starScale}, {scaleY: this.state.starScale}]}}>
                        <View style={styles.content}>
                            <Animated.Text style={[styles.title, {opacity: this.state.textFadeAnim}]}>Does FriendMode help?</Animated.Text>
                            <View style={styles.starContainer}>
                                <TouchableWithoutFeedback onPress={() => this.onRating(1)}>
                                    <Animated.Image source={this.state.rating>=1?require('../../../assets/notification/star_green.png'): require('../../../assets/notification/star_gray.png')} style={[styles.starIcon,{transform: [{scaleX: this.state.starScale}, {scaleY: this.state.starScale}]}]}/>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => this.onRating(2)}>
                                    <Animated.Image source={this.state.rating>=2?require('../../../assets/notification/star_green.png'): require('../../../assets/notification/star_gray.png')} style={[styles.starIcon,{transform: [{scale: this.state.starScale}, {scaleY: this.state.starScale}]}]}/>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => this.onRating(3)}>
                                    <Animated.Image source={this.state.rating>=3?require('../../../assets/notification/star_green.png'): require('../../../assets/notification/star_gray.png')} style={[styles.starIcon,{transform: [{scale: this.state.starScale}, {scaleY: this.state.starScale}]}]}/>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => this.onRating(4)}>
                                    <Animated.Image source={this.state.rating>=4?require('../../../assets/notification/star_green.png'): require('../../../assets/notification/star_gray.png')} style={[styles.starIcon,{transform: [{scale: this.state.starScale}, {scaleY: this.state.starScale}]}]}/>
                                </TouchableWithoutFeedback>
                                <TouchableWithoutFeedback onPress={() => this.onRating(5)}>
                                    <Animated.Image source={this.state.rating>=5?require('../../../assets/notification/star_green.png'): require('../../../assets/notification/star_gray.png')} style={[styles.starIcon,{transform: [{scale: this.state.starScale}, {scaleY: this.state.starScale}]}]}/>
                                </TouchableWithoutFeedback>
                            </View>
                            <Animated.Text style={[styles.subtitle, {opacity: this.state.textFadeAnim}]}>
                                Tap to rate us and help friends spend quality time together again.
                            </Animated.Text>
                            <Button transparent style={styles.rightItem} onPress={() => this.onClose()}>
                                <Icon name="close" style={styles.icon}/>
                            </Button>
                        </View>
                    </Animated.View>
                </View>
               
        );
    }
}

export default connect()(RateDlg);