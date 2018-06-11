import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
} from 'react-native';

//import TodoAddForm from './todo/addForm'

export default class App extends React.Component {
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

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:5}}>
        <FlatList
          data={
            this.state.list
          }
          keyExtractor = {(item, index) => "k" + index}
          renderItem={({item}) => <Text style={styles.item}>{item.text}</Text>}
        />
        </View>
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
