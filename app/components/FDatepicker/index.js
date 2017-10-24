import React, { Component } from 'react';
import {
    DatePickerIOS,
    View,
    Text
} from 'react-native';
import { Button,Icon } from 'native-base';
import styles from './styles';
import { connect } from 'react-redux';
import moment from 'moment';

class FDatePicker extends Component{
    constructor(props){
        super(props);

        this.state = {
            date: this.props.date
        }
    }

    onDateChange(date){
        this.setState({
            date: (new Date(date))
        })
    }

    showDate(){
        return moment(this.state.date).format("MMM D, YYYY");
    }

    render(){
        return (
            <View style={styles.container}>
                <View style={styles.controlContainer}>
                    <Button transparent onPress={() => this.props.onSet(this.state.date)}>
                        <Icon name="arrow-down"/>
                    </Button>
                    <Button transparent onPress={this.props.onClose}>
                        <Icon name="md-close"/>
                    </Button>
                </View>
                <View style={styles.birthContainer}>
                    <Text style={styles.birthText}>Date of birth:</Text>
                    <Text style={styles.birthValue}>{this.showDate()}</Text>
                </View>
                <DatePickerIOS
                    date={this.state.date}
                    mode="date"
                    style={styles.datePickerContainer}
                    onDateChange={(date) => this.onDateChange(date)}
                />
            </View>
        );
    }
}

export default  connect()(FDatePicker);