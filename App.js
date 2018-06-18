import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  Button,
} from 'react-native';

import AddForm from './todo/AddForm'
import { formatDate } from './date/dateMoment';
//import MyDatePicker from './date/datePicker'

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
            }
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
  }

  handleAddListItem (data) {
    //console.log (data)
    let list = this.state.list.slice()
    list.push(data)
    this.updateList(list)
  }

  handleAddListItem (data) {
    let list = this.state.list.slice()
    list.push(data)
    this.setState({list})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
        <FlatList
          data={
            this.state.list
          }
          keyExtractor = {(item, index) => "k" + index}
          renderItem={({item}) => <View>
                                    <Text style={styles.item}>
                                      {item.text} 
                                      {formatDate(item.date)} 
                                      {item.done ? "Feito" : "Não Feito"}
                                    </Text>
                                    <Button onPress={this.handleRemoveListItem(item.index)} title="delete"/>
                                    <Button onPress={console.log('edit')} title="edit"/>
                                  </View>
                                } 
        />
        </View>
        <AddForm onSubmit={this.handleAddListItem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
