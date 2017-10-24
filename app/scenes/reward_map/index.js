import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Container,
    View,
    Button,
    Text
} from 'native-base';
import { NavigationActions } from 'react-navigation';
import styles from './styles';
import MapView from 'react-native-maps';

class RewardMapScreen extends Component{
    static navigationOptions = {
        header: null
    };

    onBack(){
        var { dispatch } = this.props;
        dispatch(NavigationActions.back());
    }

    render(){
        return (
        <Container style={{backgroundColor: 'red'}}>
            <MapView
                initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
                style={styles.mapview}
            />
            <View style={styles.bottomContainer}>
                <View style={styles.bottomBtnContainer}>
                    <Button transparent style={styles.bottomBtn} onPress={() => this.onBack()}>
                        <Text style={styles.bottomBtnText}>Back</Text>
                    </Button>
                </View>
            </View>
        </Container>
        );
    }
}

export default connect()(RewardMapScreen);