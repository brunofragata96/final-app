import React, { Component } from 'react';
//import {DatePicker} from 'react-native-ui-xg';
// or
import DatePicker from 'react-native-datepicker';

export default class MyDatePicker extends Component {
  render(){
    return (
      <DatePicker
        style={{width: 150}}
        date={this.props.value}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={!this.props.onChange || this.props.onChange}
      />
    )
  }
}