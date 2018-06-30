import React from 'react';
import { 
    View,
    TextInput,
    Button,
    Text,
    Switch,
    StyleSheet,
    TouchableOpacity,
    KeyboardAvoidingView,
} from 'react-native';

import MyDatePicker from '../date/datePicker';
import { formatDate } from '../date/dateMoment';

class AddForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            adding: false,
            //isOpen : false,
            data: {
                text: "",
                date: "",
                done: false,
            },
        }
    this.onControlChange = this.onControlChange.bind(this); 
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleStartAdding = this.handleStartAdding.bind(this)
    this.cancelAdd = this.cancelAdd.bind(this)
    }

    onControlChange(value) { 
        let data = Object.assign({} , this.state.data)
        data.done = value
        return this.setState({
            data 
        });
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
        this.setState({
            data: {
                text: "",
                date: "",
                done: false,
            },
            adding: false
        })
        !this.props.onSubmit || this.props.onSubmit(data)


        /* 
        let fnOnChange = this.handleInputChange.bind(this, "text")
        fnOnChange("texto do use");


        function bindFunction (scope, fn, nome) {
            return function (val) {
                fn.apply(scope, nome, val)
            }
        }
        let fnOnChange = bindFunction(this, this.handleInputChange, "nome")
        fnOnChange("12323445345"); 
        */

    }

    handleStartAdding () {
        this.setState({adding: true})
    }

    cancelAdd () {
        this.setState({adding: false})
    }

    render () {
        return <KeyboardAvoidingView style={styles.formContainer} behavior="padding" enabled>
               {
                this.state.adding
                ? <View style={styles.formWrapper} onSubmit={this.handleSubmit}>
                    <View>
                        <View style={{marginVertical: 10}}>
                            <Text>1. Qual é a sua tarefa?</Text>
                        </View>
                        <View style={{marginVertical: 10, }}>
                            <TextInput
                                style={{padding: 5,}}
                                value={this.state.data.text} 
                                onChangeText={this.handleInputChange.bind(this,"text")}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={{marginVertical: 10}}>
                            <Text>2. Qual é o prazo?</Text>
                        </View>
                        <View style={{alignSelf: 'center', marginVertical: 10,}}>
                            <MyDatePicker
                                value={this.state.data.date}
                                onChange={this.handleInputChange.bind(this, "date")}
                            />
                        </View>
                    </View>
                    <View >
                        <View style={{marginVertical: 10}}>
                            <Text>3. Está feita ou por fazer?</Text>
                        </View>
                        <View style={{marginVertical: 10}}>
                            <Switch  
                                onValueChange={this.onControlChange} 
                                value={this.state.data.done}            
                            />
                        </View>
                    </View>
                    <Button 
                        onPress={this.handleSubmit}
                        title="Submit"
                    />
                    <TouchableOpacity style={styles.cancel} onPress={this.cancelAdd}><Text style={{color: 'red'}}>Cancel</Text></TouchableOpacity>
                </View >
                 : <View style={styles.formAdd} ><Button title="   Add   " onPress={this.handleStartAdding}/></View>
                }
        </KeyboardAvoidingView>
        }
    }

    export default AddForm

    const styles = StyleSheet.create({

        cancel: {
            position: 'absolute',
            right: -65,
            top: 5,
        },

        formContainer: {
            backgroundColor: '#f2f2f2',
            width: 400,
            alignItems: 'center',
            
        },
        
        formWrapper: {
            width: 250,
            position: 'relative',
            marginVertical: 10,
        },
        
        formAdd: {
            width: 400,
            height: 75,
        },

    });