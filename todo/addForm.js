import React from 'react';
import { 
    View,
    TextInput,
    Button,
    Text,
    Switch,
} from 'react-native';

import MyDatePicker from '../date/datePicker';
import { formatDate } from '../date/dateMoment';
import styles from '../styles/styles';

class AddForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            //adding: false,
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
            //adding: false
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

    render () {
        return <View>
                
                <View onSubmit={this.handleSubmit}>
                    <View style={styles.input__container}>
                        <View style={styles.input__wrapper}>
                            <TextInput  
                                value={this.state.data.text} 
                                onChangeText={this.handleInputChange.bind(this,"text")}
                            />
                        </View>
                    </View>
                    <View style={styles.input__container}>
                        <View style={styles.input__wrapper}>
                            <MyDatePicker
                                value={this.state.data.date}
                                onChange={this.handleInputChange.bind(this, "date")}
                            />
                        </View>
                    </View>
                    <View style={styles.input__container}>
                        <View style={styles.input__wrapper}>
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
                </View>
        </View>
        }
    }

export default AddForm