import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Alert } from 'react-native';
import Header from "./components/header";
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);
  const handlePress = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key)
    });
  }
  const handleSubmit = (text) => {

    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          { text, key: Math.random().toString() },
          ...prevTodos
        ]
      });
    } else {
      Alert.alert('OOPS', 'Todos must be over 3 chars long', [
        {text: 'Understood', onPress: () => console.log('alert closed')}
      ])
    }

  }

  return (

    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo handleSubmit={handleSubmit} />
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} handlePress={handlePress} />
            )}
          />
        </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});