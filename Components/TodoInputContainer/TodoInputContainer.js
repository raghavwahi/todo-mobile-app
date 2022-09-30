import { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Text,
  View,
} from "react-native";
import "react-native-get-random-values";
import { v4 } from "uuid";

const TodoInputContainer = (props) => {
  const [todo, setTodo] = useState("");

  const onChangeTextHandler = (text) => {
    setTodo(text);
  };

  const addTodoHandler = () => {
    if (todo) {
      props.updateTodos({ title: todo, id: v4() });
      setTodo("");
    }
  };

  return (
    <View style={style.todoContainer}>
      <TextInput
        style={style.input}
        onChangeText={onChangeTextHandler}
        autoCapitalize="sentences"
        autoCorrect={true}
        keyboardType="default"
        onSubmitEditing={addTodoHandler}
        value={todo}
        placeholder="Enter an item"
      />
      <TouchableOpacity style={style.button} onPress={addTodoHandler}>
        <Text style={style.text}>ADD</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  todoContainer: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    flex: 0.8,
    marginLeft: 10,
    marginRight: 10,
    borderColor: "#4c8bf5",
    borderWidth: 1,
    borderRadius: 7,
    padding: 10,
    color: "#000000",
  },
  button: {
    flex: 0.2,
    elevation: 10,
    marginRight: 10,
    borderColor: "#2878fa",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#4c8bf5",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#c9ccd1",
    fontSize: 25,
    fontWeight: "400",
  },
});

export default TodoInputContainer;
