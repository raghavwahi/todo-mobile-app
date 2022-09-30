import { StyleSheet, ScrollView, View } from "react-native";

import Todo from "./Todo";

const Todos = (props) => {
  const deleteItemHandler = (id) => {
    props.deleteItemHandler(id);
  };

  const todosList = props.todos.map((todo) => {
    return (
      <Todo
        key={todo.id}
        title={todo.title}
        id={todo.id}
        deleteItemHandler={deleteItemHandler}
      />
    );
  });
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.todos}>{todosList}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  todos: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Todos;
