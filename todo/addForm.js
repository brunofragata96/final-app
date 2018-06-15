import React from 'react';
import { 
    View,
    TextInput,
    Button,
    Text,
    Switch,
} from 'react-native';

import MyDatePicker from '../date/datePicker';

class AddForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            adding: false,
            isOpen : false,
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
        data.date = new Date (data.date)
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
                
                <View action={"#"} onSubmit={this.handleSubmit}>
                    <View className="input__container">
                        {/*<label className="input__label" htmlFor="text">Task: </label>*/}
                        <View className="input__wrapper">
                            <TextInput type="text" 
                                id="text"
                                value={this.state.data.text} 
                                name="text"
                                onChange={this.handleInputChange.bind(this,"text")}
                            />
                        </View>
                    </View>
                    <View className="input__container">
                        {/*<label className="input__label" htmlFor="date">Date: </label>*/}
                        <View className="input__wrapper">
                            <TextInput type="date" 
                                id="date"
                                value={this.state.data.date}
                                name="date"
                                onChange={this.handleInputChange}
                            />
                        </View>
                    </View>
                    <View className="input__container">
                        {/*<label className="input__label" htmlFor="done">Estado: </labe*/}
                        <View className="input__wrapper">
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