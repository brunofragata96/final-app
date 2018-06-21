import React from 'react';
//import TodoItem from './Item'
import { 
    Text, 
    View, 
    FlatList,
    Button,
  } from 'react-native';

  import TodoItem from './Item'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            index_editing: -1
        }
    }
    handleItemUpdate (index, data) {
        !this.props.onUpdate || this.props.onUpdate (index, data)
        this.setState({index_editing: -1})
    }
    handleItemRemove (index) {
        !this.props.onRemove || this.props.onRemove (index)
    }
    handleSomeEditing (index) {
        this.setState({index_editing: index})
    }
   renderItem (item, index) {
        return <TodoItem key={"item" + index} 
                         data={item}
                         isEditing={index === this.state.index_editing}
                         cantRemove={this.state.index_editing !== -1}
                         onEditing={this.handleSomeEditing.bind(this, index)}
                         onUpdate={this.handleItemUpdate.bind(this, index)}
                         onRemove={this.handleItemRemove.bind(this, index)}
                         //adicionar on submit
               />
    }

    render () {
        return (
            this.props.data.map(
                (item, index) => this.renderItem(item, index)
            )
        )
    }

    /* render () {
        return(
        <FlatList
            data={
            this.props.list
            }
            
            keyExtractor = {(item, index) => "k" + index}
            renderItem={({item, index}) => <TodoItem data={item}/>
            } 
        />
        
        )} */
}
export default List; 