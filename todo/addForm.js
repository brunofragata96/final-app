import React from 'react'
import { 
    View,
    TextInput,
    Button,
    Text,
    Switch,
} from 'react-native'

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
        return this.setState({
            isOpen: !this.state.isOpen
        });
     }  

    handleInputChange (e) {
        let val = e.target.value
        let name = e.target.name
        let data = Object.assign({}, this.state.data)
        data[name] = e.target.type === 'checkbox' ? e.target.checked : val
        this.setState({
            data
        })
    }

    handleSubmit (e) {
        e.preventDefault()
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
                                onChange={this.handleInputChange}
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
                                value={this.state.isOpen}
                                /*id="done"
                                value={this.state.data.done}
                                name="done"*/                
                            />
                        </View>
                    </View>
                    <Button 
                        onClick={this.handleSubmit}
                        title="Submit"
                    />
                </View>
        </View>
        }
    }

export default AddForm