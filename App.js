import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
} from 'react-native';

import TodoAddForm from './todo/addForm'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex:5}}>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          keyExtractor = {(item, index) => "k" + index}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
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
