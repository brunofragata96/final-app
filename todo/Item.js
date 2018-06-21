import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  Button,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import { formatDate } from '../date/dateMoment';
import MyDatePicker from '../date/datePicker';

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.data,
            editing: false,
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleStateChange = this.handleStateChange.bind(this)
    }

    componentWillReceiveProps (newProps) {
        this.setState({data: newProps.data})
    }

    handleEdit () {
        if(this.props.isEditing) {
            this.handleSubmit ()
        }
        else {
            !this.props.onEditing || this.props.onEditing()
        }
    }

    handleInputChange (name, val) {
        let data = Object.assign({}, this.state.data)
        data[name] = val
        this.setState({
            data
        })
    }

    handleSubmit () {
        // validate data and then send
        let data = Object.assign({}, this.state.data)
        data.date = data.date !== "" ? new Date (data.date) : ""
        !this.props.onSubmit || this.props.onSubmit(data)
    }

    handleStateChange () {
        let data = Object.assign({}, this.state.data)
        data.done = !data.done
        this.setState({
            data
        })
        !this.props.onUpdate || this.props.onUpdate(data)
    }

    render () {
        const {text, date} = this.state.data
        return <ScrollView>
            <View>{
                this.props.isEditing
                ? <View>
                    <TextInput
                            value={this.state.data.text}
                            onChangeText={this.handleInputChange.bind(this,"text")}
                    />
                </View>
                : <Text>{text}</Text>
            }</View>
            <View>{
                this.props.isEditing
                ? <View>
                    <MyDatePicker
                            value={/* formatDate( */this.state.data.date/*, true ) */}
                            onChange={this.handleInputChange.bind(this, "date")}
                    />
                </View>
                : <Text>{formatDate(date)}</Text>
            }</View>
            <View><TouchableOpacity onPress={this.handleStateChange}><Text>Toggle State</Text></TouchableOpacity></View>
            <View><TouchableOpacity onPress={this.handleEdit}><Text>{this.props.isEditing ? "Save" : "Edit"}</Text></TouchableOpacity></View>
            <View><TouchableOpacity onPress={this.props.onRemove} /* disabled={this.props.cantRemove ? "disabled" : ""} */><Text>Remove</Text></TouchableOpacity></View>
        </ScrollView>
    }
}
export default Item;
