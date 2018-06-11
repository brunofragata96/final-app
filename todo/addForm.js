import React, { Component } from 'react';

export default class AddForm extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
        }
    
    }
    render () {
        return <View>
            {
                this.state.adding
                ? <form action={"#"} onSubmit={this.handleSubmit}>
                    <View className="input__container">
                        <label className="input__label" htmlFor="text">Task: </label>
                        <View className="input__wrapper">
                            <input type="text" 
                                id="text"
                                value={this.state.data.text} 
                                name="text"
                                onChange={this.handleInputChange}
                            />
                        </View>
                    </View>
                    <View className="input__container">
                        <label className="input__label" htmlFor="date">Date: </label>
                        <View className="input__wrapper">
                            <input type="date" 
                                id="date"
                                value={this.state.data.date}
                                name="date"
                                onChange={this.handleInputChange}
                            />
                        </View>
                    </View>
                    <View className="input__container">
                        <label className="input__label" htmlFor="done">Estado: </label>
                        <View className="input__wrapper">
                            <input type="checkbox" 
                                id="done"
                                checked={this.state.data.done}
                                name="done"
                                onChange={this.handleInputChange}
                            />
                        </View>
                    </View>
                    <button onClick={this.handleSubmit} className="submit-button">Submit</button>
                    <button onClick={this.handleCancel} className="submit-button">Cancel</button>
                </form>
                : <button onClick={this.handleStartAdding}>Add</button>
            }
        </View>
    }
}
export default AddForm;

}