import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import TodoInputContainer from "./Components/TodoInputContainer/TodoInputContainer";
import Todos from "./Components/Todos/Todos";

export default function App() {
  const [todos, setTodos] = useState([]);

  const updteTodosHandler = (todo) => {
    setTodos([todo, ...todos]);
  };

  const deleteItemHandler = (id) => {
    const updatedTodos = todos.filter((todo) => {
      if (todo.id !== id) {
        return todo;
      }
    });
    setTodos([...updatedTodos]);
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} />
      <Text style={styles.header}>YOUR ITEMS</Text>
      <TodoInputContainer updateTodos={updteTodosHandler} />
      <Todos todos={todos} deleteItemHandler={deleteItemHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#dde4f0",
  },
  header: {
    fontSize: 50,
    fontWeight: "300",
    marginTop: 40,
    textAlign: "center",
    color: "#146eff",
  },
});
