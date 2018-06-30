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
        !this.props.onUpdate || this.props.onUpdate(data)
    }

    handleStateChange () {
        let data = Object.assign({}, this.state.data)
        data.done = !data.done
        this.setState({
            data
        })
        //!this.props.onUpdate || this.props.onUpdate(data)
    }

    render () {
        const {text, date} = this.state.data
        return <View style={!this.props.isEditing ? styles.todoItem : styles.todoItemEdit}>
            <View style={styles.todoText}>{
                this.props.isEditing
                ? <View >
                    <TextInput
                            underlineColorAndroid={'#d6d7da'}
                            style={styles.todoInput}
                            value={this.state.data.text}
                            onChangeText={this.handleInputChange.bind(this,"text")}
                    />
                </View>
                : <Text style={{fontSize: 20}}>{text}</Text>
            }</View>
            <View style={styles.todoDate}>{
                this.props.isEditing
                ? <View style={{marginTop: 30, marginLeft: -5}}>
                    <MyDatePicker
                            value={/* formatDate( */this.state.data.date/*, true ) */}
                            onChange={this.handleInputChange.bind(this, "date")}
                    />
                </View>
                : <Text>{formatDate(date)}</Text>
            }</View>
             <View style={styles.todoButtons}>
                <View style={{padding: 5}}><TouchableOpacity onPress={this.handleEdit}><Text style={{color: '#3333ff'}}>{this.props.isEditing ? "Save" : "Edit"}</Text></TouchableOpacity></View>
                <View style={{padding: 5}}><TouchableOpacity onPress={this.props.onRemove}><Text style={{color: '#cc0000'}}>Remove</Text></TouchableOpacity></View>
                <View ><TouchableOpacity style={this.state.data.done ? styles.todoDone : styles.todoTbd} onPress={this.handleStateChange}>
                <Text style={ {alignItems: 'center', color: 'white'} }>{this.state.data.done ? 'Done!' : 'Not Done'}</Text>
                </TouchableOpacity></View>
            </View>
        </View>
    }
}
export default Item;

const styles = StyleSheet.create({
  
    todoItemEdit: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        width: 400,
        minHeight: 125,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#d6d7da',
        position: 'relative',
        marginVertical: 10,
    },

    todoItem: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        width: 400,
        minHeight: 75,
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#d6d7da',
        position: 'relative',
        marginVertical: 10,
    },

    todoText:{
        position: 'absolute',
        left: 20,
        top: 15,
        
    },

    todoDate: {
        position: 'absolute',
        left: 20,
        top: 40,
    },

    todoButtons: {
        position: 'absolute',
        height: 75,
        right: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    todoDone: {
        backgroundColor: 'green',
        width: 80, 
        padding: 5, 
        alignItems: 'center'
    },

    todoTbd: {
        backgroundColor: 'red',
        width: 80, 
        padding: 5, 
        alignItems: 'center'
    },

    todoInput: {
        width: 150,
        fontSize: 20, 
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderWidth: 2,
        borderColor: '#d6d7da',
    },

  });
  
