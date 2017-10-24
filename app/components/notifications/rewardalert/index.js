import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    Content,
    Body,
    Icon,
    Thumbnail,
    View,
    Text,
    List,
    ListItem,
    Right,
    Button
} from 'native-base';
import styles from './styles';
import {
    Animated,
    TouchableWithoutFeedback
} from 'react-native';

class RewardAlert extends Component{
    constructor(props){
        super(props);

        this.state = {
            offsetY: new Animated.Value(-200)
        }

        this.onClose = this.onClose.bind(this);
    }

    componentDidMount(){
        Animated.timing(
            this.state.offsetY,
            {
                toValue: 0,
                duration: 500
            }
        ).start();
    }

    onClose(){
        var { onClose } = this.props;
        Animated.timing(
            this.state.offsetY,
            {
                toValue: -200,
                duration: 500
            }
        ).start(function(finished){
            if(finished){
                onClose();
            }
        });
    }

    render(){
        return (
            <TouchableWithoutFeedback onPress={() => this.onClose()}>
                <View style={styles.container}>
                    <Animated.View style={{transform:[{translateY: this.state.offsetY}]}}>
                        <List style={styles.list}>
                            <ListItem style={styles.listItem}>
                                <Thumbnail style={styles.avatar} small square source={this.props.img}/>
                                <Body>
                                    <Text style={styles.title}>{this.props.title}</Text>
                                    <Text style={styles.desc}>{this.props.subtitle}</Text>
                                </Body>
                                <Button transparent style={styles.rightItem} onPress={() => this.onClose()}>
                                    <Icon name="close" style={styles.icon}/>
                                </Button>
                            </ListItem>
                            <View style={styles.btnContainer}>
                                <View style={styles.btnWrapper}>
                                    <Button style={styles.bottomBtn}>
                                        <Text style={styles.bottomBtnText}>VIEW</Text>
                                    </Button>
                                </View>
                            </View>
                        </List>                        
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default connect()(RewardAlert);