import React, { Component } from 'react';

export default class AddForm extends React.Component  {
    constructor(props) {
        super(props)
        this.state = {
            adding: false,
            list: [
                {
                    text: "todo1",
                    date: new Date(2017, 7, 1),
                    done: false,
                },
                {
                    text: "todo2",
                    date: new Date(2017, 10, 1),
                    done: false,
                },
                {
                    text: "todo3",
                    date: new Date(2018, 7, 1),
                    done: false,
                }
        ]
        }
    
    }


}