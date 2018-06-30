import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  Button,
  ScrollView,
} from 'react-native';

import AddForm from './todo/AddForm'
import TodoList from './todo/List'
//import TodoItem from './todo/Item'
import { formatDate } from './date/dateMoment';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
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
            },
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
          },
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
        },
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
      },
      
        ]
    }
    this.handleUpdateListItem = this.handleUpdateListItem.bind(this)
    this.handleRemoveListItem = this.handleRemoveListItem.bind(this)
    this.handleAddListItem = this.handleAddListItem.bind(this)
  }

  handleUpdateListItem (index, data) {
    let list = this.state.list.slice()
    list[index] = data
    this.updateList(list)
  }

  handleRemoveListItem (index) {
    let list = this.state.list.slice()
    list.splice(index, 1)
    this.updateList(list)
  }

  handleAddListItem (data) {
    let list = this.state.list.slice()
    list.push(data)
    this.setState({list})
  }

  updateList(list) {
    this.setState({list})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
        <ScrollView> 
          <TodoList  
                    data={this.state.list}
                    onUpdate={this.handleUpdateListItem}
                    onRemove={this.handleRemoveListItem}
          />
        </ScrollView>
        </View>
        <AddForm onSubmit={this.handleAddListItem}/> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30,
  },

  todoList: {
    flex: 1,
    alignItems: 'stretch',
  }
});
